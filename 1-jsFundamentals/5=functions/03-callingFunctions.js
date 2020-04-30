function hi() {
    console.log('HI');
}
​
hi;
hi();
console.log(hi);
console.log(hi());
​
​
/*
CHALLENGE
************
    - Create a function that, when invoked, lists out the numbers 1-10
*/
​
function oneToTen() {
    for(let i = 0; i <= 10; i++){
        oneToTen(i);
    }
};
​
oneToTen();
​
​
/*
CHALLENGE
************
    - Given the array, create a function that console.log's the values individually.
*/
​
let arr = ['This', 'is', 'really', 'cool'];
​
function call() {
    for(let item of arr){
        console.log(item);
    }
};
​
call();


let FB = 22;
​
if (FB % 15 == 0){
    console.log("Fizz Buzz");
} else if (FB % 3 == 0){
    console.log("Fizz");
} else if (FB % 5 == 0){
    console.log("Buzz");
} else {
    console.log("Not divisible by 3 or 5")
}

let fizzBuzz = () => {
    for (i=0; i <=100; i++){
        
}
