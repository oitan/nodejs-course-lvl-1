// number
let a1 = 1;
let a2 = -1;
let a3 = -0.5;
let result = a1 * 4;
result = a2 + 3;
result = a3 * a2;
console.log(result);

// string
let s = `result = ${result - 12}`;
console.log(s);

// boolean
let b1 = true;
let b2 = false;
let b3 = b1 || b2; // or
let b4 = b1 && b2; // and
console.log(b3); // true
console.log(b4); // false