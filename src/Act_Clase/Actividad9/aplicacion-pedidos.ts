import { obtenerPedidos, pedidosCompletados, buscarPedido } from "./pedidos.service";

export class Gestion {
  static async mostrarPedidos(): Promise<void> {
    const pedidos = await obtenerPedidos();
    let total: number = 0;

    console.log("\nTodos los pedidos");
    console.log("-----------------");

    pedidos.forEach((x) => {
      console.log(
        x.cliente + " - " + x.total + " - " + (x.completado ? "Completado" : "Pendiente"),
      );
      total += x.total;
    });

    console.log("\n === Total: " + total + " € ===");
  }

  static async mostrarPedidosCompletados(): Promise<void> {
    const pedidosComp = await pedidosCompletados();

    console.log("\nPedidos Completados");
    console.log("-------------------");

    pedidosComp.forEach((pedido) => {
      console.log(pedido.cliente + " - " + pedido.total + " - Completado");
    });
  }

  static async buscar(id: number): Promise<void> {
    const pedidoBuscado = await buscarPedido(id);
    let resultado;
    if (pedidoBuscado) {
      resultado = JSON.stringify(pedidoBuscado);
    } else {
      resultado = "No encontrado";
    }
    console.log("\nResultado de la busqueda");
    console.log("-----------------------");
    console.log(resultado);
  }
}
