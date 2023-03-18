// configuration
var apiToken = "6020776522:AAGMHaueYJd-_lXovtVpiz7goib11g0OWOw";
var appUrl   = "https://script.google.com/macros/s/AKfycbzChtmmJAMegfQZZ8nvcVS59iPwjyvHIiD9HecP0TchLAZMIatyYajPKqhu-nYLjE0U/exec";
var apiUrl   = "https://api.telegram.org/bot"+apiToken;
var articles = getArticles();


var command  = {
  "/start": "welcome to my bot",
  "hi": "hello",
  "what is your name?": "my name is devisty bot" ,
  "who are you?" : "i am an super bot" ,
  "what is this" : "normal bot"
}


// set webhook
function setWebhook(){
  var url = apiUrl + "/setwebhook?url="+appUrl;
  var res = UrlFetchApp.fetch(url).getContentText();
  Logger.log(res);
}



// handle webhook
function doPost(e){
  var webhookData = JSON.parse(e.postData.contents);
  var from = webhookData.message.from.id;
  var text = webhookData.message.text;

  if(typeof command[text] == 'undefined'){
    var sendText = encodeURIComponent("command not found");
  }else{
    var sendText = encodeURIComponent(command[text]);
  }

  var url  = apiUrl+"/sendmessage?parse_mode=HTML&chat_id="+from+"&text="+sendText;
  var opts = {"muteHttpExceptions": true}
  UrlFetchApp.fetch(url, opts).getContentText();
}



function doGet(e){
  return ContentService.createTextOutput("Method GET not allowed");
}