const botonbuscar = document.getElementById("botonbuscar");
const inputnombre = document.getElementById("nombre");
const id = document.getElementById("id");
const imagen = document.getElementById("imagen");
const sonido = document.getElementById("sonido");
const listahabilidades = document.getElementById("listahabilidades");

async function buscarpokemon() {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + inputnombre.value);
    const infopokemon = await respuesta.json();
    //poner el id en el parrafo llamado id
    id.innerText = infopokemon.id;
    imagen.src = infopokemon.sprites.other.home.front_default;
    sonido.src = infopokemon.cries.latest ; 

    //mostrar habilidades
    listahabilidades.innerHTML = "";
    infopokemon.abilities.forEach(a => {
        const item = document.createElement("li");
        item.innerText = a.ability.name;
        listahabilidades.appendChild(item);
    });


}

botonbuscar.addEventListener("click", (e) => {
    e.preventDefault();
    buscarpokemon();
});
