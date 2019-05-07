function ordenSuperior (letra, cambioDeLetra){
    return cambioDeLetra(letra)
}

const mayus=function(letra ){
    return letra.toUpperCase();
}

const minus = function (letra){
    return letra.toLowerCase()
}

console.log(ordenSuperior("hola", minus))

const mayorQueDosHoras = function (arreglo,callback){
    return callback(arreglo)
};

const compararHoras=function (arreglo){
    let nuevoArreglo = []
    for(i=0 ; i<120 ;i++){
    if (arreglo[i] >= 120) {
        nuevoArreglo.push(arreglo[i])
    }
}
return nuevoArreglo;
} 

const arregloFinal = new arreglo (mayorQueDosHoras(100, 200 , 300, 50, 20))
console.log(arregloFinal.compararHoras)