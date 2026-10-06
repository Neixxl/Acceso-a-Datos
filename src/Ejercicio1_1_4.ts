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

function clasificarUsuario(tipo: "estudiante" | "profesor"): string {
  let mensaje: string = "";

  switch (tipo) {
    case "estudiante":
      mensaje = "Préstamo máximo: 3 libros";
      break;
    case "profesor":
      mensaje = "Préstamo máximo: 5 libros";
      break;
  }

  return mensaje;
}

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function buscarLibros(busqueda: string | number | null): string {
  let resultado: string = "";

  if (busqueda === null) {
    resultado = "No se ha indicado ninguna búsqueda";
  } else if (typeof busqueda === "number") {
    const libro: Libro | undefined = libros.find((l) => l.id === busqueda);
    resultado = libro
      ? "Búsqueda por id " + busqueda + ": " + libro.titulo
      : "Búsqueda por id " + busqueda + ": sin resultados";
  } else {
    const termino: string = normalizar(busqueda);
    const encontrados: Libro[] = libros.filter(
      (l) =>
        normalizar(l.titulo).includes(termino) ||
        normalizar(l.autor).includes(termino) ||
        normalizar(l.genero).includes(termino),
    );
    const titulos: string = encontrados.map((l) => l.titulo).join(", ");
    resultado = 'Búsqueda "' + busqueda + '": ' + (titulos !== "" ? titulos : "sin resultados");
  }

  return resultado;
}

function prestarLibro(libro: Libro): void {
  libro.disponible = false;
  console.log("Libro prestado: " + libro.titulo);
}

function main(): void {
  console.log("--- Catálogo ---");
  libros.forEach((libro) => {
    console.log("Título: " + libro.titulo);
    console.log("Autor: " + libro.autor);
    console.log("Disponible: " + (libro.disponible ? "Sí" : "No"));
    if (libro.anioPublicacion !== undefined) {
      console.log("Año de publicación: " + libro.anioPublicacion);
    }
    console.log("\n");
  });

  console.log("--- Usuarios ---");
  usuarios.forEach((usuario) => {
    console.log(usuario.nombre + " (" + usuario.tipo + "): " + clasificarUsuario(usuario.tipo));
  });
  console.log("\n");

  const disponibles: Libro[] = libros.filter((libro) => libro.disponible);
  console.log("Libros disponibles: " + disponibles.length);

  const cienciaFiccionAntigua: Libro[] = libros.filter(
    (libro) =>
      libro.disponible &&
      normalizar(libro.genero) === "ciencia ficcion" &&
      libro.anioPublicacion !== undefined &&
      libro.anioPublicacion < 2000,
  );
  console.log(
    "Ciencia ficción anterior a 2000: " +
      cienciaFiccionAntigua.map((libro) => libro.titulo).join(", "),
  );

  const titulosDisponibles: string[] = disponibles.map((libro) => libro.titulo).sort();
  console.log("Títulos disponibles: " + JSON.stringify(titulosDisponibles));

  const disponiblesConAnio: number = libros.reduce((contador, libro) => {
    if (libro.disponible && libro.anioPublicacion !== undefined) {
      contador++;
    }
    return contador;
  }, 0);
  console.log("Libros disponibles con año conocido: " + disponiblesConAnio);

  console.log(buscarLibros("orwell"));
  console.log(buscarLibros(2));
  console.log(buscarLibros(null));
  console.log(buscarLibros("fantasia"));

  console.log("\n");
  prestarLibro(libros[3]);

  // 10. Intentar modificar el id de un libro y de un usuario (propiedad readonly)
  // libros[0].id = 10;   // Error: Cannot assign to 'id' because it is a read-only property.
  // usuarios[0].id = 99; // Error: Cannot assign to 'id' because it is a read-only property.
}

main();
