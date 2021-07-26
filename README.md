[Presentación1.pptx](https://github.com/makemile/LIM015-data-lovers/files/6876052/Presentacion1.pptx)
![pagina principal baja fidelidad](https://user-images.githubusercontent.com/83560300/126942230-45fea619-e677-48ad-86fc-24df4487f5ce.png)
# Data Lovers

## Índice

[1. Preámbulo](#1-preámbulo)
[2. Resumen del proyecto](#2-resumen-del-proyecto)
[3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
[4. Criterios de aceptación que debe cumplir el proyecto](#4-criterios-de-aceptación-que-debe-cumplir-el-proyecto)
[5. Consideraciones técnicas](#5-consideraciones-técnicas)



## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

## 2. Resumen del proyecto

Guí pokedex esta orientada a guiar a los usuarios principiantes e incluso está guía muestra datos que pueda necesitar cualquier tipo de usuario sin una edad limitante. 

Basicamente se puede visualizar en la guí pokedex un filtrado de pokemones por elemento (tipo), filtrado por region, un ordenamiento por nombre ascendiente y descendiente. no obstante, se diseño un buscador para facilitar la busqueda (valga la redundancia) por nombre o numero de poke (en ella contiene una ficha tecnica donde se pueden detallar parte de las caracteristicas de cada poke seleccionado por el usuario), por ultimo, se puso un items de estadisticas para que se pueda visualizar graficamente los datos de los pokes con mas vidas, mayor punto de combate y mayor peso. 

Estos son los datos que nos facilitan para la construccion del mismo:

[Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)


## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### HTML y CSS

[✓] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
[✓] [Uso de selectores de CSS.](https://css-tricks.com/almanac/selectors/)
[✓] Construir tu aplicación respetando el diseño realizado (maquetación).
[✓] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

[✓] [Uso de selectores del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Localizando_elementos_DOM_usando_selectores).
[✓] [Manejo de eventos del DOM.](https://www.w3schools.com/js/js_events.asp)
[✓] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript


[✓] Uso de condicionales (if-else | switch | operador ternario)

[✓] [Uso de bucles (for | for..in | for..of | while)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n)

[✓] [Uso de funciones (parámetros | argumentos | valor de retorno)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones)

[✓] [Manipular arrays (filter | map | sort | reduce)](https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)

[✓] [Manipular objects (key | value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)

[✓] [Uso ES modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos) ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))

[✓] [Diferenciar entre expression y statements.](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)

[✓] [Diferenciar entre tipos de datos atómicos y estructurados.](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)

### Testing

[✓] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

[✓] [Organizar y dividir el código en módulos (Modularización)](https://medium.com/@sebastianpaduano/modularizaci%C3%B3n-en-javascript-538bd6c75fa)

[✓] Uso de identificadores descriptivos ([Nomenclatura](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/es/naming-conventions.html) | [Semántica](https://geekytheory.com/semantica-coder))

[✓] Uso de linter (ESLINT)

### Git y GitHub

[✓] [Uso de comandos de git (add | commit | pull | status | push)](https://github.com/jlord/git-it-electron)

[✓] Manejo de repositorios de GitHub (clone | fork | gh-pages)

[✓] Colaboración en Github (branches | pull requests | |[tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging))

### UX

[✓] Diseñar la aplicación pensando y entendiendo al usuario.
[✓] Crear prototipos para obtener feedback e iterar.
[✓] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
[✓] Planear y ejecutar tests de usabilidad.

## 4. Criterios de aceptación que debe cumplir el proyecto

[✓] UI:Visualizar todos los pokemones en target.
[✓] UI:Buscar un pokemon por su nombre y numero.
[✓] UI:Filtrar los pokemones por su tipo de elemento.
[✓] UI:Filtrar los pokemones por región.
[✓] UI:Ordenar por nombre de forma ascendiente.
[✓] UI:Ordenar por nombre de forma Descendiente.
[✓] UI: Muestra lista y/o tabla con datos y/o indicadores.
[✓] UI:Responsive móvil.

[✓] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
[✓] Incluye un _plan de acción_ de tus objetivos de aprendizaje prioritizado en `README.md` (o otro archivo).
[✓] Incluye _Definición del producto_ clara e informativa en `README.md`.
[✓] Incluye historias de usuario en `README.md`.
[✓] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
[✓] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
[X] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.

## Definicion del producto

## ¿quienes son los usuarios?
Ésta pokeguía está diseñada para cualquier tipo de usuario no tiene limites de edad.

## ¿Cuáles son los objetivos en relación al producto?

Que el usuario pueda Visualizar, filtrar, ordenar, gráficar, acceder a los pokemones de la region Khanto y Jhoto por medio de las opciones antes descritas. 

## ¿Cómo el producto soluciona los problemas/necesidades de dichos usuarios?

Le permite al usuario ubicar los pokemones de su interés dentro de la aplicacion guí pokedex ofreciendole información precisa, puntualizada.

## Historias de usuario.

Para mayor información de las historia de usuario puede hacer click en este link ## https://trello.com/b/R0CpJFsy/datalovers 

## Diseño de la Interfaz de Usuario

## Prototipo de baja fidelidad

En éste boceto se propuso diseñar la página principal.

![pagina principal baja fidelidad](https://user-images.githubusercontent.com/83560300/126942325-c56fbbb8-0262-4742-8a08-6d8d1d41a455.png)

En éste boceto se propuso diseñar la la ficha técnica.

![ficha estadistica baja fidelidad](https://user-images.githubusercontent.com/83560300/126942719-9a357b54-7773-4f01-9e27-9f670b3166d2.png)


En éste boceto se propuso diseñar la interfaz principal.

![Presentación1](https://user-images.githubusercontent.com/83560300/126942632-d1d17153-8a5f-4a43-8c86-8e76e843d0d6.png)

En éste boceto se propuso diseñar el menú principal responsive.

![Presentación3](https://user-images.githubusercontent.com/83560300/126942802-7e388135-96f2-406f-b8ac-0b611595f7a1.png)

En éste boceto se propuso diseñar la ficha técnica:

![Presentación2](https://user-images.githubusercontent.com/83560300/126943502-e875a529-875c-4053-9730-031c740fae41.png)


En éste boceto se propuso diseñar las estadísticas.
Top 10 de mayor punto de combate:

![estadisticas 10 mas fuertes](https://user-images.githubusercontent.com/83560300/126943116-a4de5e53-ef5b-4a2f-9b48-222cbce8acc7.png)

Top 10 de mayor peso:

![Top 10 segun su peso](https://user-images.githubusercontent.com/83560300/126943300-f73152c1-a895-42f9-b6ef-965246787947.png)

Top 10 de mayor nivel de vida:

![Top 10 segun nivel de vida](https://user-images.githubusercontent.com/83560300/126943340-bb3339c3-c6b0-48e2-b033-eafbfc4f5907.png)

## Pruebas unitarias
Las pruebas unitarias tienen una cobertura del mas 70% de statements (sentencias), functions (funciones), lines (líneas), y branches (ramas) del archivo src/data.js que contiene las funciones encargadas de procesar, filtrar y ordenar la data, así como calcular estadísticas.

## 5. Consideraciones técnicas
La lógica del proyecto esta implementada completamente en JavaScript (ES6), HTML y CSS. En este proyecto NO se ha usado librerías o frameworks, solo vanilla JavaScript, con la excepción de librerías para hacer gráficas (charts).

No se utilizo la pseudo-variable this.

## src/index.html
Como en el proyecto anterior, existe un archivo index.html. Acá va la página que se muestra al usuario. También nos sirve para indicar qué scripts se usan y une todo lo que hemos hecho.

## src/main.js
Aqui está el código que tiene que ver con mostrar los datos en la pantalla. La interacción con el DOM. Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers), ....

## src/data.js
El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.

Este archivo contiene toda la funcionalidad que corresponde a obtener, procesar y manipular datos (funciones):

## filterData(data, condition): 
Esta función filter o filtrar recibe la data, y nos retorna aquellos datos que sí cumplan con la condición.

## sortData(data, sortBy, sortOrder): 
Esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

## computeStats(data): 
La función compute o calcular, nos permite hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.

Estas funciones son puras e independientes del DOM. Estas funciones son después usadas desde el archivo src/main.js, al cargar la página, y cada vez que el usuario interactúe (click, filtrado, ordenado, ...).

## src/data
En esta carpeta están los datos. Dentro de la carpeta hay dos archivos: uno con la extensión .js y otro .json. Ambos archivos contienen la misma data; la diferencia es que el .js lo usamos a través de una etiqueta <script>, mientras que el .json está ahí para cargar la data de forma asíncrona con fetch().

## test/data.spec.js
Las pruebas unitarias de las funciones implementadas en el archivo data.js.


