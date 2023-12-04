var boton = document.getElementById('boton');

//Funcion del boton para click en enviar
boton.addEventListener("click", enviarFormulario);


//Funcion que envia el formulario
function enviarFormulario(){
    var nombre = document.getElementById('nombre').value;
    var dificultad = document.getElementById('dificultad').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('dificultad', dificultad);

    if(!nombre || !dificultad){
        mostrarError();
    }else{
        window.location.href = '../html/Juego.html';
    }
}

//Funcion para que si se presiona el boton enter funcione como un click en el formulario
window.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        e.preventDefault();
        enviarFormulario();
    }
});


//Funcion que hace visible un p con un mensaje de error si hay campos sin rellenar
function mostrarError(){
    if(document.getElementById("error") == undefined){
        var p = document.createElement("p");
        p.id = "error";
        p.innerText = "Debes introducir un nombre de equipo";
        document.querySelector("form").insertBefore(p,document.querySelector("label"));
    }
}

window.addEventListener("load", iniciarAudio);


//Inicia el audio en cuanto se abre la pagina(Solo disponible en internet explorer)
function iniciarAudio(){
    var random = Math.floor((Math.random() * 3)+ 1);
    var src = "../sonido/MusicaFondoInicio" + random + ".mp3";
    var audio = new Audio(src);
    audio.play();
}