"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Libro {
    titulo;
    autor;
    disponible;
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }
    prestar() {
        this.disponible = false;
    }
    devolver() {
        this.disponible = true;
    }
}
const libro = new Libro("Clean Code", "Robert C. Martin");
console.log(libro);
libro.prestar();
console.log(libro);
