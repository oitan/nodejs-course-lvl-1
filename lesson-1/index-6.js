const AlisName = "Ali";
const AlisAge = 16;
const AmansName = "Aman";
const AmansAge = 21;

function faceControl(name, age) {
  if (age >= 18) console.log(`${name}, You can enter to the club!`);
  else console.log(`${name}, You are too young!`);

  console.log("Face Control is finished!");
}

faceControl(AlisName, AlisAge);
faceControl(AmansName, AmansAge);
