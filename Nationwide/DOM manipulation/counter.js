"use strict";

const counter = document.getElementById("counter");

const minusOne = () => {
    counter.value = parseInt(counter.value) - 1;
    history();
}

const minusFive = () => {
    counter.value = parseInt(counter.value) - 5;
    history();
}
const plusOne = () => {
    counter.value = parseInt(counter.value) + 1;
    history();
}

const reset = () => {
    counter.value = "0";
    history();
}

const plusFive = () => {
    counter.value = parseInt(counter.value) + 5;
    history();
}

//additional extras
const history = () => {
    const hist = document.createElement("p");
    hist.innerText = counter.value;
    const output = document.getElementById("output");
    output.prepend(document.body.appendChild(hist));
}




//const add (a,b,operator) => {
   // let result;
    //switch(operator){
    //    case"+";
     //   result =a+b;
      //  break
 //   }
//}