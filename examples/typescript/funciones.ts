function add (a: number, b: number): number {
    return a + b;
}

const suma = add(4, 6);

// (() =>) representa la funcion ((number) => number, que toma que regresa)
function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// --------------------------------------------------------------------------

function fullName (firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}
function fullName2 (firstName: string, lastName: string = "Hernandez"): string {
    return `${firstName} ${lastName}`;
}
// Para que podamos invocar a la funcion es obligatorio pasar ambos parametros
const patrick = fullName('Patrick', 'Hernandez');
const elizabeth = fullName('Elizabeth');
const bruno = fullName2('Bruno');
console.log(patrick);
console.log(elizabeth);
console.log(bruno);
/**
 * Para que posamos pasar solo un parametro a la funcion y posamos invocarla
 * antes de los dos puntos : en la function colosamos un signo de interrogacion ?
 * de el parametro que puede ser opcional
 */

/**
 * Cuando queremos que tenga un valor por omision, despues de los : colocamos
 * el valor por defecto, ejemplo lastName: string = "Hernandez"
 */