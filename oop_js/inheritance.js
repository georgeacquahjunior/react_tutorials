class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi, I'm ${this.name}, age ${this.age}`);
    }
}

// Child class extends Parent
class Teacher extends Person {
    constructor(name, age, subject){
        super(name, age); // Call parent constructor
        this.subject = subject;
    }
    introduce() {
    console.log(`Hi, I'm ${this.name}, I teach ${this.subject}`);
  }
}

const t1 = new Teacher("Mr. Smith", 40, "Math");
t1.introduce(); 
