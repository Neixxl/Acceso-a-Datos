"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const clasesImportantes = [];
function Importante(target) {
    clasesImportantes.push(target);
}
let Usuario = class Usuario {
};
Usuario = __decorate([
    Importante
], Usuario);
let Producto = class Producto {
};
Producto = __decorate([
    Importante
], Producto);
class Pedido {
}
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
