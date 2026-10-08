class Libro {
  titulo: string;
  autor: string;
  disponible: boolean;

  constructor(titulo: string, autor: string) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }

  public prestar() {
    this.disponible = false;
  }

  public devolver() {
    this.disponible = true;
  }
}

const libro = new Libro("Clean Code", "Robert C. Martin");

console.log(libro);
libro.prestar();

console.log(libro);
