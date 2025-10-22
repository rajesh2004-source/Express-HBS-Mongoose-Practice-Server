// const path = require('path');
// const express = require('express');
// const app = express();
// const hbs = require('hbs');
// const port = process.env.PORT || 9000;


// app.set("view engine","hbs");



// // const staticpath = path.join(__dirname, "public");

// // app.use(express.static(staticpath));
// //changing the views folders name...
// const temp = path.join(__dirname , "temp/views/hi.hbs");
// const part = path.join(__dirname , "temp/header/he.hbs");
// app.set('views',temp);

// hbs.registerPartials(part);

// app.get("", (req ,res) => {
//     res.render("hi.hbs");
// });

// app.listen(port, () => {
//     console.log("all the best");
// });




const path = require('path');
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 9000;

// Pathing to project root is correct
const rootDir = path.join(__dirname, '..');
const viewsPath = path.join(rootDir, "temp/views");
const partialsPath = path.join(rootDir, "temp/header"); 

app.set("view engine", "hbs");
app.set('views', viewsPath);

try { hbs.registerPartials(partialsPath); } catch (error) {}


// --- ROUTES ---

// 1. HOME ROUTE (/)
app.get("/", (req ,res) => {
    res.render("hi", {
        serverStatus: "SUCCESS: Views and Paths are fixed!",
        title: "Home Page"
    });
});

// 2. ABOUT ROUTE (NEW)
app.get("/about", (req ,res) => {
    // This tells Express to look for 'about.hbs' in the 'temp/views' folder
    res.render("about", {
        title: "About Our Project",
        pageHeading: "Welcome to CampusCore Project Information"
    });
});

// --- SERVER LISTEN ---
app.listen(port, () => {
    console.log(`\n============================================`);
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Application Status: all the best`);
    console.log(`============================================\n`);
});
