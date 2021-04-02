//ONJETO COMUN Y CORRIENTE
const zelda = {
    name: 'Zelda'
}
zelda.saludar = function() {
    console.log(`Hola soy ${this.name}`)
}
zelda.saludar();

//Otro objeto ahora Link
const link = {
    name: 'Link'
}
link.saludar = function() {
    console.log(`Hola soy ${this.name}`)
}
link.saludar();

//----------------------------------------------------------------------------------

//MAS EFIENCIA PARA NO ESCRIBIR TANTO
function Hero(name) {
    const hero = {
        name: name
    }

    hero.saludar = function() {
        console.log(`Hola soy ${this.name}`)
    };

    return hero
}
//creamos
const zelda = Hero('Zelda');
zelda.saludar();
const link = Hero('Link');
link.saludar();

//---------------------------------------------------------------------------------

//AUN PODEMOS MEJORAR MAS Y EVITAR TENER QUE CREAR LA MISMA FUNCION CADA VEZ
const heroMethods = {
    saludar: function() {
        console.log(`Hola me llamo ${this.name}`)
    },
}
function Hero(name) {
    const hero = {
        name: name
    }
    hero.saludar = heroMethods.saludar;
    return hero
}
//creamos
const zelda = Hero('Zelda');
zelda.saludar();
const link = Hero('Link');
link.saludar();

//---------------------------------------------------------------------------------

//OBJECT.CREATE => UN METODO AUN MEJOR
//object.create va a recibir un objeto y creara un nuevo objeto, el nuevo objeto tendra todas
//las nuevas propiedades que el objeto que recibio
//const nuevoObjeto = Object.create(objeto)
const heroMethods = {
    saludar: function() {
        console.log(`Hola me llamo ${this.name} y soy superheroe`)
    },
}
function Hero(name) {
    //Trearemos todo lo que esta en heroMethods
    const hero = Object.create(heroMethods);
    hero.name = name;
    return hero;
}
//creamos
const zelda = Hero('Zelda');
zelda.saludar();
const link = Hero('Link');
link.saludar();

//----------------------------------------------------------------------------------

//LOS METODOS DE HERO DENTRO DE HERO
function Hero(name) {
    //Trearemos todo lo que esta en heroMethods
    const hero = Object.create(Hero.prototype);
    hero.name = name;
    return hero;
}
Hero.prototype.saludar = function() {
    console.log(`Soy superheroina! ${this.name}`);
}
//creamos
const zelda = Hero('Zelda');
zelda.saludar();
const link = Hero('Link');
link.saludar();

//----------------------------------------------------------------------------------

//NEW ES UN ATAJO (AZUCAR SINTACTICA) PARA LLEVAR HERO.POROTOTYPE AL OBJETO
function Hero(name) {
    this.name = name;
}
Hero.prototype.saludar = function() {
    console.log(`New: ${this.name}`);
}
//creamos
//Cuando usamos new el atajo que hace es que nos ahorra tener que crear el Object.create()
const zelda = new Hero('Zelda');
zelda.saludar();
const link = new Hero('Link');
link.saludar();