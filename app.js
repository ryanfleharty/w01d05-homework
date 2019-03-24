//How do we assign a value to a variable?
  // the variable would come first, then the = "value" would follow

// How do we change the value of a variable?
  // you can change the value by writing the variable first, then = "new value" would follow

// How do we assign an existing variable to a new variable?
  //make an assosiative array

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
    console.log(false == false == false == false == false == false !== true);
    console.log(false === false)//f
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
if(yearsOld >= 16){
  yearsOld = "Here are the keys"
} else {
  yearsOld = "sorry, you're too young"
}
console.log(yearsOld);

// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for(let i = 0; i <= 10; i++)
console.log(i);
// Write a loop that will print out all the numbers from 10 up to and including 400.
for(let i = 10; i <= 400; i++)
console.log(i);
// Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (i = 12; i <= 4000; i+=3)
console.log(i);
