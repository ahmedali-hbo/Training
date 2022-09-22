/* 
  ARROW FUNCTIONS
  You will be using a lot of arrow functions in our automated repsitory. Transforming a standard
  function into an arrow function is pretty easy. Let's give it a try!
  For this exercise, try rewriting the functions below as arrow functions. */

// EXAMPLE PROBLEM
// Traditional function:
function addition(a) {
  return a + 100;
}
// Arrow function:
const additionArrowSyntax = (a) => a + 100;

// ===================================================
// PROBLEM 1
// Traditional function:
function multiplication(a, b) {
  return a * b;
}
// Arrow function:
const multiplicationArrowSyntax = (a, b) => a * b;

// ===================================================
// PROBLEM 2
// Traditional function:
function helloWorld() {
  return "Hello world";
}
// Arrow expression:
const helloWorldArrowSyntax = () => "Hello world";

// ===================================================
// PROBLEM 3
// Traditional function expression:
function subtraction(b) {
  return 1000000 - b;
}
// Arrow expression:
const subtractionArrowSyntax = (b) => 10000000 - b;

// ===================================================
// PROBLEM 4
// Traditional function:
function runTests() {
  const max = 500
  return Math.floor(Math.random() * max)
}

// Arrow function:
const runTestsArrowSyntax = () => 

// ===================================================
// PROBLEM 5
// Traditional function:
function runTestSuites(suites){
  for(let i=0; i<suites.testRuns.length; i++){
      suites.testRuns[i].passed = runTests()
      suites.testRuns[i].failed = runTests()
      suites.testRuns[i].skipped = runTests()
      suites.testRuns[i].ranToday = true
  }
  return suites
}

// Arrow function:

