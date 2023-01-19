//Javascript used to only have the var keyword to declare variables
//This allowed us to create variables which were FUNCTION scoped. Problems arose...
//Let and Const were created to let people create BLOCK scoped variable.
//Difference between two is
//FUNCTION scoped variable is alowed anywhere inside the function it is declared in.
//BLOCK scoped variable is allowed ONLY WITHIN BLOCK such as IF statement or LOOP.
//not outside the if or loop for example

//let, const, var

if (true) {
  var varVariable = "This is true";
}


console.log(varVariable);

if (true) {
  let letVariable = "This is true too";
  //   console.log(letVariable);
}
console.log(letVariable);

//varVariable is logging true because it is FUNCTION scoped
//if there is no function it is inside of it is GLOBAL scoped
// so when go to console log on line 16

//letVariable is only defined within the block in which you create it. (BLOCK scoped)
//inside the if statement is the only place you created the letVariable
// it is not available outside the if statement
//*DEMO* move console log inside the block and will see it on line 21

//same with const... it is BLOCK scoped

//   if (true) {
//     const constVariable = "This is true again";
//     //   console.log(constVariable);
//   }
//   console.log(constVariable);



//Now redefine var variable by redeclaring it outside function
//*DEMO*  var varVariable = 'This is false!' on line 15
//so you can accidentally overwrite variables this way using var
//let takes care of that by throwing an error
//let will never allow you to declare a variable using let with the same name
//*DEMO* let

// let letVariable = "true";
// let letVariable = "false";
// console.log(letVariable);

//`const` is a signal that the identifier won't be reassigned. `let` is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm
