//el modo estricto fue introducido en ECMAscript 5
/*El modo estricto tiene varios cambios en la semántica normal de JavaScript:

    Elimina algunos errores silenciosos de JavaScript
     cambiándolos para que lancen errores.

    Corrige errores que hacen difícil para los motores de JavaScript 
    realizar optimizaciones: a veces, el código en modo estricto puede correr
     más rápido que un código idéntico pero no estricto.

    Prohíbe cierta sintaxis que probablemente sea
     definida en futuras versiones de ECMAScript.
*/

pi = 3.1416
console.log(pi)

//JS lee pi asignandolo a var pi = '3.1416'
//pero si usamos el 'use strict'

function myFunc(params) {
    'use strict'
    return pi = 3.1416
}
console.log(myFunc()) //ReferenceError: pi is not defined