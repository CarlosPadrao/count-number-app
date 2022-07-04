// JS AQUI
let dec = document.getElementById('dec');
let res = document.getElementById('res');
let inc = document.getElementById('inc');
let number = document.getElementById('number');
var a = 0;

number.innerHTML = a;

// contador com 'if' e 'switch case'

// dec.addEventListener("click", decrease() => {})
function decrease() {
    number.innerHTML = --a;
    // if ( a > 0 ) {
    //     number.style.color = "green";
    // } else if ( a < 0) {
    //     number.style.color = "red";
    // } else if ( a == 0 ) {
    //     number.style.color = "white";
    // }
    switch(a) {
        case (-1) :
            number.style.color = "red";
            break;
        case (0) :
            number.style.color = "white";
            break;
    }
};
//

// res.addEventListener("click", reset() => {})
function reset() {
    a = 0;
    number.innerHTML = a;
    number.style.color = "white";
};
//

// inc.addEventListener("click", increase() => {})
function increase() {
    number.innerHTML = ++a;
    // if ( a > 0 ) {
    //     number.style.color = "green";
    // } else if ( a < 0 ) {
    //     number.style.color = "red";
    // } else if ( a == 0 ) {
    //     number.style.color = "white";
    // }
    switch(a) {
        case (+1) :
            number.style.color = "green";
            break;
        case (0) :
            number.style.color = "white";
            break;
    }
};

