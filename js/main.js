var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    by: "Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    by: "Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    by: "Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    by: "Mae West",
  },
  {
    quote: "We accept the love we think we deserve.",
    by: "Stephen Chbosky",
  },
  {
    quote: "Without music, life would be a mistake.",
    by: "Friedrich Nietzsche",
  },
];

var shuffledQuotes = [];
var index = 0;

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function initQuoteArray() {
  shuffledQuotes = [...quotes];
  shuffleArray(shuffledQuotes);
  index = 0;
}

function getRandomQuote() {
  if (index >= shuffledQuotes.length) {
    initQuoteArray();
  }
  return shuffledQuotes[index++];
}

function generateQuote() {
  var quoteElement = document.getElementById("quote");
  var randomQuote = getRandomQuote();
  quoteElement.innerHTML = `<p>"${randomQuote.quote}"</p>
  <p>--${randomQuote.by}</p>`;
}

initQuoteArray();
