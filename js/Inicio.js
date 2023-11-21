var boton = document.getElementById('boton');

boton.addEventListener("click", ()=>{
    var nombre = document.getElementById('nombre').value;
    var dificultad = document.getElementById('dificultad').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('dificultad', dificultad);

    if(!nombre || !dificultad){
        alert("Es obligatorio seleccionar un nombre y una dificultad");
    }else{
        window.location.href = '../html/Juego.html';
    }
})