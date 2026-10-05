"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mediciones = [
    {
        id: 1,
        estacion: {
            id: 1,
            nombre: "Centro",
            ciudad: "Málaga",
            activa: true,
        },
        temperatura: 28,
        humedad: 60,
        lluvia: 2.5,
    },
    {
        id: 2,
        estacion: {
            id: 2,
            nombre: "Norte",
            ciudad: "Granada",
            activa: true,
        },
        temperatura: 8,
        humedad: 75,
        lluvia: 2,
    },
    {
        id: 3,
        estacion: {
            id: 3,
            nombre: "Sur",
            ciudad: "Sevilla",
            activa: false,
        },
        temperatura: 15,
        humedad: 80,
        lluvia: 0,
    },
];
function main() {
    // CCambiar el estado de una estacion
    mediciones[3].estacion.activa = true;
    // Error al cambiar readonly
    //mediciones[0].id = 10; //"Cannot assign to 'id' because it is a read-only property."
    let temperaturaMedia = 0;
    let maxTemperatura = mediciones[0].temperatura;
    let diasConLluvia = 0;
    mediciones.forEach((medicion) => {
        if (medicion.estacion.activa) {
            console.log("Estacion: " + medicion.estacion.nombre);
            console.log("Ciudad: " + medicion.estacion.ciudad);
            console.log("Temperatura: " + medicion.temperatura + "°C");
            console.log("Estado: " + whatTemperatura(medicion.temperatura));
            console.log("Humedad: " + medicion.humedad + "%");
            if (medicion.lluvia !== undefined) {
                console.log("Lluvia: " + medicion.lluvia + "mm");
            }
            maxTemperatura = Math.max(maxTemperatura, medicion.temperatura); //Calculo temperatura maxima
            temperaturaMedia += medicion.temperatura / mediciones.length; // Calculo temp media
            if (medicion.lluvia && medicion.lluvia > 0) {
                // Calculo dias con llucvia
                diasConLluvia++;
            }
            console.log("\n");
        }
    });
    console.log("---------------------- \n");
    console.log("Temperatura media: " + temperaturaMedia.toFixed(1) + "°C");
    console.log("Temperatura máxima: " + maxTemperatura.toFixed(1) + "°C");
    console.log("Mediciones con lluvia: " + diasConLluvia);
}
function whatTemperatura(temperatura) {
    let resultado = "";
    if (temperatura < 10) {
        resultado = "Frío";
    }
    else if (temperatura >= 10 && temperatura < 25) {
        resultado = "Templado";
    }
    else {
        resultado = "Calor";
    }
    return resultado;
}
main();
