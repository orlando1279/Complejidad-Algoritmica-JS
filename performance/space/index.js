function contar(n){
    for (let i=0; i < n; i++){
        console.log(i)
    }
}
 console.time('duracion-contar');
contar(5) 
console.timeEnd('duracion-contar');

function repertirArreglo (array) {
    let arregloRepetido = [...array]
    return arregloRepetido
}
function convertirAString  (array) {
    let resultado = array.map(elemento => elemento.toString())
    return resultado
}
function dosDimensiones (valor){
    let x = new Array(valor)
    for (let i = 0; i < valor; i++){
        x[i] = new Array(valor).fill(0)
    }
    return x
}
console.log( dosDimensiones(5))
[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
]
