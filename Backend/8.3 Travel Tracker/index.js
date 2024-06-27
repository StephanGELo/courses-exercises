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

// Helper functions

const getVisitedCountries = async () => {
  const result = await db.query("SELECT * FROM visited_countries");
  let visitedCountries = [];
  if (result) {
    result.rows.forEach((country) =>{
      visitedCountries.push(country.country_code);
    });
  }
  return visitedCountries;
};

const checkCountryDoubleEntry = (countries, countryCode) => 
  countries.filter(code => code === countryCode).length > 0;

// GET Home page
app.get("/", async (req, res) => {
  const visitedCountries = await getVisitedCountries();
  res.render("index.ejs", {countries: visitedCountries, total: visitedCountries.length});
});

// INSERT new visited country
app.post("/add", async (req, res) => {
  const addedCountry = req.body.country;
  let countryCode = "";
  const countries = await getVisitedCountries();

  try {
    const result = await db.query(
      "SELECT country_code from countries WHERE country_name=$1", 
      [addedCountry]
    );
    // check whether country code exists in visited countries table
    if (!checkCountryDoubleEntry(countries, result.rows[0].country_code)) {
      countryCode = result.rows[0].country_code;
    }
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES($1)",
        [countryCode]
      );
      res.redirect("/");
    }catch (err) {
      console.log(err);
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again."
      });
    };
  } catch(err) {
    console.log(err);
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again."
    });
  };
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
