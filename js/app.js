console.log("js works");
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
for (let i = 12; i <= 4000; i++){
    if (i % 3 == 0){
    console.log(i);
    }
}