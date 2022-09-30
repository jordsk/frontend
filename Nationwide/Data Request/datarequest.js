"use strict"


const URL = "datarequest.json";
const URL2 = "https://reqres.in/";

fetch(URL2)
fetch('https://reqres.in/api/users?page=2')
     .then((response) => {
         if (response.status !== 200) {
             console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
             return;
         }
     response.json()
     .then(data => console.log(data));         
     })
     .catch(err => console.error(`Fetch Error :-S ${err}`));

     function appendData(data){
        let dataList = document.getElementById("myData");
        for(let i = 0; i<data.length; i++){
            let trainer = document.createElement("div");
            let id = document.createElement("card");
            id.innerText = "ID: " + data[i].userId;
            trainer.appendChild(id);
            let name = document.createElement("p");
            name.innerText = "Name: " + data[i].name;
            trainer.appendChild(name);
            dataList.appendChild(trainer);
        }
    }