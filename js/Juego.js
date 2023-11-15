// Mezclar las respuestas para cada nivel de dificultad
const dificultadFacil = [
    {
        pregunta: "¿En qué fecha llegó Cristóbal Colón a América?",
        respuestas: {
            0: "8 de Octubre 1492",
            1: "12 Octubre 1492. (Respuesta Correcta)",
            2: "12 de Noviembre de 1513",
            3: "8 de Octubre de 1942"
        }
    },
    {
        pregunta: "¿De qué colores es la bandera de México?",
        respuestas: {
            0: "Azul, blanco, verde",
            1: "Rojo, blanco, Azul",
            2: "Verde, blanco y rojo. (Respuesta Correcta)",
            3: "Naranja, Verde, Blanco"
        }
    },
    {
        pregunta: "¿Quién escribió Hamlet?",
        respuestas: {
            0: "Charles Dickens",
            1: "Jane Austen",
            2: "William Shakespeare. (Respuesta Correcta)",
            3: "Edgar Allan Poe"
        }
    },
    {
        pregunta: "¿Quién es el fundador de Facebook?",
        respuestas: {
            0: "Steve Jobs",
            1: "Elon Musk",
            2: "Mark Zuckerberg.(Respuesta Correcta)",
            3: "Bill Gates"
        }
    },
    {
        pregunta: "¿Quién enunció el mito de la caverna?",
        respuestas: {
            0: "Confucio",
            1: "Sócrates",
            2: "Platón. (Respuesta Correcta)",
            3: "Aristóteles"
        }
    }
];

// Arrays asociativos para preguntas de dificultad media
const dificultadMedia = [
    {
        pregunta: "¿Cuál es la flor nacional de Japón?",
        respuestas: {
            0: "Orquídea",
            1: "Lirio",
            2: "El cerezo. (Respuesta Correcta)",
            3: "Tulipán"
        }
    },
    {
        pregunta: "¿Cuántos años duró la Primera Guerra Mundial?",
        respuestas: {
            0: "10 años",
            1: "8 años",
            2: "6 años",
            3: "4 años. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿En qué año comenzó la II Guerra Mundial?",
        respuestas: {
            0: "1940",
            1: "1945",
            2: "1935",
            3: "En 1939. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Quién escribió La Odisea?",
        respuestas: {
            0: "Esquilo",
            1: "Virgilio",
            2: "Homero. (Respuesta Correcta)",
            3: "Ovidio"
        }
    },
    {
        pregunta: "¿Cuál fue el primer metal que usó el hombre?",
        respuestas: {
            0: "Plata",
            1: "Piedra",
            2: "El cobre. (Respuesta Correcta)",
            3: "Hierro"
        }
    }
];

// Arrays asociativos para preguntas de dificultad difícil
const dificultadDificil = [
    {
        pregunta: "¿Qué río atraviesa la ciudad de Benarés?",
        respuestas: {
            0: "El Río Nilo",
            1: "El Río Yangtsé",
            2: "El Río Amazonas",
            3: "El Río Ganges. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿En qué año cayó el muro de Berlín?",
        respuestas: {
            0: "En 1991",
            1: "En 1979",
            2: "En 1985",
            3: "En 1989. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Quién descubrió la penicilina?",
        respuestas: {
            0: "Marie Curie",
            1: "Robert Koch",
            2: "Louis Pasteur",
            3: "Alexander Fleming. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Cuánto duró la guerra de los 100 años?",
        respuestas: {
            0: "99 años",
            1: "97 años",
            2: "116 años. (Respuesta Correcta)",
            3: "100 años"
        }
    },
    {
        pregunta: "¿Con qué nombre se conoce el escándalo que obligó al presidente estadounidense Richard Nixon a dimitir?",
        respuestas: {
            0: "Disaster of Nixon",
            1: "La catástrofe",
            2: "El crack del 29",
            3: "Watergate. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Cómo se llama el cuadro más famoso de Gustav Klimt?",
        respuestas: {
            0: "La Dama Dorada",
            1: "El Árbol de la Vida",
            2: "Retrato de Adele Bloch-Bauer",
            3: "El beso. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Cuál es el récord mundial de Usain Bolt en 100 metros lisos?",
        respuestas: {
            0: "9,75 segundos",
            1: "9,45 segundos",
            2: "9,95 segundos",
            3: "9,58 segundos. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿CUÁL ES LA CAPITAL DE NICARAGUA?",
        respuestas: {
            0: "Nicaragua",
            1: "Tegucigalpa",
            2: "San Salvador",
            3: "Managua. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿DÓNDE NACIÓ VICENT VAN GOGH?",
        respuestas: {
            0: "Utrecht",
            1: "Groninga",
            2: "Ámsterdam",
            3: "Zundert. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿CUÁNDO COMENZÓ LA EDAD CONTEMPORÁNEA?",
        respuestas: {
            0: "En 1800",
            1: "En 1750",
            2: "En 1825",
            3: "En 1789. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿QUÉ TERRITORIO SE INDEPENDIZÓ DE SERBIA EN 2008 SIN QUE SE HAYA AÚN RECONOCIDO DICHA INDEPENDENCIA POR LA TOTALIDAD DE PAÍSES?",
        respuestas: {
            0: "Montenegro",
            1: "Bosnia y Herzegovina",
            2: "Macedonia del Norte",
            3: "Kosovo. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿EN QUÉ AÑO COMENZÓ EL SEGUNDO REICH EN ALEMANIA?",
        respuestas: {
            0: "En 1900",
            1: "En 1850",
            2: "En 1920",
            3: "En 1871. (Respuesta Correcta)"
        }
    }
];

var nombre = localStorage.getItem('nombre');
var dificultad = localStorage.getItem('dificultad');
var tiempo = 89;
var ronda = 1;
presupuesto = "200k";

window.addEventListener("load", jugar);

function jugar(){
    do{
        rellenarDatos(nombre, dificultad);
        arrancarContador();
        imprimirPreguntas(dificultad);
        ronda++;
    }while(ronda <= 8 || presupuesto == 0);
    // let i=3;
    // const interval = setInterval(() =>{
    //     i--;
    //     console.log(i);
    //     if(i == 0){
    //         arrancarContador();
    //     }
    // }, 1000)
}

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
        dineroTxt.textContent = "Dinero: " + presupuesto;
        info.appendChild(nombreTxt);
        info.appendChild(dificultadTxt);
        info.appendChild(dineroTxt);
    }
}

function saltar(){
    tiempo = 0;
}

function arrancarContador(){
    const intervalo = setInterval(() =>{
        document.getElementById("contador").innerHTML = "<p> " + tiempo + "</p>";
        tiempo--;
        if(tiempo < 0){
            clearInterval(intervalo);
            alert("!Te has quedado sin tiempo!");
        }
    }, 1000);
}

function imprimirPreguntas(dificultad){
    if(dificultad == "Facil"){
        if(ronda <= 5){
            imprimir("Facil");
        }else{
            imprimir("Media");
        }
    } else if (dificultad== "Media"){
        if(ronda <= 3){
            imprimir("Facil");
        }else if (ronda <= 6){
            imprimir("Media");
        } else{
            imprimir("Dificil");
        }
    } else{
        if(ronda <= 1){
            imprimir("Facil");
        }else if (ronda <= 4){
            imprimir("Media");
        } else{
            imprimir("Dificil");
        }
    }
}

function imprimir(dificultad){
    var arrayDificultad;
    if(dificultad == "Facil"){
        arrayDificultad = dificultadFacil;
    } else if (dificultad == "Media"){
        arrayDificultad = dificultadMedia;
    } else{
        arrayDificultad = dificultadDificil;
    }
    var longitud = arrayDificultad.length;
    var numsPregunta = new Set();
    do{
        var random = Math.floor(Math.random() * longitud);
    } while(numsPregunta.has(random));
    numsPregunta.add(random);
    document.getElementById("pregunta-txt").textContent = arrayDificultad[random].pregunta;
    var respuestas = document.getElementsByClassName("respuesta");
    for(i = 0; i < respuestas.length; i++){
        respuesta = arrayDificultad[random].respuestas[i].split(".");
        document.getElementById("respuesta" + (i+1)).textContent = respuesta[0];
    }
}




