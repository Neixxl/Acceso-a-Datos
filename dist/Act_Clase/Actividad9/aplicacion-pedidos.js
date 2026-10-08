"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestion = void 0;
const pedidos_service_1 = require("./pedidos.service");
class Gestion {
    static async mostrarPedidos() {
        const pedidos = await (0, pedidos_service_1.obtenerPedidos)();
        let total = 0;
        console.log("\nTodos los pedidos");
        console.log("-----------------");
        pedidos.forEach((x) => {
            console.log(x.cliente + " - " + x.total + " - " + (x.completado ? "Completado" : "Pendiente"));
            total += x.total;
        });
        console.log("\n === Total: " + total + " € ===");
    }
    static async mostrarPedidosCompletados() {
        const pedidosComp = await (0, pedidos_service_1.pedidosCompletados)();
        console.log("\nPedidos Completados");
        console.log("-------------------");
        pedidosComp.forEach((pedido) => {
            console.log(pedido.cliente + " - " + pedido.total + " - Completado");
        });
    }
    static async buscar(id) {
        const pedidoBuscado = await (0, pedidos_service_1.buscarPedido)(id);
        let resultado;
        if (pedidoBuscado) {
            resultado = JSON.stringify(pedidoBuscado);
        }
        else {
            resultado = "No encontrado";
        }
        console.log("\nResultado de la busqueda");
        console.log("-----------------------");
        console.log(resultado);
    }
}
exports.Gestion = Gestion;
