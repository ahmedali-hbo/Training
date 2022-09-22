// In JS there are two ways to write async code. One would be using the following syntax:
asyncFunction().then(result => 
  console.log(result)).catch(error => console.log(error))
// and the other is using async/await which is much cleaner for doing multiple async function calls
try {
   const result = await asyncFunction();
} catch (err) {
   console.log(err);
}

/* The benefit async/await gives us is the ability to do multiple async function calls without nesting 
  them inside the then() block causing a giant pyramid of function calls
  So, this: 
*/
asyncFunction1().then(result1 => {
   asyncFunction2(result1).then(result2 => {
      console.log(result2);
   }).catch(error2 => {
      console.log(error2);
   })
}).catch(error => {
   console.log(error)
})

// Would simply be written as:
try {
   const result1 = await asyncFunctionOne();
   const result2 = await asyncFunctionTwo(result1);
} catch (e) {
   // Catch all errors that could occur in try
   console.log(e);
}