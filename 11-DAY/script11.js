//DESTRUCTURING OF ARRAYS

const fullStack = ["JS", "HT", "C++", "C#", "MongoDb"];

let [firstLang, secondLang,  , fourthLang] = fullStack;
console.log(firstLang);
console.log();
console.log(typeof firstLang);
console.log(fourthLang);

const laptop = {
  cost: "$" + 2000,
  Brand: "Macbook Pro",
  color: "silver-grey",
  usbPort: 1,
};
const fakeLaptop = { ...laptop, cost: "$" + 500 };
console.log(fakeLaptop);


const maleEmployee = ["Ajala", "Ayomikun", "Steven", "Olawuyi"];
const femaleEmployee = ["Hadizah", "Summayah", "Aishah", "Shamsiyyah"];
const employees = [...maleEmployee, ...femaleEmployee];
console.log(employees);

const names = [undefined, "Aisha", "Fawaz", "Wagana"];
console.log(names[4]);

const [
  firstPerson = "Summayah",
  secondPerson,
  thirdPerson,
  fourthPerson,
  fifthPerson = "Nikola",
] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson, fifthPerson);

const animes = [
  "One Piece",
  "Majo To Yaju",
  "Vinland Saga",
  "Black clover",
  "TaktOP destiny",
  "Blue lock",
  "Boruto",
  "Ninjala",
  "Boku no hero",
];
//destructuring animes...
let [numberOne, numberTwo, , , ...mid] = animes;
console.log(mid);

const device = {
  width: 300,
  height: 400,
  color: "obsidian",
  cableType: "Type C",
};
// console.log(width, height, color, weight , cableType )
// to destructure an object you need to use the exact name of the keys in that object

let { width: w, height: h, color: c, weight: weigh, cableType: cT } = device;
// console.log(width, height, color, weight , cableType );
console.log(w, h, cT, weigh);


// const fakeLaptop = {...laptop};
// console.log(fakeLaptop)

