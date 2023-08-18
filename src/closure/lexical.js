/* Los closures permiten acceder al ámbito de una función exterior
 desde una función interior. En javascript, los closures se crean
  cada vez que una función es creada.

    Los closures no son siempre utilizados.

    Un closure es cuando una función accede
     a una variable fuera de su contexto.

    Al trabajar con closures entra
     en juego el concepto de alcance
      de las variables.
*/

const laGlobal = 0;
function miFunc() {
    const numerito = 1;
    console.log(laGlobal)

    function padre() { //funcion interna (es un closure)
        const interna = 2
        console.log(numerito, laGlobal)
        
        function niño() {
            console.log(interna, numerito, laGlobal)
        }
        return niño()
    }
    return padre()
    
}
miFunc()

function miFuncion() {
    return function() {
      console.log("¡Hola desde la función anidada!");
    };
  }
  
  // Llamada a la función anidada utilizando el doble paréntesis
  miFuncion()();

  function sumWithClosure(firstNum) {
    // Tu código aquí 👈
    firstNum;
    return function (secondNum = 0) {
      return console.log(firstNum + secondNum)
    }
  }
  sumWithClosure(2)(3) //resultado esperado = 5
  sumWithClosure(90)()