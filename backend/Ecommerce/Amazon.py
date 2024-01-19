from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq
import time
import datetime
import json


def scrape_amazon(query):
    if not query:
        print("Please enter a valid search query.")
        return None

    search = query.replace(" ", "%20")
    my_url = 'https://www.amazon.in/s?k=' + search
    start = datetime.datetime.now()

    try:
        uClient = uReq(my_url)
        page_html = uClient.read()
    except Exception as e:
        print(f"Error fetching the page: {e}")
        return None
    finally:
        if 'uClient' in locals():
            uClient.close()

    page_soup = soup(page_html, "html.parser")

    containers = page_soup.findAll("div", {"data-asin": True})

    data_list = []

    for container in containers:
        title_element = container.find("span", class_="a-text-normal")
        if title_element:
            title = title_element.text.strip()

            url_element = container.find("a", {"class": "a-link-normal"}, href=True)
            url = url_element['href'] if url_element else None

            rating_element = container.find("span", class_="a-icon-alt")
            rating = rating_element.text if rating_element else None

            price_element = container.find("span", {"class": "a-offscreen"})
            price = price_element.text if price_element else None

            image_element = container.find("img", {"src": True})
            image_url = image_element['src'] if image_element and 'src' in image_element.attrs else None

            data = {
                "title": title,
                "url": 'https://amazon.in' + url,
                "rating": rating,
                "price": price.replace("'\u20b9'", "Rs. "),
                "image": image_url,
            }

            data_list.append(data)

            # Add a delay to avoid making too many requests too quickly
            time.sleep(0.01)

    return data_list
    # # Writing to the JSON file
    # filename = f"Ecommerce/products_amazon.json"
    # with open(filename, "w", encoding="utf-8") as f:
    #     json.dump(data_list, f, indent=2)

    # end_time = datetime.datetime.now()
    # print("Time taken to execute: ", end_time - start)


