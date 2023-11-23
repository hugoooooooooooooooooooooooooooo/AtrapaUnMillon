window.addEventListener("load", mostrarTodo);

var jugadores = [];

function mostrarTodo() {
    var dineroActual = localStorage.getItem("dinero");
    var nombreActual = localStorage.getItem("nombre");
    var dificultadActual = localStorage.getItem("dificultad");

    if (dineroActual > 0) {
        document.getElementById("resultado").textContent = `¡¡¡Enhorabuena!!!, te has llevado ${dineroActual}`;
    } else {
        document.getElementById("resultado").textContent = '¡¡¡Lo siento!!!, has perdido';
    }

    var jugadorActual = {
        "nombre": nombreActual,
        "dificultad": dificultadActual,
        "dinero": dineroActual
    };


    jugadores.push(jugadorActual);

    mostrarRanking();
}

function mostrarRanking() {
    var rankingElement = document.getElementById("ranking");
    rankingElement.textContent = ''; 

    for (var i = 0; i < jugadores.length; i++) {
        var jugador = jugadores[i];

        var cadaJugador = document.createElement('li');
        cadaJugador.textContent = `Nombre: ${jugador.nombre}, Dificultad: ${jugador.dificultad}, Dinero: ${jugador.dinero}`;

        rankingElement.appendChild(cadaJugador);
    }
}
