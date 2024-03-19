https://stackoverflow.com/questions/111102/how-do-javascript-closures-work?rq=1

# Ejemplo con funciones normales

```bash

function foo() {
  const secret = Math.trunc(Math.random() * 100)
  return function inner() {
    console.log(`The secret number is ${secret}.`)
  }
}
const f = foo() // `secret` is not directly accessible from outside `foo`
f() // The only way to retrieve `secret`, is to invoke `f`

```

# Ejemplo con arrow functions

```bash
const myFunc = ()=>{
	const secret = Math.trunc(Math.random() * 100)
	return ()=>console.log(`The secret number is ${secret}.`)
}

const w = myFunc()  // `secret` is not directly accessible from outside `myFunc`
w() // The only way to retrieve `secret`, is to invoke `f`

```

# teoria

https://stackoverflow.com/questions/111102/how-do-javascript-closures-work?rq=1
https://stackoverflow.com/questions/111102/how-do-javascript-closures-work?rq=1
https://stackoverflow.com/questions/111102/how-do-javascript-closures-work?rq=1

# Ejemplo con arrow functions

```bash
const myFunc = ()=>{
	const secret = Math.trunc(Math.random() * 100)
	return ()=>console.log(`The secret number is ${secret}.`)
}


Un cierre es un emparejamiento de:

Una función y Una referencia al ámbito externo de esa función (entorno léxico)
Un entorno léxico es parte de cada contexto de ejecución (marco de pila) y es un mapa entre identificadores (es decir, nombres de variables locales) y valores.

Cada función en JavaScript mantiene una referencia a su entorno léxico externo. Esta referencia se utiliza para configurar el contexto de ejecución que se crea cuando se invoca una función. Esta referencia permite que el código dentro de la función "vea" las variables declaradas fuera de la función, independientemente de cuándo y dónde se llame a la función.

Si una función fue llamada por una función, que a su vez fue llamada por otra función, entonces se crea una cadena de referencias a entornos léxicos externos. Esta cadena se denomina cadena de ámbito.

En el siguiente código, inner forma un cierre con el entorno léxico del contexto de ejecución creado cuando se invoca foo, cerrando la variable secret:


En otras palabras: en JavaScript, las funciones llevan una referencia a una "caja de estado" privada, a la que solo ellas (y cualquier otra función declarada dentro del mismo entorno léxico) tienen acceso. Este cuadro del estado es invisible para la persona que llama a la función, lo que ofrece un excelente mecanismo para ocultar y encapsular datos.

Y recuerde: las funciones en JavaScript se pueden pasar como variables (funciones de primera clase), lo que significa que estos pares de funcionalidad y estado se pueden pasar por su programa: similar a cómo podría pasar una instancia de una clase en C++.

Si JavaScript no tuviera cierres, entonces se tendrían que pasar más estados entre las funciones explícitamente, lo que haría que las listas de parámetros fueran más largas y el código más ruidoso.

Entonces, si desea que una función siempre tenga acceso a un estado privado, puede usar un cierre.

...y con frecuencia queremos asociar el estado con una función. Por ejemplo, en Java o C++, cuando agrega una variable de instancia privada y un método a una clase, está asociando el estado con la funcionalidad.

En C y en la mayoría de los otros lenguajes comunes, después de que una función regresa, ya no se puede acceder a todas las variables locales porque se destruye el marco de la pila. En JavaScript, si declara una función dentro de otra función, las variables locales de la función externa pueden permanecer accesibles después de regresar de ella. De esta manera, en el código anterior, secret permanece disponible para el objeto de función interno, después de que ha sido devuelto por foo.
More about this source textSource text required for additional translation information
Send feedback
Side panels
```
