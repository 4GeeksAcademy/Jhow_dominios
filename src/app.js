/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Función analizar todas las posibles combinaciones
function returnallcombinations() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net"];

  let combinations = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          combinations.push(`${pronoun[i]}${adj[j]}${noun[k]}${ext[l]}`);
        }
      }
    }
  }
  return combinations;
}

// Función elegir una combinacion aleatoria de todas las posibles
function getRandomLine() {
  let combinations = returnallcombinations();
  let random = Math.floor(Math.random() * combinations.length);
  return combinations[random];
}

// Obtener una combinación aleatoria
let randomLine = getRandomLine();

// Mostrar la combinación aleatoria en el HTML
document.getElementById("show").innerHTML = randomLine;
