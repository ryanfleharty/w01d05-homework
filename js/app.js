//console.log("js works");
// 1. How do we assign a value to a variable ?
    // a. Make up a name for the variable (consider the name carefully because a good name communicates its utility)
    // b. choose how you want to declare your variable (let , const, var) 
        //default to const, use let if you know you will need to reassign it.
        //you should only use var if the rest of the code you are working on uses it. 
    // c. declare the variable by typing its name and setting it equal to its value
    // d. const variable = x

// 2. How do we change the value of a variable ?
    // reasign it using the equals sign.  example: let variable = x ; variable = y

// 3. How do we assign an existing variable to a new variable ?
    // declare a new variable and define it with the name of the existing variable 
    // let newVariable = existingVariable

// 4. Remind me, what are`declare`, `assign`, and`define` ?
    // you declare a variable when you create it. You define the variable when you assign it a value.

// 5. What is pseudocoding and why should you do it ?
    // pseudocode is code written in english. It is helpful to use while you consider WHAT you want your code to do
    // so you don't get destracted by syntax or how exactly the code should execute.  pseudocoding lets you more easily step through a problem and consider each step the computer will need to follow

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    // Is this a trick question? What are my assumptions? Do I have experience solving similar problems? Do I need to do research? how fast can I type??
    // a beginner should spend most of his time planning and whiteboarding and only typing it in after it is solved on paper.  With some more experiencee,
    // it is helpful to type as you go so you can use console.log and debugger software. even then, more time should be spent planning before you start typing.

// ### B.Strings

// 1. Create a variable called`firstVariable`.
//   - Assign it the value of the string`"Hello World"`
//   - Change the value of this variable to some number.
//   - Store the value of`firstVariable` in a new variable called`secondVariable`
//   - Change the value of`secondVariable` to any string. 
//   - What is the value of`firstVariable` ?
// let firstVariable = "Hello World";
//     firstVariable = 4;
// let secondVariable = firstVariable;
//     secondVariable = "four";
    // firstVariable; => 4

// 2. Create a variable called`yourName` and set it equal to your name as a string.Then, write an expression that takes the string "Hello, my name is " and the variable`yourName` so that it returns a new string with them concatenated. 
//const yourName = "Dave";
//console.log("Hello, my name is " + yourName )

// > ex: `Hello, my name is Jean Valjean`

//### C.Booleans
  //  - Using the provided variable definitions, replace the blanks so that all log statements print`true` in the console.
    //Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print `true` to the console.

//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   console.log(true != false);
//   console.log(false + false + false + false + false + false != true);
//   console.log(false == false)
//   console.log(e === 'Kevin');
//   console.log(a < b < c);
//   console.log(a == a != d);
//   console.log(48  =='48');

//### D.The farm

// // 1. Declare a variable`animal`.Set it to be either "cow" or something else.
// const animal = "cow";
// // 2. Write code that will print out "mooooo" if the it is equal to`cow`.
// if (animal === "cow"){
//     console.log("moooooo");
// }
// // 3. Change your code so that if the variable`animal` is anything other than a cow, it will print "Hey! You're not a cow."
// if (animal === "cow"){
//     console.log('moooooo')
//     }else {
//         console.log("Hey you're not a cow.")
//     }
// // 4. Commit.
// ### E.Driver's Ed

// 1. Make a variable that will hold a person's age. Be semantic.
// const AgeOfPerson = 16;
// // 2. Write code that will print out "Here are the keys", if the age is 16 years or older.
// if (AgeOfPerson >= 16) {
//         console.log("Here are the keys");
//     }else{
//         console.log("Sorry, you're too young");
//     }
// 3. If the age is younger than 16, a message should print "Sorry, you're too young."

//###2 A.The basics

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive.
// for (let i = 0; i<=10; i++){
//     console.log(i);
// }
// 2. Write a loop that will print out all the numbers from 10 up to and including 400.
//for (let i = 12; i <= 4000; i++){
//    console.log(i);
//}
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000.
//  for (let i = 12; i <= 4000; i+= 3){
// //     if (i % 3 == 0){
//     console.log(i);
//    }
// }
// ### B.Get even

//1. Print out the even numbers that are within the range of 1 - 100.
// for (let i=0;i<=100; i+=2){
//     console.log(i + " <-- is an evan number.");
//}

// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

//### C.Give me Five

// 1. For the numbers 0 - 100, print out "I found a `number`. High five!" if the number is a multiple of five.

// for (let i = 0; i <= 100; i++){
//     if (i % 5 === 0) {
//         console.log("I found a " + i + " High five!")
//     }
// }

// Example Output:
// ```
// I found a 5. High five!
// I found a 10. High five!
// ```

// 2. Add to the code from above to print out "I found a `number`. Three is a crowd" if the number is a multiple of three.
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log( "I found a " + i + ". High five!");
//     }
//     else if ( i % 3 === 0 ) {
//             console.log ("I found a "+i+". Three is a crowd");      
//     }
// }

// > Example Output:
// ```
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// ```

// ### D.Savings account

// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called`bank_account`.
// const arr = []
// let bank_account = 0
// //create arr of 1-10
// for (let i=0; i<=10; i++) {
    
//     arr.push(i)+i;
// }
// // loop through arr add each number to bank_account
//     for (let x=arr[1];x<=arr.length-1;x++){
//         bank_account = bank_account + x;
//     }
//  console.log(bank_account)
// > Check your work! Your banck_account should have $55 in it.

// 2. You got a bonus! Your pay is now doubled each week.Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// const arr = []
// let bank_account = 0
// //create arr of 1-10
// for (let i = 1; i <= 10; i++) {
// arr.push(i*2);
// }
// // loop through arr add each number to bank_account
// for (let x = 0; x <= arr.length-1; x++) {
// bank_account = bank_account + arr[x];
// }
// console.log(bank_account)
//     > Check your work! Your banck_account should have $10, 100 in it. <=== this must be a typo or I am missunderstanding what the problem is asking.
// if each payment is doubled it goes from being 1+2+3+4+5+6+7+8+9+10 = 55
// to 2+4+6+8+10+12+14+16+18+20 = 110

// ###
// E.Multiples of 3 and 5
//***/ I've read all of the instructions, but I didn't get to complete this yet.***
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you 've done has helpful bits of code in it that partially solves this problem, look back at them.
// const arr = []
// let sum = 0
// for (let i = 0; i<1000; i++){
//     if ((i%3===0)||(i%5===0)){
//         arr.push(i);
//     }
// }
// for(let x = 0; x <= arr.length-1; x++){
//     sum = sum + arr[x];
// }
// console.log(sum);
// ##
// III.Arrays & Control flow

// ### A.Talk about it:

//     1. What are the things in an array called ?
        //  We call them elements 
//     2. Do Arrays guarantee those things will be in order ?
        // yes
//     3. What real - life thing could you model with an array ?
        // a shopping list, inventory, list of events, days of the week.  Anything you keep in list form.
//     :
//     red_circle : Commit.
// ###
// B.Easy Does It

// 1. Create an array that contains three quotes and store it in a variable called `quotes`.
//const quotes = ["quote 1", "quote 2", "quote 3"]
//     : red_circle: Commit.

// ### C.Accessing elements

// // Given the following array `const randomThings = [1, 10, "Hello", true]`
// const randomThings = [1, 10, "Hello", true]
// // 1. How do you access the 1 st element in the array ?
// randomThings[0]
// //     2. Change the value of `"Hello"`
// // to `"World"`.
// randomThings[2] = "Hello World"
// // 3. Check the value of the array to make sure it updated the array.How ? Why, yes!`console.log()`;
// console.log(randomThings)
// ###

// D.Change values

// // Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // 1. What would you write to access the 3 rd element of the array ?
// ourClass[2];
// //     2. Change the value of "Github"
// // to "Octocat"
// ourClass[4] = "Octocat"
// // 3. Add a new element, "Cloud City"
// // to the array.
// ourClass.push('Cloud City');

// ### E.Mix It Up

// Given the following array: 
// const myArray = [5, 10, 500, 20]

// // 1. Add the string `"Egon"`
// // to the end of the array.Add another string of your choice to the end of the array.
// myArray.push("Egon");
// myArray.push("Bill");

// // 2. Remove the `5`
// // from the beginning of the array.
// myArray.shift();
// // 3. Add the string `"Bob Marley"`
// // to the beginning of the array.
// myArray.unshift("Bob Marley");
// // 4. Remove the string of your choise from the end of the array.
// myArray.pop()
// // 5. Reverse this array using `Array.prototype.reverse()`.Did you mutate the array ? What does _mutate_ mean ? Did the `.reverse()`
// // method
// myArray.reverse()
// // return anything ?
// // I mutated the array, which means I changed the mutable elements.  Nothing was returned automatically, but when I typed the name into the console it returned a reversed array.
// //     :
// //     red_circle: Commit.

// ###
// F.Biggie Smalls

// Create a variable that contains an integer.
//const num = 6;
// Write an `if ... else`
// statement that:
//     1. `console.log()`
// s "little number"
// if the number is entered is less than ** 100 **
// if (num < 100) {
    // console.log("little number");
// }
//     2. `console.log()`
// s `big number`
// if the number is greater than or equal to 100.
// if (num > 100) {
    // console.log("big number");
// }
//     : red_circle: Commit.
// if (num < 100) {console.log("little number")}
// ###
// G.Monkey in the Middle

// Write an `if ... else if ... else`
// statement:

//     1. `console.log()`
// `little number`
// if the number entered is less than ** 5 ** . < br >
// if (num < 5){
//     console.log("little Number");
// }else if (num > 10){
//     console.log("Big Number");
// }else{console.log("Monkey");
//}
//     2. If the number entered is more than 10, log `big number`.

// 3. Otherwise, log "monkey". < br >
// ###
// H.What 's in Your Closet?

// Below, we 've given you examples of Kristyn and Thom'
// s closets modeled as data in JavaScript.

// ``
// `javascript

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

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

// // 1. What 's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`, log the sentence "Kristyn is rocking that " + *the third item in Kristyn'
// // s closet * +" today!"
// // to the console.
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// // 2. Kristyn just bought some sweet shades!Add `"raybans"`
// // to her closet ** after `"yellow knit hat"`. **
// console.log(kristynsCloset.splice(6,0,"raybans"));
// //     3. Kristyn spilled coffee on her hat...modify this item to read `"stained knit hat"`
// // instead of yellow.
// (kristynsCloset[5]) = "stained knit hat"

// // 4. Put together an outfit
// // for Thom!Using ** bracket notation ** , access the first element in Thom 's `shirts` array.
// thomsCloset[0][0];
// // 5. In the same way, access one item from Thom 's pants array.
// thomsCloset[1][2];
// // 6. Access one item from Thom 's accessories array.
// thomsCloset[2][3];
// // 7. Log a sentence about what Thom 's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"`
// console.log("Thom is looking fierce in a " + thomsCloset[0][0] +', '+thomsCloset[1][1]+' and '+thomsCloset [2][2]+'!')
// // 8. Get more specific about what kind of PJs Thom 's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.

// //     : red_circle: Commit.
thomsCloset[1][2]="Footie Pajamas"