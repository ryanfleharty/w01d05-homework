//WEEKEND HOMEWORK: WEEK 1

//Part 1A
//1. First, we declare the variable with const or let followed by the variable name. Then we use the assignment operator to connect it to its value. Then we define the value.
//2. You can change the value of a variable by editing its original declaration or creating a new declaration with a new value.
//3. You place the existing variable inside the definition of the new variable.
//4. Declare is the first part, which contains the declarer, const or let, and the variable name. Assign is the work of the assignment operator. Define occurs after the assignment operator, declaring the value of the variable.
//5. It's the best, that's what it is. It helps you put your thoughts in writing so you know how to code before you start coding.
//6. 75% of coding should be spent in psuedocoding.

//Part 1B
/**
let firstVariable = "Hello World";
firstVariable = 36;
let secondVariable = firstVariable;
secondVariable = "This is a cat.";
console.log(firstVariable);


let yourName = "John Michael Oro";
let greeting = "Hello, my name is " + yourName + ".";
console.log(greeting);
**/

//Part 1C
/**
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true != false);
console.log(false === false === false === false === false === false === true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a < b < c);
console.log(a * a === d);
console.log(48 == '48');
**/

//Part 1D
//Declare a variable animal. Set it to be either "cow" or something else.
//Write code that will print out "mooooo" if the it is equal to cow.
//If not equal to cow, print "Hey! You're not a cow."
/**
let animal = "cow";
if(animal === "cow") {
  console.log("Mooooo!");
}
animal = "cat";
 if(animal != "cow") {
   console.log("Hey, you're not a cow!");
 }
 **/

//Part 1E
/**
let joesAge = 17;
if(joesAge > 15) {
  console.log("Here are the keys, Joe.");
}
if(joesAge < 16) {
  console.log("Sorry, you're too young, Joe.");
}
**/

//Part 2A
/**
for (let i = 1; i < 11; i++) {
  console.log(i);
}

for (let i = 10; i < 401; i++) {
  console.log(i);
}

for (let i = 12; i < 4001; i+=3) {
  console.log(i);
}
**/

//Part 2B
/**
for (let i = 0; i < 101; i+=2) {
  console.log(i + " is an even number.");
}
**/
/**
for (let i = 0; i < 101; i++) {
  if(i % 5 === 0) {
    console.log("I found a " + i + ". High five!");
  } if(i % 3 === 0) {
    console.log("I found a " + i + ". Three's a crowd.");
  }
}
**/

//Part 2D
/**
let bankAccount = 0;
for (let i = 0; i < 11; i++) {
  bankAccount = bankAccount + i;
  console.log(bankAccount);
}
**/
/**
let bankAccount = 0;
for (let i = 0; i < 101; i++) {
  bankAccount = bankAccount + (i * 2);
  console.log(bankAccount);
}
**/

//Part 2E
/**
let sum = 0;
for (let i = 10; i < 1001; i++) {
  if (i % 3 === 0) {
    sum = sum + i;
    console.log(sum);
  } if(i % 5 === 0) {
    sum = sum + i;
    console.log(sum);
  }
}
**/

//Part 3A
//1. The things in an array are called elements.
//2. Yes, arrays order their elements by assigning them indices.
//3. You could model a grocery list.

//Part 3B
/**
const quotes = "Hiya Howya", "Whoopsie does it", "Clean 'em first";
**/
//Part 3C
/**
const randomThings = [1, 10, "Hello", true];
//1. randomThings[0]
randomThings[2] = "World";
console.log(randomThings[2]);
**/

//Part 3E
/**
const myArray = [5, 10, 500, 20]
myArray.push("Egon");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();
console.log(myArray);
//The reverse method reversed the order of elements, which counts as a mutation. Mutation means change.
**/

//Part 3F
/**
let int = 3;
if(int < 100) {
  console.log("little number");
} else {
  console.log("big number");
}
**/

//Part 3G
/**
const monkeyFunk = (num) => {
  if(num < 5) {
    console.log("little number");
  } else if(num > 10) {
    console.log("big number");
  } else {
    console.log("No monkey");
  }
}

monkeyFunk(5);
**/

//Part 3H
/**
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

console.log(kristynsCloset[2]);
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
let thomsOutfit = [thomsCloset[0][1], thomsCloset[1][2], thomsCloset[2][1]];
console.log(thomsOutfit);
//thomsCloset[1][2];
//thomsCloset[2][1];
console.log("Thom is looking fierce in a " + thomsOutfit[0] + ", " + thomsOutfit[1] + ", and a " + thomsOutfit[2] + ".");
thomsCloset[1][2] = "footie pajamas";
**/

//Part IV
//Part 4A
/**
const printGreeting = (name) => {
  console.log("Hello there, " + name + "!");
}

printGreeting("Gary");
**/

//Part 4B
/**
const printCool = (name) => {
  console.log(name + " is cool.");
}
printCool("Marlena");
**/

//Part 4C
/**
const calculateCube = (num) => {
  console.log(num * num * num);
}
calculateCube(5);
**/

//Part 4D
/**
const isVowel = (char) => {
  char.toLowerCase();
  if(char === "a") {
    return true;
  } else if(char === "e") {
    return true;
  } else if(char === "i") {
    return true;
  } else if(char === "o") {
    return true;
  } else if(char === "u") {
    return true;
  } else {
    return false;
  }
}
**/
//Part 4E
/**
const getTwoLengths = (len1, len2) => {
  lenArray = [len1.length, len2.length];
  console.log(lenArray);
}

getTwoLengths("Cat", "Dog");
**/

//Part 4F
//Hat tip to Adam Wolfman for helping me out with this one.
/**
const getMultipleLengths = (wordArray) => {
  let wordLengths = [];
  for (let i = 0; i < wordArray.length; i++) {
    let wordLength = wordArray[i].length;
    wordLengths.push(wordLength);
  }
  return wordLengths;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//Part 4G
const maxOfThree = (num1, num2, num3) => {
  if(num1 > num2 && num1 > num3) {
    console.log(num1);
    return num1;
  } else if(num2 > num1 && num2 > num3) {
    console.log(num2);
    return num2;
  } else if(num3 > num1 && num3 > num2) {
    console.log(num3);
    return num3;
  } else {
    console.log("None");
    return null;
  }
}

maxOfThree(5,1,6);
**/
//Part 4H
//Write a function that accepts a single argument, an array of strings. The method should return the longest word. In a tie, return the first.
//Interesting: setting a variable to null allows you to create an empty variable.
//let words = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]
/**
const printLongestWord = (wordArray) => {
  wordLengths = [];
  for (let i = 0; i < wordArray.length; i++) {
    let wordLength = wordArray[i].length;
    wordLengths.push(wordLength);
  } for(let i = 0; i < wordLengths.length; i++) {
    if(wordLengths[i] > wordLengths.length) {
      return wordArray[i];
    }
  }
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//I am patting myself on the back so hard right now for getting this one. Phew!

//Part 4I
const transmogrify = (num1, num2, num3) => {
  let numMult = num1 * num2;
  let numPower = Math.pow(numMult, num3);
  return numPower;
}

console.log(transmogrify(2, 2, 2));
**/
//Part 4J
//Write a function that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation. No built-in functions.
//

//Part 4k
/**
const randomInt = () => {
  randomized = Math.round(Math.random() * 10);
  return randomized;
}

console.log(randomInt());
**/
/**
const randomInt = () => {
  randomized = Math.round(Math.random(10) * 100);
  return randomized;
}

console.log(randomInt());
**/
/**
const randomInt = () => {
  randomized = Math.round(Math.random(532) * 13267);
  return randomized;
}

console.log(randomInt());
**/
/**
const randomInt = () => {
  randomized = Math.random(1) * 10;
  return randomized;
}

console.log(randomInt());
**/

//const quotes = "Hiya Howya", "Whoopsie does it", "Clean em first", "Bundle the last", "Quick and crunchy";
/**
const randomPull = (quotes) => {
  for (let i = 0; i < quotes.length; i++) {
    quotes[i] = quotes[Math.floor(Math.random(1) * quotes.length)];
    console.log(quotes[i]);
  }
}

randomPull(["Hiya Howya", "Whoopsie does it", "Clean em first", "Bundle the last", "Quick and crunchy"]);
**/

//Part Objects
//A User Object
const user = {
  name: "John",
  email: "john@me.com",
  age: 36,
  purchased: [],
}

user.email = "jjmoney@money.com";
console.log(user.email);
user.age++;
console.log(user.age);
user.location = "Denver";
console.log(user.location);
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[0]);

//E Object Within Object
user.friend = {
  name: "Gary G",
  location: "Georgia",
  purchased: [],
}

console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("latte");
console.log(user.friend.purchased[1]);
