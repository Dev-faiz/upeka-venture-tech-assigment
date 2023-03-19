function myMainFunction() {
  const sheetApp = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = sheetApp.getSheetByName("NewsSheet");
  const articles = getNewsArticles(businessNews);
  setData(articles , sheet);
}
// update sheet function 
function setData(articles , sheet){
  let  pointer = 2 ; 
  for(let i = 0 ; i < 10; i++ ){
    let SOURCENAME = articles[i].source.name;
    let AUTHOR = articles[i].author ;
    let TITLE = articles[i].title ; 
    let DESCRIPTION = articles[i].description ;
    let URL = articles[i].url ; 
    sheet.getRange(pointer,1).setValue(SOURCENAME);
    sheet.getRange(pointer,2).setValue(AUTHOR);
    sheet.getRange(pointer,3).setValue(TITLE);
    DESCRIPTION = formatDescription(DESCRIPTION);
    sheet.getRange(pointer,4).setValue(DESCRIPTION);
    sheet.getRange(pointer,5).setValue(URL);
    pointer++ ;
  
  }
}

// utility for formatting longText
function formatDescription(description){
  let desc = "";
  for(let i = 0 ; i < description.length ; i++ ){
    if(i%80===0) desc+= "\n"
    desc+=description[i];
  }
  return desc ; 
}
