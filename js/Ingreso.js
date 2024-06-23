import  Dato  from './Dato.js';
export default class Ingreso extends Dato {
  static contadorIngresos = 0;
  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._id = ++Ingreso.contadorIngresos;
  }
  get id() {
    return this._id;
  }
}