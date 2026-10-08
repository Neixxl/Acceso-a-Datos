"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function comprobarClave(tipo, intento) {
    let mensaje = "Clave incorrecta"; // Inicializo la variable asi ya que si no se introduce ninguna clave, el mensaje por defecto sera "Clave incorrecta"
    if (intento === null) {
        mensaje = "No se ha introducido ninguna clave";
    }
    else {
        switch (tipo) {
            case "pin":
                if (typeof intento === "number" && intento === 4321) {
                    mensaje = "Caja abierta";
                }
                else if (typeof intento !== "number") {
                    mensaje = "La clave debe ser numerica";
                }
                break;
            case "palabra":
                if (typeof intento === "string" && intento.toLocaleLowerCase() === "typescript") {
                    mensaje = "Caja abierta";
                }
                else if (typeof intento !== "string") {
                    mensaje = "La clave debe ser texto";
                }
                break;
            default:
                mensaje = "Tipo de clave no valido";
                break;
        }
    }
    return mensaje;
}
console.log(comprobarClave("pin", 4321));
console.log(comprobarClave("pin", "4321"));
console.log(comprobarClave("palabra", "Typescript"));
console.log(comprobarClave("palabra", 1234));
console.log(comprobarClave("pin", null));
console.log(comprobarClave("pin", 1234));
