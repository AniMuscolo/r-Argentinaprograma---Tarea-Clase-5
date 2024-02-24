//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>
//ver tarea en archivo.html

function calcularSalarioMensual(salarioAnual){
  const CANT_MESES_POR_ANIO = 12;
  return salarioAnual / CANT_MESES_POR_ANIO;
}

const calculoSalarioMensual = document.querySelector("#calcular-salario-mensual");

calculoSalarioMensual.onclick = function(){
  const salarioAnual = document.querySelector("#salario-anual").value;
  const salarioMensual = calcularSalarioMensual(salarioAnual); 
  document.querySelector("#salario-mensual").value = salarioMensual;


  return false;
}

