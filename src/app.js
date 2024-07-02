/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const deck = [];

for (let suit of suits) {
  for (let value of values) {
    deck.push({ suit, value });
  }
}

function drawCard() {
  const index = Math.floor(Math.random() * deck.length);
  return deck.splice(index, 1)[0];
}

document.addEventListener("DOMContentLoaded", function() {
  const card = drawCard();
  console.log(`Robaste un ${card.value} de ${card.suit}`);
  const cardElement = document.querySelector(".card");
  cardElement.querySelector(".number").textContent = card.value;
  cardElement.querySelector(".top-suit").innerHTML = getSuitSymbol(card.suit);
  cardElement.querySelector(".bottom-suit").innerHTML = getSuitSymbol(
    card.suit
  );
});

function getSuitSymbol(suit) {
  switch (suit) {
    case "hearts":
      return `<span style="color: red">\u2665</span>`; // ♥
    case "diamonds":
      return `<span style="color: red">\u2666</span>`; // ♦
    case "clubs":
      return "\u2663"; // ♣
    case "spades":
      return "\u2660"; // ♠
    default:
      return "";
  }
}
