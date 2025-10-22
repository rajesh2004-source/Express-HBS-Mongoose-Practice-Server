const express = require('express');

const app = express();
const port = 9000; // Using the port you specified: 9000

// Simple route to respond with "hey"
app.get("/",(req,res)=>{
    res.send("hey");
});

app.get("/about",(req,res)=>{
    res.render("temp/views/about.hbs");
});

// Start the server on port 1000
app.listen(port,() => {
    console.log(`Server started on port ${port}`);
    console.log("started");
});
