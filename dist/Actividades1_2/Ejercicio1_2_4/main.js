"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pelicula_service_1 = require("./pelicula.service");
console.log("funcion llamada");
async function main() {
    const peliculas = await (0, pelicula_service_1.obtenerPeliculas)();
    const peliculasLargas = peliculas.filter((pelicula) => pelicula.duracion > 120);
    const jsonResult = JSON.stringify(peliculasLargas);
    console.log(jsonResult);
}
main();
