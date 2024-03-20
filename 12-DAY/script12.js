//regular expression without flag using the constructor


// regular expression with flag

let eggEx = new RegExp("love", "gi");
//creating a pattern without the constructor

let sligEx = /love/gi; // this line of code is the same as line 8

const str = "I really love the nature of Physics";
const insignia = /love/;
const checkStr = insignia.test(str);
let matchStr = str.match(insignia);
/*if the global 'g' is added an array is logged to the console.
The 'i' renders the case insignificant*/
const phusis = /Nature/gi;
matchStr = str.match(phusis);
console.log(checkStr);
console.log(matchStr);


let pattern = "love";
let regEx = new RegExp(pattern);
const txt =
  "Typescript is the most beautiful language that a human begin has ever created.\
I recommend typescript for a first programming language";

matchReplaced = txt.replace(/Typescript/gi, "JavaScript");
console.log(matchReplaced);

const stringParagraph =
  "This regular expression example was made in March 3rd,  2024.";
const sign = /\d{4}/g;
const parte = stringParagraph.match(sign);
console.log(parte);
