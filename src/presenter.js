import { saludar_es, saludar_en } from "./saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre  = nombre_input.value;
  const edad  = edad_input.value;
  const genero  = genero_input.value;
  const idioma = document.getElementById('idioma').value;
  let saludo;
  if (idioma == "es")
  {
    saludo = "<strong>" + saludar_es(nombre, edad, genero) + "</strong>";
  } 
  if (idioma == "en")
  {
    saludo = "<strong>" + saludar_en(nombre,edad,genero) + "</strong>";
  } 
  div.innerHTML = "<p>" + saludo + "</p>";
});

