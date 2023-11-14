var nombre = localStorage.getItem('nombre');
var dificultad = localStorage.getItem('dificultad');

var nombreTxt = document.getElementById('nombreTxt');
var dificultadTxt = document.getElementById('dificultadTxt');

nombreTxt.textContent = "Nombre: " + nombre;
dificultadTxt.textContent = "Dificultad: " + dificultad;