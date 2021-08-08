const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs"); //day - 8
const port = 8000;

//Relative Absolute (relative is when we use  ../ it id how we use relative path conventions) but we will use here relative absolute __dirname it is what we learnt in nodeja
console.log(__dirname); //it will give us the D:\Saved files\expresscode\expressjs\src  but we want in place of src folder path but we want public folder path

//Using path.join hwlps to navigate throughout the folder 
console.log(path.join(__dirname, "..")); // It will give = D:\Saved files\expresscode\expressjs\  = so we can see we are now in Main Directory

//Finally to go to any folder first we go to main dorectory then from there we just need to type name of that after ../
const staticPath = path.join(__dirname, "../public"); // It will give = D:\Saved files\expresscode\expressjs\public

const templatePath = path.join(__dirname, "../templates/views"); //day - 7

const partialsPath = path.join(__dirname, "../templates/partials"); //day - 8  


//Middleware           -  builtin in express = // Here express.static is  =  //This is our root main page so if we want to add html file here we have a built in express code i.e express.static(root,[options]) root = path where file is
                         // we gave staticPath  a directory and store in staticPath variable and then using express.static method to call it
app.use(express.static(staticPath)); // if we comment out this part then hello from express will run bcz (it is a Static Data )we have set it as default in app.get ("/", ()) in this 

// To set the view Engine = day - 6
app.set("view engine", "hbs");
app.set("views", templatePath); //day -7 =  TemplatePath is a variable where we have set the path - changing name from views to templates and setting it here
hbs.registerPartials(partialsPath); //day - 8  = partialsPath is a variable where we are setting the path for partials
//Template Engine  Route   = //Now this is where (day - 6) views index.hbs will run when we comment out staticPath 
app.get("", (req, res) => {
    res.render('index'); //use app.render whenever we want to use template engine(.hbs , .pub, .ejs etc)
});

app.get("/", (req, res) => {
   
    res.send("hello from express");
});

app.get("/about", (req, res) => {
    res.send("About Page created");
});

app.listen(port, () => {
    console.log("listening to port 8000");
});