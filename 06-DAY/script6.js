//Exercises

for (let i = 0; i <= 10; i++) {
  console.log(`${i}* ${i} = ${i * i}`);
}

const countries = ["Vinland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr);

//while loop
// let i = 0;
// while (i <= 10) {
// 	console.log(i)
//   i++;
// }
// do while loop
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// 0 1 2 3 4 5

// for (let i = 10 ; i >= 0; i--) {
//   console.log(i);
// }

//while statement
let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}