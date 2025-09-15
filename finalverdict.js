// List of prisoners (array of objects)
const prisoners = [
    { name: "Kemi", color_tag: "red" },
    { name: "Luke", color_tag: "green" },
    { name: "Andre", color_tag: "blue" },
    { name: "Colar", color_tag: "purple" }
];

// Days of the week
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Function to decide verdict
function verdict(prisoner, day) {
    if (prisoner.color_tag === "red") {
        return `${prisoner.name} must die by hanging on ${day}`;
    } 
    
    else if (prisoner.color_tag === "purple") {
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
    console.log(verdict(prisoners[i], day));
}

// Extra interaction (prompt)
const criminalResponsible = prompt("Who stole the iPhone 15 Pro Max?");
console.log(`${criminalResponsible} is guilty of the theft!`);


