class Car{
	constructor(brand){
		this.brand = brand
	}
	present(){
		return `i have a ${this.brand}`
	}
}

class Model extends Car{
	constructor(brand, mod){
		super(brand)
		this.model = mod
	}
	show(){
		return `${this.present()}, it is a ${this.model}`
	}
}

myCar = new Model("Ford","2015")

console.log(myCar.show())
