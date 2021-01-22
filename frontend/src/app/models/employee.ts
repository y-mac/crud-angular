export class Employee {
    constructor();
    constructor(_id = "", nombre = "", edad = null, sexo = "", codigo= "", activo = false) {
      this._id = _id;
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.codigo = codigo;
      this.activo = activo;
    }
  
    _id: string;
    nombre: string;
    edad: Number;
    sexo: string;
    codigo: string;
    activo: boolean;
}