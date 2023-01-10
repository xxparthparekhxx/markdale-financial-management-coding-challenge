function autoFillIPSTemplateGoogleDoc(e) {
  // Getting the data in form of a map 
  const data = e.namedValues;

  // This Function is to access the map using the key
  const accessData = (key)=>{
    try{

    return data[key][0]
    }catch(e){
      console.log(e, "tryed to access",key )
    }
  }

  // this function creates a string that makes the goals dynamic according to the options csv
  const BuildGoalString = (GoalsArr)=>{
    let ansstr = "";
    for (let i = 0 ; i < GoalsArr.length; i++){
      ansstr += `  ${i+1}. ${GoalsArr[i]}\n`
    }
    return ansstr
  }

  const calculateInvestorRating = ()=>{
    let rating= 0 ; 
    console.log(data, typeof(data))
    Object.keys(data).map((key) => {
      rating += getNumericValue(accessData(key))
    })
    return rating
  }

  // declare variables from Google Sheet
  let investorName = accessData("Name");
  let timeStamp = accessData("Timestamp")
  let emailID = accessData("Enter your email");

  // convert values from column 3 of Google Sheet to string
  const goals = accessData("Goals")

  //create an array and parse values from CSV format, store them in an array
  const goalsArr = goals.split(',')

//grab the template file ID to modify
  const file = DriveApp.getFileById(templateID);

//grab the Google Drive folder ID to place the modied file into
  var folder = DriveApp.getFolderById(folderID)

//create a copy of the template file to modify, savde using the naming conventions below
  var copy = file.makeCopy(investorName + ' Investment Policy', folder);

//modify the Google Drive file
  var doc = DocumentApp.openById(copy.getId());

  var body = doc.getBody();

  body.replaceText('%InvestorName%', investorName);
  body.replaceText('%Date%', timeStamp);

  // use the String Builder Function to create a Goal List
  body.replaceText('%Goal%', BuildGoalString(goalsArr))
  
  body.replaceText("%investorRating%", `${calculateInvestorRating()}/${Object.keys(data).length * 5}` )

  doc.saveAndClose();

//find the file that was just modified, convert to PDF, attach to e-mail, send e-mail
  var attach = DriveApp.getFileById(copy.getId());
  var pdfattach = attach.getAs(MimeType.PDF);
  MailApp.sendEmail(emailID, subject, emailBody, { attachments: [pdfattach] });
}

function getNumericValue(textValue) {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Look Up table')
  // Get the range of values in the lookup table
  var textRange = "A2:A";
  var numericRange = "B2:B";
  var textValues = sheet.getRange(textRange).getValues();
  var numericValues = sheet.getRange(numericRange).getValues();
  console.log("text",textValues,textValues.length,)
  // Get the number of rows in the table
  var numRows = textValues.length;
  
  // Iterate through the text values and return the corresponding numeric value if a match is found
  for (var i = 0; i < numRows; i++) {
    if (textValues[i][0] == textValue) {
      return numericValues[i][0];
    }
  }
  
  // Return null if no match is found
  return null;
}