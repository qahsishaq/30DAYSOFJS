const arrayDef = (name = "Aisha") => {
  return `${name} is young.`;
};
console.log(arrayDef());
console.log(arrayDef("Wagana"));

function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity;
  return weight;
}
console.log("Weight of object in Newton :", weightOfObject(30));
console.log("Weight of object in Newton :", weightOfObject(60));

function fullName() {
  return "Ishaq " + "Khalid";
}
console.log(fullName());
function fullNameFunction(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullNameFunction("Ishaq", "Wagana"));

function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}
console.log(addNumbers(23, 67));

function areaOfRectangle(length, width) {
  let area = length * width;
  return area + "cmsq";
}
console.log(areaOfRectangle(8, 4));

const perimeterOfRectangle = (Length, Breadth) => {
  let perimeter = 2 * (Length + Breadth);
  return perimeter + "cm";
};
console.log(perimeterOfRectangle(4, 3));

const volumeOfRectangularPrism = (length, width, height) => {
  let volume = length * width * height;
  return volume + "cmcube";
};
console.log(volumeOfRectangularPrism(10, 20, 30));

function areaOfCircle(r) {
  let area = Math.PI * r ** 2;
  return Math.round(area) + "cmsq";
}
console.log(areaOfCircle(7));

function circumOfCircle(r) {
  let circum = 2 * Math.PI * r;
  return Math.round(circum) + "cm";
}
console.log(circumOfCircle(7));

function densityOfMatter(mass, volume) {
  let density = mass / volume;
  return density + "g/cmcube";
}
console.log(densityOfMatter(400, 100));

function speed(distance, time) {
  let speed = distance / time;
  return speed + "m/s";
}
console.log (speed(500, 5));


const tempInCelsiusToFahrenheit = (celsius)=>{
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit + 'F'

}
console.log(tempInCelsiusToFahrenheit(29));


console.log(Math.max(10,30,40))

