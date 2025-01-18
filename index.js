const txtOp1 = document.getElementById("op1");
const txtOperacion = document.getElementById("operacion");
const txtOp2 = document.getElementById("op2");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

btnCalcular.addEventListener('click', calcular)  //hace que el boton funcione para calcular

function calcular() {
  const operacion = txtOperacion.value
  const op1 = parseFloat (txtOp1.value)  //parseFloat para trabajar con numeros decimales
  const op2 = parseFloat (txtOp2.value)  //parseFloat para trabajar con numeros decimales
  

  if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) 
    && !isNaN(op2)) {
    let resultado;
    switch(operacion){
      case "+":
        resultado = op1 + op2
        break;
      case "-":
        resultado = op1 - op2
        break;
      case "*":
        resultado = op1 * op2
        break;
      case "/":
        resultado = op1 / op2
        break;      
    }
    
    pResultado.style = "color: black"
    pResultado.innerText = "= " + resultado
  } else{
    pResultado.style = "color: red"
    pResultado.innerText = "Calculo Imposible"
  }
}







