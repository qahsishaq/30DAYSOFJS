function fullNameFunction(firstName= 'Ishaq', lastName = 'Ishaq') {
  return `${firstName} ${lastName}`;
}
console.log(fullNameFunction())
console.log(fullNameFunction("Ishaq", "Wagana"));
const shinobi = {
  ID: 1042,
  codeName: "Guideau",
  age: 115,
  mission: "S-rank",
  title: "Kazekage",
  skills: ["Taijutsu", "Genjutsu", "Ninjutsu"],
};
console.log(shinobi.age);
function densityOfMatter(mass, volume) {
  let density = mass / volume;
  return density + "g/cmcube";
}
console.log(densityOfMatter(400, 100));
function learnScope() {
  const gravity = 9.81;
  console.log(gravity);

  if (true) {
    const gravity = 9.81;
    console.log(gravity);
  }

  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  return gravity;
}
console.log(learnScope());
