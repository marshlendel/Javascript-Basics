console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million in it. It's gone now.");

//String in variables
let tweet = "Lebron is king! Westbrook for president!";
let facebookPost =
  "Just thought I'd share this goofy video of my dog eating our couch.";
const username = "jamespauloconnor";

//Concatenation
let birthCity ="Indianapolis";
let birthState = "Indiana";

console.log(birthCity + ", " + birthState);

//interpolation make sure to use the `. Makes spacing easier than concatenation 
let greeting = "Hello";
let firstName = "Finn";
let lastName = "Mertens";

console.log(`${greeting}! My name is ${firstName} ${lastName}. Nice to meet you!`)

let birthDay = "November 17";
let state = "Indiana";

console.log(`My birthday is on ${birthDay} and I live in ${state}.`);

//coercion: Javascript turns numbers into strings when you mix them together
let cats ="3";
 console.log(cats +2);

 let gradYear = 1994;
 let highSchool = "Bill Murray High School";
 console.log(`I graduated from ${highSchool} in ${gradYear}.`)

 //string methods

 //.length returns length of string (includes spacing)
 console.log(highSchool.length); //Technically this is a property

 //lower or uppercase
 console.log(highSchool.toUpperCase());
 console.log(highSchool.toLowerCase());

 //slice(start, end)
 console.log(highSchool.slice(0,11)); //extracts the first 12 characters from 0 to 11

 //.split(separator) splits str into an array of substrings separated by parameter separator 

 //.trim() Gets rid of extra spaces