let num = 10;
switch (true) {
  case num > 0:
    console.log("Number is positive");
    break;
  case num == 0:
    console.log("Numbers is zero");
    break;
  case num < 0:
    console.log("Number is negative");
    break;
  default:
    console.log("Entered value was not a number");
}

let dayUserInput = prompt("What day is today ?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Toda y is Sunday");
    break;
  default:
    console.log("It is not a week day.");
}

let randomDayOfWeek = new Date().getDay();
let dayOfWeek = randomDayOfWeek;
switch (dayOfWeek) {
  case 1:
    console.log("Today is monday");
    break;
  case 2:
    console.log("today is Tuesday");
    break;
  case 0:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Another boring day of the week");
}
//Exercises

let userInput = prompt("Age", "What is your age?");
let ageReq = 18 - +userInput;
userInput >= 18
  ? console.log("You are old enough to drive")
  : console.log(`wait for ${ageReq} more years to be 18`);

let yourAge = 17;
let myAge = 8;
if (myAge > yourAge) {
  console.log("You are younger than me");
} else if (myAge < yourAge) {
  console.log("You are younger than me");
} else {
  console.log("You certainly don't seem to be as old as you look ");
}
let grade = prompt('Your score in numbers','What did you score?')

if (grade >= 80 && grade <= 100) {
  console.log("You got an A");
} else if (grade >= 70 && grade <= 79) {
  console.log("You got a B");
} else if (grade >= 60 && grade <= 69) {
  console.log("You got a C");
}else if(grade >= 50 && grade<=59){
	console.log('You got a D')
}else{
console.log('You got an F')
}
