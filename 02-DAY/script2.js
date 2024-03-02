//Exercise: Level 1
let challenge = "    30 Days Of JavaScript ";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(1, 20));
console.log(challenge.substr(2, 20));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(" , ")); //  array form
console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(Math.ceil(Math.random() * 50) + 50);

console.log(challenge.indexOf("a"));
let grammar =
  "You cannot end a sentence with because because because is a conjunction";
console.log(grammar.indexOf("because"));
console.log(grammar.lastIndexOf("because"));
console.log(grammar.search("because"));
console.log(challenge.trim());
console.log(challenge.startsWith("    30")); // case sensitive
console.log(challenge.endsWith("JavaScript ")); // case sensitive
console.log(challenge.match("a"));
let string = "";
console.log(string.concat("30 Days of", "JavaScript"));

console.log(challenge.repeat(5));
//EXERCISE: Level 2

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another"
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

console.log("10" === 10);
console.log(+"10" === 10);
console.log(Math.ceil(parseFloat(9.8)));
let a = "python";
let b = "jargon";
console.log(a.includes("on") && b.includes("on"));
let hope = "I hope this course is not full of jargon.";
console.log(hope.includes("jargon"));
console.log(Math.ceil(Math.random() * 100)); // random number between 0 and 100

console.log(Math.ceil(Math.random() * 50) + 50); // random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 50) + 50); // random number between 50 and 100 exclusively.

console.log(Math.ceil(Math.random() * 255)); // between 0 and 255 inclusively

console.log(
  "1 " + "1 " + "1 " + "1 " + "1\n" + "2 " + "1 " + "2 " + "4 " + "8\n"
);

console.log(grammar.substr(31, 23));
console.log();

let calc = 5000 * 12 + 10000 + 15000 * 12;
console.log(calc);
