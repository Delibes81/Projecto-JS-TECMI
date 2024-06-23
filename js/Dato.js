
export default class Dato {
    constructor(descripcion, valor) {
      this._descripcion = descripcion;
      this._valor = valor;
    }
  
    getdescripcion() {
      return this._descripcion;
    }
  
    setdescripcion(nuevaDescripcion) {
      this._descripcion = nuevaDescripcion;
    }
  
    getvalor() {
      return this._valor;
    }
  
    setvalor(nuevoValor) {
      this._valor = nuevoValor;
    }
  }