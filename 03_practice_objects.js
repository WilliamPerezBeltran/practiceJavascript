function Movil(marca, peso, pantalla, color) {
  this.marca = marca;
  this.peso = peso;
  this.pantalla = pantalla;
  this.color = color;
}

a = new Movil("mazda", 23, "grande", "verde");
console.log(a.marca);
console.log(a.peso);
console.log(a.pantalla);
console.log(a.color);
