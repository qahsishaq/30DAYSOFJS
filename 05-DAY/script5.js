let dayJs = "Fifth day of my Javascript Journey";
let stringToArray = dayJs.split(" ");
console.log(stringToArray);

let tecno = ["spark", "camon", "P5"];
let iphone = ["7", "11", "15"];
//using concat
let phones = tecno.concat(iphone);
console.log("tecno:", tecno);
console.log("iphone:", iphone);
console.log("phones:", phones);
console.log(Array.isArray(tecno));

let newArray = [1, 2, 3, 4, 5];
console.log("newArray:", newArray);
let reversedNewArray = newArray.reverse();
console.log("reversedArray :", reversedNewArray);

//EXERCISES

const emptyArray = [];
let phoneTypes = [
  "Google Pixel",
  "Xiaomi",
  "Samsung",
  "iPhone",
  "Tecno",
  "Oppo",
  "Gionee",
];
console.log("Exercises to strengthen your muscles and brain");

console.log(phoneTypes.length);
let firstPhone = phoneTypes[0];
let middlePhone = phoneTypes[3];
let lastPhone = phoneTypes[phoneTypes.length - 1];

console.log(
  "first phone:",
  firstPhone,
  "middle phone:",
  middlePhone,
  "last phone:",
  lastPhone
);

let mixedDataTypes = [
  1,
  "two",
  false,
  { javascript: "programming language", difficulty: "easy" },
  "Explanation",
  28,
];
console.log(mixedDataTypes.length);
console.log(mixedDataTypes);
let object = mixedDataTypes[3];

let itCompanies = [
  "Facebook",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  " Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(
  itCompanies[0],
  itCompanies[1],
  itCompanies[2],
  itCompanies[3],
  itCompanies[4],
  itCompanies[5]
);

let checkCompany = itCompanies.indexOf("Facebook");

checkCompany == -1
  ? console.log("This company has not been established")
  : console.log("This company was found");
let stringItCompanies = itCompanies.toString();
console.log(stringItCompanies, 'are big IT companies')

let reverseCheckCompany = itCompanies.reverse();
console.log(reverseCheckCompany);

let someCompanies = itCompanies.slice(0,3);
let otherCompanies = itCompanies.slice(3,6)
console.log(someCompanies);
console.log(otherCompanies);
let midComp = itCompanies.slice(2, 3);
console.log(midComp)
let newIt = itCompanies.pop();
console.log(newIt)
let text =
'I love teaching and empowering people I teach HTML  CSS JS React Python'
let array = text.split(' ')

console.log(array)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

let addMeat = shoppingCart.unshift('Meat');
shoppingCart.pop();
shoppingCart.push('Sugar')
shoppingCart[3] = 'Green Tea' 
console.log(shoppingCart);
