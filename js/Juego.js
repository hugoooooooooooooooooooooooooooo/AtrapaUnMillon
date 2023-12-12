// guardamos y leemos los localStorages
var nombre = localStorage.getItem('nombre');
var dificultad = localStorage.getItem('dificultad');
rellenarDatos(nombre, dificultad);
//esta función rellena los datos del localStorage
function rellenarDatos(nombre, dificultad){
    var info = document.getElementById("info");
    var nombreTxt = document.createElement("p");
    var dificultadTxt = document.createElement("p");
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

//variable con la musica de fondo
var musicaFondo = new Audio("../sonido/MusicaFondoJuego.mp3");
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
    reproducirSonido(musicaFondo, true);
}
//creamos una función para mostrar la ronda en la que nos hayamos
function imprimirRondas(){
    var padre = document.createElement("div");
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

//Funcion que cuando la llamas pone el id de rondaActual a la ronda en la que estemos
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

//Para poder hacer un drag and drop de unas veces determinadas vamos haciendo duplicados y quitamos o ponemos distintas propiedades de éstos
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var billeteDuplicado = document.getElementById(data).cloneNode(true);
    billeteDuplicado.removeAttribute("id");
    billeteDuplicado.removeAttribute("draggable");
    billeteDuplicado.removeAttribute("ondragstart");
    if(data == "billeteAll"){
        ev.target.appendChild(billeteDuplicado);
        billeteDuplicado.className = "duplicadoAll";
    }else if (data == "billete10"){
        billeteDuplicado.className = "duplicado10";
        ev.target.appendChild(billeteDuplicado);
    }
    actualizarDinero(billeteDuplicado, "resta");
    if(presupuesto == 0){
        eliminarBilletes(billeteDuplicado);
    }
}

// Esta funcion pasas por parametro el id del billete que quieras eliminar y lo elimina
function eliminarBilletes(billete){
    var todosBilletesDuplicados;
    if(billete.className == "duplicadoAll"){
        todosBilletesDuplicados = document.getElementsByClassName("duplicado10");
    }else{
        todosBilletesDuplicados = document.getElementsByClassName("duplicadoAll");
    }
    ocultarMesa();
    eliminarDuplicados(todosBilletesDuplicados);
}

function ocultarMesa(){
    document.getElementById("billete10").style.display = "none";
    document.getElementById("billeteAll").style.display = "none";
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
            presupuesto-= 10;
        }
    }else{
        if(billete.className == "duplicadoAll"){
            presupuesto = presupuestoActual;
        }else{
            presupuesto += 10;
        }
    }
    imprimirDinero();
}

//Muestra el dinero
function imprimirDinero(){
    if(presupuesto == 0){
        document.getElementById("dinero").textContent =presupuesto + "€";
    }else{
        document.getElementById("dinero").textContent =presupuesto + ".000€";
    }
}

//funcion que elimina el ultimo billete puesto en alguna caja
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
    var random = generarRandom(numsPregunta, arrayDificultad.length);
    document.getElementById("pregunta-txt").textContent = arrayDificultad[random].pregunta;
    var divRespuestas = document.getElementById("pantallaRespuestas").querySelectorAll("div");
    for(i = 0; i < divRespuestas.length; i++){
        var respuesta = arrayDificultad[random].respuestas[i];
        respuesta = respuesta.split(".");
        var txtRespuesta = document.getElementById("respuesta" + (i+1));
        txtRespuesta.textContent = respuesta[0];
        cambiarOpacity(txtRespuesta, "normal", delay, 1000);
        guardar(respuesta, arrayRespuestas);
    }
    cambiarOpacity(document.getElementById("pregunta-txt"), "normal", delay, 1000);
}

//Te genera un random, si ese numero ya ha salido te genera otro hasta que no haya salido, para no repetir preguntas
function generarRandom(set, maximo){
    do{
        var random = Math.floor(Math.random() * maximo);
    } while(set.has(random));
    set.add(random);
    return random;
}

//Funcion para meter elementos en un array
function guardar(elemento, array){
    array.push(elemento);
}

//animación que hace que se desvelen las preguntas y las respuestas una a una
function cambiarOpacity(elemento, direccion, delayAnimacion, diferencia) {
    elemento.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], { duration: 500, fill: "both", delay: delayAnimacion, direction: direccion});
    if(delayAnimacion != 0){
        delayAnimacion += diferencia;
        delay = delayAnimacion;
    }
  }

  //Funcion encargada de eliminiar cualquier elemento
function eliminar(elemento){
    elemento.remove();
}
// arrancamos el contador hacia atrás hasta 0
function arrancarContador(){
    setTimeout(function(){
        const intervalo = setInterval(() =>{
            var contador = document.getElementById("contador");
            var pregunta = document.getElementById("pregunta");
            crearContador();
            tiempo--;
            if(contador.className == "" && pregunta.className == "pregunta-stop"){
                contador.className = "contador-play";
                pregunta.className = "pregunta-play";
            }
            if(tiempo < 0){
                clearInterval(intervalo);
                contador.className = "";
                pregunta.className = "pregunta-stop";
                comprobarRespuesta();
                ocultarMesa();
                pararSonido(musicaFondo, true);
                reproducirSonido(new Audio("../sonido/tiempo.wav"), false);
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
    update();
}

//Esta funcion va mirando las trampillas y cuenta los billetes que haya dentro, empieza en uno ya que dentro hay un elemento que no es un billete
function contarDineroCorrecto(trampilla){
    var dineroCorrecto = trampilla.children;
    if(dineroCorrecto[1]){
        for (let i = 1; i < dineroCorrecto.length; i++) {
            setPresupuesto(dineroCorrecto[i]);
        }
    }else{
        presupuestoActual = 0;
    }
}

//Modificas el presupuesto
function setPresupuesto(billete){
    if(billete.className == "duplicado10"){
        contadorPresupuesto += 10;
        presupuestoActual = contadorPresupuesto;
    }else{
        presupuestoActual = presupuestoActual;
    }
}

//LImpia el dinero de las trampillas
function quitarDineroTrampilla(){
    var todosBilletes = document.querySelectorAll("img");
    for(var i = 0; i < todosBilletes.length;i++){
        if(todosBilletes[i].className.includes("duplicado")){
            todosBilletes[i].remove();
        }
    }
}

//Te pasa la trampilla correcta
function getRespuestaCorrecta(){
    var correcta;
    for(i = 0; i < arrayRespuestas.length; i++){
        if(arrayRespuestas[i][1]){
            var comprobacion = arrayRespuestas[i][1].toLowerCase();
            if(comprobacion.includes("correcta")){
                correcta = document.getElementById("trampilla" + (i+1));
            }
        }
    }
    return correcta;
}

//Te pasa un array con las trampillas incorrectas
function getRespuestasIncorrectas(){
    var salida = new Array();
    for(i = 0; i < arrayRespuestas.length; i++){
        if(arrayRespuestas[i][1]){
            var comprobacion = arrayRespuestas[i][1].toLowerCase();
            if(!comprobacion.includes("correcta")){
                salida.push(i);
            }
        }else{
            salida.push(i);
        }
    }
    return salida;
}

//función para animar las trampillas
function animarTrampilla(trampillas, direccion, delay){
    var set = new Set();
    for(i = 0; i < trampillas.length; i++){
        var numTrampilla = trampillas[generarRandom(set, trampillas.length)];
        var caja = document.getElementById("trampilla" + (numTrampilla + 1));
        caja.animate([
            {backgroundColor: "#EEFFFE"},
            {backgroundColor: "rgb(104, 103, 102)"}
        ], {duration: 500, fill:"both", delay: delay, direction: direccion});
        var hijos = caja.children;
        for(let j = 0; j < hijos.length; j++){
            cambiarOpacity(hijos[j], "reverse", delay, 2000);
        }
        if(delay != 0){
            delay += 2000;
            delayTrampilla = delay;
        }
    }
}

// cambiamos de ronda, actualizamos el juego
function update(){
    setTimeout(function(){
        if(ronda < MAX_RONDAS && presupuestoActual > 0){
            ronda++;
            resetAnimaciones();
            resetearMesa();
            jugar();
            quitarDineroTrampilla();
            reproducirSonido(new Audio("../sonido/ronda.wav"), false);
        }else{
            gameOver();
        }
    }, (delayTrampilla + 3000));
}

//Vuelve a mostrar los billetes en la mesa
function resetearMesa(){
    document.getElementById("billete10").style.display = "inline";
    document.getElementById("billeteAll").style.display = "inline";
}

//reseteamos las animaciones
function resetAnimaciones(){
    var respuestasIncorrectas = getRespuestasIncorrectas();
    animarTrampilla(respuestasIncorrectas, "reverse", 0);
    var divRespuestas = document.getElementById("pantallaRespuestas").querySelectorAll("div");
    for(i = 0; i < divRespuestas.length; i++){
        var txtRespuesta = document.getElementById("respuesta" + (i+1));
        cambiarOpacity(txtRespuesta, "reverse", 0, 0);
    }
    cambiarOpacity(document.getElementById("pregunta-txt"), "reverse", 0, false);
    for(i = 0; i < respuestasIncorrectas.length; i++){
        var caja = document.getElementById("trampilla" + (respuestasIncorrectas[i] + 1));
        var hijos = caja.children;
        for(let j = 0; j < hijos.length; j++){
            cambiarOpacity(hijos[j], "normal", 0, 0);
        }
    }
}

//Reproducir un sonido y si lo quieres en loop(booleano)
function reproducirSonido(audio, loop){
    audio.loop = loop;
    audio.play();
}

//Para un sonido que pases por parametro
function pararSonido(audio){
    audio.pause();
}

//Si se acaba el juego, aunque se llame gameOver tambien es para ganar
function gameOver(){
    var jugadoresGuardados = localStorage.getItem("jugadores");
    if (jugadoresGuardados) {
        var jugadores = JSON.parse(jugadoresGuardados);
    }else{
        var jugadores = [];
    }
    jugadores.push({"nombre":nombre, "dificultad":dificultad, "dinero":presupuestoActual});
    localStorage.setItem("jugadores", JSON.stringify(jugadores));
    window.location.href = "../html/Resultado.html";
}

//Baja volumen de la musica de fondo
function volumenMenos(){
        musicaFondo.volume -= 0.2;
}

//Sube volumen de la musica de fondo
function volumenMas(){
    musicaFondo.volume += 0.2;
}

//Aunque se llame playPause no para ni vuelve a reproducir la musica, sino que la mutea y la desmutea
function playPause() {
    var playPauseElement = document.getElementById("playPause");
    var svg;

    if (musicaFondo.muted) {
        musicaFondo.muted = false;
        svg = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>';
    } else {
        musicaFondo.muted = true;
        svg = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
    }

    var nuevoSvg = new DOMParser().parseFromString(svg, 'image/svg+xml').documentElement;

    playPauseElement.innerHTML = '';
    playPauseElement.appendChild(nuevoSvg);
}

