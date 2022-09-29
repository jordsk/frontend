"use strict";

const counter = document.getElementById("counter");

const minusOne = () => {
    counter.value = parseInt(counter.value) - 1;
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

//additional extras
const history = () => {
    const hist = document.createElement("p");
    hist.innerText = counter.value;
    const output = document.getElementById("output");
    output.prepend(document.body.appendChild(hist));
}
