//console methods

document.write(50 + 50);
console.log("Day 13 of my 30-day JavaScript journey.");

console.log("%d %s of JavaScript", 13, "days");

//Styling messages logged to the console
console.log("%c Days Of JavaScript", "color:green");
console.log(
  "%c 30 Days%c %cOf%c %cJavaScript%c",
  "color:green",
  "",
  "color:cyan",
  "",
  "color:yellow"
);
console.warn("Warning is different from error.");

const topClubTeams = [
  "Arsenal",
  "Liverpool",
  "Manchester City",
  "Aston Villa",
  "Tottenham Hotspur",
];
console.table(topClubTeams);

for (let i = 0; i <= 10; i++) {
  let errorMessage = `${i} is not an even number`;
  console.log("when value:", i);
  console.assert(i % 2 == 0, { number: i, errorMessage: errorMessage });
}

console.clear();
// log output green red and yellow text

console.warn("Global declarations should be minimized");

console.error("Mistakes/errors are inevitable");
console.error("More room for testing and debugging");
//using console.table on arrays

//using console.table on objects

const myHouse = {
  color: "Green",
  type: "Mansion",
  roofType: "Hipped",
  landArea: "2 hectares",
};
console.table(myHouse);
const nations = [
  ["Ghana", "Accra"],
  ["Nigeria", "Abuja"],
  ["Egypt", "Cairo"],
];
console.table(nations);

const usersData = [
  {
    name: "Khalid",
    title: "Programmer",
    country: "",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(usersData);

const family = ["Khalid", "Mubarak", "Basheer", "Mariam"];
console.time("for of loop");
for (const names of family) {
  console.log(names + " " + "Ishaq");
}
console.timeEnd("for of loop");

console.info("30 days of Javascript is challenging");
console.info("A console.info() method");

console.assert(1 > 10, "1 is  not greater than 10");

const names = ["Asabeneh", "Brook", "David", "John"];
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(names);
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(user);
console.log(users);
console.groupEnd();

const arrowFun = () => {
  console.count("Function has been invoked!");
};
arrowFun();
arrowFun();
arrowFun();
arrowFun();
arrowFun();
