var firstName; //la variable declarada, pero no esta definida = Undefined
console.log(firstName) //undefined
firstName = 'Matias'
console.log(firstName) //Matias


var secondName = "Guillermo" //variable declarada y asignada
console.log(secondName) //Guillermo

secondName = 'Daniel' //variable reasignada
console.log(secondName) //Daniel

//__________________________________________________

//Let 
let fruit = 'Apple' //declarada y asignada
fruit = 'Kiwi' //reasignar
console.log(fruit) //Kiwi

//No se puede volver a declarar la variable fruit, con ambito de bloque
//let fruit = 'Banana' 

//_______________________________________________

//const 
const animal = 'dog' //declarado y asignado
//animal = 'cat' //reasignado
console.log(animal) //TypeError: Assignment to constant variable.
//no se puede reasignar constantes

//No se puede redeclarar la variable 'animal', con ambito de bloque
//const animal = 'cat'

//CONST NO ES INFALIBLE COMO METODO INMUTABLE
const vehiculos = []
vehiculos.push('Hola')
console.log(vehiculos) //se añade 'Hola' al arreglo en posicion 0
vehiculos.push('como estas?')
console.log(vehiculos) //[ 'Hola', 'como estas?' ]
console.log(vehiculos.length) //2
vehiculos.pop()
console.log(vehiculos) //se elimino 'como estas?'
console.log(vehiculos.length) //1

