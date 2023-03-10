const complexObject = {
  number: 1,
  string: "two",
  array: ["this", "is", "array"],
  object: {
    this: "this",
    is: "is",
    object: "object",
  },
};

console.log(complexObject.object.is.length);
