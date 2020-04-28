//Boolean
let on = true;
console.log(on);

let off = false;
console.log(off)


//Null - null is an empty value.  Think of it as an empty container.  nothing is in there, but it's sill exits as a space to fill.


let empty = null;
console.log(empty)

//Undefined - default value when a variable is not initialized

let undef = undefined;
let correct;

console.log(undef, correct);

//Numbers

let degrees = 90
console.log(degrees)


let precise = 999999999999999
console.log(precise)

let rounded = 999999999999999
console.log(rounded)

let notQuite = 0.2 + 0.1;
console.log(notQuite)

let aNumber = Number("123")
console.log(typeof aNumber)

//Strings - strings are datatypes used to repreent text adn are either wrapped in single quotes(''), Double quotes(""), or string interpalation('')
let stringOne = 'single quotes';
let stringTwo = "double quotes"
let stringThree = `backticks`;

console.log(stringOne, stringTwo, stringThree)

let first = 1050 + 100;
let second = "1050" + "100";
console.log(typeof first);
console.log(typeof second)

//Objects - object are used to store many values instead of a singular value

let frodo = {
    race: "hobbit",
    ring: 1,
    cloak: true 
}
console.log(frodo)
console.log(typeof frodo)

//Arrays - arrays are contatiners that hold lists of items
/*

let list = [   "item1",   "item2",     "item3"]
      (1)   (2)         (3)
1- name of Array
2- arrays are  denoted by square brackets
3- Notice each value is seperated by a comma
*/
//               (1)     (2)   (3)
let burritos = ["large", 4, true];
console.log(burritos)
console.log(typeof burritos);

let billStivers = {
    firstName: "Bill",
    lastName: "Stivers",
    houseNumber: 383,
    street: "Leisure Ln",
    city: "Indianapolis",
    state: "Indiana",
    zipcode: 46142
} 
console.log(billStivers)
console.log(typeof billStivers)

let myName = "Bill";
console.log(myName.length);

console.log(myName.toUpperCase())

let home = "Myhome is Greenwood";
console.log(home.includes("Greenwood"))

let sent = 'This sentence will be split into individual parts';
console.log(sent.split(" "));


