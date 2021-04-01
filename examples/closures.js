//Closures
//printColor
//El problema es que color esta disponible globalmente
//para solucionarlo usaremos una funcion que se llame a si misma
//IIFE (Inmediately Invoque Function Expression)
(function() {
    //sacamos el codigo del scope global y lo metemos en una funcion
    //ahora ya no esta disponible desde la consola del navegador
    let color = 'green';
    //Esto es un closure, una funcion definida en otra funcion
    function printColor() {
        console.log(color);
    }

    printColor();
})();

//---------------------------------------------------------------------

//FUNCIONES QUE REGRESAN FUNCIONES
function makeColorPrinter(color) {
    let colorMessage = `The color is ${color}`;
        return function() {
            console.log(colorMessage);
        }
}

let greenColorPrinter = makeColorPrinter('green');
console.log(greenColorPrinter); //va a imprimir una funcion
console.log(greenColorPrinter()); //va a imprimir el color

//--------------------------------------------------------------------

//VARIABLES PRIVADAS
const counter = {
    count: 3
}
console.log(counter.count);

//pero si no queemos que nadie pueda leer a count
function makeCounter(n) {
    let count = n;

    return {
        increase: function() {
            count = count + 1;
        },
        decrease: function() {
            count = count - 1;
        },
        getCount: function() {
            return count;
        }
    }
}

let counter = makeCounter(7);
console.log(counter.count);
console.log('The counter is: ', counter.getCount());
counter.increase();
console.log('The counter is: ', counter.getCount());
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.log('The counter is: ', counter.getCount());

//Si intentamos acceder a 
counter.count = 0;
//no se podra ya que esa funcion no esta expuesta