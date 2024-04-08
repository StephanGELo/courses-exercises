import { Server } from "http"

//** */ Steps to start a server**//
//  Create index.js file.
//  Initialise NPM by running `npm init -y`.
//  Install the Express package by running `npm install express --save`.
//  Write server application in index.js.
//  Start server by running `node index.js`. (Always stop and restart the server when a change is made in any file the server is serving)

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Homepage</h1>");
});

app.get("/about",(req, res) =>{
    res.send("<h1>About Me</h1><p>My name is Stephan L</p>");
});

app.get("/contact", (req,res) => {
    res.send("<h1>Contact Me</h1><p>My phone number is: +1-234-765-987</p>");
});

app.listen(port, () => {
    console.log(`Good morning World! Server is listening on ${port}`)
});


