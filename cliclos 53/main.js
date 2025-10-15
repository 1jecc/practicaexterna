
// Recorrer el arreglo para mostrar cada calificacion 
// como un elemento de la lista 


const contenedor = document.getElementById("table-div")
const boton = document.getElementById("boton")
const table = document.getElementById("table")
const tbody = document.getElementById("tbody")

let numeros = 1

boton.addEventListener("click", e => {
    for(let i = 0 ; i < 3 ; i++){
        const item = document.createElement("tr");
        for(let i =0 ; i < 3; i++){
            const ingresar = createElement("td");
            ingresar = Textcontent.numeros++;
            
            item.appendchild(ingresar);
        }

        tbody.appendChild(item)

    }
    table.append(tbody)
    contenedor.appendChild(table);

    
});

    /* for(let i = 0 ; i < calificaciones.length ; i++){
        const item = document.createElement("li");
        item.innerText = calificaciones[i];
        lista.appendChild(item);
    } */
    /* calificaciones.forEach( calif => {
        const item = document.createElement("li");
        item.innerText = calif;
        lista.appendChild(item);
    }); */
/*     let index = 0;
    while(index < calificaciones.length){
        const item= document.createElement("li");
        item.innerText = calificaciones[index];
        lista.appendChild(item);

        index++;
    }
 */


