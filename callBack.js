/*funcion anonima = es una funcion que se puede almacenar en una variable 
es aquella funcion que no tiene nombre 

const sumar = string |numero|arreglo|function|

const sumar = ()=>{}

la funcion sumar ya puede ser pasada como parametro a cualquier otra funcion 

ademas de almacenarce en una variable puede ser pasada directamente a una fucnion 


function buscar(dni, fn ){

}

console.log(buscar("12", ()=>{}))

1. la funcion anonima se va almacenar en la variable fn 
2. la funcion anonima en su estructura pueden almacenarse en una variable 

cuando yo tengo const x = ()=>{}
podriamos pensar que x es la funcion, esto no es cierto. X es una variable que dentro tiene almacenado una funcion anonima 
por lo tanto, cuando yo tengo x() (x parentesis), llamo a la funcion implicita que la variable x tiene almacenada. 
*/
/*
ventajas: 
1. La ventaja principal es que podemos ejecutar function sin necesidad de returnar valores*/

/*
la potencia de un callback es: esperar pacientemente a que una funcion asincrrona pueda terminar para que este callback pueda 
recibir la informacion que la funcion buscar nos quiere mandar



la potencia de un callback es esperar pacientemente a que una funcion asincrona pueda terminar para que el callBack pueda
recibir la informacion que la funcion invocadora quiera mandar 

 */
function buscar(dni, fn) {
  setTimeout(() => {
    fn("william");
  }, 2000);
}
buscar("12", (name) => {
  console.log("se ejcuto el callBack");
  console.log(name);
});

for (var i = 0; i < 10; ++i) {
  console.log(`${i}`);
}
