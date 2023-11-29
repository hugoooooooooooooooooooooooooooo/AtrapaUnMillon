var boton = document.getElementById('boton');

boton.addEventListener("click", ()=>{
    var nombre = document.getElementById('nombre').value;
    var dificultad = document.getElementById('dificultad').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('dificultad', dificultad);

    if(!nombre || !dificultad){
        mostrarError();
    }else{
        window.location.href = '../html/Juego.html';
    }
})

function mostrarError(){
    if(document.getElementById("error") == undefined){
        var p = document.createElement("p");
        p.id = "error";
        p.innerText = "Debes introducir un nombre de equipo";
        document.querySelector("form").insertBefore(p,document.querySelector("label"));
    }
}

window.addEventListener("load", iniciar);

function iniciar(){
    var random = Math.floor((Math.random() * 3)+ 1);
    var src = "../sonido/MusicaFondo" + random + ".mp3";
    var audio = new Audio(src);
    audio.play();
}