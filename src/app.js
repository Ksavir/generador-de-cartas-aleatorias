/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomCard() {
  //write your code here
  let simboloAleatorio = () => {
    let simbolo = ["♦", "♥", "♠", "♣"];
    let simboloCarta = Math.floor(Math.random() * simbolo.length);
    return simbolo[simboloCarta];
  };

  let pinta = simboloAleatorio();

  if (pinta == "♦" || pinta == "♥") {
    document.querySelector(".arriba").style = "color: red";
    document.querySelector(".numeroCentral").style = "color: red";
    document.querySelector(".abajo").style = "color: red";
  } else {
    document.querySelector(".arriba").style = "color: black";
    document.querySelector(".numeroCentral").style = "color: black";
    document.querySelector(".abajo").style = "color: black";
  }

  function numeroAleatorio() {
    let numeros = [
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
    var numeroCarta = Math.floor(Math.random() * numeros.length);
    return numeros[numeroCarta];
  }

  let num = numeroAleatorio();

  document.querySelector(".arriba").innerHTML = pinta;
  document.querySelector(".numeroCentral").innerHTML = num;
  document.querySelector(".abajo").innerHTML = pinta;
}

window.onload = function() {
  randomCard();
};
