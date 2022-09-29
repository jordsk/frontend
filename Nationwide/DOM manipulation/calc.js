"use strict"

const calculator = document.getElementById("calculator");

const addition = () => {
    calculator.value = parseInt(calculator.value) + ();
    history();
}

const substraction = () => {
    counter.value = parseInt(calculator.value) - ();
    history();
}
const multiply = () => {
    calculator.value = parseInt(calculator.value) * ();
    history();
}

const division = () => {
    calculator.value = parseInt(calculator.value) / ();
    history();
}

const reset = () => {
    counter.value = "0";
    history();
}


const add (a,b,operator) => {
   let result;
    switch(operator){
        case"+";
        result =a+b;
        break
    }
}