//named function with two parameters
function add (a, b) {
  return a + b;
}

//remove function keyword
//assign function add to a variable
//add arrow... parameters on left... body of function on right

let add2 = (a, b) => {
  return a + b;
};
//can take a step further and remove return and curley brackets
//everything after the arrow is assumed to be returned
let add3 = (a, b) => a + b;






//named function with one parameter
function isPositive(number) {
  return number >= 0;
}

//get rid of the function keyword, assign function to a variable, get rid of the return and curlies
let isPositive2 = (number) => number >= 0;
//to go further since only one parameter can remove the parens too!
//so number is the argument and we are returning if its greater than zero.
let isPositive3 = number => number >= 0;








//named function with no parameters
let randomNumber = () =>  Math.random;


//cleaner and on one line
let randomNumber2 = () => Math.random;








//anonymous function
document.addEventListener("click", () =>  console.log("Click"));

document.addEventListener("click", () => console.log("Click"));








/// practice
let multiply = (a, b) => a * b;





let isNegative = number => number < 0;




let randomNum = () => Math.random;



document.addEventListener("click", () => console.log("Click"));







