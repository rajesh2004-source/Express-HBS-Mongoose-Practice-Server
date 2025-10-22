const path = require('path');
const express = require('express');
const app = express();


const staticpath = path.join(__dirname, "../public");

app.use(express.static(staticpath));

app.get("/",(req,res) => {
        res.send("home");
});

app.listen(4000,() => {
    console.log("started 4000");
});