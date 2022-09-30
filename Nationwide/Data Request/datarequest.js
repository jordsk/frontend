"use strict"


//const URL = "trainers.json";
const URL2 = "https://reqres.in/";

fetch(URL2)
.then(function(response){
    return response.json();
})
.then(function (data){
    console.log(data);
})
.catch(function (err){
    console.error(err);
})