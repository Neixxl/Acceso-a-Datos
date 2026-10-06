function Importante(clase: Function): void {
  console.log(`La clase ${clase.name} está marcada como importante`);
}

@Importante
class Usuario {}
