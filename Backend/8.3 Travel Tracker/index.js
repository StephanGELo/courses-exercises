import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database: `${process.env.DB_DATABASE}`,
  password:`${process.env.DB_PASSWORD}`,
  port: 5432
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const checkVisitedCountries = (countries) =>{
  const visited = [];
  countries.forEach((country) => {
    if(country) {
      visited.push(country.country_code);
    };
  });
  return visited;
};

const checkAddedCountry = async (country) => {
  if (country) {
   const result = await db.query("SELECT country_code FROM countries WHERE country_name= $1", [`${country}`]);
   return result.rows[0].country_code;
  }
};

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM visited_countries");
  const visitedCountries = checkVisitedCountries(result.rows);
  res.render("index.ejs", {countries: visitedCountries, total: visitedCountries.length});
});

app.post("/add", async (req, res) => {
  const addedCountryCode = await checkAddedCountry(req.body.country);

  await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
    addedCountryCode
  ]);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
