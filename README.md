# DevQuest - Prometeo '24

[![DevQuest Logo](link_to_logo.png)](link_to_project)

## Problem Statement

In today's fast-paced and ever-expanding digital marketplace, staying informed about product prices is a crucial aspect of making well-informed purchasing decisions. The sheer abundance of online shopping options, coupled with frequent price fluctuations, has created a demand for efficient tools to track and compare product prices across various platforms. DevQuest - Prometeo '24 aims to address this need by providing a comprehensive solution for users to search, track, and compare product prices, enabling them to make the best possible purchase decisions.

## Solution Overview

### 1. Product Search

DevQuest - Prometeo '24 allows users to search for products seamlessly. This feature leverages various E-Commerce APIs to provide a consolidated list of similar products available on different platforms. Users can enter a search term, and the application will retrieve and display relevant product listings from major E-Commerce sites.

### 2. Price Tracking

To assist users in making informed decisions over time, the application provides a 'Pin' feature. Users can 'Pin' products they are interested in, and the application will periodically track and update the prices of these pinned products. This feature ensures that users have access to the latest pricing information, allowing them to spot trends and make purchase decisions strategically.

### 3. Notification System

DevQuest - Prometeo '24 includes a notification system designed to keep users informed about price changes. Users can set desired price thresholds, and the application will send notifications when prices drop below the specified value or reach the user's desired amount. This proactive approach empowers users to take advantage of price reductions and make timely purchases.

### 4. Bonus Features

Participants are encouraged to add innovative features that enhance the overall user experience. These can include personalized product recommendations, social sharing capabilities, or any creative functionality that adds value to the application.

## Architecture and Implementation Details

The project architecture consists of a backend built using Django, a high-level Python web framework. The backend interacts with E-Commerce APIs (Amazon, Flipkart, Walmart) to fetch real-time product information. Key backend files include `settings.py`, `models.py`, `serializer.py`, `urls.py`, and `views.py`.

## Demo

[![Working Website](link_to_working_website_screenshot.png)](link_to_working_website)
[![Demo Video/GIF](link_to_demo_video.gif)](link_to_demo_video)

## Installation

1. Clone the repository:
   ```bash
   $ git clone https://github.com/your-username/your-project.git
   $ cd your-project
   $ pip install -r requirements.txt
   $ python manage.py runserver

Contributing
Fork the project.
Create a new branch (git checkout -b feature).
Commit your changes (git commit -am 'Add feature').
Push to the branch (git push origin feature).
Create a new Pull Request.

License
This project is licensed under the [Your License] - see the LICENSE file for details.

Acknowledgments
Give credit to the tools, libraries, and people who inspired or helped you in building your project.

Feel free to adapt and customize this template further based on your project's specific needs and preferences.




   
