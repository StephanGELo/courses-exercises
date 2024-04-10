import express from "express";

const app = express();
const port = 3000;
var dayType = "";
var advice = "";

function findDayAdvice(req, res, next) {
    var index = new Date().getDay();

    if (index === 0 || index === 6 ) {
        dayType = "the weekend";
        advice = "it's time to have fun";
    } else {
        if (index > 0 && index < 6) {
            dayType = "a weekday";
            advice = "it's time to work hard";
        }
    }
    next();
}

app.use(findDayAdvice);

app.get("/", (req, res) => {
    res.render("index.ejs", 
    { 
        dayType: dayType,
        advice : advice
    }
    );
});


app.listen(port, function() {
    console.log(`Server listing on port ${port}...`);
});