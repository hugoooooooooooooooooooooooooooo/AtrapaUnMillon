window.addEventListener("load", mostrarTodo);

function mostrarTodo() {
    var jugadoresGuardados = localStorage.getItem("jugadores");
    var jugadores = JSON.parse(jugadoresGuardados);
    var ranking = document.getElementById("ranking");

    if(jugadores[jugadores.length -1].dinero > 0){
        document.getElementById("resultado").textContent = "¡¡Enhorabuena has ganado!!, te llevas " + jugadores[jugadores.length -1].dinero + " mil euros.";
    }else{
        document.getElementById("resultado").textContent = "Vaya.., has perdido. ¡Intentalo de nuevo!";
    }

    if(jugadores.length > 0){
        jugadores.sort(function(a, b) {
            if (b.dinero - a.dinero !== 0) {
                return b.dinero - a.dinero;
            }
        });

        for(var i = 0; i < jugadores.length;i++){
            var jugador = jugadores[i];
            var jugadorElement = document.createElement("div");
            jugadorElement.textContent = `Nombre: ${jugador.nombre}, Dificultad: ${jugador.dificultad}, Dinero: ${jugador.dinero}K`;
            ranking.appendChild(jugadorElement);
        }
    }else{
        console.log("No hay jugadores");
    }

    document.getElementById("volverJugar").addEventListener("click",()=>{
        window.location.href = "../html/Inicio.html";
    });
};