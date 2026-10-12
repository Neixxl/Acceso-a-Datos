import { Pelicula } from "./pelicula";

export function obtenerPeliculas(): Promise<Pelicula[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      const peliculas: Pelicula[] = [
        { id: 1, titulo: "Interesetellar", duracion: 169 },
        { id: 2, titulo: "Matrix", duracion: 136 },
        { id: 3, titulo: "Coco", duracion: 105 },
      ];

      resolve(peliculas);
    }, 2000),
  );
}
