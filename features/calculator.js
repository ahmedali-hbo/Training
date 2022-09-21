"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator(x, y) {
        this.x = x;
        this.y = y;
    }
    Calculator.prototype.add = function () {
        this.results = this.x + this.y;
    };
    Calculator.prototype.multiply = function () {
        this.result = this.x * this.y;
    };
    Calculator.prototype.getResult = function () {
        return this.result;
    };
    Calculator.prototype.getResults = function () {
        return this.results;
    };
    return Calculator;
}());
module.exports = Calculator;
