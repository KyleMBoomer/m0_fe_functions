// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(person) {
  return `Sup, ${person}`;
  }
console.log(greeting("dude")) 
// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
var greatName = "Karen"
function customGreeting(greatName) {
    return (`Why are you here, ${greatName}?`);
  }
  
  console.log(customGreeting("Karen"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson() {
  var human = ["Kyle", "Mark", "Boomer"]
}
  console.log("Hello there, Kyle Mark Boomer")
  greetPerson()

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

  function square(number) {
return number * number
  }
 var number = 25
 var result = square(number)
 console.log(result)

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
var Coffee = 4
var Tortillas = 3
var Cheese = 0
var Salsa = 1
function checkStock() {
   return `"Coffee >= 4`
}
