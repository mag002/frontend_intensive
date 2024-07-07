// Closures

// Closures is a function that retains access to it lexical scope when the funciton is executed outside of that scope

function cha() {
    const xe = "airblade";
    return function con() {
        console.log(xe);
    }
}

const conAfterBorn = cha();
// conAfterBorn();

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count)
    }
}

// ** Exercise: Closure for Private Variables
// ? Objective: Create a function createAccount that returns an object with two methods: deposit and withdraw
// ? The balance should be a private variable that cannot be accessed directly from outside the function.

// ** Instructions:

// ? createAccount should return an object with two methods: deposit and withdraw.
// ? The deposit method should increase the balance by the given amount.
// ? The withdraw method should decrease the balance by the given amount, but only if there are sufficient funds.
// ? The balance should be a private variable, only accessible through the deposit and withdraw methods.

// 0
// myAccount.deposit(500)
// 500
// myAccount.deposit(500)
// 1000
// myAccount.withDraw(200)
// 800
// myAccount.withDraw(200)
// 600

function createAccount() {
    let balance = 0;
    return {
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`New balance: ${balance}`)
            } else {
                console.log(`Deposit amount must be positive`)
            }
        },
        withdraw: function (amount) {
            if (balance < amount) {
                console.log('Insufficient funds')
            } else if (amount < 0) {
                console.log('Amount must be positive')
            } else {
                balance -= amount;
                console.log(`New balance: ${balance}`)
            }
        }
    }
}

const myAccount = createAccount();
myAccount.deposit(500);
myAccount.deposit(-500);
myAccount.deposit(500);
myAccount.withdraw(1500);
myAccount.withdraw(-500);
myAccount.withdraw(800);



