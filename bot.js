// send message Using bot 
function sendMessage(){
    try{
      for(let i = 0 ; i < 10 ; i++ ){
        var message = creatingMessageFromArticle(articles[i]);
        var MessageURL = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=@newsApichannel&text=${message}`
        var response = UrlFetchApp.fetch(MessageURL);
      }
    }catch(e){
      console.log(e.message);
    }
  }
  
  function creatingMessageFromArticle(article){
    return  `Name : ${article.source.name} %0A%0AAuthor : ${article.author}  %0A%0ATitle : ${article.title}   %0A%0ADescription : ${article.description}   %0A%0AURL : ${article.url}` ;
  }
  function getArticles(){
    const token = "3354a9017e5e49d985c06d575c4bf56f"
    let URL_STRING = `https://newsapi.org/v2/everything?q=apple&from=2023-03-16&to=2023-03-16&sortBy=popularity&apiKey=${token}` ;
    let response = UrlFetchApp.fetch(URL_STRING);
    let jsonResponse = response.getContentText();
    let data = JSON.parse(jsonResponse);
    let articles = data.articles ;
    return articles ;
  
  }