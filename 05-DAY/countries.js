const countries = [
  "Kazakhstan","Bolivia","Canada", "Denmark", "Ethiopia", 
  "Finland","Germany","Hungary","Ireland","Japan","Kenya",
];
console.log(Array.isArray(countries));
let firstPortion = countries.slice(0, 5);
let secondPortion = countries.slice(5, 10);
console.log(firstPortion);
console.log(secondPortion);
countries.includes("Ethiopia") ? 
console.log("ETHIOPIA") : 
console.log("Country could not be found");
