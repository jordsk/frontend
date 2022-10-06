const express = require("express");
const app = express ();

app.get('./', (req, res) => res.send('Hello, my name is JK!'));

const names = ['Jord', 'Dyl', 'Harry', 'Sam', 'James'];

app.post('/CreateTEAM', (req, res) => console.log('CreateTEAM'));

app.get('/getAll', (req, res) => res.send(names));

app.get('/get/:id', (req, res) => res.send(names[req.params.id]));


app.delete("/remove/:id", (req, res) => res.send(names.splice(req.params.id, i)));


app.put("/replace/:id", (req, res) =>{
    const newName = req.query.name;
    names[req.params.id] = newName;
})


//onst server = app.listen(4004, () => console.log(`Server successfully started on port ${server.address().port}`));

app.listen(4000, () => console.log("Welcome to the house of FUN!"));