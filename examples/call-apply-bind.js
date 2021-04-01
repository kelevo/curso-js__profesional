//ESTABLECE THIS USANDO CALL
function saludar() {
    console.log(`Hola. Soy ${this.name} ${this.apellido}`);
}
//Creamos un objeto
const richard = {
    name: 'Patrick Jhonatan',
    apellido: 'Hernandez Blanco'
}
//La llamaremos con call
//Primer parametro => this
saludar.call(richard)

//ESTABLECE THIS USANDO CALL Y PASAR ARGUMENTOS A LA FUNCION
//complementa con la parte de arriba
function caminar(metros, direccion) {
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`)
}
caminar.call(richard, 400, 'norte');

//ESTABLECE THIS USANDO APPLY Y PASAR ARGUMENTOS A LA FUNCION
//primer argumento => this
//los demar arguemtos iran dentro de un arreglo separados por ,
caminar.apply(richard, [800, 'noreste']);
//tabien podemos usarlo de la siguiente manera
// const valores = [800, 'noreste']
// caminar.apply(richard, valores);

//A PESAR DE LOS ANIOS DE EXPERIENCIA SE CONFUNDE CALL CON APPLY
//aqui un truco para no hacerlo
/*
    call - coma
    apply - arreglo
*/

//ESTABLECER THIS EN UNA NUEVA FUNCION USANDO BIND
const daniel = {
    name: 'Daniel',
    apellido: 'Sanchez'
}
//bind nos crea nuevas funciones
const danielSaluda = saludar.bind(daniel);
danielSaluda();
//Pasando parametros
const danielCamina = caminar.bind(daniel);
danielCamina(1000, 'este');
/* 
Podemos pasar paramtros junto al this
const danielCamina = caminar.bind(daniel, 1000, 'este');
danielCamina();

tambien podemos guardar argumentos parciales, poner unos junto al this y otros en el llamado
const danielCamina = caminar.bind(daniel, 1000);
danielCamina('este');
*/