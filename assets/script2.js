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

let student = new Student("A+");
student.printGradeWithArrow();
student.printGradeWithFunction();
