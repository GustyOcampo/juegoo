/*console.log ("Hola Mundo")
console.log (25+5)
console.log ("Hola la temperatura de hoy es:",-10, "°C")*/

const letrasContainer=document.getElementById("letras-container");
const opcionesContainer=documment.getElementById("opciones-container");
const seccionIngresarUsuario=document.getElementById("seccion-ingresar-usuario");
const nuevoJuegoContainer=document.getElementsByClassName("nuevo-juego-container");
const nuevoJuegoButton=document.getElementById("nuevo-juego-button");
const canvas=document.getElementById("canvas");
const resultadoTexto=document.getElementById("resultado-texto");

let opciones={
    frutas: [
        "Manzana",
        "Frutilla",
        "Pera",
        "Sandia",
        "Naranja",
        "Mandarina",
        "Limon",
        "Uva",
    ],

    animales: [
        "Perro",
        "Gato",
        "Hamster",
        "Nutria",
        "Jirafa",
        "Leon",
        "Pantera",
        "Rinoceronte",
    ],

    paises: [
        "Argentina",
        "Brasil",
        "Alemania",
        "Estados Unidos",
        "España",
        "Suiza",
        "Africa",
        "Irlanda"
    ],
}