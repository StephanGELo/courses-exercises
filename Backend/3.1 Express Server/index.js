import express from "express";
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})

// on terminal type:
// sudo lsof -i -P -n | grep LISTEN 
// to listen to all the port on our computer system