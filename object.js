function Student(studentname, studentage) {
    this.studentname = studentname;
    this.studentage = studentage;
    this.display = function() {
        console.log(`Student Name: ${this.studentname}, Age: ${this.studentage}`);
    };
}

const studentObj = new Student("Sai", "44");
console.log(studentObj.studentname)
console.log(studentObj.studentage)