const fs = require("fs");

// fs.writeFile('message1.txt', 'Hello there I am Stephan', (err) => {
//     if (err) throw err;
// });

fs.readFile('./message1.txt', 'UTF-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});