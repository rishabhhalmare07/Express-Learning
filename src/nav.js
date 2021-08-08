const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req,res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req,res) => {
    // using 200 means client (search on web)
    //res.status(200).send("Welcome to AboutUs Page");
    res.send("Welcome to AboutUs Page");
});

app.get("/contac", (req,res) => {
    res.send("Welcome to contact Page");
});

app.get("/temp", (req,res) => {
    res.send("Welcome to temp Page");
});

app.listen(port, () => {
    // `` using this is a ES6 way
    console.log(`Listening to port no. ${port}`);
});