const Bolat = {
  firstName: "Bolat",
  lastName: "Berik",
  occupation: "Lawyer",
  age: 35,
  spouse: null,
  children: null,
};

const Raushan = {
  firstName: "Raushan",
  lastName: "Berik",
  occupation: "Software Engineer",
  age: 25,
  spouse: null,
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
Raushan.spouse = Bolat;

const children = [Madina];
Bolat.children = children;
Raushan.children = children;

console.log(Bolat);
