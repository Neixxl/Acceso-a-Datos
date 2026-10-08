import { Pedido } from "./pedido";
import { pedidos } from "./pedidos.data";

export function obtenerPedidos(): Promise<Pedido[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(pedidos);
    }, 5000),
  );
}

export function pedidosCompletados(): Promise<Pedido[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(pedidos.filter((pedido) => pedido.completado));
    }, 3000),
  );
}

export function buscarPedido(id: number): Promise<Pedido | undefined> {
  const resultado: Pedido | undefined = pedidos.find((pedido) => pedido.id === id);

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(resultado);
    }, 2000),
  );
}
