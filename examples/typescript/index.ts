console.log('Hello, Typescript');

function add (a: number, b:number) {
    return a + b;
}

const sum = add(2, 3);

// Boolean
let muted: boolean = true;
muted = false;
// Si le intentamos asignar algo direfente a un boolean marcara error
//muted = 'callado';

// Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado: number = numerador / denominador;

// Strings
let nombre: string = 'Patrick';
let saludo: string = `Me llamo ${nombre}`;

// Arreglos
// Podemos definir si seran de tipos mezclados o tipos fijos
// Array solo de tipo string
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
// No podemos insertar numeros ya que es string
// people.push(9000);

// Array mezclado
let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9000);

//Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo",
}
let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Hay veces que no tenemos la certeza de que tipo de variable es una variable
// TS nos ofrece any
// String
let comodin: any = "Joker";
// Intentamos asignarle un object asi que da error
// Pero si any en la declaracion podemos meter lo que querramos
comodin = { type: 'Wildcard'};

// Object
let someObjetc: object = { type: 'Wildcard'};