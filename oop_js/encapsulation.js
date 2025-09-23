// Define the BankAccount class
class BankAccount {
    #balance; // Private attribute to store account balance

    // Constructor to initialize owner and balance
    constructor(owner, balance) {
        this.owner = owner;      // Public property for account owner
        this.#balance = balance; // Set initial balance (private)
    }

    // Getter method to access the private balance
    getBalance() {
        return this.#balance;
    }

    // Setter method to deposit money into the account
    deposit(amount) {
        // Adds the deposit amount twice (should be: this.#balance += amount)
        this.#balance = amount + amount;
        console.log(`Deposited ${amount}. New Balance: ${this.#balance}`);
    }
}

// Create a new BankAccount instance
const acc = new BankAccount("ALice", 1000);

// Deposit money into the account
acc.deposit(500);

// Print the current balance
console.log(acc.getBalance());
