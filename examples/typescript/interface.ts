// Cuando creamos una interfaz se vuelve un tipo
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde'
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color: Color?;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
}

/*
Si no cumplimos el contrato de la interfaz es decir si creamos a rect
y no colocamos el ancho y el alto, ejemplo:

let rect: Rectangulo = {
    ancho: 4,
}

Lo anterior nos dara un error
*/

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());