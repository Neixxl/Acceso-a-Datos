interface Empleado {
  id: number;
  nombre: string;
  departamento: string;
  salario: number;
}

interface Respuesta<T> {
  datos: T;
  mensaje: string;
}

type CambiosEmpleado = Partial<Empleado>;
type EmpleadoResumen = Pick<Empleado, "id" | "nombre" | "departamento">;
type NuevoEmpleado = Omit<Empleado, "id">;

const empleado: Empleado = {
  id: 1,
  nombre: "Laura",
  departamento: "Ventas",
  salario: 24000,
};

const cambiosEmpleado: CambiosEmpleado = {
  nombre: "Laura",
  salario: 24000,
};

const empleadoResumen: EmpleadoResumen = {
  id: 1,
  nombre: "Laura",
  departamento: "Ventas",
};

const nuevoEmpleado: NuevoEmpleado = {
  nombre: "Laura",
  departamento: "Ventas",
  salario: 24000,
};
