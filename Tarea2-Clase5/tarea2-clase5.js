//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const botonEnviar = document.querySelector("#boton-enviar");

document.querySelector("#datos-usuario").onsubmit = function(){
   return false;
}

botonEnviar.onclick = function(){
    const primerNombre = document.querySelector("#primer-nombre").value;
    const segundoNombre = document.querySelector("#segundo-nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const edad = Number(document.querySelector("#edad").value); 


    document.querySelector("#resultado").innerText = `Tus datos son: ${primerNombre} ${segundoNombre} ${apellido} , ${edad} años`

    document.querySelector("h1").innerText = `Bienvenido/a ${primerNombre} ${segundoNombre} ${apellido}`
}
