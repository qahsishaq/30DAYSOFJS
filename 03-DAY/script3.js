const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getTime());

// Date.now() == newDate.getTime() (now here is a special object)
//EXERCISE 1

let firstName = "Ishaq";
let lastName = "Bankai";
let country = "Madagascar";
let city = "Antannanarivo";
let age = 20;
let isMarried = false;
let year = 2027;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log("10" === 10);
console.log("10" == 10);
console.log(parseInt("9.8"));

//truthy values
let data = 5;
let institution = "Academic";
let fiveByFour = "twenty";

//falsy values
let existence = 0;
let vacuum = null;
let variable = undefined;

console.log(4 >= 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 !== "4");
let word1 = "python";
let word2 = "jargon";
console.log(word1.length !== word2.length);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 < 3));

console.log(!(word1.includes("on") && word2.includes("on")));

//Date Object

let yearToday = new Date();
console.log(yearToday);
console.log(yearToday.getFullYear());
console.log(yearToday.getMonth() + 1);
console.log(yearToday.getDate());
console.log(yearToday.getDay());
console.log(yearToday.getHours());
console.log(yearToday.getMinutes());
console.log(yearToday.getMilliseconds());
console.log(Date.now());
console.log(yearToday.getTime());

console.log(yearToday.getTime() === Date.now() + 1);

// let base = prompt('base', 'base of the triangle');
// let height = prompt('height', 'height of the triangle');

// let areaOfTriangle = 0.5 * base * height
// console.log(`The area of the triangle is ${areaOfTriangle} cmsquare`);

// let sideA = prompt('sideA', 'The length of side A is?');
// let sideB = prompt('sideB','The length of sideB is?');
// let sideC = prompt('sideC', 'The length of sideC is?');

// let perimeterOfTriangle = +sideA + +sideB + +sideC;
// console.log(`The perimeter of this triangle is ${perimeterOfTriangle} cm`);

// let length = prompt('Length', 'Length of the Rectangle');
// let width = prompt('Width', 'Width of the rectangle');

// let areaOfRectangle = +length * +width;
// console.log(`The area of the rectangle is ${areaOfRectangle}`);

// let perimeterOfRectangle = 2 *(+length + +width);
// console.log(`The perimeter of the rectangle is ${perimeterOfRectangle}`)

/*let radius = prompt('radius', 'radius of circle');
const pi = 3.14;
let areaOfCircle = pi *  Number(radius ** 2);
console.log(`The area of this circle is ${areaOfCircle} cmsquare`)


let circumferenceOfCircle = Math.round(2 * pi * +radius)
console.log(`The circumference of this circle is ${circumferenceOfCircle} cm`)
let y2 = 10;
let y1 = 2;
let x2 =6;
let x1 = 2;
let slope = (y2 -y1)/(x2 - x1)
console.log(slope)


let hours = prompt('hours', 'Number of hours worked in a day');
let ratePerHour = prompt('rate per hour', 'Your rate per hour');

let yourWeeklyEarning = +hours * +ratePerHour;

console.log(`As a hardworker your weekly earning is ${yourWeeklyEarning}USD`); */

let myName = "Waganaboy";
let famName = "Guideau";
myName.length > 7
  ? console.log("My name is long")
  : console.log("My name is short");

myName.length > famName.length
  ? console.log(
      "Your first name, Asabeneh is longer than your family name, Yetayeh"
    )
  : console.log("Or is it?");

let myAge = 330;
let yourAge = 240;
let ageDiff = myAge - yourAge;

console.log(`I am ${ageDiff} years older than you`);

// let birthYear = prompt("Year of birth", "What year were you born?");
// let ageCriterion = 2024 - +birthYear
// let ageReq = 18 - ageCriterion
// ageCriterion >= 18
//   ? console.log("You are old enough to drive")
//   : console.log(`You are ${ageCriterion},  You will be allowed to drive after ${ageReq} years`);

// 	let numberOfYears = prompt('Number of years', 'You have lived for how many years?')

// 	let numberOfSeconds = +numberOfYears * 31536000;

// 	console.log(`You have lived for ${numberOfSeconds} seconds`)

	let nisin = new Date();
	console.log(nisin.getFullYear()+'-',nisin.getMonth() , nisin.getDate(), nisin.getHours(), nisin.getMilliseconds())
	

