function Caja(ancho, largo, alto) {
  function volumen(a, b, c) {
    return a * b * c;
  }
  this.volumenCaja = volumen(2, 3, 4);
}

var contenedor = new Caja(4, 3, 4);
console.log(contenedor);
console.log(contenedor.volumenCaja);
// console.log(contenerdor.volumen(4,3,5))
// console.log(contenerdor.volumenCaja(4,3,5))
