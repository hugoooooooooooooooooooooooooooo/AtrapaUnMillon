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
    if(!nombre || !dificultad){
        window.location.href = "../html/inicio.html";
    } else{
        var info = document.getElementById("info");
        var nombreTxt = document.createElement("p");
        var dificultadTxt = document.createElement("p");
        var dineroTxt = document.createElement("p");
        nombreTxt.textContent = "Nombre: " + nombre;
        dificultadTxt.textContent = "Dificultad: " + dificultad;
        info.appendChild(nombreTxt);
        info.appendChild(dificultadTxt);
    }
}

// declaramos las variables iniciales que se van a resetear en cada ronda
// declaramos el tiempo de cada ronda
var tiempo;

//establecemos un delay para controlar los tiempos de ejecución, y un delay para las animaciones de la trampilla
var delay;
var delayTrampilla;

// declaramos un array que guarda las respuestas con las que estamos trabajando en cada ronda
var arrayRespuestas = [];

//hacemos una función que asigna un valor inicial a las variables, y sirve tanto para inicializar las variables como para resetearlas
function inicializarVariables(){
    tiempo = 90;
    delay = 1000;
    delayTrampilla = 1000;
    arrayRespuestas = new Array();
}

//creamos un Set para controlar que no se repitan las preguntas
var numsPregunta = new Set();

// inicializamos el presupuesto a 200 mil euros, este se irá cambiando en función de lo que el usuario consiga
var presupuesto = 200;

// inicializamos la ronda a 1, esta se irá aumentando hasta 8
var ronda = 1;

window.addEventListener("load", jugar);

// función que controla el flujo de juego
function jugar(){
    inicializarVariables();
    actualizarDinero();
    imprimirPreguntas(dificultad);
    crearContador();
    arrancarContador();
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

    if(data == "billeteAll"){
        ev.target.appendChild(document.getElementById(data));
        presupuesto = 0;
        actualizarDinero();
        document.getElementById("billete5").style.display = "none";
        document.getElementById("duplicadoBillete").style.display = "none";
    }else{
        if(presupuesto > 5){
            var billeteDuplicado = document.getElementById(data).cloneNode(true);
            billeteDuplicado.id = "duplicadoBillete";
            billeteDuplicado.setAttribute("dragable", "true");
            billeteDuplicado.ondragstart = drag;
            ev.target.appendChild(billeteDuplicado);
            presupuesto-=5;
            actualizarDinero();
            }else{
                ev.target.appendChild(document.getElementById(data));
                presupuesto-=5;
                actualizarDinero();
                document.getElementById("billeteAll").style.display = "none";
            }
    }
  }
// actualizamos el presupuesto
function actualizarDinero(){
    document.getElementById("dinero").textContent = "Dinero: " + presupuesto + "k"
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
    if(dificultad == "Facil"){
        if(ronda <= 5){
            imprimir(dificultadFacil);
        }else{
            imprimir(dificultadMedia);
        }
    } else if (dificultad== "Media"){
        if(ronda <= 3){
            imprimir(dificultadFacil);
        }else if (ronda <= 6){
            imprimir(dificultadMedia);
        } else{
            imprimir(dificultadDificil);
        }
    } else{
        if(ronda <= 1){
            imprimir(dificultadFacil);
        }else if (ronda <= 4){
            imprimir(dificultadMedia);
        } else{
            imprimir(dificultadDificil);
        }
    }
}

// imprimimos las preguntas en función de su dificultad
//esta función es llamada en imprimirPreguntas
function imprimir(arrayDificultad){
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
        animar(txtRespuesta, "normal", delay);
        guardar(respuesta, arrayRespuestas);
    }
    animar(document.getElementById("pregunta-txt"), "normal", delay);
}

function guardar(elemento, array){
    array.push(elemento);
}

//animación que hace que se desvelen las preguntas y las respuestas una a una
function animar(texto, direccion, delayAnimacion ) {
    
    texto.animate([
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
    update();
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
    if(ronda <= 8 && presupuesto > 0){
        setTimeout(function(){
            ronda++;
            resetAnimaciones();
            jugar();
        }, (delayTrampilla + 3000));
    }else{
        gameOver();
    }
}

//reseteamos las animaciones
function resetAnimaciones(){
    var respuestasIncorrectas = getRespuestasIncorrectas();
    animarTrampilla(respuestasIncorrectas, "reverse", 0);
    var divRespuestas = document.getElementById("pantallaRespuestas").querySelectorAll("div");
    for(i = 0; i < divRespuestas.length; i++){
        var txtRespuesta = document.getElementById("respuesta" + (i+1));
        animar(txtRespuesta, "reverse", 0);
    }
    animar(document.getElementById("pregunta-txt"), "reverse", 0);
}

function gameOver(){
    window.location.href = "../html/inicio.html";
}







