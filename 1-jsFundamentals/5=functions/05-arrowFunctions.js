// variable      fat arrow
   let hi =      () => {

console.log('hi');
   }

   // arrow functions were introduced in ES6. They are basically a more conscise way to write function expressions -
   // Not Declarations.
   // This mean arrow functions do not get hoisted.

   // Block Body
   let hi = () => (
       console.log('hi');
       //Lots of code goes here
   )
   // Note: block body arrow functions must have a return(if you want to get back information) in the body of the function
   //(return must be in between the curly braces)

   //concice body
   let hi = () => console.log('hi');
   //Note: concise body arrow functions return by default; they automatically give back the information.

   let greeting = name => {
       console.log(`Greetings, ${name}`)
   }
   greeting('Jerome', 'CooGuy')



  for (i = 0; i <= 10; i++){
      let seeIt => i {console.log(i);
      }
      }
