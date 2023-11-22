// Mezclar las respuestas para cada nivel de dificultad
const dificultadFacil = [
    {
        pregunta: "¿En qué fecha llegó Cristóbal Colón a América?",
        respuestas: {
            0: "8 de Octubre 1492.",
            1: "12 Octubre 1492. (Respuesta Correcta)",
            2: "12 de Noviembre de 1513.",
            3: "8 de Octubre de 1942."
        }
    },
    {
        pregunta: "¿De qué colores es la bandera de México?",
        respuestas: {
            0: "Azul, blanco, verde.",
            1: "Rojo, blanco, Azul.",
            2: "Verde, blanco y rojo. (Respuesta Correcta)",
            3: "Naranja, Verde, Blanco."
        }
    },
    {
        pregunta: "¿Quién escribió Hamlet?",
        respuestas: {
            0: "William Shakespeare. (Respuesta Correcta)",
            1: "Jane Austen.",
            2: "Charles Dickens.",
            3: "Edgar Allan Poe."
        }
    },
    {
        pregunta: "¿Quién es el fundador de Facebook?",
        respuestas: {
            0: "Steve Jobs.",
            1: "Elon Musk.",
            2: "Mark Zuckerberg.(Respuesta Correcta)",
            3: "Bill Gates."
        }
    },
    {
        pregunta: "¿Quién enunció el mito de la caverna?",
        respuestas: {
            0: "Confucio.",
            1: "Sócrates.",
            2: "Platón. (Respuesta Correcta)",
            3: "Aristóteles."
        }
    }
];

// Arrays asociativos para preguntas de dificultad media
const dificultadMedia = [
    {
        pregunta: "¿Cuál es la flor nacional de Japón?",
        respuestas: {
            0: "El cerezo. (Respuesta Correcta)",
            1: "Lirio.",
            2: "Orquídea.",
            3: "Tulipán."
        }
    },
    {
        pregunta: "¿Cuántos años duró la Primera Guerra Mundial?",
        respuestas: {
            0: "10 años.",
            1: "8 años.",
            2: "6 años.",
            3: "4 años. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿En qué año comenzó la II Guerra Mundial?",
        respuestas: {
            0: "1940.",
            1: "En 1939. (Respuesta Correcta)",
            2: "1935.",
            3: "1945"
        }
    },
    {
        pregunta: "¿Quién escribió La Odisea?",
        respuestas: {
            0: "Esquilo.",
            1: "Virgilio.",
            2: "Homero. (Respuesta Correcta)",
            3: "Ovidio."
        }
    },
    {
        pregunta: "¿Cuál fue el primer metal que usó el hombre?",
        respuestas: {
            0: "Plata.",
            1: "Piedra.",
            2: "El cobre. (Respuesta Correcta)",
            3: "Hierro."
        }
    }
];

// Arrays asociativos para preguntas de dificultad difícil
const dificultadDificil = [
    {
        pregunta: "¿Qué río atraviesa la ciudad de Benarés?",
        respuestas: {
            0: "El Río Nilo.",
            1: "El Río Yangtsé.",
            2: "El Río Amazonas.",
            3: "El Río Ganges. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿En qué año cayó el muro de Berlín?",
        respuestas: {
            0: "En 1989. (Respuesta Correcta)",
            1: "En 1979.",
            2: "En 1985.",
            3: "En 1991"
        }
    },
    {
        pregunta: "¿Quién descubrió la penicilina?",
        respuestas: {
            0: "Marie Curie.",
            1: "Robert Koch.",
            2: "Louis Pasteur.",
            3: "Alexander Fleming. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Cuánto duró la guerra de los 100 años?",
        respuestas: {
            0: "99 años.",
            1: "97 años.",
            2: "116 años. (Respuesta Correcta)",
            3: "100 años."
        }
    },
    {
        pregunta: "¿Con qué nombre se conoce el escándalo que obligó al presidente estadounidense Richard Nixon a dimitir?",
        respuestas: {
            0: "Disaster of Nixon.",
            1: "La catástrofe.",
            2: "El crack del 29.",
            3: "Watergate. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Cómo se llama el cuadro más famoso de Gustav Klimt?",
        respuestas: {
            0: "El beso. (Respuesta Correcta)",
            1: "El Árbol de la Vida.",
            2: "Retrato de Adele Bloch-Bauer.",
            3: "La Dama Dorada"
        }
    },
    {
        pregunta: "¿Cuál es el récord mundial de Usain Bolt en 100 metros lisos?",
        respuestas: {
            0: "9,75 segundos.",
            1: "9,58 segundos. (Respuesta Correcta)",   
            2: "9,95 segundos.",
            3: "9,45 segundos.",
        }
    },
    {
        pregunta: "¿Cúal es la capital de Nicaragua?",
        respuestas: {
            0: "Nicaragua.",
            1: "Tegucigalpa.",
            2: "San Salvador.",
            3: "Managua. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Dónde nació Vicent Van Gogh?",
        respuestas: {
            0: "Zundert. (Respuesta Correcta)",
            1: "Groninga.",
            2: "Ámsterdam.",
            3: "Utrecht."
        }
    },
    {
        pregunta: "¿Cuándo comenzó la edad contemporánea?",
        respuestas: {
            0: "En 1800.",
            1: "En 1750.",
            2: "En 1825.",
            3: "En 1789. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Qué territorio se independizó de serbia en 2008 sin que se haya aún reconocido dicha independencia por la totalidad de países?",
        respuestas: {
            0: "Montenegro.",
            1: "Kosovo. (Respuesta Correcta)",
            2: "Macedonia del Norte.",
            3: "Bosnia y Herzegovina."
        }
    },
    {
        pregunta: "¿En qué año comenzó el segundo reich en Alemania?",
        respuestas: {
            0: "En 1900.",
            1: "En 1850.",
            2: "En 1920.",
            3: "En 1871. (Respuesta Correcta)"
        }
    }
];

// guardamos y leemos los localStorages
var nombre = localStorage.getItem('nombre');
var dificultad = localStorage.getItem('dificultad');
rellenarDatos(nombre, dificultad);
//esta función rellena los datos del localStorage
function rellenarDatos(nombre, dificultad){
    var info = document.getElementById("info");
    var nombreTxt = document.createElement("p");
    var dificultadTxt = document.createElement("p");
    var dineroTxt = document.createElement("p");
    nombreTxt.textContent = "Nombre: " + nombre;
    dificultadTxt.textContent = "Dificultad: " + dificultad;
    info.appendChild(nombreTxt);
    info.appendChild(dificultadTxt);
}

// declaramos las variables iniciales que se van a resetear en cada ronda
// declaramos el tiempo de cada ronda
var tiempo;

//establecemos un delay para controlar los tiempos de ejecución, y un delay para las animaciones de la trampilla
var delay;
var delayTrampilla;

// declaramos un array que guarda las respuestas con las que estamos trabajando en cada ronda
var arrayRespuestas = [];

//max rondas constante
const MAX_RONDAS = 8;
//hacemos una función que asigna un valor inicial a las variables, y sirve tanto para inicializar las variables como para resetearlas
function inicializarVariables(){
    tiempo = 60;
    delay = 1000;
    delayTrampilla = 1000;
    arrayRespuestas = new Array();
    var botones = document.getElementsByClassName("eliminarBillete");
    for(i = 0; i < botones.length; i++){
        botones[i].addEventListener("click", eliminarBillete);
    }   
    contadorPresupuesto = 0;
    presupuesto = presupuestoActual;
}

//creamos un Set para controlar que no se repitan las preguntas
var numsPregunta = new Set();

// inicializamos el presupuesto a 200 mil euros, este se irá cambiando en función de lo que el usuario consiga
const presupuestoInicial = 200;
var presupuesto;
var presupuestoActual = presupuestoInicial;

// inicializamos la ronda a 1, esta se irá aumentando hasta 8
var ronda = 1;
//variable que nos ayuda a ir contando los billetes que hay en la trampilla correcta
var contadorPresupuesto;
window.addEventListener("load", jugar);
imprimirRondas();

// función que controla el flujo de juego
function jugar(){
    mostrarRonda();
    inicializarVariables();
    imprimirDinero();
    imprimirPreguntas(dificultad);
    crearContador();
    arrancarContador();
}
//creamos una función para mostrar la ronda en la que nos hayamos
function imprimirRondas(){
    var padre = iv = document.createElement("div");
    padre.id = "rondas";
    var siguiente = document.getElementById("pregunta").firstChild;
    document.getElementById("pregunta").insertBefore(padre, siguiente);
    for(i = 1; i <= MAX_RONDAS; i++){
        var div = document.createElement("div");
        div.innerText = i;
        div.className = "ronda";
        padre.appendChild(div);
    }
}

function mostrarRonda(){
    var rondas = document.getElementById("rondas").children;
    for(i = 0; i < rondas.length; i++){
        if((ronda - 1) == i){
            rondas[i].id = "rondaActual";
        }
    }
}
//Permitimos el drag and drop y hacemos un duplicado del billete original para que se conserve, tambien se va actualizando el presupuesto
function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var billeteDuplicado = document.getElementById(data).cloneNode(true);
    billeteDuplicado.removeAttribute("id");
    if(data == "billeteAll"){
        ev.target.appendChild(billeteDuplicado);
        billeteDuplicado.className = "duplicadoAll";
    }else if (data == "billete5"){
        billeteDuplicado.className = "duplicado5";
        ev.target.appendChild(billeteDuplicado);
    }
    actualizarDinero(billeteDuplicado, "resta");
    if(presupuesto == 0){
        eliminarBilletes(billeteDuplicado);
    }
}

// Esta funcion pasas por parametro el id del billete que quieras eliminar y lo elimina, tambie recibe un booleano por si quieres eliminar los duplicados
function eliminarBilletes(billete){
    var todosBilletesDuplicados;
    if(billete.className == "duplicadoAll"){
        todosBilletesDuplicados = document.getElementsByClassName("duplicado5");
    }else{
        todosBilletesDuplicados = document.getElementsByClassName("duplicadoAll");
    }
    document.getElementById("billete5").style.display = "none";
    document.getElementById("billeteAll").style.display = "none";
    eliminarDuplicados(todosBilletesDuplicados);
}

function eliminarDuplicados(billetes){
    for (var i = billetes.length - 1; i >= 0; i--) {
        billetes[i].remove();
    }
}

// actualizamos el presupuesto
function actualizarDinero(billete, operacion){
    if(operacion == "resta"){
        if(billete.className == "duplicadoAll"){
            presupuesto = 0;
        }else{
            presupuesto-= 5;
        }
    }else{
        if(billete.className == "duplicadoAll"){
            presupuesto = presupuestoInicial;
        }else{
            presupuesto += 5;
        }
    }
    imprimirDinero();
}

function imprimirDinero(){
    if(presupuesto == 0){
        document.getElementById("dinero").textContent = "Dinero: " + presupuesto;
    }else{
        document.getElementById("dinero").textContent = "Dinero: " + presupuesto + "k";
    }
}

function eliminarBillete(e){
    var caja = e.target.parentElement;
    var ultimo = caja.lastElementChild;
    if(ultimo.className.includes("duplicado")){
        ultimo.remove();
        actualizarDinero(ultimo, "suma");
    }
    resetearMesa();
}
// asignamos el valor del tiempo al contador (también nos servirá para actualizarlo)
function crearContador(){
    document.getElementById("contador").textContent = tiempo;
}
// saltamos el tiempo
function saltar(){
    tiempo = 0;
    crearContador();
}
//función general que inicia el juego dependiendo de su dificultad, que imprime las preguntas en función de la ronda en la que estemos.
//Esta función llama a imprimir
function imprimirPreguntas(dificultad){
    imprimir(getArrayDificultad(ronda, dificultad));
}

// función que nos indica el array que debemos de utilizar según la ronda en la wue se encuentre el usuario
function getArrayDificultad(ronda, dificultad){
    if(dificultad == "Facil"){
        if(ronda <= 5){
            return dificultadFacil;
        }else{
            return dificultadMedia;
        }
    } else if (dificultad== "Media"){
        if(ronda <= 3){
            return dificultadFacil;
        }else if (ronda <= 6){
            return dificultadMedia;
        } else{
            return dificultadDificil;
        }
    } else{
        if(ronda <= 1){
            return dificultadFacil;
        }else if (ronda <= 4){
            return dificultadMedia;
        } else{
            return dificultadDificil;
        }
    }
}

// imprimimos las preguntas en función de su dificultad
//esta función es llamada en imprimirPreguntas
function imprimir(arrayDificultad){
    if(arrayDificultad != getArrayDificultad(ronda - 1, dificultad)){
        numsPregunta = new Set();
    }
    do{
        var random = Math.floor(Math.random() * arrayDificultad.length);
    } while(numsPregunta.has(random));
    numsPregunta.add(random);
    document.getElementById("pregunta-txt").textContent = arrayDificultad[random].pregunta;
    var divRespuestas = document.getElementById("pantallaRespuestas").querySelectorAll("div");
    for(i = 0; i < divRespuestas.length; i++){
        var respuesta = arrayDificultad[random].respuestas[i];
        respuesta = respuesta.split(".");
        var txtRespuesta = document.getElementById("respuesta" + (i+1));
        txtRespuesta.textContent = respuesta[0];
        cambiarOpacity(txtRespuesta, "normal", delay);
        guardar(respuesta, arrayRespuestas);
    }
    cambiarOpacity(document.getElementById("pregunta-txt"), "normal", delay);
}

function guardar(elemento, array){
    array.push(elemento);
}

//animación que hace que se desvelen las preguntas y las respuestas una a una
function cambiarOpacity(elemento, direccion, delayAnimacion ) {
    
    elemento.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], { duration: 1000, fill: "both", delay: delayAnimacion, direction: direccion});
    if(delayAnimacion != 0){
        delayAnimacion += 1000;
        delay = delayAnimacion;
    }
  }

function eliminar(elemento){
    elemento.remove();
}
// arrancamos el contador hacia atrás hasta 0
function arrancarContador(){
    setTimeout(function(){
        const intervalo = setInterval(() =>{
            document.getElementById("contador").textContent = tiempo;
            tiempo--;
            if(tiempo < 0){
                // alert("!Te has quedado sin tiempo!");
                clearInterval(intervalo);
                comprobarRespuesta();
            }
        }, 1000);
    }, delay);
}
// comprobamos las respuestas, quitando el dinero de aquellas que sean incorrectas
function comprobarRespuesta(){
    var respuestasIncorrectas = getRespuestasIncorrectas();
    animarTrampilla(respuestasIncorrectas, "normal", delayTrampilla);
    var trampillaCorrecta = getRespuestaCorrecta();
    contarDineroCorrecto(trampillaCorrecta);
    quitarDineroTrampilla();
    update();
}

function contarDineroCorrecto(trampilla){
    console.log(trampilla);
    var dineroCorrecto = trampilla.children;
    for (let i = 0; i < dineroCorrecto.length; i++) {
        if(dineroCorrecto[i].className.includes("duplicado")){
            setPresupuesto(dineroCorrecto[i]);
        }else{
            presupuestoActual = 0;
        }
    }
}

function setPresupuesto(billete){
    if(billete.className == "duplicado5"){
        contadorPresupuesto += 5;
        presupuestoActual = contadorPresupuesto;
    }
}

function quitarDineroTrampilla(){
    var todosBilletes = document.querySelectorAll("img");
    for(var i = 0; i < todosBilletes.length;i++){
        if(todosBilletes[i].className.includes("duplicado")){
            todosBilletes[i].remove();
        }
    }
}

function getRespuestaCorrecta(){
    var correcta;
    for(i = 0; i < arrayRespuestas.length; i++){
        var comprobacion = arrayRespuestas[i][1].toLowerCase();
        if(comprobacion.includes("correcta")){
            correcta = document.getElementById("trampilla" + (i+1));
        }
    }
    return correcta;
}
function getRespuestasIncorrectas(){
    var salida = new Array();
    for(i = 0; i < arrayRespuestas.length; i++){
        var comprobacion = arrayRespuestas[i][1].toLowerCase();
        if(!comprobacion.includes("correcta")){
            salida.push(i);
        }
    }
    return salida;
}

//función para animar las trampillas
function animarTrampilla(trampillas, direccion, delay){
    for(i = 0; i < trampillas.length; i++){
        var caja = document.getElementById("trampilla" + (trampillas[i] + 1));
        animacionTrampilla = caja.animate([
        {backgroundColor: "#EEFFFE"},
        {backgroundColor: "rgb(104, 103, 102)"}
    ], {duration: 1000, fill:"both", delay: delay, direction: direccion});
    if(delay != 0){
        delay += 2000;
        delayTrampilla = delay;
    }
    }
}

// cambiamos de ronda, actualizamos el juego
function update(){
    setTimeout(function(){
        if(ronda <= MAX_RONDAS && presupuestoActual > 0){
            ronda++;
            resetAnimaciones();
            resetearMesa();
            jugar();
        }else{
            gameOver();
        }
    }, (delayTrampilla + 3000));
}

function resetearMesa(){
    document.getElementById("billete5").style.display = "inline";
    document.getElementById("billeteAll").style.display = "inline";
}

//reseteamos las animaciones
function resetAnimaciones(){
    var respuestasIncorrectas = getRespuestasIncorrectas();
    animarTrampilla(respuestasIncorrectas, "reverse", 0);
    var divRespuestas = document.getElementById("pantallaRespuestas").querySelectorAll("div");
    for(i = 0; i < divRespuestas.length; i++){
        var txtRespuesta = document.getElementById("respuesta" + (i+1));
        cambiarOpacity(txtRespuesta, "reverse", 0);
    }
    cambiarOpacity(document.getElementById("pregunta-txt"), "reverse", 0);
}

function gameOver(){
    window.location.href = "../html/inicio.html";
}