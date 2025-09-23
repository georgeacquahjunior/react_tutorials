class Car {
  constructor(model) {
    this.model = model;
  }

  // Public method (what the user can do)
  start() {
    console.log(`${this.model} is starting...`);
    this.#igniteEngine(); // calls hidden private method
  }

  // Private method (hidden detail)
  #igniteEngine() {
    console.log("Engine is igniting...");
  }
}

const myCar = new Car("Tesla Model 3");
myCar.start();

// myCar.#igniteEngine(); ❌ Error: Private method
