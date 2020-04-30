let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];
​
// for (let i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }
​
food.forEach((foodItem, i) => console.log(i, foodItem));
​
​
/*
CHALLENGE
************
​
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/
​
let movies = [
    "Phantom Menance",
    "Attack of the Clones",
    "Revenge of the Sith",
    "Solo",
    "Rogue One",
    "A New Hope",
    "The Empire Strikes Back",
    "Return of the Jedi",
  ];
​
  movies.push("Force Awakens");
  movies.splice(5, 1, "The Rise of Skywalker")
  
  movies.forEach((movie, i) => console.log(i, movie));