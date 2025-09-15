//Each should have: name, balance, currency, and type (e.g., "Savings", "Checking"). 

const Account1={
    name: "Jane Ford",
    balance: 3000,
    currency:"NGN",
    type: "Savings"
    
};

const Account2={
    name: "John Pot",
    balance: 13000,
    currency:"NGN",
    type: "Savings"
    
    
};

const Account3={
    name: "Mary Oat",
    balance: 5000,
    currency:"NGN",
    type: "Savings"
    
};

const Account4={
    name: "Fred Hen",
    balance: 3000,
    currency:"NGN",
    type: "Savings"
}

const Account5={
    name: "Rich",
    balance: "4000",
    currency:"USD",
    type: "Checkings"
    
}

//2.

let amountDeposited1 = 1000
let amountDeposited2= 500

Account1.balance +=amountDeposited1
Account2.balance += amountDeposited2

console.log(`The current account balance of ${Account1.name} is ${Account1.balance}`)

console.log(`The current account balance of ${Account2.name} is ${Account2.balance}`)


//3.
let amountWithdrawn1 = 1000
let amountWithdrawn2= 16500 


Account4.balance-= amountWithdrawn2



//Account with sufficient fund

if(Account3.balance >= amountWithdrawn1){
  Account3.balance-= amountWithdrawn1
  console.log(`The current account balance of ${Account3.name} is ${Account3.balance}`)
}

//Account with insufficient fund
if(Account4.balance < amountWithdrawn2){

    Account4.balance-= amountWithdrawn1
    console.log(`Withdrawal denied for ${Account4.name}: Insufficient fund`)
}

//

// Transfer between two accounts with same currency 

if(Account3.currency === Account2.currency){
let amountTransferred1= 2000
    Account3.balance -= amountTransferred1
    Account2.balance += amountTransferred1
    console.log(`The current account of ${Account3.name} is ${Account3.balance}`)
    
    console.log(`The current account of ${Account2.name} is ${Account2.balance}`)
}

// Transfer between two accounts with different currency 

if(Account3.currency !== Account5.currency){
let amountTransferred1= 2000
    
    console.log(`Transfer failed: currency mismatch`)
    }
    
 // Monthly Maintenance 
 
 if(Account3.type == "Savings"){
let amountInterest= 0.02
    Account3.balance += Account3.balance * amountInterest 
    console.log(Account3.balance)
    }
    
   
    
if(Account5.type === "Checkings"){
console.log(Account5.balance)
    Account5.balance -= 50
  console.log(Account5.balance)
    }
    
//Account with the highest balance
if (Account1 > Account2 && Account1 > Account2 &&Account1 > Account4){
    console.log(`${Account1.name} has the highest balance`)

}

if (Account2 > Account1 && Account2 > Account3 && Account2 > Account4){
    console.log(`${Account2.name} has the highest balance`)
}

if (Account3 > Account1 && Account3 > Account2 && Account3 > Account4){
    console.log(`${Account3.name} has the highest balance`)
}

if (Account4.balance > Account2.balance && Account4.balance > Account2.balance && Account4.balance > Account3.balance){
    console.log(`${Account1.name} has the highest balance`)
}