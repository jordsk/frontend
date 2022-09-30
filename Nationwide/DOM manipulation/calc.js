"use strict"

const calculator = document.getElementById("calculator");

const addi = () => {
    calculator.value = parseInt(calculator.value) + ;
}

const subt = () => {
    calculator.value = parseInt(calculator.value) - ;
}

const multi = () => 
    calculator.value = parseInt(calculator.value) * ;
}

const divi = () => {
    calculator.value = parseInt(calculator.value) / ;
}

const reset = () => {
    calculator.value = "0";
}

const zero = () => {
    calculator.value = "0";
}

const one = () => {
    calculator.value = "1";
    history();
}
const two = () => {
    calculator.value = "2";
    history();
}

const three = () => {
    calculator.value = "3";
    history();
}

const four = () => {
    calculator.value = "4";
    history();
}

const five = () => {
    calculator.value = "5";
    history();
}

const six = () => {
    calculator.value = "6";
    history();
}

const seven = () => {
    calculator.value = "7";
    history();
}

const eight = () => {
    calculator.value = "8";
    history();
}

const nine = () => {
    calculator.value = "9";
    history();
}

const equal = () => {
    calculator.value = "=";
    history();
}

const history = () => {
    const hist = document.createElement("p");
    hist.innerText = calculator.value;
    const output = document.getElementById("output");
    output.prepend(document.body.appendChild(hist));
}

//const add (a,b,operator) => {
  // let result;
    //switch(operator){
    //    case"+";
    //    result =a+b;
    //    break
  //  }
//}