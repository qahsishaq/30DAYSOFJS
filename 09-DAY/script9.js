function sayHello() {
  console.log("'Hello' every three seconds");
}

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Moshood", "Abdulmaleek", "Aisha", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//Exercises
//1
/* the forEach method allows you to alter elements 
by looping through the elements of a given array such that 
a new array is not created.Conversely, the map method 
does the same but returns a new Array as th result. 
The filter method is used to select elements in an array that
 have a particular characteristic(this characteristic will be defined 
	in its call back function)  */

const callBackX2 = (num) => num * 2;

countries.forEach((country) => console.log(country.toUpperCase())); // inserting the console.log here will make your output loop-like
const mapCountry = countries.map((country) => country.toUpperCase());
console.log(mapCountry);
console.log(countries);

names.forEach((alias) => console.log(alias.toUpperCase()));

numbers.forEach((x) => {
  if (x % 2 == 0) {
    console.log(`${x} is even`);
  } else {
    console.log(`${x} is odd`);
  }
});

const smallWorld = countries.map((country) => country.toLowerCase());
console.log(smallWorld);

 const delayOrTimeOut= function () {
  console.log("This block of code will run after a duration of six seconds");
}
setTimeout(delayOrTimeOut, 4000)

const frequentNotice= function() {
  let notification = "You have to play football today";
  console.log(notification);
}
setInterval(frequentNotice, 3600000);
