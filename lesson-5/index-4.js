const Bolat = {
  firstName: "Bolat",
  lastName: "Berik",
  occupation: "Lawyer",
  age: 35,
  spouseFullName: "Raushan Berik",
  spouse: null,
  children: null,
};

const Raushan = {
  firstName: "Raushan",
  lastName: "Berik",
  occupation: "Software Engineer",
  age: 25,
  spouseFullName: "Bolat Berik",
  children: null,
};

const Madina = {
  firstName: "Madina",
  lastName: "Berik",
  occupation: null,
  age: 5,
  spouse: null,
  children: null,
};

Bolat.spouse = Raushan;

// you must remove this spouse key-value to pass JSON.stringify
// Raushan.spouse = Bolat;

const children = [Madina];
Bolat.children = children;
Raushan.children = children;

console.log(JSON.stringify(Bolat, null, 2));
// console.log(Bolat);
