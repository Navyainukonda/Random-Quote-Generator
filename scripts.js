// const api_url =fetch('https://dummyjson.com/quotes/random')
// .then(res => res.json())
// .then(console.log);

const quote = document.getElementById('quote');
const author = document.getElementById('author')
const url = "https://dummyjson.com/quotes/random"
async function getQuote(url) {
  const response = await fetch(url)
  var data = await response.json()
  console.log(data);
  quote.innerHTML = data.quote;
  author.innerHTML=data.author;
  
}
getQuote(url)


function tweet(){
  window.open(href="https://twitter.com/intent/tweet?text=Hello%20world")
}

function copyQuote() {
  const quote = document.getElementById("quote").textContent;
  const author = document.getElementById("author").textContent;
  const text = `${quote} ${author}`;

  navigator.clipboard.writeText(text).then(() => {
    alert("Quote copied to clipboard!");
  });
}