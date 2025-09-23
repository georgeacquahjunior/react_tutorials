class Animal {
  speak() {
    console.log("This animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow! Meow!");
  }
}

const animals = [new Dog(), new Cat(), new Animal()];

for (let i = 0; i < animals.length; i++) {
    animals[i].speak();
}

animals.forEach(animal => animal.speak());

