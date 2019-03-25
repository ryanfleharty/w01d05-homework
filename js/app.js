//console.log("js works");
//I.Variables & Datatypes
    //A.Q&A
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

    //B.Strings
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

    //C.Booleans
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

    //D.The farm

        // 1. Declare a variable`animal`.Set it to be either "cow" or something else.
            // const animal = "cow";

        // 2. Write code that will print out "mooooo" if the it is equal to`cow`.
            // if (animal === "cow"){console.log("moooooo");}

        // 3. Change your code so that if the variable`animal` is anything other than a cow, it will print "Hey! You're not a cow."
            // if (animal === "cow"){
            //     console.log('moooooo');
            // } else {
            //     console.log("Hey you're not a cow.")
            // }

    //E.Driver's Ed
        // 1. Make a variable that will hold a person's age. Be semantic.
            // const AgeOfPerson = 16;
        // 2. Write code that will print out "Here are the keys", if the age is 16 years or older.
            // if (AgeOfPerson >= 16) {
            //     console.log("Here are the keys");
            // } else {
            //     console.log("Sorry, you're too young");
            // }
        // 3. If the age is younger than 16, a message should print "Sorry, you're too young."

//2 A.The basics

    // 1. Write a loop that will print out all the numbers from 0 to 10, inclusive.
            // for (let i = 0; i<=10; i++){
            //     console.log(i);
            // }
    // 2. Write a loop that will print out all the numbers from 10 up to and including 400.
            // for (let i = 12; i <= 4000; i++){
            //     console.log(i);
            // }
    // 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000.
            // for (let i = 12; i <= 4000; i+= 3){
            //     if (i % 3 == 0){
            //         console.log(i);
            //     }

//B.Get even
    //1. Print out the even numbers that are within the range of 1 - 100.
            // for (let i=0;i<=100; i+=2){
            //     console.log(i + " <-- is an evan number.");
            // }

    // 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

//C.Give me Five
    // 1. For the numbers 0 - 100, print out "I found a `number`. High five!" if the number is a multiple of five.
            // for (let i = 0; i <= 100; i++){
            //     if (i % 5 === 0){
            //         console.log("I found a " + i + " High five!")
            //     }
            // }
    // 2. Add to the code from above to print out "I found a `number`. Three is a crowd" if the number is a multiple of three.
            // for (let i = 1; i <= 100; i++){
            //     if (i % 5 === 0){
            //         console.log( "I found a " + i + ". High five!");
            //     }else if ( i % 3 === 0 ){
            //         console.log ("I found a "+i+". Three is a crowd");
            //     }
            // }
//D.Savings account
    // 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called`bank_account`.
            // const arr = []
            // let bank_account = 0
            // //create arr of 1-10
            // for (let i=0; i<=10; i++){
            //     arr.push(i)+i;
            // }
            // // loop through arr add each number to bank_account
            // for (let x=arr[1];x<=arr.length-1;x++){
            //     bank_account = bank_account + x;
            // }
            // console.log(bank_account)
    // 2. You got a bonus! Your pay is now doubled each week.Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
            // const arr = []
            // let bank_account = 0
            // //create arr of 1-10
            // for (let i = 1; i <= 10; i++){
            //     arr.push(i*2);
            // }
            // // loop through arr add each number to bank_account
            // for (let x = 0; x <= arr.length-1; x++) {
            //     bank_account = bank_account + arr[x];
            // }
        // console.log(bank_account)

//****** ATTENTION: NEEDS CLARIFICATION********* 
//Check your work! Your banck_account should have $10, 100 in it. <=== this must be a typo or I am missunderstanding what the problem is asking.
// if each payment is doubled it goes from being 1+2+3+4+5+6+7+8+9+10 = 55
// to 2+4+6+8+10+12+14+16+18+20 = 110

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

//III.Arrays & Control flow
    //A.Talk about it:
            //1. What are the things in an array called ?
                //  We call them elements 
            //2. Do Arrays guarantee those things will be in order ?
                // yes
            //3. What real - life thing could you model with an array ?
                // a shopping list, inventory, list of events, days of the week.  Anything you keep in list form.

    // B.Easy Does It
        // 1. Create an array that contains three quotes and store it in a variable called `quotes`.
            //const quotes = ["quote 1", "quote 2", "quote 3"]
      
    // C.Accessing elements
        //Given the following array `const randomThings = [1, 10, "Hello", true]`
            // const randomThings = [1, 10, "Hello", true]
        //1. How do you access the 1 st element in the array ?
            // randomThings[0]
        //2. Change the value of `"Hello"` to `"World"`.
            // randomThings[2] = "World"
        //3. Check the value of the array to make sure it updated the array.How ? Why, yes!`console.log()`;
            // console.log(randomThings)

    // D.Change values
        // Given the following array 
            // const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

        // 1. What would you write to access the 3 rd element of the array ?
            // ourClass[2];
        // 2. Change the value of "Github" to "Octocat"
            // ourClass[4] = "Octocat"
        //3. Add a new element, "Cloud City" to the array.
            // ourClass.push('Cloud City');

    //E.Mix It Up
        // Given the following array: 
            // const myArray = [5, 10, 500, 20]
        // 1. Add the string `"Egon"`to the end of the array.Add another string of your choice to the end of the array.
            // myArray.push("Egon");
            // myArray.push("Bill");

        // 2. Remove the `5` from the beginning of the array.
            // myArray.shift();
        //3. Add the string `"Bob Marley"` to the beginning of the array.
            // myArray.unshift("Bob Marley");
        //4. Remove the string of your choise from the end of the array.
            // myArray.pop()
        //5. Reverse this array using `Array.prototype.reverse()`.Did you mutate the array ? What does _mutate_ mean ? Did the `.reverse()`method myArray.reverse()return anything ?
            // I mutated the array, which means I changed the mutable elements.  Nothing was returned automatically, but when I typed the name into the console it returned a reversed array.

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
    //thomsCloset[1][2]="Footie Pajamas"

// ##
// IV.Functions


// A.`printGreeting` -- SKIPPED PER INSTRUCTIONS

// B.`printCool`

// Write a
// function `printCool`
// that accepts one parameter, `name`
// as an argument.The
// function should print the name and a message saying that that person is cool.

// const printCool = function (name){
//     console.log (name + " is cool");
// }

// printCool("Captain Reynolds");

// //`=> "Captain Reynolds is cool";`

// //: red_circle: Commit.

// C. `calculateCube`

// Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.
// const calculateCube = (x) => {
//    return (x*x)*x;
// }

// console.log(calculateCube(5));

// ### D.`isVowel`

// Write a
// function `isVowel`
// that takes a character(i.e.a string of length 1) and returns true
// if it is a vowel, false otherwise.The vowel could be upper or lower
// case.

// const isVowel = (char) => {
//     const trueLetters = ('A','E','I','O','U')
//     if (char.toUpperCase() === trueLetters){
//         return true
//     }else { 
//         return false
//     }
// }
// console.log(isVowel('a'))       

// ###
// E.
// `getTwoLengths`

// Write a
// function `getTwoLengths`
// that accepts two parameters(strings).The
// function should
// return an _array_ of numbers where each number is the length of the corresponding string.
// const getTwoLengths = (str1, str2) =>{
//     arr = [];
//     arr.push(str1.length);
//     arr.push(str2.length);
//     return arr
// }
// // `=> [4, 13]`
// ###
// F.
// `getMultipleLengths`

// Write a
// function `getMultipleLengths`
// that accepts a single parameter as an argument: an ** array ** of ** strings ** .The
// function should
// // return an array of ** numbers ** where each number is the length of the corresponding string.
// const getMultipleLengths = (strArr) => { 
//     let resultArr = [];
//     for (i=0;i<strArr.length;i++){
//         resultArr.push(strArr[i].length);
//     }
//     return resultArr
// }

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// // `
// // ``

// // >
// // `=> [5, 4, 2, 2, 4]`

// ###
// G.`maxOfThree`

//  Define a
// function `maxOfThree`
//that takes three numbers as arguments and returns the largest of them.If all numbers are the same, it doesn 't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

// const maxOfThree = (num1,num2,num3) => {
//     let greatest = 0;
//         if (num1 > num2) {
//             greatest = num1;
//             }else{  
//                 greatest = num2;
//             } if (greatest >= num3) {
//                 return greatest
//             }else {return num3}
            

//         }
// console.log(maxOfThree(6, 9, 1));
// console.log(maxOfThree(30,100,3));



// ###
// H.
// `printLongestWord`

// Write a
// function `printLongestWord`
// that accepts a single argument, an ** array ** of ** strings ** .The method should
// return the longest word in the array.In
// case ofa tie, the method should
// return the word that appears first in the array.


// const printLongestWord = (arr) => {
//     let longestWord = ""
//     let word = 0
//     for (let i = 0; i < arr.length; i++){
       
//     if (arr[i].length > word){
//         word = arr[i].length;
//         longestWord = arr[i];
//         }}
//     return longestWord;
// }
    
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// // `=> "Peanutbutter"`

// ### I.`transmogrify`

// Write a Javascript
// function called `transmogrify`.This
// function should accept three arguments, which you can assume will be numbers.Your
// function should
// return the "transmogrified"
// result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
// power of 2`
// is 225.
// const transmogrify = function (x, y, z) {
//     return Math.pow(x * y, z)}

// transmogrify(5, 3, 2)
// console.log(transmogrify(5, 3, 2))
// // `
// // `` >
// // `=> 225`

//***Transmogrify (Attempt 2)
const transmogrified = (x,y,z) => {
return (x*y)**z
}
transmogrified(5,3,2)

// ** Without using `.split()`, `.reverse()`, or `.join()`, ** write a
// function `reverseWordOrder`
// that accepts a single argument, a string.The
// function should
// return a string with the order of the words reversed.Don 't worry about punctuation. 

// See
// if you can do it without googling.

// Remember: Jim showed you today that you can index directly into a string:
//     ``
// `js
// "hello world"[6]
// `
// `` >
// `=> "w"`

// // That and basic loops and variables and arrays are all you need to solve this without the Array methods.
// const str = "I use Lâncome on my comb"
// let newString = []
// let revString = []
// let catString = ""
// //split sentence into array
// for (let i = 0; i < str.length; i++){newString.push(str[i])}
// // //create new array with those words in reverse order
// for (let i = newString.length; i--;){revString.push(newString[i])}
// // //loop over new array and concatinate strings
// for (let i = 0; i < catString.length; i++){catString+newString[i]}
// console.log(catString)

// ``
// `javascript
// console.log(reverseWordOrder("Ishmael me Call"));
// `
// `` >
// `=> "Call me Ishmael"`

// ``
// `js
// console.log(reverseWordOrder("I use Lâncome on my comb"));
// `
// `` >
// `=> "comb my on Lâncome use I"`

//###
//K.Get down and dirty with `Math.random()`

//1. Write a
// function that will
// return a random integer between 1 and 10. Test it.
const oneToTen = function () {
    return  Math.floor(Math.random() * (10 - 1) + 1)
}

//console.log (randomNumberOneToTen(1,10))
// 2. Write a
// function that will
// return a random integer between 10 and 100. Test it.

const tenToOne = function () {
    return Math.floor(Math.random() * (100 - 10) + 10)
}
// 3. Write a
// function that will
// return a random number between 532 and 13267. Test it.
// 4. Write a
// function that will
// return a random number between 1 and 10. Test it.
const oneishToTenish = function () {
    return (Math.random() * (10 - 1) + 1)
}
const oneToThree = function () {
return Math.floor(Math.random() * (3 - 1)) + 1
}
// 5. Add a few more quotes to the quotes array from question III - B - 1 above.Write a
// function that will take an array as a parameter, and
// return a random element from that array.Call your
// function a few times, passing in the quotes array.Give it a nice semantic name like `getRandomElement`.
// 1. Create an array that contains three quotes and store it in a variable called `quotes`.
const quotes = ["You can take a horse to water, but you can't make him drink", "You can teach old dogs new tricks", "JS is fun!"]
const randomQuotes = function() {
    let returnQuote;
    if (oneToThree() === 3) {
    returnQuote = quotes[0]}
    else if (oneToThree() === 2) {
    returnQuote = quotes[1]
    }
    else {returnQuote = quotes[2]}
 console.log (returnQuote)
}
   
   

// // Let 's set up an object data structure. Let'
// // s say we have a website that sells products, and we have a user of our website, and we want to store that user 's data. The object data structure is a good way to organize the data from our user.

// // ### A.Make a user object

// // 1. Create an object called `user`.
//     const user = {
//         name:"Ricky Reverser",
//         email:"RR@hotmail.com",
//         age:3,
//         purchased:[],
//     }
// // 2. Write in to the object the key - value pairs
// // for `name`, `email`, `age`, and `purchased`.Set the value of `purchased`
// // to an empty array `[]`.Set the other values to whatever you would like.

// //     : red_circle: Commit.

// // ### B.Update the user

// // 1. Our user has changed his or her email address.Without changing the original `user`
// // object, update the `email`
//     user.email = "joe@shmoe.com";
// // value to a new email address.
// // 2. Our user has had a birthday!Without changing the original `user`
// // object, increment the `age`
// // value using the postfix operator.Hint: `age++`
//     user.age++;
// //     : red_circle: Commit.


// // ### C.Adding keys and values

// // You have decided to add your user 's location to the data that you want to collect.

// // 1. Without changing the original `user`
// // object, add a new key `location`
// // to the object, and give it a value or some - or - other location(a string).
// user['location'] = "place"
// //     : red_circle: Commit.


// // ### D.Shopaholic!

// //     1. Our user has purchased an item!They have purchased some "carbohydrates".Using `.push()`, add the string "carbohydrates"
// // to the `purchased`
// // array.
//     user.purchased.push("carbohydrates");
// // 2. Our user has purchased an item!They have purchased some "peace of mind".Using `.push()`, add the string "peace of mind"
// // to the `purchased`
// // array.
//     user.purchased.push("peace of mind");
// // 3. Our user has purchased an item!They have purchased some "Merino jodhpurs".Using `.push()`, add the string "Merino jodhpurs"
// // to the `purchased`
// // array.
//     user.purchased.push("Merino jodhpurs");
// // 4. Console.log just the "Merino jodhpurs"
// // from the `purchased`
// // array.
//     console.log(user.purchased[2])

// //     : red_circle: Commit.


// // ### E.Object - within - object

// // Remember that you can add an object to an existing object in the same way that you can add any new property / value pair.

// // If we want to give our user a `friend`
// // with a `name`
// // and `age`, we could write:

// // 1. Write a `friend`
// // object into your `user`
// // object and give the friend a name, age, location, and purchased array(empty
// //     for now)
// user.friend = {
//     name: "Jonny Transmogrify",
//     age: 99,
//     location: "toledo",
//     purchased: [],
// }
// // 2. Console.log just the friend 's name
//    console.log(user.friend.name)
// // 3. Console.log just the friend 's location
//     console.log(user.friend.location);
// // 4. CHANGE the friend 's age to 55
//     user.friend.age = 55;
// // 5. The `friend`
// // has purchased "The One Ring".Use `.push()`
// // to add "The One Ring"
// // to the friend 's `purchased` array.
//     user.friend.purchased.push("The One Ring");
// // 6. The `friend`
// // has purchased "A latte".Use `.push()`
// // to add "A latte"
// // to the friend 's `purchased` array.
//     user.friend.purchased.push("A latte");
// // 7. Console.log just "A latte"
// // from the friend 's `purchased` array.
// console.log(user.friend.purchased[1]);
// //     : red_circle: Commit.


// // ### F.Loops

// // 1. Write a _for loop_ that iterates over the User 's `purchased` array (NOT the friend'
// for(i=0;i<user.purchased.length;i++){console.log(user.purchased[i])};
// // s purchased array), and prints each element to the console.
// // 2. Write a _for loop_ that iterates over the Friend 's `purchased` array, and prints each element to the console.
// for(i=0;i<user.friend.purchased;i++){console.log(user.friend.purchased[i])};
// //     : red_circle: Commit.


// // ### G.Functions can operate on objects

// // 1. Write a single
// // function `updateUser`
// // that takes no parameters.When the
// // function is run, it should:

// //     -it should increment the user 's age by 1 -
// //     make the user 's name uppercase

// // The
// // function does not need a `return`
// // statement, it will merely modify the user object.
// const updateUser = () => {
//     user.age++; 
//     user.name.toUpperCase()};
// updateUser();
// // 2. Write a
// // function `oldAndLoud`
// // that performs the exact same tasks as `updateUser`, but instead of hard - coding it to only work on our `user`
// // object, make it take a parameter `person`, and have it modify the object that is passed in as an argument when the
// // function is called.Call your `oldAndLoud`
// // function with `user`
// // as the argument.

// const oldAndLoud = (person)=> {
//     person.age++
//     user.name.toUpperCase();
// }
// //     : red_circle: Commit.


