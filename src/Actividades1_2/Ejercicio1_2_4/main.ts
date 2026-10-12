import { obtenerPeliculas } from "./pelicula.service";

console.log("funcion llamada");

async function main(): Promise<void> {
  const peliculas = await obtenerPeliculas();

  const peliculasLargas = peliculas.filter((pelicula) => pelicula.duracion > 120);
  const jsonResult = JSON.stringify(peliculasLargas);

  console.log(jsonResult);
}

main();
