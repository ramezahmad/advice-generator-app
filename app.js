const API_URL = "https://api.adviceslip.com/advice";
const advice_number = document.querySelector("p");
const advice_quote = document.querySelector("q");
const btn = document.querySelector("button");

function getData() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      return generateData(data.slip);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function generateData(advice) {
  const adviceData = {
    id: advice.id,
    quote: advice.advice,
  };
  advice_number.innerHTML = `ADVICE #${adviceData.id}`;
  advice_quote.innerHTML = `${adviceData.quote}`;
}

window.addEventListener("load", getData);
btn.addEventListener("click", getData);
