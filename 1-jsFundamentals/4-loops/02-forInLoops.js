let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}
for (let item in student) {
    console.log(item);
    console.log(student[item])
}


let catArray = ["tabby", "Henry","Garfield"]

for (let cat in catArray){
    console.log(cat);
    console.log(catArray[cat])
}

let name = "sTIVERS"
let capName;

for (let l in name){
    if (l == 0){
        capName = name[l].toUpperCase();        
} else {
        capName += name[l].toLowerCase();
}
console.log(capName);
