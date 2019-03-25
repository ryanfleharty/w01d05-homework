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
for (let i = 12; i <= 4000; i+=3)
console.log(i);

// Print out the even numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
for(let i = 0; i<=100; i+=2)
console.log(`${i} <-- is an even number`);

//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
for(let i = 0; i<=100; i++){
  console.log(`I found a ${i}. High five!`);
  if (i % 3 == 0){
    let text1 = "three is a crowd"
    console.log(text1);
  }
}
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
let bankAccount; //declare a variable
  let sum = 0 // set a value
  for (let i = 1; i <= 100; i++){ //creating a loop to get the sum of numbers 1-10
    sum += i*2; //sum amount
  }
  console.log(sum);

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
console.log(myArray);
