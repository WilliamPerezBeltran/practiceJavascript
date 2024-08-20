let message: string = 'Hello, World!';
console.log(message);

let nombre:string = "william"
let edad:number = 234


console.log(nombre)
console.log(edad)



interface Persona{
	nombre:string;
	edad:number;
}

const persona: Persona = {
	nombre: "william perez ",
	edad: 234
}


console.log(persona.nombre)
console.log(persona.edad)


interface Persona1{
	nombre:string,
	edad:number
}

const personas: Persona1[]=[
	{nombre:"william",edad:4},
	{nombre:"osca",edad:2},
	{nombre:"rocio",edad:3},
	{nombre:"cama",edad:24},
	{nombre:"sandra",edad:34}
]

for(let i=0 ;i<personas.length;i++){
	console.log(personas[i].nombre)
}

personas.sort((a,b)=> a.edad - b.edad)

	console.log("==================")


for(let i=0 ;i<personas.length;i++){
	console.log(personas[i].edad)
}
