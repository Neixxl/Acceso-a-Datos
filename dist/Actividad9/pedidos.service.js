"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPedidos = obtenerPedidos;
exports.pedidosCompletados = pedidosCompletados;
exports.buscarPedido = buscarPedido;
const pedidos_data_1 = require("./pedidos.data");
function obtenerPedidos() {
    return new Promise((resolve) => setTimeout(() => {
        resolve(pedidos_data_1.pedidos);
    }, 5000));
}
function pedidosCompletados() {
    return new Promise((resolve) => setTimeout(() => {
        resolve(pedidos_data_1.pedidos.filter((pedido) => pedido.completado));
    }, 3000));
}
function buscarPedido(id) {
    const resultado = pedidos_data_1.pedidos.find((pedido) => pedido.id === id);
    return new Promise((resolve) => setTimeout(() => {
        resolve(resultado);
    }, 2000));
}
