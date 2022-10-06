const express = require("express");

const bodyParser = require("body-parser");

const app = express ();

const names = ['Jord', 'Dyl', 'Harry', 'Sam', 'James'];

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log("Request recevied at", new Date());
   return next(); 
})

app.use((req, res, next) => {
    console.log("I just exist to be an example");
    return next();
})


app.get("/hello", (req, res) => res.send('Hello, my name is JK!'));


app.get("/hello", (req, res) => {
    res.send("Hello, World!")
});

app.get('/getAll', (req, res) => res.send(names));

app.get('/getNames/:id', (req, res) => res.send(names[req.params.id]));


const deleteMiddleware = (req, res, next) => {
    console.log("You're trying to DELETE A DUCK? YOU MONSTER!!!");
    next();
}

app.post('/CreateTEAM', (req, res) => console.log('CreateTEAM'));

app.post("/createNames", (req, res) => {
    names.push(req.body);
    res.status(201).send(names);
});

app.patch("/updateNames/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);
    res.send();
})

app.delete("/removeNames/:id", deleteMiddleware, (req, res) => {
    console.log("ID:", req.params.id);

    res.send(names.splice(req.params.id));
});

app.delete("/remove/:id", (req, res) => res.send(names.splice(req.params.id, i)));


app.put("/replace/:id", (req, res) =>{
    const newName = req.query.name;
    names[req.params.id] = newName;
})


app.use((req, res, next) => {
    //do something
    next();
})

//const server = app.listen(4001, () => console.log(`Server successfully started on port ${server.address().port}`));

app.listen(4001, () => console.log("Welcome to the house of FUN!"));