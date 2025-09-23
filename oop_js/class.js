class Student{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    // method
    study(){
        console.log(`${this.name} is studying.`);
    }
}

// Creating instances (objects)
const student1 = new Student("John", 20, "A");
const student2 = new Student("Mary", 22, "B");

student1.study();
student2.study();