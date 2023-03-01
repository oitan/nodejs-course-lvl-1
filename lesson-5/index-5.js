function myFunction(num, obj, str, func) {
  console.log(typeof num);
  console.log(typeof obj);
  console.log(typeof str);
  console.log(typeof func);
  func("secret");
}

myFunction(1, { name: "haha" }, "wahaha", (info) => {
  console.log("I am in lambda function");
  console.log(`passed info is ${info}`);
});
