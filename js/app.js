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

