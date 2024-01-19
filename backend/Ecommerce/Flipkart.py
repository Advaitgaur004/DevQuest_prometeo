from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq
import time
import json

def scrape_flipkart(query):
    if not query:
        print("Please enter a valid search query.")
        return None

    search = query.replace(" ", "%20")
    my_url = 'https://www.flipkart.com/search?q=' + search + '&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off'

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

    containers = page_soup.findAll("div", {"class": "_1AtVbE col-12-12"})

    # Create a list to store product data
    products_list = []

    for container in containers:
        product_data = {}

        # for getting name
        product_name_element = container.find("a", class_="s1Q9rs")
        if product_name_element:
            product_name = product_name_element.text
            product_name = product_name.replace(",", " | ")
            product_data['Product Name'] = product_name

            # Initialize price, rating, and image URL
            price = ""
            rating = ""
            image_url = ""
            product_url = ""

            # for getting price
            price_container = container.findAll("div", {"class": "_30jeq3"})
            try:
                price = price_container[0].text.replace("₹", "Rs ")
                price = price.replace(",", "")
                product_data['Price'] = price
            except (IndexError, ValueError):
                pass

            # for getting rating
            rating_container = container.findAll("div", {"class": "gUuXy- _2D5lwg"})
            try:
                rating = rating_container[0].text + "*"
                rating = rating.replace(",", "")
                product_data['Rating'] = rating
            except (IndexError, ValueError):
                pass

            # for getting image URL
            image_element = container.find("img", {"class": "_396cs4"})
            if image_element and "src" in image_element.attrs:
                image_url = image_element["src"]
                product_data['Image URL'] = image_url

            # for getting product URL
            product_url_element = container.find("a", class_="s1Q9rs")
            if product_url_element and "href" in product_url_element.attrs:
                product_url = 'https://www.flipkart.com' + product_url_element["href"]
                product_data['Product URL'] = product_url

            # Add the product data to the list
            products_list.append(product_data)

        # Add a delay to avoid making too many requests too quickly
        time.sleep(0.01)

    return products_list
    # # Write the list to a JSON file
    # json_filename = f"Ecommerce/products_flipkart.json"
    # with open(json_filename, "w", encoding="utf-8") as json_file:
    #     json.dump(products_list, json_file, indent=2)

    # print(f"Data scraped successfully for query: {query}")



