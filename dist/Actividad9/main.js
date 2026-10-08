"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aplicacion_pedidos_1 = require("./aplicacion-pedidos");
function main() {
    console.log("Esperando pedidos... \n");
    aplicacion_pedidos_1.Gestion.buscar(2);
    aplicacion_pedidos_1.Gestion.mostrarPedidosCompletados();
    aplicacion_pedidos_1.Gestion.mostrarPedidos();
}
main();
