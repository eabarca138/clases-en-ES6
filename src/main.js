import Impuesto from './impuesto.js';
import Cliente from './cliente.js';


const btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', () =>{

    let nombre = document.getElementById('nombre').value
    let montoBruto = document.getElementById('montoBruto').value
    let deducciones = document.getElementById('deducciones').value
    let form = document.getElementById('form')

    const impuesto = new Impuesto(montoBruto, deducciones)
    const cliente = new Cliente(nombre, impuesto) 

console.log(cliente);
console.log(cliente.calcularImpuesto());

/* let baseDatosClientes = []
baseDatosClientes.push(cliente)
 */

const agregar = () =>{
    document.getElementById('datos').innerHTML += '<tr> <td>' + cliente._nombre + '</td> <td>' + cliente.calcularImpuesto() + '</td>' +  '</tr>'
    }
const limpiar = () =>{
    form.reset()
};
    agregar()
    limpiar()
});