var nombre = localStorage.getItem('nombre');
var dificultad = localStorage.getItem('dificultad');

var nombreTxt = document.getElementById('nombreTxt');
var dificultadTxt = document.getElementById('dificultadTxt');

nombreTxt.textContent = "Nombre: " + nombre;
dificultadTxt.textContent = "Dificultad: " + dificultad;



// Arrays asociativos para preguntas de dificultad fácil
const dificultadFacil = [
    {
        pregunta: "¿En qué fecha llegó Cristóbal Colón a América?",
        respuestas: {
            a: "12 Octubre 1492 (Respuesta Correcta)",
            b: "8 de Octubre de 1942",
            c: "12 de Noviembre de 1513",
            d: "8 de Octubre 1492"
        }
    },
    {
        pregunta: "¿De qué colores es la bandera de México?",
        respuestas: {
            a: "Verde, blanco y rojo. (Respuesta Correcta)",
            b: "Azul, blanco, verde; Rojo, blanco, Azul;",
            c: "Rojo, blanco, Azul;",
            d: "Naranja, Verde, Blanco"
        }
    },
    {
        pregunta: "¿Quién escribió Hamlet?",
        respuestas: {
            a: "William Shakespeare (Respuesta Correcta)",
            b: "Jane Austen",
            c: "Charles Dickens",
            d: "Edgar Allan Poe"
        }
    },
    {
        pregunta: "¿Quién es el fundador de Facebook?",
        respuestas: {
            a: "Mark Zuckerberg (Respuesta Correcta)",
            b: "Steve Jobs",
            c: "Bill Gates",
            d: "Elon Musk"
        }
    },
    {
        pregunta: "¿Quién enunció el mito de la caverna?",
        respuestas: {
            a: "Platón (Respuesta Correcta)",
            b: "Aristóteles",
            c: "Sócrates",
            d: "Confucio"
        }
    }
];

// Arrays asociativos para preguntas de dificultad media
const dificultadMedia = [
    {
        pregunta: "¿Cuál es la flor nacional de Japón?",
        respuestas: {
            a: "El cerezo. (Respuesta Correcta)",
            b: "Lirio",
            c: "Orquídea",
            d: "Tulipán"
        }
    },
    {
        pregunta: "¿Cuántos años duró la Primera Guerra Mundial?",
        respuestas: {
            a: "4 años. (Respuesta Correcta)",
            b: "6 años",
            c: "8 años",
            d: "10 años"
        }
    },
    {
        pregunta: "¿En qué año comenzó la II Guerra Mundial?",
        respuestas: {
            a: "En 1939. (Respuesta Correcta)",
            b: "1940",
            c: "1935",
            d: "1945"
        }
    },
    {
        pregunta: "¿Quién escribió La Odisea?",
        respuestas: {
            a: "Homero (Respuesta Correcta)",
            b: "Virgilio",
            c: "Ovidio",
            d: "Esquilo"
        }
    },
    {
        pregunta: "¿Cuál fue el primer metal que usó el hombre?",
        respuestas: {
            a: "El cobre. (Respuesta Correcta)",
            b: "Hierro",
            c: "Plata",
            d: "Piedra"
        }
    }
];

// Arrays asociativos para preguntas de dificultad difícil
const dificultadDificil = [
    {
        pregunta: "¿Qué río atraviesa la ciudad de Benarés?",
        respuestas: {
            a: "El Río Ganges. (Respuesta Correcta)",
            b: "El Río Nilo",
            c: "El Río Amazonas",
            d: "El Río Yangtsé"
        }
    },
    {
        pregunta: "¿En qué año cayó el muro de Berlín?",
        respuestas: {
            a: "En 1989. (Respuesta Correcta)",
            b: "En 1991",
            c: "En 1985",
            d: "En 1979"
        }
    },
    {
        pregunta: "¿Quién descubrió la penicilina?",
        respuestas: {
            a: "Alexander Fleming. (Respuesta Correcta)",
            b: "Louis Pasteur",
            c: "Marie Curie",
            d: "Robert Koch"
        }
    },
    {
        pregunta: "¿Cuánto duró la guerra de los 100 años?",
        respuestas: {
            a: "116 años. (Respuesta Correcta)",
            b: "100 años",
            c: "97 años",
            d: "99 años"
        }
    },
    {
        pregunta: "¿Con qué nombre se conoce el escándalo que obligó al presidente estadounidense Richard Nixon a dimitir?",
        respuestas: {
            a: "Watergate. (Respuesta Correcta)",
            b: "El crack del 29",
            c: "La catástrofe",
            d: "Disaster of Nixon"
        }
    },
    {
        pregunta: "¿Cómo se llama el cuadro más famoso de Gustav Klimt?",
        respuestas: {
            a: "El beso (Respuesta Correcta)",
            b: "La Dama Dorada",
            c: "El Árbol de la Vida",
            d: "Retrato de Adele Bloch-Bauer (Respuesta Falsa)"
        }
    },
    {
        pregunta: "¿Cuál es el récord mundial de Usain Bolt en 100 metros lisos?",
        respuestas: {
            a: "9,58 segundos (Respuesta Correcta)",
            b: "9,75 segundos",
            c: "9,45 segundos",
            d: "9,95 segundos"
        }
    },
    {
        pregunta: "¿CUÁL ES LA CAPITAL DE NICARAGUA?",
        respuestas: {
            a: "Managua (Respuesta Correcta)",
            b: "Nicaragua",
            c: "San Salvador",
            d: "Tegucigalpa"
        }
    },
    {
        pregunta: "¿DÓNDE NACIÓ VICENT VAN GOGH?",
        respuestas: {
            a: "Zundert (Respuesta Correcta)",
            b: "Utrecht",
            c: "Groninga",
            d: "Ámsterdam"
        }
    },
    {
        pregunta: "¿CUÁNDO COMENZÓ LA EDAD CONTEMPORÁNEA?",
        respuestas: {
            a: "En 1789 (Respuesta Correcta)",
            b: "En 1800",
            c: "En 1750",
            d: "En 1825"
        }
    },
    {
        pregunta: "¿QUÉ TERRITORIO SE INDEPENDIZÓ DE SERBIA EN 2008 SIN QUE SE HAYA AÚN RECONOCIDO DICHA INDEPENDENCIA POR LA TOTALIDAD DE PAÍSES?",
        respuestas: {
            a: "Kosovo (Respuesta Correcta)",
            b: "Montenegro",
            c: "Bosnia y Herzegovina",
            d: "Macedonia del Norte"
        }
    },
    {
        pregunta: "¿EN QUÉ AÑO COMENZÓ EL SEGUNDO REICH EN ALEMANIA?",
        respuestas: {
            a: "En 1871 (Respuesta Correcta)",
            b: "En 1900",
            c: "En 1850",
            d: "En 1920"
        }
    }
];
