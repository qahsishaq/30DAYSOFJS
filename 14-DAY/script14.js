try {
  let lastName = "Bond";
  let callSign = "Maverick";
  let fullName = firstName + " " + callSign + lastName;
} catch (err) {
  console.error("Name of the error", err.name);
  console.error("Error message", err.message);
} finally {
  console.log("Regardless of what happens I shall be executed!");
}

const throwErrorExample = () => {
  let message;
  let y = prompt("Enter a number: ");
  try {
    if (y == "") throw "empty";
    if (isNaN(y)) throw "not a number";
    y = Number(y);
    if (y < 5) throw "too low";
    if (y > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErrorExample();
