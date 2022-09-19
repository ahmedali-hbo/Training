import { Calculator } from '../../features/calculator';
const assert = require('assert')
const {Before, Given, When, Then} = require('cucumber');
const Calculator = require('../../features/calculator');
let calculator;

Given('the numbers {int} and {int}', function (x:any, y:any) {
    calculator = new Calculator(x, y);
});

When('they are added together', function () {
    calculator.add();
});

Then('should the result be {int}', function (expected:any) {
    assert.equal(calculator.getResult(), expected)
});
