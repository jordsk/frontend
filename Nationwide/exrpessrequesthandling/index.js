const express = require('express');

const bodyParser = require("body-parser");

const app = express();

//const squadRoutes = require("/.routes/squad");

let names = ['JK', 'Chris', 'Rhys', 'Dale', 'Bob'];

app.use(bodyParser.json());


app.use((req, res, next) => {
    console.log("Request recevied at", new Date());
   return next(); // calls the next func
})

app.use((req, res, next) => {
    console.log("LightWork");
    return next();
})
app.get('/hello', (req, res) => res.send('Hello, my name is JK!'));

app.get('/getNames/', (req, res) => res.send(id));

app.get('/getAll', (req, res) => res.send(names));

app.get('/get/:id', (req, res) => res.send(names[req.params.id]));

app.get('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

const deleteMiddleware = (req, res, next) => {
    console.log("You're trying to DELETE A DUCK? YOU MONSTER!!!");
    next();
}

app.delete("/removeDuck/:id", deleteMiddleware, (req, res) => {
    console.log("ID:", req.params.id);

    res.send(ducks.splice(req.params.id));
});

app.post('/createSquad', (req,res)=> {
    const name = req.body.name;
    names.push(Squad);
    res.status(201).send(`${Squad} added successfully`);
});

app.use((req, res, next) => {
    console.log("Request recevied at", new Date());
   return next(); // calls the next func
})


app.patch("/updateName/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);

    res.send();
})

app.delete("/removeName/:id", (req, res) => {
    console.log("ID:", req.params.id);
    res.send();
});

function sum(a, b) {}
function next(err){}
app.patch("/updateName/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);
    res.send();
})

app.delete("/removeName/:id", deleteMiddleware, (req, res, next) => {
    const {id}  = req.params;
    console.log("ID:", id);
    if (id > names.length) return next({ status: 404, message: `No lightwork squad found with id ${id}`});
    res.send(names.splice(id));
});

app.use((req, res) => {
    console.log("You know the vibes");
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || "oops");
})

const server = app.listen(4001, () => console.log(`Server successfully started on port ${server.address().port}`));