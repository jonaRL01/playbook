class Pokemon{
    constructor(nombre){
        this.nombre = nombre
    }
    sayHello(){
        console.log(`Mi pokemon ${this.nombre} te da la bienvenida a la Misión Backend`)
    }
    sayMessage(mensaje){
        console.log(`Mi pokemon ${this.nombre} dice : ${mensaje}`)
    }
}

module.exports = Pokemon