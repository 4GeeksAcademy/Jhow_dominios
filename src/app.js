/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net"];

// Función analizar todas las posibles combinaciones
function retornarTodasLasCombinaciones() {
  let combinaciones = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          combinaciones.push(`${pronoun[i]}${adj[j]}${noun[k]}${ext[l]}`);
        }
      }
    }
  }
  return combinaciones;
}

// Función elegir una combinacion aleatoria de todas las posibles
function obtenerLineaAleatoria() {
  let combinaciones = retornarTodasLasCombinaciones();
  let aleatorio = Math.floor(Math.random() * combinaciones.length);
  return combinaciones[aleatorio];
}

// Obtener una combinación aleatoria
let lineaAleatoria = obtenerLineaAleatoria();

// Mostrar la combinación aleatoria en el HTML
document.getElementById("resultado").innerHTML = lineaAleatoria;
