"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPeliculas = obtenerPeliculas;
function obtenerPeliculas() {
    return new Promise((resolve) => setTimeout(() => {
        const peliculas = [
            { id: 1, titulo: "Interesetellar", duracion: 169 },
            { id: 2, titulo: "Matrix", duracion: 136 },
            { id: 3, titulo: "Coco", duracion: 105 },
        ];
        resolve(peliculas);
    }, 2000));
}
