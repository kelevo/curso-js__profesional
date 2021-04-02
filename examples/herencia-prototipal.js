function Hero(name) {
    this.name = name;
}

Hero.prototype.saludar = function() {
    console.log(`Hola, soy ${this.name}.`);
};

const zelda = new Hero('Zelda');

//-------------------------------------------------------------

//PROPIEDADES DE LA INSTANCIA
console.log('Name: ', zelda.name);

//-------------------------------------------------------------

//PROPIEDADES DE LA "CLASE"
console.log('Saludar: ', zelda.saludar);

//--------------------------------------------------------------

//PROPIEDADES HEREDADAS EJEMPLO: toString
console.log('toString: ', zelda.toString);

//--------------------------------------------------------------

//hasOwnProperty (de deonde sale toString o esto?)
console.log('zelda.hasOwnProperty(name): ',
            zelda.hasOwnProperty('name')
            //dara true, esto significa que name si es de zelda
);
