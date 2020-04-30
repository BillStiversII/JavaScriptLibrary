let hi = () => {
    // 1
    return 'hi';
}
//      2       3
let greeting = hi();
​
/*
    1- the keyword that brings our data out of our function
    2- a new variable to hold the value of the return
    3- when called, the function becomes the value of the return
*/
​
console.log(greeting);
​
​
function name(firstName) {
    return `Hello, ${firstName}`;
}
​
// concise body implied return example
// let name = (firstName) => `Hello, ${firstName}`
​
let greetedName = name('Leia Organa');
​
console.log(greetedName);
​
​
​
function capitalizeName(name){
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}
​
let correctName = capitalizeName('jERoMe');
​
console.log(correctName);
​
​
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
​
let width = 5;
let length = 5;
​
let newArea = areaOfRectangle(length, width);
// let newArea = 25;
console.log(newArea)
​
​
/*
CHALLENGE
************
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/
​
function tip(bill, twentyPercent) {
    let tip = bill * twentyPercent;
    return tip;
}
let myBill = 100;
let myTax = .2;
let totalTip = "$" + tip(myBill, myTax);
console.log(totalTip);
Collapse




Adam Jayne  4:41 PM
07-constructor.js 
let myTv = {
  screenSize: 27,
  screenType: "plasma",
  refreshRate: 140,
  manufacturer: "Sony",
};
​
let yourTv = {
  screenSize: 60,
  screenType: "lcd",
  refreshRate: 60,
  manufacturer: "Samsung",
};
​
function TV(screenSize, screenType, refreshRate, manufacturer) {
  this.screenSize = screenSize;
  this.screenType = screenType;
  this.refreshRate = refreshRate;
  this.manufacturer = manufacturer;
​
  this.getDescription = () =>
    `A ${this.screenSize}" ${this.refreshRate}hz ${this.screenType} ${this.manufacturer} TV.`;
}
​
myTv.refreshRate;
​
let firstTv = new TV(80, "led", 80, "LG");
​
console.log(firstTv.getDescription());
​
class TV {
  constructor(screenSize, screenType, refreshRate, manufacturer) {
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;
  }
​
  getDescription() {
    return `A ${this.screenSize}" ${this.refreshRate}hz ${this.screenType} ${this.manufacturer} TV.`;
  }
