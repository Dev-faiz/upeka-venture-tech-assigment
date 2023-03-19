// news token
const token = "3354a9017e5e49d985c06d575c4bf56f";

// Link to API
const teslaNews = `https://newsapi.org/v2/everything?q=apple&from=2023-03-18&to=2023-03-18&sortBy=popularity&apiKey=${token}`;
const appleNews = `https://newsapi.org/v2/everything?q=apple&from=2023-03-18&to=2023-03-18&sortBy=popularity&apiKey=${token}`;
const businessNews = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${token}`;
const techNews = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${token}`;
const wallStreet = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${token}`;

// send message Using bot 
function sendMessage(URL) {
  const articles = getNewsArticles(URL);
  for (let i = 0; i < 20; i++) {
    try {
      var message = creatingMessageFromArticle(articles[i]);
      var MessageURL = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=@newsApichannel&text=${message}`
      var response = UrlFetchApp.fetch(MessageURL);
    } catch (e) {
      console.log(e.message);
    }
  }
  return response;
}

// get news from API
function getNewsArticles(URL_STRING) {
  let response = UrlFetchApp.fetch(URL_STRING);
  let jsonResponse = response.getContentText();
  let data = JSON.parse(jsonResponse);
  let articles = data.articles;
  return articles;
}
// structuring the message
function creatingMessageFromArticle(article) {
  return `Name : ${article.source.name} %0A%0AAuthor : ${article.author}  %0A%0ATitle : ${article.title}   %0A%0ADescription : ${article.description}   %0A%0AURL : ${article.url}`;
}