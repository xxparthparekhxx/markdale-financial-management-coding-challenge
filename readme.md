To automate the creation of Investment Policy Statements, we implemented a Google Form that allows users to input their responses, which are then stored in a Google Sheet. The Google Sheet uses Google Apps Script (JavaScript) to transpose the data onto a Google Doc template, create a PDF of the resulting document, and email a copy to the user.

To handle the challenge of converting known response multiple choice answers (string values) from the Google Sheet into numeric values (float values), we implemented a lookup table in the Google Sheet. The lookup table consists of two columns: the first column contains the text values, and the second column contains the corresponding numeric values.

To convert a text value to a numeric value, we created a getNumericValue function that takes a text value as input and returns the corresponding numeric value from the lookup table, if it exists. The function iterates through the text values in the lookup table and returns the corresponding numeric value when a match is found. If no match is found, the function returns null.

To use the getNumericValue function, we call it with the text value as the only argument. For example:

var textValue = "Save for retirement";
var numericValue = getNumericValue(textValue);

In this example, the numericValue variable will be assigned the value returned by the getNumericValue function for the input textValue, using the lookup table in the first and second columns of the active sheet. The number of rows in the table is determined dynamically based on the number of values in column A.

Links:

    Google Doc template: 
    https://docs.google.com/document/d/1rOtSESHT-TW3zyu4hxtTDGvabMaF_Pio-yVwp6HVquI/edit#
    
    Google Form: https://docs.google.com/forms/d/e/1FAIpQLSdzaIkfM9GSm5U3tiFuKUROcCGGz2PlnZI0dG6LLVWoTUK03A/viewform?usp=sf_link
    
    Google Sheet (containing form responses and lookup table): https://docs.google.com/spreadsheets/d/16E0z3aLYrspSidR_YFmfsUHcUwhSXA8RXljSzb5kPSo/edit?resourcekey#gid=1113966755