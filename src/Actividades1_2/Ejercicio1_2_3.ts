enum EstadoReserva {
  PENDIENTE = "pendiente",
  CONFIRMADA = "confirmada",
  CANCELADA = "cancelada",
}

interface Cliente {
  id: number;
  cliente: string;
  habitacion: number;
  estado: EstadoReserva;
}

const reserva: Cliente = {
  id: 1,
  cliente: "Carlos",
  habitacion: 204,
  estado: EstadoReserva.PENDIENTE,
};

const { cliente, habitacion } = reserva;

const reservaCopia: Cliente = {
  ...reserva,
  estado: EstadoReserva.CONFIRMADA,
};

const { id, ...restoDatos } = reserva;

const reservaDesayno = {
  ...reserva,
  desayuno: true,
};

console.log("--- RESUMEN HOTEL ---");
console.log("Reserva original:", reserva);
console.log("Cliente desestructurado:", cliente);
console.log("Habitación desestructurada:", habitacion);
console.log("Copia confirmada:", reservaCopia);
console.log("ID separado (rest):", id);
console.log("Resto de datos (rest):", restoDatos);
console.log("Copia con desayuno:", reservaDesayno);
