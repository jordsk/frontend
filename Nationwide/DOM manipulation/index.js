"use strict"

const makePara = () => {
    const newPara = document.createElement("p");
    newPara.id = "paraID";
    newPara.innerText = "New paragraph made";
    document.body.appendChild(newPara);
}

makePara();

const updatePara = () => {
    const existingPara = document.getElementById("paraID");
    console.log(existingPara);
    const newText = document.getElementById("paraText").value;
    console.log(newText);
    existingPara.innerText= newText;
}

updatePara();

const deletePara = () => {
    const existPara = document.getElementById("paraID");
    existPara.remove();
}