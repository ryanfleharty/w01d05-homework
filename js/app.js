// A. Q + A
//1. How do we assign a value to a variable?
//const variableName = variableValue

//2. How do we change the value of a variable?
//variable needs to start as let variableName = versus const
//then we write let variableName = newValue

//3. How do we assign an existing variable to a new variable?
// let existingVariable = newVariable

//4. Remind me, what are declare, assign, and define?
//declare is the first time you tell the program to create a 
//variable or function
//assign is when you give a variable a new value
//define is the first time you give a variable a value

//5. What is pseudocoding and why should you do it?
//Pseudocoding is writing out in plain English the steps you 
//want to take to achieve a goal. It is useful because it allows
//you to think through a problem before jumping into code. That
//way you can double check that each of your steps is being 
//accomplished when you test your code.

//6. What percentage of time should be spent thinking about how 
//you're going to solve a problem vs actually typing in code 
//to solve it?
//75% - 90% of your time should be planning and 10%-25% should
//be typing code.



//B. Strings
//1. Create a variable called firstVariable.
// let firstVariable

// Assign it the value of the string "Hello World"
// let firstVariable = "Hello World";

// Change the value of this variable to some number.
// firstVariable = 3;

// Store the value of firstVariable in a new variable called 
//secondVariable
// let secondVariable = firstVariable;

// Change the value of secondVariable to any string.
// secondVariable = 'Here is something';

// What is the value of firstVariable?
// 'Here is something'

//2. Create a variable called yourName and set it equal to your 
//name as a string. Then, write an expression that takes the 
//string "Hello, my name is " and the variable yourName so that 
//it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// let yourName = 'Destiny Hillis';
// 'Hello my name is ' + yourName + '.';




//C. Booleans
//Using the provided variable definitions, replace the blanks 
//so that all log statements print true in the console. Answers 
//should be all be valid JS syntax and not weird things that 
//don't make sense but happen to print true to the console.

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// console.log(true !== false);
// console.log(false === false === false === false === false === false === true);
// console.log(false === false)
// console.log(e == 'Kevin');
// console.log(a < b < c);
// console.log(a * a === d);
// console.log(48 == '48');




// D. The farm
//1. Declare a variable animal. Set it to be either "cow" or 
//something else.
//let animal = 'cow';

//2. Write code that will print out "mooooo" if the it is equal 
//to cow.
// if (animal = 'cow') {
//     console.log('mooooo');
// }

// //3. Change your code so that if the variable animal is anything 
// //other than a cow, it will print "Hey! You're not a cow."
// animal = 'pig';
// if (animal !== 'cow') {
//     console.log("Hey! You're not a cow.");
// }




// E. Driver's Ed
//1. Make a variable that will hold a person's age. Be semantic.
// let personsAge = {};

// //2. Write code that will print out "Here are the keys", if the 
// //age is 16 years or older.
// if (personsAge >= 16) {
//     console.log('Here are the keys.');
// }

// //3. If the age is younger than 16, a message should print 
// //"Sorry, you're too young."
// if (personsAge < 16) {
//     console.log("Sorry, you're too young.")
// }




// II. Loops
// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
//1. Write a loop that will print out all the numbers from 0 to 
//10, inclusive.
// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }

// //2. Write a loop that will print out all the numbers from 10 up 
// //to and including 400.
// for (let i = 10; i < 401; i++) {
//     console.log(i);
// }

// //3. Write a loop that will print out every third number starting 
// //with 12 and going no higher than 4000.
// for (let i = 12; i < 4000; i++) {
//     if ([i] % 3 === 0) {
//         console.log(i);
//     }
// }


// B. Get even
//1. Print out the even numbers that are within the range of 
//1 - 100.
// for (let i = 1; i < 101; i++) {
//     if ([i] % 2 === 0)
//     console.log(i);
// }

// //2. Adjust your code to add a message next to even numbers only 
// //that says: "<-- is an even number".
// for (let i = 1; i < 101; i++) {
//     if ([i] % 2 === 0)
//     console.log(i + "<-- is an even number");
// }



// C. Give me Five
//1 For the numbers 0 - 100, print out "I found a number. High 
//five!" if the number is a multiple of five.
// Example Output:
// I found a 5. High five!
// I found a 10. High five!
// for (let i = 0; i < 101; i++) {
//     if ([i] % 5 === 0) {
//         console.log('I found a ' + [i] + '. High five!')
//     }
// }

//2. Add to the code from above to print out "I found a number. 
//Three is a crowd" if the number is a multiple of three.
// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// for (let i = 0; i < 101; i++) {
//     if ([i] % 5 === 0) {
//         console.log('I found a ' + [i] + '. High five!')
//     }
//     if ([i] % 3 === 0) {
//         console.log('I found a ' + [i] + '. Three is a crowd.')
//     }
// }



// D. Savings account
//1. Write code that will save the sum of all the numbers between 
//1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.
// let bank_account = 0;

// for (let i = 1; i < 11; i++) {
//     bank_account += i;
//     console.log(bank_account);
// }

// //2. You got a bonus! Your pay is now doubled each week. Write 
// //code that will save the sum of all the numbers between 1 - 100 
// //multiplied by 2.
// // Check your work! Your banck_account should have $10,100 in it.

// let bank_account = 0;

// for (let i = 1; i < 101; i++) {
//    bank_account += i * 2;
//     console.log(bank_account);
// }



// E. Multiples of 3 and 5
// If we list all the natural numbers below 10 that are 
//multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these 
//multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000. If 
//a previous question you've done has helpful bits of code in 
//it that partially solves this problem, look back at them.
// let sum = 0;

// for (let i = 0; i < 1001; i++) {
//     if ([i] % 5 === 0 || [i] % 3 === 0) {
//         sum += i;
//         console.log(sum);
//     }
// }

// You just solved Project Euler problem 1!

// Are you having dejà vu? This just in! From the "Read the 
//entire problem before you start" dept: This problem was on a 
//previous assignment. You may skip it if you've already done it, 
//just include a comment saying that you've already done it. 
//If you've now done the problem twice, perhaps next time 
//you'll read the whole problem before starting it.




// III. Arrays & Control flow
// A. Talk about it:
//1. What are the things in an array called?
//values

//2. Do Arrays guarantee those things will be in order?
//no

//3. What real-life thing could you model with an array?
//a bowl holding all of the ingredients for a recipe


// B. Easy Does It
//1. Create an array that contains three quotes and store it in a 
//variable called quotes.
// const quotes = ['Life is short. Smile while you still have teeth.', 'Sorry for the mean, awful, accurate things I said', 'An apple a day keeps anyone away if you throw it hard enough.'];



// C. Accessing elements
//Given the following array 
// const randomThings = [1, 10, "Hello", true]

// //1. How do you access the 1st element in the array?
// randomThings[0];

// //2. Change the value of "Hello" to "World".
// randomThings[2] = "World";

// //3. Check the value of the array to make sure it updated the 
// //array. How? Why, yes! console.log();
// console.log(randomThings);



// D. Change values
// Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// //1. What would you write to access the 3rd element of the array?
// ourClass[2];

// //2. Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";

// //3. Add a new element, "Cloud City" to the array.
// ourClass.push("Cloud City");
// console.log(ourClass);


// E. Mix It Up
// Given the following array: 
// const myArray = [5, 10, 500, 20]

//1. Add the string "Egon" to the end of the array. Add another 
//string of your choice to the end of the array.
// myArray.push("Egon");
// myArray.push("Poop");
// console.log(myArray);

// //2. Remove the 5 from the beginning of the array.
// myArray.splice(0, 5);
// console.log(myArray);

// //3. Add the string "Bob Marley" to the beginning of the array.
// myArray.unshift("Bob Marley");
// console.log(myArray);

// //4. Remove the string of your choise from the end of the array.
// myArray.pop();
// console.log(myArray);

// //5. Reverse this array using Array.prototype.reverse(). Did you 
// //mutate the array? What does mutate mean? Did the .reverse() 
// //method return anything?
// myArray.reverse();
// console.log(myArray);
//If all of the changes I made in 1-5 are commented out, yes, the 
//array has been reversed but not mutated. Mutated means the array's
//values would be changed.
//If we keep 1-4 changes active, nothing happens to the array
//because there is only 1 value.


// F. Biggie Smalls
// Create a variable that contains an integer.
// Write an if ... else statement that:

//1. console.log()s "little number" if the number is entered is 
//less than 100
// let num = 12;
// if (num < 100) {
//     console.log('little number');
// }

// //2. console.log()s big number if the number is greater than or 
// //equal to 100.
// else {
//     console.log('big number');
// }




// G. Monkey in the Middle
// Write an if ... else if ... else statement:

//1. console.log() little number if the number entered is less 
//than 5.
// let num1 = 7;
// if (num1 < 5) {
//     console.log('little number');
// }

// //2. If the number entered is more than 10, log big number.
// else if (num1 > 10) {
//     console.log('big number');
// }

// //3. Otherwise, log "monkey". 
// else {
//     console.log('monkey');
// }




// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's 
//closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// Thom's closet is more complicated. Check out this nested 
//data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
//1. What's Kristyn wearing today? Using bracket notation to 
//access items in kristynsCloset, log the sentence "Kristyn is 
//rocking that " + the third item in Kristyn's closet + " today!" 
//to the console.
// console.log('Krystyn is rocking that ' + kristynsCloset[2] + ' today!');

// //2. Kristyn just bought some sweet shades! Add "raybans" to 
// //her closet after "yellow knit hat".
// kristynsCloset.splice(6,0, "raybans");
// console.log(kristynsCloset);

// //3. Kristyn spilled coffee on her hat... modify this item to 
// //read "stained knit hat" instead of yellow.
// kristynsCloset[5] = "stained yellow hat";
// console.log(kristynsCloset);

// //4. Put together an outfit for Thom! Using bracket notation, 
// //access the first element in Thom's shirts array.
// console.log(thomsCloset[0][0]);

// //5. In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][1]);

// //6. Access one item from Thom's accessories array.
// console.log(thomsCloset[2][2]);

// //7. Log a sentence about what Thom's wearing. Example: "Thom 
// //is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log("Thom's newest outfit is a " + thomsCloset[0][0] + " with a pair of " + thomsCloset[1][1] + " and " + thomsCloset[2][2] + ".");

// //8. Get more specific about what kind of PJs Thom's wearing 
// //this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = 'Footie Pajamas';
// console.log(thomsCloset[1]);


// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreeting 
//with a parameter name that returns a greeting with the 
//argument interpolated into the greeting?
// Like so?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// You think you could? I think so too. Feel free to skip this 
//problem, because you've already done it. If you've done the 
//problem twice, read entire problems carefully before doing 
//them from now on.

//Did it for practice and I don't think I did it interpolated last time.
// const greeting = 'Slimer!';

// const printGreeting = () => {
//      console.log(`Hello there, ${greeting}`); 
// }

// printGreeting();



// B. printCool
// Write a function printCool that accepts one parameter, name 
//as an argument. The function should print the name and a 
//message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

// const printCool = (name) => {
//     console.log(name + ' is cool.');
// }

// printCool('Captain Reynolds');



// C. calculateCube
// Write a function calculateCube that takes a single number 
//and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125

// const calculateCube = (num) => {
//      console.log((num * num) * num);
// }

// calculateCube(5);



// D. isVowel
// Write a function isVowel that takes a character (i.e. a 
//string of length 1) and returns true if it is a vowel, false 
//otherwise. The vowel could be upper or lower case.
// console.log(isVowel("a"));
// => true
// const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

// const isVowel = (character) => {
//     for (let i = 0; i < vowels.length; i++) {
//         if (character == vowels[i]) {
//             return true;
//         }
//         else if (character !== vowels[i]) {
//             return false;
//         }
//     }
// }

// console.log(isVowel('A'));



// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters 
//(strings). The function should return an array of numbers 
//where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]
// let lengthArray = [];

// const getTwoLengths = (str1, str2) => {
//         lengthArray.push(str1.length);
//         lengthArray.push(str2.length);
//         return lengthArray;
//     }

// console.log(getTwoLengths("Hank", "Hippopopalous"));



// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single 
//parameter as an argument: an array of strings. The function 
//should return an array of numbers where each number is the 
//length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]
//NEED TO DRY IT UP
// let lengthArray2 = [];

// const getMultipleLengths = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         // let split = arr[i].split(arr);
//         // console.log(split);

//         lengthArray2.push(arr[0].length);
//         lengthArray2.push(arr[1].length);
//         lengthArray2.push(arr[2].length);
//         lengthArray2.push(arr[3].length);
//         lengthArray2.push(arr[4].length);

//         return lengthArray2;
//     }
// }

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));



// G. maxOfThree
// Define a function maxOfThree that takes three numbers as 
//arguments and returns the largest of them. If all numbers are 
//the same, it doesn't matter which one is returned. If the two 
//largest numbers are the same, one of them should be returned.

// console.log(maxOfThree(6, 9, 1));
// => 9

// const maxOfThree = (num1, num2, num3) => {
//     let max = Math.max(num1, num2, num3);
//     return max;
// }

// console.log(maxOfThree(6, 9, 1));



// H. printLongestWord
// Write a function printLongestWord that accepts a single 
//argument, an array of strings. The method should return the 
//longest word in the array. In case of a tie, the method 
//should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"


// const printLongestWord = (arr) => {
//     let letters = 0;
//     let maxWord = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length >= letters) {
//         letters = arr[i].length;
//         maxWord = arr[i];
//     }
// }
// return maxWord;
// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



// I. transmogrify
// Write a Javascript function called transmogrify. This 
//function should accept three arguments, which you can assume 
//will be numbers. Your function should return the 
//"transmogrified" result.
// The transmogrified result of three numbers is the product of 
//the first two numbers, raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is 
//(5 times 3) to the power of 2 is 225.
// console.log(transmogrify(5, 3, 2));
// => 225

// const transmogrify = (num1, num2, num3) => {
//     let firstNumber = num1 * num2;
//     let finalNumber = [];
//     for (let i = 0; i < num3; i++) {
//         finalNumber = firstNumber * firstNumber;
//     }     
//     return finalNumber;
// }

// console.log(transmogrify(5, 3, 2));



// J. reverseWordOrder v2
// Without using .split(), .reverse(), or .join(), write a 
//function reverseWordOrder that accepts a single argument, a 
//string. The function should return a string with the order of 
//the words reversed. Don't worry about punctuation.

// See if you can do it without googling.

// Remember: Jim showed you today that you can index directly 
//into a string:

// "hello world"[6]
// => "w"

// That and basic loops and variables and arrays are all you 
//need to solve this without the Array methods.

// console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"

// console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"

// const reverseWordOrder = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let words = arr[i];
//         console.log(words);

//     }
// }

//console.log(reverseWordOrder("Ishmael me Call"));


// const reverseWordOrder = (str) => { 
    
//     let reversed = "";
    
//     for (let i = str.length -1; i >= 0; i--) {
//         reversed += str[i];
//     }
//         return reversed;
//     }

// console.log(reverseWordOrder("Ishmael me Call"));
// console.log(reverseWordOrder("I use Lâncome on my comb"));

//maybe for words into new array?

// let str = "Ishmael me Call";
// let words = [];
// let rev = "";
// for(let i = 0; i < str.length; i++) {
//     if(str[i] == " ") {
//         words.push(rev);
//         rev = "";
//     }
// }

// console.log(rev);



// K. Get down and dirty with Math.random()
//1. Write a function that will return a random integer between 1 and 10. Test it.
const random1 = (num) => {
    return Math.floor((Math.random() * 10) + 1);
}
console.log(random1());



//2. Write a function that will return a random integer between 10 and 100. Test it.
const random2 = () => {
    min = Math.ceil(10);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random2());

//3. Write a function that will return a random number between 532 and 13267. Test it.
const random3 = () => {
    return Math.random() * (13267 - 532) + 532;
}
console.log(random3());

//4. Write a function that will return a random number between 1 and 10. Test it.
const random4 = () => {
    return Math.random() * (10 - 1) + 1;
}
console.log(random4());

//5. Add a few more quotes to the quotes array from question III-B-1 above. 
//Write a function that will take an array as a parameter, and return a random 
//element from that array. Call your function a few times, passing in the quotes 
//array. Give it a nice semantic name like getRandomElement.
//NOT WORKING...

const getRandomElement = (arr) => {
    for (let i = 0; i < arr.length; i++) {
    return Math.floor(Math.random() * arr.length);
    }
}

console.log(getRandomElement('Life is short. Smile while you still have teeth.', 'Sorry for the mean, awful, accurate things I said', 'An apple a day keeps anyone away if you throw it hard enough.', '4 out of 3 people struggle with math.', 'You can stop driving me crazy, I can walk from here.', "I don't like morning people...or mornings...or people."));




// Objects
// Let's set up an object data structure. Let's say we have a website that 
//sells products, and we have a user of our website, and we want to store that 
//user's data. The object data structure is a good way to organize the data 
//from our user.

// A. Make a user object
//1. Create an object called user.
//2. Write in to the object the key-value pairs for name, email, age, and 
//purchased. Set the value of purchased to an empty array []. Set the other 
//values to whatever you would like.
const user = {    
    name: 'Frank Smith',
    email: 'frank@something.com',
    age: 34,
    puchased: [],
}



// B. Update the user
//1. Our user has changed his or her email address. Without changing the original 
//user object, update the email value to a new email address.

user.email = 'frank1985@something.com';
console.log(user);

//2. Our user has had a birthday! Without changing the original user object, 
//increment the age value using the postfix operator. Hint: age++

user.age++;
console.log(user);





