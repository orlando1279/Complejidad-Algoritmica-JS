const performance = require('perf_hooks');
function contar(n){
    for (let i=0; i < n; i++){
        console.log(i)
    }
}
const tiempoInicial = performance.performance.now()
contar(5) 
const tiempoFinal = performance.performance.now()
const duracion = tiempoFinal - tiempoInicial
console.log(duracion)

console.time("duración")
contar(5) 
console.timeEnd("duración")