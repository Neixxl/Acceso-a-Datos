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
