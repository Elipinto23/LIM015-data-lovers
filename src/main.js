import data from './data/pokemon/pokemon.js';
//
import { filterData } from './data.js';

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click", function() {
    menu.classList.toggle("mostrar");

});

const subMenuBtn1 = document.querySelectorAll(".submenu1-btn1");
for (let i = 0; i < subMenuBtn1.length; i++) {
    subMenuBtn1[i].addEventListener("click", function() {
        if (window.innerWidth < 1024) {
            const subMenu = this.nextElementSibling; /* definir constante que me permita pasar al otro item*/
            const height = subMenu.scrollheight;
            if (subMenu.classList.contains("desplegar")) {
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }

    });
}
const subMenuBtn2 = document.querySelectorAll(".submenu1-btn2");
const subMenuBtn3 = document.querySelectorAll(".submenu1-btn3");
const subMenuBtn4 = document.querySelectorAll(".submenu1-btn4");

//la funcion onload espera que cargue todo DOM
window.onload = function() {

    let pokemones = filterData(data.pokemon, ''); //ingresamos a la data
    mostrarPokemones(pokemones); //llamamos la funcnion mostrarPokemones

}

function mostrarPokemones(data) {
    const parent = document.getElementById('listaPokemon'); // Recuperar tag padre

    for (let i = 0; i < data.length; i++) {
        //variables que almacena los datos que queremos que se muestre
        let url = data[i].img;
        let name = data[i].name;
        let number = data[i].num;

        //etiqueta padre figure
        let elementFigure = document.createElement("figure"); // Crear tag Figure
        elementFigure.classList.add("fotoPokemon"); // Agregando una clase a tag Figure

        let elementP = document.createElement("p"); //Crear tag P
        elementP.classList.add("num"); // Agregando una clase a tag P
        elementP.textContent = number; // Agregando contenido a tag P
        elementFigure.appendChild(elementP); //Agregando tag al padre Figure

        let elementimg = document.createElement("img");
        elementimg.src = url;
        elementFigure.appendChild(elementimg);

        let elemetfigcaption = document.createElement("figcaption");
        elemetfigcaption.textContent = name;
        elementFigure.appendChild(elemetfigcaption);

        let elementA = document.createElement("a");
        elementA.classList.add("show");
        //elementA.href = "#";
        elementA.classList.add("verMas");
        elementA.textContent = " Ver +";
        elementA.addEventListener("click", () => {
            verFichaTecnica(data[i]);
        });
        elemetfigcaption.appendChild(elementA);
        parent.appendChild(elementFigure); //Agregando tag al padre Article
    }
}

// funcion para el boton ver +
function verFichaTecnica(datapokemon) {
    console.log(datapokemon);
    // console.log(datapokemon.resistant);
    // datapokemon.resistant.forEach(r => {
    //     console.log(r);
    // });

    document.getElementById("listaPokemon").style.display = "none";
    document.getElementById("fichaTecnicaPokemon").style.display = "block";

    limpiarContenido(document.getElementById("fichaTecnicaPokemon"));

    const fichaTecnica = document.getElementById('fichaTecnicaPokemon');

    let datosPokemon = document.createElement("section");
    datosPokemon.classList.add("datosPokemon");
    fichaTecnica.appendChild(datosPokemon);

    let nombrePokemon = document.createElement("h2");
    nombrePokemon.classList.add("nombrePokemon");
    nombrePokemon.textContent = datapokemon.name;
    datosPokemon.appendChild(nombrePokemon);

    let numeroPokemon = document.createElement("h2");
    numeroPokemon.textContent = datapokemon.num;
    numeroPokemon.classList.add("numeroPokemon");
    datosPokemon.appendChild(numeroPokemon);

    let imagenPokemon = document.createElement("section");
    imagenPokemon.classList.add("imagenPokemon");
    fichaTecnica.appendChild(imagenPokemon);

    let imagen = document.createElement("img");
    imagen.src = datapokemon.img;
    imagenPokemon.appendChild(imagen);



    let botonSalir = document.createElement("button");
    botonSalir.textContent = "Salir";
    botonSalir.classList.add("btnSalir");
    botonSalir.addEventListener("click", () => {
        document.getElementById("listaPokemon").style.display = "block";
        document.getElementById("fichaTecnicaPokemon").style.display = "none";
    });
    fichaTecnica.appendChild(botonSalir);
}

// limpiar contenidos
function limpiarContenido(limpiar) {
    while (limpiar.firstChild) {
        limpiar.removeChild(limpiar.firstChild);
    }
}