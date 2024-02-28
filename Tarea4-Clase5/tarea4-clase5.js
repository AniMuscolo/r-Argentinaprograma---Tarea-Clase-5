//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const numeros = []; //para convertir esos numeros en un array

const listaNumeros = document.querySelectorAll("li"); 
for (let i = 0; i < listaNumeros.length; i = i + 1) {
  numeros.push(parseInt(listaNumeros[i].innerText));
}


console.log(numeros);

document.querySelector("#promedio").innerText += calcularPromedio(numeros);
document.querySelector("#numero-menor").innerText += calcularMenor(numeros);
document.querySelector("#numero-mayor").innerText += calcularMayor(numeros);
document.querySelector("#numero-mas-frecuente").innerText += calcularMasFrecuente(numeros);


function calcularPromedio(numeros) {
  let sumaTotal = 0;
  for (let i = 0; i < numeros.length; i= i + 1) {
    sumaTotal = sumaTotal + numeros[i];
  }
  return sumaTotal / numeros.length;
}

function calcularMenor(numeros) {
  let minimo = numeros[0];
  for (let i = 1; i < numeros.length; i=i + 1) {
    if (numeros[i] < minimo) {
      minimo = numeros[i];
    }
  }

  return minimo;
}

function calcularMayor(numeros) {
  let maximo = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }

  return maximo;
}

function calcularMasFrecuente(numeros) {
  let frecuencia = [];
  let mayorFrecuencia = 0;
  let numeroMasFrecuente;

  for (let i = 0; i < numeros.length; i= i + 1) {
    let valorObtenido = numeros[i];
    frecuencia[valorObtenido] = (frecuencia[valorObtenido] || 0) + 1;

    if (frecuencia[valorObtenido] > mayorFrecuencia){
      mayorFrecuencia = frecuencia[valorObtenido];
      numeroMasFrecuente = valorObtenido;
    }
  }

  return numeroMasFrecuente;
}