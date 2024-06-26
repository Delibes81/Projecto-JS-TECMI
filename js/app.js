import Egreso from './Egreso.js'
import Ingreso from './Ingreso.js'

let ingresos = [
  new Ingreso('Salario', 35000),
  new Ingreso('Venta de bicicleta', 2500),
  new Ingreso('Bono', 5000) 
];

const egresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800)
];

console.log('engre', egresos, ingresos);

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
      
    }
    return totalIngreso;
    
  };


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

  const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">+${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="eliminarIngreso(${ingreso.id})"> 
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return ingresoHTML;
};

  const cargarIngresos = () => {
    let ingresosHTML = ''; 
    for (const ingreso of ingresos) {
      ingresosHTML += crearIngresoHTML(ingreso);
    }
  
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML; 
  };

  const crearEgresoHTML = (egreso) => {
    const porcentaje = (egreso.valor / totalEgresos())
* 100;
    let egresoHTML
   = `
      <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div> 
        <div class="derecha limpiarEstilos">
          <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
   
          <div class="elemento_porcentaje">${formatoPorcentaje(porcentaje / 100)}</div> 
          <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn" onclick="eliminarEgreso(${egreso.id})">
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    `;
    return egresoHTML;
  };

  const cargarEgresos = () => {
    let egresosHTML = ''; 
    for (const egreso of egresos) {
      egresosHTML += crearEgresoHTML(egreso); 
    }
    
    document.getElementById('lista-egresos').innerHTML = egresosHTML; 
  };

  window.eliminarIngreso = (id) => {
    const indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    if (indiceEliminar !== -1) {
      ingresos.splice(indiceEliminar, 1);
      cargarCabecero();
      cargarIngresos();
    }
  };

  window.eliminarEgreso = (id) => {
    const indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    if (indiceEliminar !== -1) {
      egresos.splice(indiceEliminar, 1);
      cargarCabecero();
      cargarEgresos();
    }
  };

  

window.agregarDato = () => {
  const forma = document.getElementById('forma');
  const tipo = forma.tipo.value;
  const descripcion = forma.descripcion.value;
  const valor = parseFloat(forma.valor.value);
  if (descripcion.trim() !== '' && !isNaN(valor)) {
    if (tipo === 'ingreso') {
      ingresos.push(new Ingreso(descripcion, valor));
      cargarCabecero();
      cargarIngresos();
    } else { 
      egresos.push(new Egreso(descripcion, valor));
      cargarCabecero();
      cargarEgresos();
    }
    forma.reset();
  }
};

  const cargarApp = () => {
 
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
  };
  window.onload = cargarApp;
  document.addEventListener('DOMContentLoaded', () => {
    cargarApp(); 
  });
  