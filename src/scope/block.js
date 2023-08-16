//el block scope se agrega en ECMA script 6
function frutas() {
    if(true){
        var fruta1 = 'manzana'
        let fruta2 = 'kiwi'
        const fruta3 = 'banana'
    }
    console.log(fruta1) //solo manzana es visible fuera del bloque, 
        //significa que es una variable de funcion
    console.log(fruta2) //variable de bloque (block scope)
    console.log(fruta3) //variable de bloque (block scope)
}
frutas()