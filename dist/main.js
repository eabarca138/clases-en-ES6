"use strict";

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', function () {
  var nombre = document.getElementById('nombre').value;
  var montoBruto = document.getElementById('montoBruto').value;
  var deducciones = document.getElementById('deducciones').value;
  var form = document.getElementById('form');
  var impuesto = new _impuesto["default"](montoBruto, deducciones);
  var cliente = new _cliente["default"](nombre, impuesto);
  console.log(cliente);
  console.log(cliente.calcularImpuesto());
  /* let baseDatosClientes = []
  baseDatosClientes.push(cliente)
   */

  var agregar = function agregar() {
    document.getElementById('datos').innerHTML += '<tr> <td>' + cliente._nombre + '</td> <td>' + cliente.calcularImpuesto() + '</td>' + '</tr>';
  };

  var limpiar = function limpiar() {
    form.reset();
  };

  agregar();
  limpiar();
});