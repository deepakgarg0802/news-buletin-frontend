let news=[];
var byName=true;


getAllnews=(callback)=>{
  let xhr = new XMLHttpRequest();
    xhr.open('GET', DBHelper.DATABASE_URL);
    xhr.onload = () => {
      if (xhr.status === 200) { // Got a success response from server!
        const json = JSON.parse(xhr.responseText);
        news = json;
        callback(news);
      } else { // Oops!. Got an error from server.
        const error = (`Request failed. Returned status of ${xhr.status}`);
        //callback(error, null);
      }
    };
    xhr.send();
  }


/**
 * Create all news HTML and add them to the webpage.
 */
fillRestaurantsHTML = (news) => {
  console.log(news);
  const ul = document.getElementById('restaurants-list');
  ul.innerHTML = '';
  news.forEach(newitem => {
    ul.append(createNewsHTML(newitem));
  });
}

/**
 * Create restaurant HTML.
 */
createNewsHTML = (newsItem) => {
  const li = document.createElement('li');

  const image = document.createElement('img');
  image.className = 'restaurant-img';
  image.src = "./img/img1.jpg";
  li.append(image);

  const name = document.createElement('h1');
  name.innerHTML = newsItem.headline;
  li.append(name);

  const publisher = document.createElement('h3');
  publisher.innerHTML = newsItem.newsPaper;
  li.append(publisher);

  const more = document.createElement('a');
  more.innerHTML = 'View Details';
  more.href = newsItem.hyperlink;
  li.append(more);

  return li
}
function sortmylist(){

  if(byName==false){
    document.getElementById("sorting_button").innerText="Sort By ID";
    news.sort(function(a,b){
      return (''+a.newsPaper).localeCompare(b.newsPaper);
    });
    fillRestaurantsHTML(news);
    byName=true;
  }
  else{
    document.getElementById("sorting_button").innerText="Sort By Publisher Name";
    news.sort(function(a,b){
      return (''+a.newsId).localeCompare(b.newsId);
    });
    fillRestaurantsHTML(news);
    byName=false;
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
    getAllnews(sortmylist);
});