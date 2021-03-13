export default  class Impuesto{
    constructor(montoBruto, deducciones){
        this._montoBruto = montoBruto,
        this._deducciones = deducciones
    }
    get montoBruto(){
        return this._montoBruto
    }
    set montoBruto(v){
        return this._montoBruto = v;
    }

    get deducciones(){
        return this._deducciones;
    }
    set deducciones(v){
        return this._deducciones = v
    }
}