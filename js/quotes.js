const quotes = [
  {
    quote:
      "사람은 오로지 가슴으로만 올바로 볼 수 있다. 본질적인 것은 눈에 보이지 않는다.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    quote: "승리하면 조금 배울 수 있고 패배하면 모든 것을 배울 수 있다.",
    author: "Christy Mathewson",
  },
  {
    quote:
      "빛을 퍼뜨릴 수 있는 두 가지 방법이 있다. 촛불이 되거나 또는 그것을 비추는 거울이 되는 것이다.",
    author: "Edith Wharton",
  },
  {
    quote: "스스로를 신뢰하는 사람만이 다른 사람들에게 성실할 수 있다.",
    author: "Erich Fromm",
  },
  {
    quote:
      "배움이 없는 자유는 언제나 위험하며 자유가 없는 배움은 언제나 헛된 일이다.",
    author: "John Fitzgerald Kennedy",
  },
  {
    quote: "겸손한 자만이 다스릴 것이요, 애써 일하는 자만이 가질 것이다.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "백권의 책에 쓰인 말보다 한 가지 성실한 마음이 더 크게 사람을 움직인다.",
    author: "Benjamin Franklin",
  },
  {
    quote: "계획 없는 목표는 한낱 꿈에 불과하다.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "Lafayette Ronald Hubbard",
  },
  {
    quote:
      "비관론자는 모든 기회에서 어려움을 찾아내고, 낙관론자는 모든 어려움에서 기회를 찾아낸다.",
    author: "Winston Churchill",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = ` - ${todaysQuote.author}`;
