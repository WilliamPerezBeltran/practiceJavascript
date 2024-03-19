function exterior() {
  const mensaje = "hola mundo";
  function interior() {
    return mensaje;
  }
  return interior;
}

const foo = exterior();
console.log(foo);
console.log(foo());
