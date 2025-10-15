const inputvalor1 = document.getElementById("valor1");
const inputvalor2 = document.getElementById("valor2");
const inputresultado = document.getElementById("resultado");
const botoncal = document.getElementById("botoncal");
const combofiguras = document.getElementById("figuras");
botoncal.addEventListener("click", e => {
    e.preventDefault();
    //variables 
    let valor1 = parseInt(inputvalor1.value);
    let valor2 = parseInt(inputvalor2.valuer);
    let figuras = parseInt(combofiguras.value);
    let resultado;

    switch (figuras){
        case "Triangulo":
            valor1*valor2/2
            inputresultado.value = resultado;

            break;
        case "Rectangulo" :
            valor1*valor2
            inputresultado.value = resultado;

            break;
        case "cuadrado":
            valor1*valor2
            inputresultado.value = resultado;

            break;
            
    }

    
})

