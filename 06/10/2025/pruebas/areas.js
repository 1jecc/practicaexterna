const inputvalor1 = document.getElementById("valor1");
const inputvalor2 = document.getElementById("valor2");
const inputresultado = document.getElementById("resultado");
const botoncal = document.getElementById("botoncal");
const combofiguras = document.getElementById("figuras");
botoncal.addEventListener("click", e => {
    e.preventDefault();
    let valor1 = parseInt(inputvalor1.value);
    let valor2 = parseInt(inputvalor2.value);
    let figuras = combofiguras.value;
    let resultado;

    switch (figuras){
        case "Triangulo":
            resultado = (valor1 * valor2) /2
            break;
        case "Rectangulo" :
            resultado = valor1 * valor2
            break;
        case "cuadrado":
            resultado = valor1*valor1
            break;
            
    }
    inputresultado.value = resultado;


    
})

