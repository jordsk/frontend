const express = require('express');

const bodyParser = require("body-parser");

const app = express();

let names = ['JK', 'Chris', 'Rhys', 'Dale', 'Bob'];

app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hello, my name is JK!'));

app.get('/getAll', (req, res) => res.send(names));

app.get('/get/:id', (req, res) => res.send(names[req.params.id]));

app.get('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

const server = app.listen(4001, () => console.log(`Server successfully started on port ${server.address().port}`));