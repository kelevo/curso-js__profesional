//This es un concepto que tienen muchos lenguajes de programacion
//sobre todo aquellos que son orientados a objetos


//THIS EN EL SCOPE GLOBAL
console.log(`This: ${this}`);
//Siempre que usemos this en el objeto global el browser lo va
//a asignar a window

//---------------------------------------------------------------------

//THIS EN EL SCOPE DE UNA FUNCION
function whoIsThis() {
    return this;
}
console.log(`whoIsThis(): ${whoIsThis()}`);
//Nuevamente this es window por que estamos jecutando la funcion directamente
//cuando hacemos esto el motor de JS le asignara a this window
//excepto cuando tengamos activado el strict mode 

//----------------------------------------------------------------------

//THIS EN EL SCOPE DE UNA FUNCION EN STRICT MODE
function whoIsThisStrict() {
    "use strict"; //El uso estricto solo estara dentro de la funcion
    return this;
}
console.log(`whoIsThisStrict(): ${whoIsThisStrict()}`);
//Nos retornara undefined
//Con strict mode el motor de JS nos ayuda a detectar errores rapidamente

//-----------------------------------------------------------------------

// This se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

// No se puede asignar un valor a this directamente y este depende de en que scope nos encontramos:

// Cuando llamamos a this en el Global Scope o Function Scope, se hace referencia al objeto window. 
//A excepción de cuando estamos en strict mode que nos regresará undefined.
// Cuando llamamos a this desde una función que está contenida en un objeto, this se hace referencia a ese objeto.
// Cuando llamamos a this desde una “clase”, se hace referencia a la instancia generada por el constructor.

//--------------------------------------------------------------------------

//THIS EN EL CONTEXTO DE UN OBJETO
const person = {
    name:  'Gabriel',
    saludar: function() {
        console.log(`Hola soy ${this.name}`);
    }
}
person.saludar();

//-------------------------------------------------------------------------

//THIS CUANDO SACAMOS A UNA FUNCION DE UN OBJETO
const accion = person.saludar;
accion();
//Solo nos va a imprimir => Hola soy

//--------------------------------------------------------------------------

//THIS EN EL CONTEXTO DE UNA CLASE
function Person(name) {
    //this comienza siendo esto: this = {}
    this.name = name;
}
//Le otorgamos un metodo a los objetos que se comportan como clases
Person.prototype.saludar = function() {
    console.log(`Me llamo ${this.name}`);
}
//Creamos una instancia del objeto Person
const elizabeth = new Person('Elizabeth');
elizabeth.saludar();
//This se va a referir a la instancia que en este caso es => const elizabeth