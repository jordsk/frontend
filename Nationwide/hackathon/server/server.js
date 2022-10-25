const express = require('express');
let request = require("request");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
    res.json({"pokemons":["pokemonOne", "pokemonTwo", "pokemonThree,"] })
})

app.get ("/", (req, res) => res.send("Welcome to my Pokemon Store"));
app.get("/newEndpoint", (req, res) => res.send("This is my Pokemon Store endpoint"));

app.get("/getNewpokemon", (req, res) => {
    request("http://localhost:5000", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    }
    );
});

app.listen(5000, () => { console.log("server started on port 5000") })