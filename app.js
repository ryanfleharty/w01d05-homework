//How do we assign a value to a variable?
  // the variable would come first, then the = "value" would follow

// How do we change the value of a variable?
  // you can change the value by writing the variable first, then = "new value" would follow

// How do we assign an existing variable to a new variable?
  // declare a new variable with let and = "existing variable" will follow

// Remind me, what are declare, assign, and define?
  //declare is to create a variable, assign and define is to set a value for the variable.

// What is pseudocoding and why should you do it?
  //you should comment out a description of the opperation so that writing code will be more efficient. (an instruction for the code written in plain english)

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
  //you should spend majority of the time pseudocoding, because it'll cut the amount of time figuring out what goees where and limit the amount of mistakes.

  // 1. Create a variable called `firstVariable`.
  //   - Assign it the value of the string `"Hello World"`
  //   - Change the value of this variable to some number.
  //   - Store the value of `firstVariable` in a new variable called `secondVariable`
  //   - Change the value of `secondVariable` to any string.
  //   - What is the value of `firstVariable`?
  let firstVariable;
  firstVariable = "hello world"
  firstVariable = "zero"
  zero = "secondVariable"
  secondVariable = "bye" //output
  console.log(secondVariable);

  let yourName = "Davis Truong"
  console.log(`Hello, my name is ${yourName}`);

  /*Using the provided variable definitions, replace the blanks so that all log statements print true in the console.
  Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.*/
  const a = 4;
    const b = 53;
    const c = 57;
    const d = 16;
    const e = 'Kevin';

    console.log(a < b);
    console.log(c > d);
    console.log('Name' === 'Name');
    console.log(true !== false);
    console.log(false || false || false || false || false || false !== true);
    console.log(false === false)
    console.log(e === 'Kevin');
    console.log(a < b < c);
    console.log(a === a != d);
    console.log(48 !== '48');

/*Declare a variable animal. Set it to be either "cow" or something else.
Write code that will print out "mooooo" if the it is equal to cow.
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
Commit.*/
 let animal = "cow"
   if (animal != "cow"){
     animal = "mooooo"
   } else {
     animal = "Hey! You're not a cow"
   }
console.log(animal);

// Make a variable that will hold a person's age. Be semantic.
// Write code that will print out "Here are the keys", if the age is 16 years or older.
//If the age is younger than 16, a message should print "Sorry, you're too young."
let yearsOld = 10
let message
if(yearsOld >= 16){
  message = "Here are the keys"
} else {
  message = "sorry, you're too young"
}
console.log(message);

// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for(let i = 0; i <= 10; i++){
console.log(i);
}
// Write a loop that will print out all the numbers from 10 up to and including 400.
for(let i = 10; i <= 400; i++){
console.log(i);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (let i = 12; i <= 4000; i+=3){
console.log(i);
}
// Print out the even numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
for(let i = 0; i<=100; i+=2){
console.log(`${i} <-- is an even number`);
}
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
for(let i = 0; i<=100; i++){
  if (i % 5 == 0){
    let text1 = "I found a number. High five!"
    console.log(text1);
  } else if (i % 3 == 0){
    let text2 = "I found a number. Three is a crowd"
    console.log(text2);
  }
}

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// let bankAccount; //declare a variable
//   let sum = 0 // set a value
//   for (let i = 1; i <= 100; i++){ //creating a loop to get the sum of numbers 1-10
//     sum += i*2; //sum amount
//   }
//   console.log(sum);
let bankAccount = 0
for( let i = 1; i <= 10; i++){
   bankAccount += i
}
console.log(bankAccount);

let bonusAmount = 0
for (let i = 1; i <= 100; i++){
  bonusAmount += i * 2
}
console.log("bonusAmt", bonusAmount);

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.
// You just solved Project Euler problem 1!
// Are you having dejà vu? This just in! From the "Read the entire problem before you start" dept: This problem was on a previous assignment. You may skip it if you've already done it, just include a comment saying that you've already done it. If you've now done the problem twice, perhaps next time you'll read the whole problem before starting it.
//done it

// What are the things in an array called?
  //elements
// Do Arrays guarantee those things will be in order?
  //yes, it is a data strucutre. the order that the indexes start with 0 being the first element.
// What real-life thing could you model with an array?
  // a grocery list, contains all the elements you need, but will need to know where to find it to access the element.

//Create an array that contains three quotes and store it in a variable called quotes.
const quotes = ["when life gives you lemons...","when pigs fly", "what stays in vegas..."]

//Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]
  //How do you access the 1st element in the array?
  randomThings[0]
  //Change the value of "Hello" to "World".
  //Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
      // (use [ ] to access any elements in a array)
      randomThings[2] = "World"
      console.log(randomThings);

/*What would you write to access the 3rd element of the array?
Change the value of "Github" to "Octocat"
Add a new element, "Cloud City" to the array.*/
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
  ourClass[2]
  ourClass[4] = "Octocat"
  ourClass[5] = "Cloud City"
  console.log(ourClass);

/*Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
Remove the 5 from the beginning of the array.
Add the string "Bob Marley" to the beginning of the array.
Remove the string of your choise from the end of the array.
Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?*/
const myArray = [5, 10, 500, 20]
myArray.push('egon')
myArray.push('Davis')
myArray.shift()
myArray.unshift('Bob Marley')
myArray.pop()
myArray.reverse()
//yes. to mutate means to change or to create a new value. using the .reverse() method reverse the order of the array.
console.log(myArray);

// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.
let numSize = 2000
if (numSize < 100){
  console.log('little number');
} else {
  console.log('BIG NUMBER');
}

// Write an if ... else if ... else statement:
// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
let digitSz = 9
if(digitSz < 5){
  console.log("little number");
} else if (digitSz > 10){
  console.log("big number");
} else {
  console.log("Monkey");
}

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
kristynsCloset[6] = "raybans"
kristynsCloset.push("marshmallow peeps")
kristynsCloset[5] = ("stained knit hat")
console.log(kristynsCloset);

console.log(thomsCloset[0][1]);
console.log(thomsCloset[1][2]);
console.log(thomsCloset[2][1]);
console.log(`Thom is looking fierce in a ${thomsCloset[0][1]}, ${thomsCloset[1][2]}, and ${thomsCloset[2][1]}!`);
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset[1]);

//Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
//Done it

//Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
const printCool = (name) => {
  console.log( `${name} is Cool!`);
}
  printCool('Captain Reynolds')

  //Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
const calculateCube = (l, w, h) => {
  console.log(l*w*h);
}
calculateCube(5, 5, 5)

//Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
const isVowel = (char) => {
let vowels = "a e i o u"
return vowels.includes(char)
}

//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = (word1, word2) => {
  let lengths = []
  let length1 = word1.length
  let length2 = word2.length
  lengths.push(length1)
  lengths.push(length2)
  return lengths
}
console.log("length",getTwoLengths("Hank", "Hippopopalous"));

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths = (words) => {
  let lengths = []
  for ( let i = 0; i < words.length; i++){
    lengths.push(words[i].length)
  }
  return lengths
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
  let maxOfThree = (num1, num2, num3) => {
    let max = Math.max(num1,num2,num3)
    return max
  }
  console.log(maxOfThree(6, 9, 1));

  //Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array
let printLongestWord = (arr) => {
let longest = arr[0]
for (let i = 0; i < arr.length; i++){
  if (longest.length < arr[i].length){
    longest = arr[i]
  }
}
return longest
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

const transmogrify = (digit1, digit2, digit3) =>{
  let multiple = digit1 * digit2
  return Math.pow(multiple, digit3)
}
console.log(transmogrify(5, 3, 2));

// Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
const reverseWordOrder = (word) => {
  let reversed = ""
  for ( let i = word.length -1; i >= 0; i--){
    reversed += word[i]
  }
  return reversed
}
console.log(reverseWordOrder("Ishmael me Call"))
