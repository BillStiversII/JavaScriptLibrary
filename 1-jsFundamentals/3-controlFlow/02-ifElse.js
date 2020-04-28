//if else statement.

let weather = 65

if (weather < 70) {
console.log("wear a jacket");
}else {
    console.log("No jacket necessary!");
}

let name = "Bill";

if (name == "Bill") {
    console.log(name);
}else {
    console.log("Hello, what is your name? " + name);
}

let name = 'zAchARy';

if(name[0] === name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log(isUpperCase);
} else {
    let notUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(notUpperCase);
}
    
//not correct need help
let age = 40;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.");
} else if(age >= 18){
    console.log("You can vote");
} else if(age >= 21){
    console.log("You can drink");
} else (age >= 25){
    console.log("You can rent a car");
}
