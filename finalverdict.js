// List of prisoners (array of objects)
const prisoners = [
    { name: "Kemi", color_tag: "red" },
    { name: "Luke", color_tag: "green" },
    { name: "Andre", color_tag: "blue" },
    { name: "Colar", color_tag: "purple" }
];



// Add a new prisoner to the list of prisoners
prisoners.push({ name: "John", color_tag: "black" })
console.log("Add a new prisoner to the list of prisoners")
console.log(prisoners)
console.log("")


// Days of the week
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


// Add more days to the days array
days.push("Saturday", "Sunday")
console.log("Add more days to the days array")
console.log(days)
console.log("")


// Remove the last day from the days array
days.pop()
console.log("Remove the last day from the days array")
console.log(days)
console.log("")


// Function to decide verdict
function verdict(prisoner, day) {
    if (prisoner.color_tag === "green" || prisoner.color_tag === "red" ) {
        return `${prisoner.name} must die by hanging on ${day}`;
    } 
    
    else if (prisoner.color_tag === "purple" && prisoner.name === "Luke") {
        return `${prisoner.name} can be pardoned on ${day}`;
    } 
    
    else if (prisoner.color_tag === "blue") {
        return `${prisoner.name} must be exiled on ${day}`;
    } 
    
    else {
        return `${prisoner.name} must be banished on ${day}`;
    }
}


// Loop through all prisoners and assign each a verdict for a day
for (let i = 0; i < prisoners.length; i++) {
    let day = days[i % days.length]; 
    console.log("Loop through")
    console.log(verdict(prisoners[i], day));
    console.log("")
}


// Extra interaction (prompt)
 const criminalResponsible = prompt("Who stole the iPhone 15 Pro Max?");
 console.log("Extra interaction (prompt)")
 console.log(`${criminalResponsible} is guilty of the theft!`);
 console.log("")


// Function to get a random prisoner
function getRandomPrisoner() {
    let randomIndex = Math.floor(Math.random() * prisoners.length);
    return prisoners[randomIndex]; // returns the prisoner object
 
}


// Loop: assign random prisoners as thieves
for (let i = 0; i < prisoners.length; i++) {
    let randomPrisoner = getRandomPrisoner();
    console.log("Loop: assign random prisoners as thieves")
    console.log(`${randomPrisoner.name} is guilty of the theft!`);
    console.log("")
}


//Remove some days and add a day in between the days array 
console.log("initial array")
console.log(days)
console.log("")


console.log("Remove days and add a day in between the days array")
days.splice( 1, 3, "Monday")
console.log(days)



