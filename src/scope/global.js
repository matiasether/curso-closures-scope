var pepe; //declarada pero no asignada 

var momo = 'asignada'; //declarada y asignada
momo = 're-asignada';
//se volvio a asignar  un valor a la variable 'segunda'
//segunda ya no es 'declarada' sino 're-asignada

var pepe = 'redeclarada y reasignada';
//pepe se ha vuelto a crear y se le ha asignado un valor
//sobre pepe sin valor asignado en la linea #1

//Global scope
var fruta = 'manzana' //global
function mejorFruta() {
    console.log(fruta);
}
mejorFruta();

function paises() {
    pais = 'Argentina' //global
    console.log(pais)
}
paises()
console.log(pais)
// resultado es argentina argentina
//se ha accedido a la variable pais que esta
//dentro de una funcion como variable global