class Calculator {
    x: number;
    y: number;
    result:any;
    results:any;
     constructor(x: number, y: number) {
         this.x = x;
         this.y = y;
     }
     add() {
         this.results = this.x + this.y;
     }
     multiply(){
         this.result = this.x * this.y;
     }
     getResult() {
         return this.result;
     }
     getResults() {
        return this.results;
    }
 }
 module.exports = Calculator; 
 export{};