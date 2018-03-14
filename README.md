# Milk Carton
[![Build Status](https://travis-ci.org/DMWIGGINS/MilkCarton.svg?branch=master)](https://travis-ci.org/DMWIGGINS/MilkCarton)

### The Need

Anyone, regardless of gender, age, ethnicity, or educational background may become a missing person.  In the United States today, there are over 14,000 open missing persons cases. Of those 14,000 missing persons cases, how many do you know of? Do you know how many people are currently missing in your town, county, or state? How would you identify a missing person? If you were out and about and saw a missing person, how would you report it? Who would you report it to?

### The App

In the mid-1980s, the United States began printing advertisements on milk cartons to draw attention to a missing child. This mobile responsive web application is a digital milk carton that allows users immediate access to missing person information as well as the ability to easily report sightings to the proper authorities.

The app also provides additional resources for users. Some of these resources include:

- Factsheets to help identify people at risk of going missing

- Information on the link between mental health and missing persons

- The role of alcohol/drug abuse, other abuse, and neglect in missing persons

### The Tech

On the server side, the application utilizes a Node + Express setup which connects to a MySQL database that stores the missing person data, as well as user information. The missing persons data is mined from the National Missing and Unidentified Persons System (NamUs) database using Selenium web automation. This information is being served up to the client side using AJAX. We’ve also integrated the Google Maps API so that users can easily pin locations of missing persons sightings. On the client side it is using React to provide speed, simplicity, and scalability to users.

[Here's a link to our NamUs Scraper!](https://github.com/katiedeangelis/NamUsScraper "NamUs Scraper")