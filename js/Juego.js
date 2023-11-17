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
            0: "Charles Dickens.",
            1: "Jane Austen.",
            2: "William Shakespeare. (Respuesta Correcta)",
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
            0: "Orquídea.",
            1: "Lirio.",
            2: "El cerezo. (Respuesta Correcta)",
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
            1: "1945.",
            2: "1935.",
            3: "En 1939. (Respuesta Correcta)"
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
            0: "En 1991.",
            1: "En 1979.",
            2: "En 1985.",
            3: "En 1989. (Respuesta Correcta)"
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
            0: "La Dama Dorada.",
            1: "El Árbol de la Vida.",
            2: "Retrato de Adele Bloch-Bauer.",
            3: "El beso. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Cuál es el récord mundial de Usain Bolt en 100 metros lisos?",
        respuestas: {
            0: "9,75 segundos.",
            1: "9,45 segundos.",
            2: "9,95 segundos.",
            3: "9,58 segundos. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿CUÁL ES LA CAPITAL DE NICARAGUA?",
        respuestas: {
            0: "Nicaragua.",
            1: "Tegucigalpa.",
            2: "San Salvador.",
            3: "Managua. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿DÓNDE NACIÓ VICENT VAN GOGH?",
        respuestas: {
            0: "Utrecht.",
            1: "Groninga.",
            2: "Ámsterdam.",
            3: "Zundert. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿CUÁNDO COMENZÓ LA EDAD CONTEMPORÁNEA?",
        respuestas: {
            0: "En 1800.",
            1: "En 1750.",
            2: "En 1825.",
            3: "En 1789. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿QUÉ TERRITORIO SE INDEPENDIZÓ DE SERBIA EN 2008 SIN QUE SE HAYA AÚN RECONOCIDO DICHA INDEPENDENCIA POR LA TOTALIDAD DE PAÍSES?",
        respuestas: {
            0: "Montenegro.",
            1: "Bosnia y Herzegovina.",
            2: "Macedonia del Norte.",
            3: "Kosovo. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿EN QUÉ AÑO COMENZÓ EL SEGUNDO REICH EN ALEMANIA?",
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

// establecemos los valores iniciales del cronómetro, la ronda y el presupuesto
var tiempo = 90;
var ronda = 1;
var presupuesto = 200;

//establecemos un delay para controlar los tiempos de ejecución, y un delay
var delay = 1000;
var delayTrampilla = 1000;

// establecemos un array que guarda las respuestas con las que estamos trabajando en cada ronda
var arrayRespuestas = new Array();

//creamos un Set para controlar que no se repitan las preguntas
var numsPregunta = new Set();

//creamos variables para las animaciones, para luego revertirlas
var animacionPregunta;
var animacionTrampilla;

window.addEventListener("load", jugar);

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
// función que controla el flujo de juego
function jugar(){
    actualizarDinero();
    imprimirPreguntas(dificultad);
    crearContador();
    arrancarContador();
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
//esta función ess llamada en imprimirPreguntas
function imprimir(arrayDificultad){
    var longitud = arrayDificultad.length;
    do{
        var random = Math.floor(Math.random() * longitud);
    } while(numsPregunta.has(random));
    numsPregunta.add(random);
    document.getElementById("pregunta-txt").textContent = arrayDificultad[random].pregunta;
    var divRespuestas = document.getElementById("pantallaRespuestas").querySelectorAll("div");
    for(i = 0; i < divRespuestas.length; i++){
        var respuesta = arrayDificultad[random].respuestas[i];
        respuesta = respuesta.split(".");
        var txtRespuesta = document.getElementById("respuesta" + (i+1));
        txtRespuesta.textContent = respuesta[0];
        animar(txtRespuesta);
        guardar(respuesta, arrayRespuestas);
    }
    animar(document.getElementById("pregunta-txt"));
}

function guardar(elemento, array){
    array.push(elemento);
}

//animación que hace que se desvelen las preguntas y las respuestas una a una
function animar(texto) {
    setTimeout(function () {
        texto.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], { duration: 1000, fill: "both" });
    }, delay);
    delay += 1000;
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
    animarTrampilla(respuestasIncorrectas);
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
function animarTrampilla(trampillas){
    for(i = 0; i < trampillas.length; i++){
        var caja = document.getElementById("trampilla" + (trampillas[i] + 1));
        animacionTrampilla = caja.animate([
        {backgroundColor: "#EEFFFE"},
        {backgroundColor: "rgb(104, 103, 102)"}
    ], {duration: 1000, fill:"both", delay: delayTrampilla});
    delayTrampilla += 2000;
    }
}

// cambiamos de ronda, actualizamos el juego
function update(){
    if(ronda < 8 && presupuesto > 0){
        setTimeout(function(){
            ronda++;
            reset();
            crearContador();
            jugar();
        }, (delayTrampilla + 3000));
        console.log(delayTrampilla + delay);
    }else{
        gameOver();
    }
}
// reseteamos el valor de todas las variables
function reset(){
    tiempo = 90;
    delay = 1000;
    delayTrampilla = 1000;
    resetAnimaciones();
    arrayRespuestas = new Array();
}

//reseteamos las animaciones
function resetAnimaciones(){
    var respuestasIncorrectas = getRespuestasIncorrectas();
    for(i = 0; i < respuestasIncorrectas.length; i++){
        var caja = document.getElementById("trampilla" + (respuestasIncorrectas[i] + 1));
        caja.animate([
            {backgroundColor: "#EEFFFE"},
            {backgroundColor: "rgb(104, 103, 102)"}
        ], {duration: 1000, fill:"both", delay: delayTrampilla, direction: "reverse"});
    }
}

function gameOver(){
    window.location.href = "../html/inicio.html";
}







