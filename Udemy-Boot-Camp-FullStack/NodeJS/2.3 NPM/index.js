//var genarteName = require("sillyname");
/*import genarteName from "sillyname";
var sillyname = genarteName();
console.log(`My name is ${sillyname}.`);*/
//var genarteName = require("superheros");
import superheroes from "./node_modules/superheroes";

const name = superheroes.random();

console.log(`I am ${name}`);
