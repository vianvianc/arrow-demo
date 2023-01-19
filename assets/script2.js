class Student {
  constructor(grade) {
    this.grade = grade;
  }
  printGradeWithArrow() {
    setTimeout(() => {
      console.log("with arrow: " + this.grade);
    }, 100);
  }
  printGradeWithFunction() {
    setTimeout(function () {
      console.log("with function: " + this.grade);
    }, 100);
  }
}

let student = new Student("A");
student.printGradeWithArrow();
student.printGradeWithFunction();

//arrow functions redifine the "this" keyword
//simple student class takes in grade in the constructor
//this.grade to the grade in initiation
//it has two functions one uses arrow and other uses function keyword instead but do same
// they both should print out grade after a 100 ms settimeout
//create a student object line 17 set grade to A

//keyword this is different inside of arrow vs normal function
