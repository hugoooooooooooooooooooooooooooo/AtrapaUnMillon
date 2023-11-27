// Mezclar las respuestas para cada nivel de dificultad
const dificultadFacil = [
    {
        pregunta: "¿Cuál es el metal más abundante en la corteza terrestre?",
        respuestas: {
            0: "Oro",
            1: "Hierro. (Respuesta Correcta)",
            2: "Plata",
            3: "Cobre"
        }
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuestas: {
            0: "Amazonas. (Respuesta Correcta)",
            1: "Nilo",
            2: "Yangtsé",
            3: "Misisipi"
        }
    },
    {
        pregunta: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
        respuestas: {
            0: "Júpiter",
            1: "Marte. (Respuesta Correcta)",
            2: "Venus",
            3: "Saturno"
        }
    },
    {
        pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
        respuestas: {
            0: "Miguel de Cervantes. (Respuesta Correcta)",
            1: "Gabriel García Márquez",
            2: "William Shakespeare",
            3: "Franz Kafka"
        }
    },
    {
        pregunta: "¿Cuántos continentes hay en el mundo?",
        respuestas: {
            0: "5",
            1: "6",
            2: "7. (Respuesta Correcta)",
            3: "8"
        }
    },
    {
        pregunta: "¿Cuál es el océano más grande del planeta?",
        respuestas: {
            0: "Atlántico",
            1: "Índico",
            2: "Pacífico. (Respuesta Correcta)",
            3: "Antártico"
        }
    },
    {
        pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
        respuestas: {
            0: "1914. (Respuesta Correcta)",
            1: "1917",
            2: "1920",
            3: "1930"
        }
    },
    {
        pregunta: "¿Cuál es la capital de Australia?",
        respuestas: {
            0: "Canberra. (Respuesta Correcta)",
            1: "Sídney",
            2: "Melbourne",
            3: "Brisbane"
        }
    },
    {
        pregunta: "¿Cuál es el componente principal del aire que respiramos?",
        respuestas: {
            0: "Nitrógeno",
            1: "Oxígeno. (Respuesta Correcta)",
            2: "Dióxido de carbono",
            3: "Argón"
        }
    },
    {
        pregunta: "¿Cuál es la montaña más alta del mundo?",
        respuestas: {
            0: "Everest. (Respuesta Correcta)",
            1: "Kilimanjaro",
            2: "Aconcagua",
            3: "Mont Blanc"
        }
    },
    {
        pregunta: "¿En qué país se encuentra la Torre Eiffel?",
        respuestas: {
            0: "Italia",
            1: "Francia. (Respuesta Correcta)",
            2: "España",
            3: "Alemania"
        }
    },
    {
        pregunta: "¿Cuál es el país más grande del mundo en términos de territorio?",
        respuestas: {
            0: "Rusia. (Respuesta Correcta)",
            1: "Canadá",
            2: "China",
            3: "Estados Unidos"
        }
    },
    {
        pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
        respuestas: {
            0: "Thomas Jefferson",
            1: "George Washington. (Respuesta Correcta)",
            2: "John Adams",
            3: "Abraham Lincoln"
        }
    },
    {
        pregunta: "¿Cuál es la capital de Japón?",
        respuestas: {
            0: "Pekín",
            1: "Seúl",
            2: "Osaka",
            3: "Tokio. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        respuestas: {
            0: "Leonardo da Vinci. (Respuesta Correcta)",
            1: "Pablo Picasso",
            2: "Vincent van Gogh",
            3: "Michelangelo"
        }
    },
    {
        pregunta: "¿Cuál es el país conocido como 'la tierra de los canguros'?",
        respuestas: {
            0: "Nueva Zelanda",
            1: "Sudáfrica",
            2: "Australia. (Respuesta Correcta)",
            3: "Argentina"
        }
    },
    {
        pregunta: "¿Qué gas se libera durante la fotosíntesis de las plantas?",
        respuestas: {
            0: "Oxígeno. (Respuesta Correcta)",
            1: "Dióxido de carbono",
            2: "Nitrógeno",
            3: "Hidrógeno"
        }
    },
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
        pregunta: "¿En qué año se inventó la imprenta?",
        respuestas: {
            0: "1439. (Respuesta Correcta)",
            1: "1505",
            2: "1580",
            3: "1623"
        }
    },
    {
        pregunta: "¿Qué científico propuso la teoría heliocéntrica?",
        respuestas: {
            0: "Galileo Galilei",
            1: "Johannes Kepler",
            2: "Isaac Newton",
            3: "Nicolás Copérnico. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Cuál es el componente principal del gas natural?",
        respuestas: {
            0: "Oxígeno",
            1: "Metano. (Respuesta Correcta)",
            2: "Dióxido de carbono",
            3: "Hidrógeno"
        }
    },
    {
        pregunta: "¿Cuántas estrellas tiene la bandera de Estados Unidos?",
        respuestas: {
            0: "48",
            1: "50. (Respuesta Correcta)",
            2: "52",
            3: "45"
        }
    },
    {
        pregunta: "¿Cuál es el proceso por el cual las plantas producen su propio alimento?",
        respuestas: {
            0: "Respiración",
            1: "Fotosíntesis. (Respuesta Correcta)",
            2: "Digestión",
            3: "Excreción"
        }
    },
    {
        pregunta: "¿En qué año se celebró la Revolución Rusa?",
        respuestas: {
            0: "1917. (Respuesta Correcta)",
            1: "1923",
            2: "1905",
            3: "1932"
        }
    },
    {
        pregunta: "¿Cuál es el río más largo de Europa?",
        respuestas: {
            0: "Danubio",
            1: "Volga. (Respuesta Correcta)",
            2: "Loira",
            3: "Támesis"
        }
    },
    {
        pregunta: "¿Quién fue el presidente de Estados Unidos durante la Guerra Civil Americana?",
        respuestas: {
            0: "Abraham Lincoln. (Respuesta Correcta)",
            1: "George Washington",
            2: "Thomas Jefferson",
            3: "Andrew Jackson"
        }
    },
    {
        pregunta: "¿Cuál es el neurotransmisor asociado al placer y la recompensa en el cerebro?",
        respuestas: {
            0: "Dopamina. (Respuesta Correcta)",
            1: "Serotonina",
            2: "Acetilcolina",
            3: "GABA"
        }
    },
    {
        pregunta: "¿Cuál es el elemento químico más abundante en el universo?",
        respuestas: {
            0: "Oxígeno",
            1: "Hidrógeno. (Respuesta Correcta)",
            2: "Helio",
            3: "Carbono"
        }
    },
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
            3: "1945."
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
        pregunta: "¿Cuál es el compuesto químico responsable del olor característico de la canela?",
        respuestas: {
            0: "Cumarina. (Respuesta Correcta)",
            1: "Ácido cinámico",
            2: "Eugenol",
            3: "Safrol"
        }
    },
    {
        pregunta: "¿En qué año se aprobó la Declaración Universal de Derechos Humanos?",
        respuestas: {
            0: "1948. (Respuesta Correcta)",
            1: "1955",
            2: "1963",
            3: "1971"
        }
    },
    {
        pregunta: "¿Cuál es la constante matemática que se representa con la letra 'e' y es aproximadamente igual a 2.71828?",
        respuestas: {
            0: "Pi",
            1: "Euler's number. (Respuesta Correcta)",
            2: "Beta",
            3: "Gamma"
        }
    },
    {
        pregunta: "¿Cuál es el elemento químico con el número atómico 92?",
        respuestas: {
            0: "Uranio. (Respuesta Correcta)",
            1: "Plutonio",
            2: "Neptunio",
            3: "Torio"
        }
    },
    {
        pregunta: "¿En qué año se llevó a cabo la Revolución Industrial en Inglaterra?",
        respuestas: {
            0: "1700",
            1: "1760. (Respuesta Correcta)",
            2: "1825",
            3: "1888"
        }
    },
    {
        pregunta: "¿Cuál es el proceso químico por el cual las sustancias se descomponen en elementos más simples mediante la aplicación de calor?",
        respuestas: {
            0: "Fotólisis",
            1: "Electrólisis",
            2: "Pirólisis. (Respuesta Correcta)",
            3: "Catálisis"
        }
    },
    {
        pregunta: "¿Quién desarrolló la teoría cuántica?",
        respuestas: {
            0: "Niels Bohr",
            1: "Werner Heisenberg",
            2: "Max Planck",
            3: "Albert Einstein. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿Cuál es la velocidad de escape necesaria para que un objeto abandone la gravedad de la Tierra?",
        respuestas: {
            0: "11 km/s",
            1: "15 km/s",
            2: "20 km/s. (Respuesta Correcta)",
            3: "25 km/s"
        }
    },
    {
        pregunta: "¿Cuál es el fenómeno óptico en el cual la luz se descompone en sus colores componentes al pasar a través de un prisma?",
        respuestas: {
            0: "Reflexión",
            1: "Refracción",
            2: "Difracción",
            3: "Dispersión. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿En qué año se publicó 'El origen de las especies' de Charles Darwin?",
        respuestas: {
            0: "1859. (Respuesta Correcta)",
            1: "1875",
            2: "1900",
            3: "1922"
        }
    },
    {
        pregunta: "¿Cuál es el proceso químico responsable de la producción de ATP en las células?",
        respuestas: {
            0: "Glicólisis",
            1: "Ciclo de Krebs",
            2: "Fosforilación oxidativa. (Respuesta Correcta)",
            3: "Fermentación"
        }
    },
    {
        pregunta: "¿Quién desarrolló la teoría de la evolución por selección natural junto con Charles Darwin?",
        respuestas: {
            0: "Alfred Russel Wallace. (Respuesta Correcta)",
            1: "Gregor Mendel",
            2: "Jean-Baptiste Lamarck",
            3: "Thomas Malthus"
        }
    },
    {
        pregunta: "¿Cuál es el componente principal del petróleo crudo?",
        respuestas: {
            0: "Metano",
            1: "Hexano",
            2: "Hidrocarburos. (Respuesta Correcta)",
            3: "Ácido acético"
        }
    },
    {
        pregunta: "¿Cuál es la unidad de medida de la resistencia eléctrica en el Sistema Internacional?",
        respuestas: {
            0: "Ohm. (Respuesta Correcta)",
            1: "Voltio",
            2: "Amperio",
            3: "Watt"
        }
    },
    {
        pregunta: "¿Cuál es la relación matemática que describe la propagación de ondas en una cuerda tensa?",
        respuestas: {
            0: "Ecuación de onda",
            1: "Ecuación de calor",
            2: "Ecuación de Schrödinger",
            3: "Ecuación de onda de D'Alembert. (Respuesta Correcta)"
        }
    },
    {
        pregunta: "¿En qué año se descubrió el electrón?",
        respuestas: {
            0: "1897. (Respuesta Correcta)",
            1: "1905",
            2: "1912",
            3: "1920"
        }
    },
    {
        pregunta: "¿Cuál es la masa aproximada de la Tierra en kilogramos?",
        respuestas: {
            0: "5.97 x 10^24 kg. (Respuesta Correcta)",
            1: "3.14 x 10^25 kg",
            2: "1.82 x 10^23 kg",
            3: "7.26 x 10^22 kg"
        }
    },
    {
        pregunta: "¿Quién propuso la teoría de la deriva continental?",
        respuestas: {
            0: "Alfred Wegener. (Respuesta Correcta)",
            1: "Charles Lyell",
            2: "John Dalton",
            3: "Arthur Holmes"
        }
    },
    {
        pregunta: "¿Cuál es el proceso por el cual se forma el granizo en las tormentas?",
        respuestas: {
            0: "Sublimación",
            1: "Fusión",
            2: "Coalescencia",
            3: "Acreción. (Respuesta Correcta)"
        }
    },
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
            3: "En 1991."
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
            3: "La Dama Dorada."
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

// Esta funcion pasas por parametro el id del billete que quieras eliminar y lo elimina, tambie recibe un booleano por si quieres eliminar los duplicados
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

function generarRandom(set, maximo){
    do{
        var random = Math.floor(Math.random() * maximo);
    } while(set.has(random));
    set.add(random);
    return random;
}

function guardar(elemento, array){
    array.push(elemento);
}

//animación que hace que se desvelen las preguntas y las respuestas una a una
function cambiarOpacity(elemento, direccion, delayAnimacion, diferencia) {
    elemento.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], { duration: 1000, fill: "both", delay: delayAnimacion, direction: direccion});
    if(delayAnimacion != 0){
        delayAnimacion += diferencia;
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

function setPresupuesto(billete){
    if(billete.className == "duplicado10"){
        contadorPresupuesto += 10;
        presupuestoActual = contadorPresupuesto;
    }else{
        console.log(presupuestoActual);
        presupuestoActual = presupuestoActual;
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
        console.log(caja);
        caja.animate([
            {backgroundColor: "#EEFFFE"},
            {backgroundColor: "rgb(104, 103, 102)"}
        ], {duration: 1000, fill:"both", delay: delay, direction: direccion});
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
        }else{
            gameOver();
        }
    }, (delayTrampilla + 3000));
}

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