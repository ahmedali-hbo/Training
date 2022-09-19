var Calculator = /** @class */ (function () {
    function Calculator(x:any, y:any) {
        this.x = x;
        this.y = y;
    }
    Calculator.prototype.add = function () {
        this.result = this.x + this.y;
    };
    Calculator.prototype.getResult = function () {
        return this.result;
    };
    return Calculator;
}());
module.exports = Calculator;