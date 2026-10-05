interface Libro {
  readonly id: number;
  titulo: string;
  autor: string;
  genero: string;
  disponible: boolean;
  anioPublicacion?: number;
}

interface Usuario {
  readonly id: number;
  nombre: string;
  tipo: "estudiante" | "profesor";
}

const libros: Libro[] = [
  {
    id: 1,
    titulo: "Dune",
    autor: "Frank Herbert",
    genero: "Ciencia ficcion",
    disponible: true,
    anioPublicacion: 1965,
  },
  {
    id: 2,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Fantasía",
    disponible: true,
    anioPublicacion: 1943,
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ciencia ficcion",
    disponible: false,
    anioPublicacion: 1949,
  },
  {
    id: 4,
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafon",
    genero: "Misterio",
    disponible: true,
  },
  {
    id: 5,
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    genero: "Romance",
    disponible: true,
    anioPublicacion: 1813,
  },
];

const usuarios: Usuario[] = [
  {
    id: 1,
    nombre: "Marta Lopez",
    tipo: "estudiante",
  },
  {
    id: 2,
    nombre: "Javier Ruiz",
    tipo: "profesor",
  },
];
