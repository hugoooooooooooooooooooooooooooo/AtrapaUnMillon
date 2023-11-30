window.addEventListener("load", mostrarTodo);

function mostrarTodo() {
    var jugadoresGuardados = localStorage.getItem("jugadores");
    var jugadores = JSON.parse(jugadoresGuardados);
    var rankingFacil = document.getElementById("facil");
    var rankingMedio = document.getElementById("media");
    var rankingDificil = document.getElementById("dificil");

    //Da la enhorabuena si te has llevado algo de dinero, si no te dice que has perdido
    if(jugadores[jugadores.length -1].dinero > 0){
        document.getElementById("resultado").textContent = "¡¡Enhorabuena has ganado!!, te llevas " + jugadores[jugadores.length -1].dinero + " mil euros.";
        new Audio("../sonido/victoria.mp3").play();
        document.body.style.backgroundImage = 'url("../img/confeti.png")';
        document.body.style.backgroundSize = 'cover';
    }else{
        document.getElementById("resultado").textContent = "Vaya.., has perdido. ¡Intentalo de nuevo!";
        new Audio("../sonido/derrota.wav").play();
        document.body.style.backgroundColor = "lightsteelblue";
    }

    //si hay jugadores muestra el ranking    
    if(jugadores.length > 0){
        ordenarArray();

        for(var i = 0; i < jugadores.length;i++){
            var jugador = jugadores[i];
            var filaTitulos = document.createElement("tr");
            var nombreJugador = document.createElement("td");
            var dineroJugador = document.createElement("td");
            nombreJugador.textContent = jugador.nombre;
            dineroJugador.textContent = jugador.dinero + " k";
            filaTitulos.appendChild(nombreJugador);
            filaTitulos.appendChild(dineroJugador);


            if(jugador.dificultad.toLowerCase() == "facil"){
                document.getElementById("facil").appendChild(filaTitulos);
            }else if(jugador.dificultad.toLowerCase() == "media"){
                document.getElementById("media").appendChild(filaTitulos);
            }else if(jugador.dificultad.toLowerCase() == "dificil"){
                document.getElementById("dificil").appendChild(filaTitulos);
            }else{
                console.log("No esta metiendo al jugador en ningun tipo de ranking");
            }
        }
    }else{
        console.log("No hay jugadores");
    }

    function ordenarArray() {
        var n = jugadores.length;
        var aux;
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - i - 1; j++) {
                if (jugadores[j + 1].dinero > jugadores[j].dinero) {
                   
                    aux = jugadores[j + 1];
                    jugadores[j + 1] = jugadores[j];
                    jugadores[j] = aux;
                }
            }
        }
    }    

    //boton para volver a jugar
    document.getElementById("volverJugar").addEventListener("click",()=>{
        window.location.href = "../html/Inicio.html";
    });

    //boton para borrar el localStorage
    document.getElementById("resetStorage").addEventListener("click",()=>{
        localStorage.clear();
        alert("Se han borrado los datos");
    });
};
