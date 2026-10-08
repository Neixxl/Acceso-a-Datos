import { Gestion } from "./aplicacion-pedidos";

function main(): void {
  console.log("Esperando pedidos... \n");
  Gestion.buscar(2);
  Gestion.mostrarPedidosCompletados();
  Gestion.mostrarPedidos();
}

main();
