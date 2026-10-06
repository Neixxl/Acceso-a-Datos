const clasesImportantes: Function[] = [];

function Importante(target: Function) {
  clasesImportantes.push(target);
}

@Importante
class Usuario {}
@Importante
class Producto {}
class Pedido {}

function mostrarClasesImportantes() {
  const numeroClasesImportantes = clasesImportantes.length;
  console.log("El numero de clases importantes son:" + numeroClasesImportantes);

  if (numeroClasesImportantes > 0) {
    console.log("Sus nombres son:");
    clasesImportantes.forEach((clase) => {
      console.log(clase.name);
    });
  }
}

mostrarClasesImportantes();
