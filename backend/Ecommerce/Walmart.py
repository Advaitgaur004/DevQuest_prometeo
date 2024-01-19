import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlencode
import datetime
import concurrent.futures

headers = {
    'authority': 'www.walmart.com',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '^\\^Google',
    'sec-ch-ua-mobile': '?0',
    'upgrade-insecure-requests': '1',
    'origin': 'https://www.walmart.com',
    'content-type': 'application/x-www-form-urlencoded',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36',
    'accept': '*/*',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'iframe',
    'referer': 'https://www.walmart.com/',
    'accept-language': 'en-US,en;q=0.9',
}

def create_walmart_product_url(product):
    return 'https://www.walmart.com' + product.get('canonicalUrl', '').split('?')[0]

def fetch_product_data(url):
    try:
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            html_response = response.text
            soup = BeautifulSoup(html_response, "html.parser")
            script_tag = soup.find("script", {"id": "__NEXT_DATA__"})

            if script_tag is not None:
                json_blob = json.loads(script_tag.get_text())
                raw_product_data = json_blob["props"]["pageProps"]["initialData"]["data"]["product"]
                return {
                    'name': raw_product_data.get('name'),
                    'averageRating': raw_product_data.get('averageRating'),
                    'thumbnailUrl': raw_product_data['imageInfo'].get('thumbnailUrl'),
                    'price': 'Rs. ' + str(raw_product_data['priceInfo']['currentPrice'].get('price')),
                    'productUrl': url,
                }
    except Exception as e:
        print(f'Error processing URL {url}: {e}')
    return None

def scrape_walmart(keyword):
    product_url_list = []
    
    try:
        payload = {'q': keyword}
        walmart_search_url = 'https://www.walmart.com/search?' + urlencode(payload)
        response = requests.get(walmart_search_url, headers=headers)

        if response.status_code == 200:
            html_response = response.text
            soup = BeautifulSoup(html_response, "html.parser")
            script_tag = soup.find("script", {"id": "__NEXT_DATA__"})
            if script_tag is not None:
                json_blob = json.loads(script_tag.get_text())
                product_list = json_blob["props"]["pageProps"]["initialData"]["searchResult"]["itemStacks"][0]["items"][:5]
                product_list = product_list[:5]
                product_urls = [create_walmart_product_url(product) for product in product_list]

                # Exclude URLs that are exactly "https://www.walmart.com"
                product_urls = [url for url in product_urls if url != 'https://www.walmart.com']

                product_url_list.extend(product_urls)
    except Exception as e:
        print('Error', e)
        return None

    json_filename = f"Ecommerce/products_walmart.json"  # Specify the desired JSON file name

    # Using ThreadPoolExecutor to parallelize requests
    with concurrent.futures.ThreadPoolExecutor() as executor:
        product_data_list = list(executor.map(fetch_product_data, product_url_list))

    # Remove None values (failed requests)
    product_data_list = [data for data in product_data_list if data is not None]

    return product_data_list
    # with open(json_filename, 'w', encoding='utf-8') as json_file:
    #     json.dump(product_data_list, json_file, ensure_ascii=False, indent=2)


