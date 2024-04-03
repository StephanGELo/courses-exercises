//Use of the sillyname npm package
// note: type "module" has to be added to packson.json to differentiate from commonJs.
import generateName from "sillyname";

var sillyName = generateName();
console.log(`My name is ${sillyName}`);

// Use of the superheroes npm package
import superheroes from "superheroes";

var superhero = superheroes.random();
console.log(`I am a ${superhero}`);