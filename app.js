const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello from express");
});

app.get("/about", (req, res) => {
    res.send("About Page created");
});

app.listen(8000, () => {
    console.log("listening to port 8000");
});