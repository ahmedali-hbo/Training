const assert = require('assert')
const {Given, When, Then} = require('@cucumber/cucumber');
const Calculator = require('../../features/calculator');
let calculator: any;
Given('the numbers {int} and {int}', function (x:any, y:any) {
    calculator = new Calculator(x, y);
});
When('they are added together', function () {
    calculator.add();
});

When('they are multplied together', function () {
    calculator.multiply();
});

Then('should the result be {int}', function (expected: any) {
    assert.equal(calculator.getResult(), expected)
});

Then('a should the result be {int}', function (expected: any) {
    assert.equal(calculator.getResults(), expected)
});
export{};