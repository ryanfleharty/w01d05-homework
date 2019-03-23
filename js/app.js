console.log("Homework 5");

// I. Variables & Datatypes

// A. Q&A

//1. How do we assign a value to a variable?
//
//   let variable = value; if variable is declared, reassign
//   by just using the variable name, ex: variable = newValue

//2. How do you reassign a value to a variable
//
//   use the variable name and equals
//   variable = newValue

//3. How do you assign an existing variable to a new variable? 
//
//   let newVariable = existingVar

//4. What are declare, assign, and define
//
//   declare: declare is when you use let/const/var to first give a variable a value
//   assign: assign is when you take an existing variable and give it a new value
//   define: the definition shows where the variable gets stored

//5. What is psuedocoding and why is it important? 
//   Pseudocoding is the process of writing down the steps to 
//   solve a coding problem in English. It is important so that 
//   your thinking doesn't get bogged down by syntax and you are
//   able to more easily think through the steps you need to take
//   in order to solve it. 

//6. What percentage of time should be spent thinking about how 
//   you're going to solve a problem vs actually writing the code? 
//   
//   I would say about 50%/50%. The most important part should be 
//   the thinking behind what you are trying to code. If you are
//   just jumping in to writing the code you are likely going to 
//   miss important steps. However, in this beginning stage of 
//   learning, the writing of the code takes longer, so maybe that
//   adjusts the percentage of time coding to a greater percentage. 


//B. Strings

//1. Create a variable called firstVariable. 

let firstVariable = 'Hello World';
firstVariable = 23;
secondVariable = firstVariable;
secondVariable = 'the value of firstVariable is still 23';

//2. Create a variable called yourName and set it equal to your name
//   as a string. Then write an exp that takes the string and returns 
//   concatenated. 

let yourName = 'Adam';
console.log("Hello, my name is " + yourName);


// C. Booleans

//1. Using the provided variable def's, replace the blanks so that 
//   the log stmts print true in the console. 

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true !== false);
console.log(false === false === false === false === false === false === true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b < c);
console.log(a === a !== d);
console.log(48 == '48');


//D. The Farm

const animal = "cow";

const isCow = (animalInput) => {
    if(animalInput === animal){
        console.log(animalInput)
        return console.log("Mooooo-ve along Bessy")
    } else {
        return console.log("Hey youre not a cow, get outta here!")
    }
}

isCow("turtle");


//E. Driver's Ed

const isOldEnough = (age) => {
    if(age < 16){
        console.log("Sorry, you are too young")
    } else {
        console.log("Here are the keys")
    }
};

isOldEnough(25);

//II. Loops

//A. The Basics

//1. Write a loop that will print out all the numbers from 0 to 10

for(let i = 0; i < 11; i++){
    console.log(i)
};

//2. Write a loop that will print out all the nmbers from 10 up to 
//   and including 400. 

for (let i = 10; i < 401; i++){
    console.log(i)
};

//3. Write a loop that will print out every third number starting 
//   with 12 and going no higher than 4000. 

for (let i = 12; i <= 4000; i += 3){
    console.log(i)
};

//B. Get Even

//   1 and 2. Write a loop that will print out all the nubers from 0 to 10
//   inclusive of 10. Then, adjust it so that it prints an indicator
//   with the even numbers

for (let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log(`${i} <== thats an even boi`)
    } else {
        console.log(`${i} <== this is one odd duck`)
    }
}

//C. Give me Five

//1. For the numbers 0 to 100, print "i found a number. High five!" 
//   if the number is a multiple of 5. 

for(let i = 0; i <= 100; i++){
    if(i % 5 === 0){
        console.log(`I found a ${i}, high five!!!`)
    } else {
        console.log(i)
    }
}

//D. Savings Account

//1. Write code that will save the sum of all numbers between 1-10
//   to a variable called "bank_account". 

let bank_account = 0;

for (let i = 0; i <= 10; i++){
    bank_account = bank_account + i;
};

console.log(bank_account);

//2. You got a bonus, your pay is now doubled. Write code that will
//   save the sum of all of the numbers between 1 and 100 multiplied
//   by 2. 

let raiseAccount = 0;

for (let i = 0; i <= 100; i++){
    raiseAccount = raiseAccount + (i * 2);
}

console.log(raiseAccount);


//E. Multiples of 3 and 5

//Find the sum of all the multiples of 3 or 5 below 1000. 

let sumNatNum = 0;

for (let i = 0; i <= 1000; i++){
    if (i % 3 === 0 || i % 5 === 0){
        sumNatNum = sumNatNum + i;
    }
};

console.log(sumNatNum);


// III. Arrays & Control Flow

//A. Talk About It

//1. What are the things in an array called? 
//   Values stored at Indexes.

//2. Are arrays always in order? 
//   No they are not, which is often the problem. .sort() and other
//   methods can help with this. 

//3.  What real life thing could you model with an array? 
//    You could model any type of list in an array, months of the 
//    year, vehicles in a garage, types of different mode growing in my
//    fridge, etc... 

//B. Easy Does It
//1. Create an array that contains three quotes and store it in a 
//   called quotes.

const arr = ["quote0", "quote1", "quote1"];

//C. Accessing Elements
//Given the following array: 
const randomThings = [1, 10, "hello", true];

//1. Access the first element
randomThings[0];

//2. Change the value of "Hello" to "World"
randomThings[2] = "World"

//3. Check the value of the array to make sure it updated. 
console.log(randomThings);


//D. Change Values
//Given the following array:

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1. Access the 3rd element in the array:
ourClass[2];

//2. Change the value of 'Github' to 'Octocat'
ourClass[4] = "Octocat";

//3. Add a new element, 'Cloud City' to the array
ourClass.push('Cloud City');


//E. Mix It Up - Given the following array:

const myArray = [5, 10, 500, 20];

//1. Add the string "Egon" to the end of the array
myArray.push("Egon");
myArray.push("Mavis Becon");

//2. Remove the 5 from the beginning of the array
myArray.shift();

//3. Add the string "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley");

//4. Remove the string from the end of the array
myArray.pop();

//5. Reverse this array using Array.prototype.reverse()
myArray.reverse();
    // The array was mutated. This means it was changed.


//F. Biggie Smalls - Create a variable assigned to an integer. 
//   Use an if/else statement to print out whether or not the number
//   is a big boi or just a little guy. 

let checkNum = 120;

const isBigBoi = (num) => {
    if(num < 100){
        console.log(`You're just a little number ${num}, you aren't big enough`)
    } else {
        console.log(`Ohhh look how big you are ${num}, youre a big boi`)
    }
}

isBigBoi(checkNum);



//G. Monkey In the Middle
// write an if else stmt that prints little number if less than 5
// if the num entered is bigger than 10, log big number
// otherwise, log monkey



const monkeyNum = (num) => {
    if (num < 5){
        console.log("little number");
    } else if (num > 10) {
        console.log("big number");
    } else {
        console.log("monkey");
    }
}

let monkNum = 7;
monkeyNum(monkNum);


//H. What's In Your Closet? 
//Given the following 2 objects...

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

//1. Use bracket notation to access items in kristynsCloset, log
//   the sentence "Kristyn is rocking that" + 3rdItem + today.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//2. Add "raybans" to Kristyns closet after "yellow knit hat" 
kristynsCloset.splice(5, 0, "raybans");

//3. Modify Kristyns "yellow knit hat" to "stained knit hat"
kristynsCloset[6] = "stained knit hat";

//4. Access the first element in Thom's shirts array
let shirt = thomsCloset[0][0];

//5. Access an item from Thom's pants array
let pants = thomsCloset[1][1];

//6. Access an item from Thom's accessory array
let shades = thomsCloset[2][2];

//7. Make a sentence about how good Thom looks
console.log(`Damnnnn, Thom is on fire with his ${shirt}, ${pants}, and killer ${shades}`);

//8. Modify the name of Thom's PJ pants to "Footie Pajamas"
thomsCloset[1][2] = "Footie Pajamas";


//IV. Functions

//A. printGreeting - Write function with parameter name that returns
//   greeting with the argument interpolated 


const printNewGreeting = (name) => {
    return console.log(`hello there, ${name}`)
};


printNewGreeting("Slimer");

//B. printCool - Write a function printCool that accepts one parameter
//   name, as an argument. Function should print the name and message 
//   saying they are cool

const printCool = (name) => {
    return console.log(`${name} is in the cool kids club`)
};

printCool("Mr. Cool Guy");

//C. calculateCube - write a function that takes a single number and 
//   prints the volume of a cube made from that number (Math.pow(x,3))

const calculateCube = (num) => {
    let x = Math.pow(num, 3);
    return console.log(x);
};

calculateCube(5);

//D. isVowel - write a function isVowel that takes a one letter string
//   and returns true if it is a vowel.

const isVowel = (char) => {
    let char2 = char.toLowerCase();
    if(char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u"){
        return true;
    } else {
        return false;
    }

};

console.log(isVowel("u"));


//E. getTwoLengths - write a function getTwoLengths that accepts 2 parameters
//   strings, and returns an array of numbers where each number is the length
//   of the corresponding string. 

const getTwoLengths = (stringOne, stringTwo) => {
    let arr = [];
    let arrVal1 = stringOne.length;
    arr.push(arrVal1);
    let arrVal2 = stringTwo.length;
    arr.push(arrVal2);
    return console.log(arr);
}

getTwoLengths("string one", "strings twos");