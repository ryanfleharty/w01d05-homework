// console.log('running');
// A.Q + A
// How do we assign a value to a variable ?

// 1. we initially have to declare the variable with either const or let. along with giving it a name.
// after that we give it a value to declare it such as let newVariable = 12.



//     How do we change the value of a variable ?
        // if the variable is defined as let initially we can call the variable and add its new value.
//         How do we assign an existing variable to a new variable ?
            // by establishing that variable and when you put the value in it would = the variable we want with the new variable we're defining.
//             Remind me, what are declare, assign, and define ?
                // declaring is when you say you want a new variable with let or const. 
                // assigning is giving the variable it's name say newVariable
                // defining is when you assign the value to the variable. let newVariable = 12
//             What is pseudocoding and why should you do it ?
    // psuedocode is writing down what you want the code to do to get the result. In English so you and your team can understand what the goal
    // is with the code and have a blueprint of how to get there.
//                 What percentage of time should be spent thinking about how you 're going to solve a problem vs actually typing in code to solve it?
                // it should be 20% of thinking of how to code it and where to start, 40% of coding. And then another 40% of debugging. 

// let firstVariable = 'Hello world!';
//  firstVariable = 22;

//  let secondVariable = firstVariable;

//  secondVariable = "chill lofi beats";
// console.log(firstVariable);
//  // First variable value is 22.

//  const yourName = "Ben Wall";

//  let phrase = "Hello, My name is " + yourName;
//  console.log(phrase);
 
//  const a = 4;
//  const b = 53;
//  const c = 57;
//  const d = 16;
//  const e = 'Kevin';

//  console.log(a < b);
//  console.log(c > d);
//  console.log('Name' === 'Name');
//  console.log(true !== false);
//  console.log(false === false === false === false === false === false === true);
//  console.log(false === false)
//  console.log(e === 'Kevin');
//  console.log(a < b < c);
//  console.log(a === a !== d);
//  console.log(48 !== '48');

// let animal = 'cow';
// if (animal === 'cow'){
//     console.log("moooooo");
// } else {
//     console.log("Hey! you're not a cow.");
    
// }

// let driversAge = 25;

// const givingLicense = () => {
//     if (driverAge >= 16) {
//         console.log("Here are your keys to your new car.");
//     } else if (driverAge < 16) {
//         console.log("Sorry come back when you're older.");
//     }
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// for (let i = 10; i <= 400; i++) {
//     console.log(i);
// }
// for (let i = 12; i < 4000; i++) {
//     if (i / 3) {
//         console.log(i);
//     }
// }
// for (let i = 0; i < 100; i++) {
//     if (i / 2) {
//         console.log(i + "<--- is an even number.");
//     }
// }
// for (let i = 1; i < 100; i++) {
//     if (i / 5) {
//         console.log("I found a " + i);
//     } else if (i / 3) {
//         console.log("Threes a crowd!");
//     }
// }
// const savingsAccount = () => {
//     let startingBalace = 0;
//     for ( let i = 0; i <= 10; i++) {
//         let accountBalance = startingBalace += i;
//         console.log(accountBalance);
//     }
//     for (let i = 0; i <= 100; i++) {
//         let bonusPay = startingBalace += i * 2;
//         console.log(bonusPay);
        
//     }
// }
// savingsAccount();

// already have done the assignment E.

// an array is a list of values which can be strings and numbers.
// unless there is an impur of the numbers in order the array is almost certain that it is not in order. 
// In real life, these arrays can be used as clock in times for a person throughout their time at a company. Or for the transactions recorded in a bank account. 

// let quotes = ["alright alright alright", "would you like some coffee?", "We're here to make you think about death and feel sad and stuff."];

// const randomThings = [1, 10, "Hello", true];
//     randomThings.splice(2,1, "World!");
//     console.log(randomThings);

// const myArray = [5, 10, 500, 20]
// myArray.push("Egon", "Bang");
// myArray.splice(0,5);
// myArray.push("Bob Marley");
// myArray.shift();
// Array.prototype.reverse(myArray);
// console.log(myArray);
// Since there is only one string in the array its hard to show if it has been reverse. 


// const number = 43;
// if (number < 100) {
//     console.log("little number");
// } else if (number >= 100) {
//     console.log("Big number");
// }
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//         // These are Thom's shirts
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up",
//     ],
//     [
//         // These are Thom's pants
//         "grey jeans",
//         "jeans",
//         "PJs"
//     ],
//     [
//         // Thom's accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];

// console.log("Kristyn is rocking that" + kristynsCloset[2] + "fo today!");

// kristynsCloset.splice(6, 0, "raybans");
// kristynsCloset.splice(5, 1, "stained knit hat");

// console.log(kristynsCloset);

// console.log( "Thom be looking good with his " + thomsCloset[0][0] + " " + thomsCloset[1][0] + " And " + thomsCloset[2][1] + " today." );
// thomsCloset.splice([1][2], 0, "Footie Pajamas" );
// console.log(thomsCloset[1]);

//  const printGreeting = (name) => {
//      let greetName = `Hello there ${name}`;
//      console.log(greetName);
//  }
// printGreeting();

// const printCool = (name) => {
//              let coolName = name + " Is a cool guy.";
//              console.log(coolName);
//          }
// printCool("Dennis Reynolds");


// const calculateCube = (num) => {
//         let volume = num * num * num;
//         console.log(volume);
// }
// calculateCube(5);

// const isVowel = (vowel) => {
//     if (vowel === "a" || vowel === "i" || vowel === "e" || vowel === "o" || vowel === "u"
//     || vowel === "A" || vowel === "I" || vowel === "E" || vowel === "O" || vowel === "U") {
//         console.log('true');
//     } else {
//         console.log('False')
//     }
// }
// isVowel("e");

// const getTwoLengths = (str1, str2) => {
    
//     let strOne = str1;
//     let strTwo = str2;
//     let str = [strOne.length, strTwo.length];
//     console.log(str);
   
// }
// getTwoLengths("lmao", "oof");

// const getMultipleLengths = (str) => {
    
//     let stringArray = str[i];
//     let string = stringArray.length;
//     for( let i = 0; i < str.length; i++) {

//     }
//     console.log(string);
// }
// getMultipleLengths(["i", "am", "going", "crazy"]);

// const maxOfThree = (int) => {
//         return Math.max.apply(Math, int);
//          console.log(maxOfThree(int));
//     }
// maxOfThree();

// const printLongestWord = (string) => {
//     let longest = '';
// for (i = 0; i < string.length; i++) {
//          if (string[i].length > longest.length) {
//              longest = string[i].length;
//          }
//      }
//      return string[longest];
//  }
//  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


// const reverseWordOrder = (str) => {
//     let wordList = [];
//     let word = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ') {
//                 wordList.Unshift(word);
//                 word = '';
//         } else {
//             word = word + str[i];
//         }
//     }
//     word.push(word);
// }
// reversedWordOrder();

// const randomMath = (num1, num2) => {
//    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
// }
// const randomMath2 = (num1, num2) => {
//     return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
// }
// randomMath(1, 10);
// randomMath2(1, 100);


const user = {
    name: "Cash Carti",
    email: 'user@liluzi.gov',
    age: 22,
    purchased: [],
}
user.email = "Playboi@cashcarti.com";
user.age = user.age++;
user.location = "Atlanta";

user.purchased.push("Carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

user.friend = {
    name: "homeboy",
    age: 21,
    location: "The block",
    purchased: [],
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The one ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);


