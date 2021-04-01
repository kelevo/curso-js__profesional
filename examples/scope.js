//GLOBAL SCOPE
var message = 'Hello, Platzi';
var $ = function(message) {
    console.log(`Say: ${ message }`);
};

//FUNCTION SCOPE
function printNumbers() {
    //Aunque declaremos nuestra variable dentro JS hara lo siguiente
    //var i;
    //Cuando por fin se ejecute el console.log() el loop
    //ya se habra cumpplido y entonces i vale 10
    for(var i = 0; i< 10; i++) {
        //Se puede resolver de la siguiente manera
        function eventuallyPrintNumber(n) {
            setTimeout(function () {
                console.log(n);
            }, 100)
        }
        eventuallyPrintNumber(i);
    }
}

//BLOCK SCOPE
function printNumbers2() {
    for(let i = 0; i< 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100)
    }
}

//MODULE SCOPE