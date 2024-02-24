//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


const botonCalcular = document.querySelector("#calcular-duracion-total");

document.querySelector("#videos-duracion").onsubmit = function(){
    return false;
 }

let totalHoras = 0;
let totalMinutos = 0;
let totalSegundos = 0;

botonCalcular.onclick = function(){

    const horasVideo = Number(document.querySelector("#duracion-horas").value);
    const minutosVideo = Number(document.querySelector("#duracion-minutos").value);
    const segundosVideo = Number(document.querySelector("#duracion-segundos").value);


    totalHoras = horasVideo + totalHoras;
    totalMinutos = minutosVideo + totalMinutos;
    totalSegundos = segundosVideo + totalSegundos;
    

    totalHoras = totalHoras + parseInt(totalMinutos / 60);
    totalMinutos %= 60;
    totalMinutos = totalMinutos + parseInt(totalSegundos / 60);
    totalSegundos %= 60;
    

    document.querySelector("#duracion-total").innerText = `La duración total del curso r/Argentina programa es de ${totalHoras} horas, ${totalMinutos} minutos, y ${totalSegundos} segundos`;
    
    return false;
}    





