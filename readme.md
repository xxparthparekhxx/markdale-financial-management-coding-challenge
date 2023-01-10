Markdale Financial Management Coding Challenge

This repository contains my solution to the coding challenge for the Junior Full Stack Web Developer position at Markdale Financial Management.

The challenge required automating the creation of Investment Policy Statements (IPS) using a Google Form, Google Sheet, and Google Doc template. I implemented a Google Apps Script function that converts text values in the Google Sheet into numeric values using a lookup table, and uses the modified data to populate the Google Doc template. The modified Google Doc is then saved as a PDF and emailed to the user. I also made the goals dynamic and added an investor rating section to the emailed IPS document.

To solve this challenge, I first proposed a method to convert certain text values in the Google Sheet into numeric values using a lookup table. I created two tables in the Google Sheet, one for the text values and one for the corresponding numeric values. I then wrote a Google Apps Script function that reads the text values from the text table and looks up the corresponding numeric values in the numeric table. The function then stores the numeric values in the appropriate columns in the Google Sheet.

To demonstrate how this method could be used with the current Google App Script, I wrote some sample code showing how to read the text and numeric values from the tables and store them in the Google Sheet. I also added a demo Google Form and an investor rating section to the emailed IPS document.

To complete this challenge, I uploaded my code to a github repository and shared a link to the repository with the project manager. I also added links to the demo Google Form, Google Sheet, and Google Doc template in the repository's README.

Demo Google Form
[Link to the demo Google Form](https://docs.google.com/forms/d/e/1FAIpQLSdzaIkfM9GSm5U3tiFuKUROcCGGz2PlnZI0dG6LLVWoTUK03A/viewform?usp=sf_link)

Google Sheet and Lookup Tables
[Link to the Google Sheet and Lookup Tables](https://docs.google.com/document/d/1rOtSESHT-TW3zyu4hxtTDGvabMaF_Pio-yVwp6HVquI/edit#)

Google Doc Template
[Link to the Google Doc template](https://docs.google.com/document/d/1rOtSESHT-TW3zyu4hxtTDGvabMaF_Pio-yVwp6HVquI/edit#)