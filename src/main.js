import data from "./data/pokemon/pokemon.js";

import {
  filtrarData,
  searchPokemon,
  ordenarPokemon,
  calculoEstadistico,
  calculoEstadPeso,
  calcularEstadVida,
  buscarPorRegion,
} from "./data.js";

// Importando Graficos a usar
//eslint-disable-next-line
google.charts.load("current", { packages: ["corechart", "bar"] }); //eslint-disable-line

/*menu desplegable*/
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

/*funcionalidad de cada elelemto*/
btnMenu.addEventListener("click", function () {
  menu.classList.toggle("mostrar");
});

window.onload = function () {
  let pokemones = filtrarData(data.pokemon, "");
  mostrarPokemones(pokemones);
  document.querySelector("#txtBuscar").value = "";
};

export function mostrarPokemones(data) {
  const listaPokemones = document.getElementById("listaPokemon");

  for (let i = 0; i < data.length; i++) {
    let imgPok = data[i].img;
    let nombre = data[i].name;
    let numero = data[i].num;

    //etiqueta padre figure//
    let etiquetaFigure = document.createElement("figure");
    etiquetaFigure.classList.add("fotoPokemon");

    let numeroPok = document.createElement("p");
    numeroPok.classList.add("num");
    numeroPok.textContent = "# " + numero;
    etiquetaFigure.appendChild(numeroPok);

    let imagenPok = document.createElement("img");
    imagenPok.src = imgPok;
    etiquetaFigure.appendChild(imagenPok);

    let nombrePok = document.createElement("figcaption");
    nombrePok.textContent = nombre;
    etiquetaFigure.appendChild(nombrePok);

    let etiquetaVermas = document.createElement("a");
    //etiquetaVermas.href = "#";
    etiquetaVermas.classList.add("verMas");
    etiquetaVermas.textContent = " Ver +";
    etiquetaVermas.addEventListener("click", (e) => {
      e.preventDefault();
      verFichaTecnica(data[i]);
    });
    nombrePok.appendChild(etiquetaVermas);

    let textType = document.createElement("p");
    textType.classList.add("textType");
    nombrePok.appendChild(textType);

    const tipoPokemon = data[i].type.map((tipo) => {
      return `<img src="./img/pokemonType/${tipo}.png" width="30px" />`;
    });
    textType.innerHTML = `${tipoPokemon.join("")}`;

    listaPokemones.appendChild(etiquetaFigure);
  }
}

// pokemones por tipo
const seleccionarTipo = document.querySelectorAll(".menu__link3");

for (let i = 0; i < seleccionarTipo.length; i++) {
  seleccionarTipo[i].addEventListener("click", (e) => {
    document.getElementById("listaPokemon").style.display = "block";
    document.querySelector(".estadisticas").style.display = "none";
    const tipo = e.target.id;

    /*pasamos el argumento*/
    const filtrarPokemon = filtrarData(data.pokemon, tipo);

    limpiarContenido(document.getElementById("listaPokemon"));
    mostrarPokemones(filtrarPokemon);
  });
}

const ordenarNombres = document.querySelectorAll(".menu__link1");

for (let i = 0; i < ordenarNombres.length; i++) {
  ordenarNombres[i].addEventListener("click", (e) => {
    const ordAsc = e.target.id;

    const ordenarPok = ordenarPokemon(data.pokemon, "name", ordAsc);

    limpiarContenido(document.getElementById("listaPokemon"));
    mostrarPokemones(ordenarPok);
  });
}

/* funcnion para buscar un pokemon por nombre o numero*/
const btnBuscar = document.querySelector("#btnBuscar");
btnBuscar.addEventListener("click", () => {
  const nombrePokemon = document
    .querySelector("#txtBuscar")
    .value.toLowerCase();
  const buscarPokemon = searchPokemon(data.pokemon, nombrePokemon);

  limpiarContenido(document.getElementById("listaPokemon"));
  mostrarPokemones(buscarPokemon);
});

// funcion para el boton ver +
function verFichaTecnica(datapokemon) {
  document.getElementById("listaPokemon").style.display = "none";
  document.getElementById("fichaTecnicaPokemon").style.display = "block";
  limpiarContenido(document.getElementById("fichaTecnicaPokemon"));

  const fichaTecnica = document.getElementById("fichaTecnicaPokemon");

  const resistenciaHtml = datapokemon.resistant.map((resistencia) => {
    return `<li><img src="./img/pokemonType/${resistencia}.png" width="30px" /></li>`;
  });

  const debilidadHtml = datapokemon.weaknesses.map((debilidad) => {
    return `<li><img src="./img/pokemonType/${debilidad}.png" width="30px" /></li>`;
  });

  const movimientoRapidoHtml = datapokemon["quick-move"].map((movimiento) => {
    return `<tr><td>${movimiento.name}</td>
        <td>${movimiento.type}</td>
        <td>${movimiento["base-damage"]}</td>
        <td>${movimiento["energy"]}</td>
        <td>${movimiento["move-duration-seg"]}</td></tr>`;
  });

  const ataqueEspecialHtml = datapokemon["special-attack"].map((ataque) => {
    return `<tr><td>${ataque.name}</td>
        <td>${ataque.type}</td>
        <td>${ataque["base-damage"]}</td>
        <td>${ataque["energy"]}</td>
        <td>${ataque["move-duration-seg"]}</td></tr>`;
  });

  fichaTecnica.innerHTML = `<section class="fichaT">
        <p id="imgFicha" class=""><img src="${datapokemon.img}" /></p>
        <p id="nombreFicha" class="" >${datapokemon.name}</p>
        <p id="acercaFicha" class="">${datapokemon.about}</p>
        
            <table class="tablaFichaT" width="100%">

                <tr>
                    <td width="33%"><img src="./img/height.png" width="70px"><span>Altuta: ${
                      datapokemon.size.height
                    }</span></td>
                    <td width="33%"><img src="./img/egg.png" width="70px"><span>Huevo: ${
                      datapokemon.egg
                    }</span></td>
                    <td width="34%"><img src="./img/weight2.png" width="70px"><span>Peso: ${
                      datapokemon.size.weight
                    }</span></td>
                </tr>
            
            </table>
            
            <table class="tablaFichaT" width="100%">
                <tr>
                    <td width="50%">
                    <table>
                        <tr><td coslpam=”5”> Resistencia</td> </tr>
                            <tr><td>${resistenciaHtml.join("")}</td></tr>
                        </table>
                    </td>

                    <td width="50%">
                        <span>Debilidad</span>
                        <ul>
                            ${debilidadHtml.join("")}
                        </ul>
                    </td>
                </tr>
            </table>

            <table class="tablaFichaT" width="100%">
                <tr>
                    <td colspan="5">MOVIMIENTO RAPIDO</td>
                </tr>
                <tr>
                    <td>Nombre</td>
                    <td>Tipo</td>
                    <td>Base Daño</td>
                    <td>Energia</td>
                    <td>Duracion Movimiento Segundo</td>
                </tr>
                ${movimientoRapidoHtml.join("")}
            </table>
                    
            <table class="tablaFichaT" width="100%">
                <tr>
                    <td colspan="5">ATAQUE ESPECIAL</td>
                </tr>
                <tr>
                    <td>Nombre</td>
                    <td>Tipo</td>
                    <td>Base Daño</td>
                    <td>Energia</td>
                    <td>Duracion Movimiento Segundo</td>
                </tr>
                ${ataqueEspecialHtml.join("")}
             </table>

        </section>`;

  let botonSalir = document.createElement("button");
  botonSalir.textContent = "Salir";
  botonSalir.classList.add("btnSalir");
  botonSalir.addEventListener("click", () => {
    document.getElementById("listaPokemon").style.display = "block";
    document.getElementById("fichaTecnicaPokemon").style.display = "none";
  });
  fichaTecnica.appendChild(botonSalir);
}

//-------------------------funcnion para mostrar las estadisticas ---------------------------

const estadisticas = document.querySelector(".menu__link4");

estadisticas.addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("listaPokemon").style.display = "none";
  document.querySelector(".estadisticas").style.display = "block";
  limpiarContenido(document.querySelector(".estadisticas"));

  const contenedorEstad = document.querySelector(".estadisticas");

  const estadisticaH1 = document.createElement("h1");
  estadisticaH1.classList.add("estadisticaH1");
  estadisticaH1.textContent = "RANKING DE LOS POKEMONES ";
  contenedorEstad.appendChild(estadisticaH1);

  const section = document.createElement("section");
  section.classList.add("section");
  contenedorEstad.appendChild(section);

  const estCp = document.createElement("button");
  estCp.classList.add("estCp");
  estCp.textContent = "PUNTO DE COMBATE";
  section.appendChild(estCp);

  const estPeso = document.createElement("button");
  estPeso.classList.add("estPeso");
  estPeso.textContent = "PESO";
  section.appendChild(estPeso);

  const estHp = document.createElement("button");
  estHp.classList.add("estHp");
  estHp.textContent = "NIVEL DE VIDA";
  section.appendChild(estHp);

  const estResultado = document.createElement("div");
  estResultado.classList.add("estResultado");
  contenedorEstad.appendChild(estResultado);

  // funcion para top 10 segun puntos de combate
  estCp.addEventListener("click", () => {
    const top10 = calculoEstadistico(data.pokemon);

    drawBarChart(top10, estResultado, "PUNTOS DE COMBATE");
  });

  // funcion para top 10 segun el peso
  estPeso.addEventListener("click", () => {
    const top10 = calculoEstadPeso(data.pokemon);

    drawBarChart(top10, estResultado, "PESO");
  });

  estHp.addEventListener("click", () => {
    const top10 = calcularEstadVida(data.pokemon);

    drawBarChart(top10, estResultado, "NIVEL DE VIDA");
  });
});

// implementacion de la funcion chart
function drawBarChart(pokemon10, elemento, titulo) {
  let data = google.visualization.arrayToDataTable(pokemon10); //eslint-disable-line

  let options = {
    title: `TOP 10 SEGUN ${titulo}`,
    width: 600,
    height: 400,
    hAxis: {
      title: titulo.toLowerCase(),
      minValue: 0,
    },
    vAxis: {
      title: "pokemon",
    },
  };

  //eslint-disable-next-line
  let chart = new google.visualization.BarChart(elemento);

  chart.draw(data, options);
}

// limpiar contenidos
function limpiarContenido(limpiar) {
  while (limpiar.firstChild) {
    limpiar.removeChild(limpiar.firstChild);
  }
}

function limpiarContenidoBuscador() {
  document.getElementById("listaPokemon").innerHTML = "";
}

document.getElementById("johto").addEventListener("click", function () {
  let pokemonsFiltrados = buscarPorRegion(data.pokemon, "johto");
  limpiarContenidoBuscador();
  mostrarPokemones(pokemonsFiltrados);
});

document.getElementById("kanto").addEventListener("click", function () {
  let pokemonsFiltrados = buscarPorRegion(data.pokemon, "kanto");
  limpiarContenidoBuscador();
  mostrarPokemones(pokemonsFiltrados);
});
