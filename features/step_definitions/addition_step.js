"use strict";
exports.__esModule = true;
var assert = require('assert');
var _a = require('cucumber'), Before = _a.Before, Given = _a.Given, When = _a.When, Then = _a.Then;
var Calculator = require('../features/calculator');
var calculator;
Given('the numbers {int} and {int}', function (x, y) {
    calculator = new Calculator(x, y);
});
When('they are added together', function () {
    calculator.add();
});
Then('should the result be {int}', function (expected) {
    assert.equal(calculator.getResult(), expected);
});
