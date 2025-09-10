/* Implement a simple Expense Calculator. should calculate following
 
 Monthly income (eg. 2000000)
 Daily expenses (eg. 203023)
 Monthly expenses (eg. 3543545)
 Savings eg. (eg. 324342)
 Spendings (eg. 232323)
  
 Final result should be what is left.*/
  
 //Simple Expenses Calculator - Solution
//   let monthlyIncome = Number(prompt("Input your monthly income"))
//   let dailyExpenses = Number(prompt("Input your monthly dailyExpense"))
//  let noOfDays = 30
//  let savings = Number(prompt("Input your monthly dailyExpense"))

//  // Calculate monthly expenses
//  let monthlyExpenses= dailyExpenses * noOfDays
// // console.log('monthly expenses is ' + monthlyExpenses)
  
// //Calculate spendings
// let spendings = monthlyExpenses + savings
// // console.log ('spendings is ' + spendings)

// // Calculate balance
// //  let balance = monthlyIncome - spendings
// //  console.log('balance is ' + balance)
 
// // DAY 6
// /*
// Class Work: Simple Banking System (No Functions or Classes)
// Create 3 accounts as objects.
// Each account should have: name, balance, and currency.
// Deposit money into the first account.
// Add any amount and update the balance.
// Withdraw money from the second account.
// If the balance is not enough, print "Insufficient funds for withdrawal".
// Transfer money from the third account to the first account.
// If the transfer is possible, update both balances.
// Otherwise, print "Transfer failed".
// Compare balances:
// Print out which account has the highest balance.
// Print "Two accounts are equal" if any two balances are the same.
// Account status check:
// If balance > 0 → print "Active"
// If balance === 0 → print "Empty"
// If balance < 0 → print "Overdrawn"
// 🎯 Bonus Challenge
// Add a 4th account.
// Transfer money from the richest account to the poorest account.
// Show all balances before and after the transfer.
// 👉 Your task is to write the code in plain JavaScript using only:

// Strings
// Numbers
// Objects
// If/else statements
// Comparisons
// has context menu



// */

// const account1={
//     name : "Emeka", 
//     balance :50, 
//     currency:"USD"
// };

// const account2 ={
//     name : "Mary", 
//     balance :150, 
//     currency:"USD"


// };

//  const account3={
//     name : "Nike", 
//     balance :500, 
//     currency:"USD"
//  }
 
// // Deposit money into the first account.Add any amount and update the balance.
// depositedAmount= 300
// account1.balance += depositedAmount
// console.log(`${account1.name}'s current account balance is ${account1.balance}` )
// console.log(account1 )

// //Withdraw money from the second account.
// let amountWithdrawn = 650
// account2.balance -= amountWithdrawn
// if(amountWithdrawn > account2.balance){
//     console.log(`Insufficient funds for withdraw`)
// }
// else {
//     console.log(`${account2.name}'s current account balance is ${account2.balance}`)
// }

// console.log(account2)

// // Transfer money from the third account to the first account.
// // If the transfer is possible, update both balances.
// // Otherwise, print "Transfer failed".

// let amountTransfered = 200

// if(account3.balance >= amountTransfered ){
//     account3.balance -=  amountTransfered
//     account1.balance += amountTransfered
//     console.log(`${account3.name}'s current balance is ${account3.balance}, ${account1.name}'s current balance is ${account1.balance}`)
// }
// else{
//     console.log('Transfer failed')
// }

