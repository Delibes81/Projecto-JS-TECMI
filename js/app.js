import Egreso from './Egreso.js'
import Ingreso from './Ingreso.js'
// Arreglo de ingresos
let ingresos = [
  new Ingreso('Salario', 20000),
  new Ingreso('Venta auto', 50000)
];
// Arreglo de egresos
const egresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800)
];



const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos()

    let presupuestoElemento = document.getElementById('presupuesto');
    let porcentajeElemento = document.getElementById('porcentaje');
    let ingresosElemento = document.getElementById('ingresos');
    let egresosElemento = document.getElementById('egresos');

    presupuestoElemento.innerHTML = formatoMoneda(presupuesto);
    porcentajeElemento.innerHTML = formatoPorcentaje(porcentajeEgreso);
    ingresosElemento.innerHTML = formatoMoneda(totalIngresos());
    egresosElemento.innerHTML = formatoMoneda(totalEgresos());
   

  
};

const totalIngresos = () => {
    let totalIngreso = 0;
    for (const ingreso of ingresos) { 
      totalIngreso += ingreso.valor; 
      console.log("Total acumulado:", totalIngreso)
      
    }
    return totalIngreso;
    
  };
  let total = totalIngresos();
console.log("Total acumulado:", total);


  const totalEgresos = () => {
    let totalEgreso = 0;
    for (const egreso of egresos) { 
      totalEgreso += egreso.valor; 
    }
    return totalEgreso;
  };

  const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', { 
      style: 'currency', 
      currency: 'MXN', 
      minimumFractionDigits: 2 
    });
  };

  const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
      style: 'percent',
      minimumFractionDigits: 2
    });
  };

  const cargarIngresos = () => {
    let ingresosHTML = ''; 
    for (const ingreso of ingresos) {
      ingresosHTML += crearIngresoHTML(ingreso);
    }
  
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML; 
  };

  const cargarApp = () => {
    cargarCabecero();
  };
  window.onload = cargarApp;