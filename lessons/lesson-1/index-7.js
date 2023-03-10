const testResults = [5, 60, 100];

console.log(testResults);

testResults.push(70);

console.log(testResults);

// testResults = [1]; // error

console.log(testResults[4]); // undefined

console.log(testResults.length); // items count
console.log(testResults[testResults.length - 1]); // last item

testResults[0] = 55;

console.log(testResults);
