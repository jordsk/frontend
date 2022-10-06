const express = require("express");
const app = express ();

app.get('./', (req, res) => res.send('Hello, my name is JK!'));

let names = ['Jord', 'Dyl', 'Harry', 'Sam', 'James'];

app.post('/CreateTEAM', (req, res) => console.log('CrreateTEAM'));

app.get('/getAll', (req, res) => res.send(names));

app.get('/get/:id', (req, res) => res.send(names[req.params.id]));






app.listen(4004, () => console.log("Welcome to the house of FUN!"));