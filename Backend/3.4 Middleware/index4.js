import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

const bandNameGenerator = function (req, res, next) {
  var body = req.body;
  bandName = body.street + body.pet;
  next();
}

app.use(bodyParser.urlencoded({extended: "true"})); // This middleware has to come first before the next middleware is called. Otherwise, the data(req) will not exist.
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band Generator: </h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
