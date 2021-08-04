const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.write("<h1>Welcome to Home Page</h1>");
    res.send();
});

app.get("/about", (req,res) => {
    // using 200 means client (search on web)
    //res.status(200).send("Welcome to AboutUs Page");
    res.send("Welcome to AboutUs Page");
});

app.get("/contact", (req,res) => {
    //making an array object
    // res.send([
    //     {
    //     id: 1,
    //     name: "Amit",
    //     },
    //     {
    //         id: 2,
    //         name: "Sam",
    //     },
    //     {
    //         id: 1,
    //         name: "Nik",
    //     },
    // ]);
   //we can use .json as well
    res.json([
        {
        id: 1,
        name: "Amit",
        },
        {
            id: 2,
            name: "Sam",
        },
        {
            id: 1,
            name: "Nik",
        },
    ]);
});
// The methods[res.send and res.json] are identical when an object or array is passed,
//but res.json() will also convert non-object, such as null

app.get("/temp", (req,res) => {
    //sending plain JS object as response and in behind the scene express converts it into JSON Data using stringfy
    res.send({
        id: 1,
        name: "Amit",

    });

});

app.listen(port, () => {
    // `` using this is a ES6 way
    console.log(`Listening to port no. ${port}`);
});