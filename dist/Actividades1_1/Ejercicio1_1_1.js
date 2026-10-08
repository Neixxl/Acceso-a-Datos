"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nombre = "Lucía";
const nota1 = 7;
const nota2 = 5;
const nota3 = 8;
let faltas = 2;
function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    let resultado = "";
    if (media < 5) {
        resultado = "Suspenso";
    }
    else if (media >= 5 && media < 7) {
        resultado = "Aprobado";
    }
    else if (media >= 7 && media < 9) {
        resultado = "Notable";
    }
    else {
        resultado = "Sobresaliente";
    }
    if (faltas > 5) {
        console.log("Demasiadas faltas");
    }
    console.log("Alumno: " + nombre);
    console.log("Nota media: " + media.toFixed(2));
    console.log("Resultado: " + resultado);
    console.log("Faltas: " + faltas);
}
calcularMedia(nota1, nota2, nota3);
