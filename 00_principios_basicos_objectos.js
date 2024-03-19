var persona = {};

var persona = {
  nombre: ["Bob", "Smith"],
  edad: 32,
  genero: "masculino",
  intereses: ["música", "esquí"],
  bio: function () {
    return (
      this.nombre[0] +
      "" +
      this.nombre[1] +
      " tiene " +
      this.edad +
      " años. Le gusta " +
      this.intereses[0] +
      " y " +
      this.intereses[1] +
      "."
    );
  },
  saludo: function () {
    alert("Hola, Soy " + this.nombre[0] + ". ");
  },
};

var obj = {
  nombre: "william perez",
  intereses: ["programar", "hacer matematicas"],
  bio: function () {
    return this.nombre + this.intereses[0];
  },
};

console.log(obj.nombre);
console.log(obj.intereses);
console.log(obj.intereses[0]);
console.log(obj.bio());
console.log("------------------");
console.log(obj["nombre"]);

persona.edad = 34;
persona["nombre"]["apellido"] = "Pérez";

console.log(persona);

persona.despedida = function () {
  return "adios a todos!";
};
console.log("-----------");
console.log(persona);
console.log(persona.despedida());
