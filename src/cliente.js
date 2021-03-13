export default class Cliente {
    constructor(nombre, impuesto){
        this._nombre = nombre,
        this.impuesto = impuesto
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(v){
        return this._nombre = v
    }

    calcularImpuesto(){
        return Math.round((((this.impuesto._montoBruto - this.impuesto._deducciones)*21)/100))
    }
}