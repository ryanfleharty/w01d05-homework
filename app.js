//I. Variables & Datatypes//



//How do we assign a value to a variable?
//var x = 2



//How do we change the value of a variable?
var x = 2; //X is global and value is 2.

function myFunction()
{
x = 7; //x is local variable and value is 7.
}

//How do we assign an existing variable to a new variable?



//Remind me, what are declare, assign, and define?

var x =  declares the value
var x = 8()  assigns the value
console.log(8);
  

//What is pseudocoding and why should you do it?
It is a detailed, step-by-step description of what a computer must do, expressed in plain English
rather than in a programming language.


//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
 It would depend what is being asked, what are they asking, what they looking for and what kind of end result needs to be achieved.



//A. Q + A//



//Create a variable called firstVariable.
//Assign it the value of the string "Hello World"
var firstVariable = "Hello World";
//Change the value of this variable to some number.
firstVariable = "10 ";
//Store the value of firstVariable in a new variable called secondVariable
var secondVariable = 
//Change the value of secondVariable to any string.
secondVariable = [my, name, is, "jean"];
//What is the value of firstVariable?

//Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes 
//the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
var yourName = ("jean");
var hello = ("hello, my name is ");
var sayHello = hello + yourName

//B. Strings//

//Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
// const a = 4;
//  const b = 53;
//  const c = 57;
//  const d = 16;
//  const e = 'Kevin';

  console.log(a _<_ b);
  console.log(c _>_ d);
  console.log('Name' _===_ 'Name');
  console.log(true _||_ false);
  console.log(false _&&_ false _&&_ false _&&_ false _&&_ false _&&_ false _=>_ true);
  console.log(false _===_ false)
  console.log(e _==_ 'Kevin');
  console.log(a _<_ b _>_ c);
  console.log(a _==_ a _<_ d);
  console.log(48 _>=_ '48');




//C. Booleans//




//Declare a variable animal. Set it to be either "cow" or something else.
//Write code that will print out "mooooo" if the it is equal to cow.
//Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
//Commit.

var animal = function ("cow"){
    if ("cow" = ""){
        return "Moooo";{
        }else{
          return "hey, your not a cow!";
    }
};



//D. The farm//




//Make a variable that will hold a person's age. Be semantic.

//Write code that will print out "Here are the keys", if the age is 16 years or older.

//If the age is younger than 16, a message should print "Sorry, you're too young."


var personsAge = funtion(age) {
    if (age < 16) {
        return "sorry, your too young.";
    } else {
        return "Here are the keys";
    }
};

// Driver's Ed//




//II. Loops//






//Write a loop that will print out all the numbers from 0 to 10, inclusive.
for(let i = 0; i < 10; i++){
    console.log(+i);
}

//Write a loop that will print out all the numbers from 10 up to and including 400.
for(let i = 10; i < 400; i++){
    console.log(+i);
}

//Write a loop that will print out every third number starting with 12 and going no higher than 4000.

for  (let i = 12; i < 4000; i +=3){
    console.log(i);
  }




//A. The basics//




for(let i = 0; i < 100; i++){
    if(i % 2===0)
    console.log('<--'+i);
}


//B. Get even//



//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
for(let i = 1; 1 <=100){
  if(i % 5 === 0){
    console.log('high five');
  }
}
//I found a 5. High five!
for(let i = 1; 1 <=100){
  if(i % 10 === 0){
    console.log('high five');
  }
}
//I found a 10. High five!
for(let i = 1; 1 <=100){
  if(i % 3 === 0){
    console.log('high five');
  }
}
//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
for(let i = 1; 1 <=100){
  if(i % 5 === 0){
    console.log('high five');
  }
  for(i = 1; i <= 100; i++){
    if(i % 3 === 0){
      console.log('Three is a crowd')
       }
       else if(i % 5 === 0){
         console.log('High five')
       }
       else if(i % 6 === 0){
         console.log('Six is a crowd')
       }
         else if(i % 9 === 0){
           console.log('Nine is a crowd')
       }
         else if(i % 10 === 0){
           console.log('high five');
         }
         else {
           console.log("x")
         }
    }




//C. Give me Five// I know my wording is different but it was easier to check the console.log




//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your banck_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

var bank_account = 0;
for(let i = 0; 0 <= 100; i++){
  i = i + 1;
  bank_account = i;
}

//D. Savings account/





//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has 
//helpful bits of code in it that partially solves this problem, look back at them.

//You just solved Project Euler problem 1!

//Are you having dejà vu? This just in! From the "Read the entire problem before you start" dept: 
//This problem was on a previous assignment. You may skip it if you've already done it, just include a comment saying that 
//you've already done it. If you've now done the problem twice, perhaps next time you'll read the whole problem before starting it.


function multiples(1000) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {

  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
      }
    }
  



//E. Multiples of 3 and 5//






//II. Arrays & Control flow//




//What are the things in an array called?

It means is that you can store other variables and objects inside an array and can retrieve them from the array by referring to their 
position number in the array. Each variable or object in an array is called an element.



//Do Arrays guarantee those things will be in order?

No,there is no guarantee about which element will be found.




//What real-life thing could you model with an array?

Organize daily, weekly, monthly Activities as well as product listings.



//A. Talk about it://




//How do you access the 1st element in the array?

for(let i = 1; i < arryay.length; i++)
//or
for (var i = 0; i < myArray.length; i += 1) 

Change the value of "Hello" to "World".

const " " = [ 'hello', 'bye']
" " [0] = "world"
 


//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

for (var i = 0; i < myArray.length; i += 1) { 
  someFunction(myArray[i]); 
  } 


//C. Accessing elements//




//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//What would you write to access the 3rd element of the array?

ourClass = ourClass[1] + 1

//Change the value of "Github" to "Octocat"

ourClass.pop()
ourClass.push ("Octocat")

//Add a new element, "Cloud City" to the array.

ourClass.splice(1, 5, "Cloud City")






//D. Change values//




//Given the following array: const myArray = [5, 10, 500, 20]

const myArray = [5, 10, 500, 20]

//Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.

myArray.push("Egon")

//Remove the 5 from the beginning of the array.

const firstElement = myArray.shift();


//Add the string "Bob Marley" to the beginning of the array.

myArray.splice(1, 0, "Bob Marley")

//Remove the string of your choise from the end of the array.

myArray.pop()

//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? 
//Did the .reverse() method return anything?

const reversed = myArray.reversed



//E. Mix It Up//





//Create a variable that contains an integer.

const num = (100)


//Write an if ... else statement that:

if(i =0; i => 100; i++){
     if num => 100 (console.log "little number"){
     }else{
         console.log("big number")
    }
};
//console.log()s "little number" if the number is entered is less than 100

//console.log()s big number if the number is greater than or equal to 100.




//F. Biggie Smalls//



if(i = 0; i => 10; i++){
    else if(num < 10){
      console.log("little number"){
      }else if(num == 10){
          console.log("big number"){
      }else{
        console.log(monkey)
      }
    }
};
//Write an if ... else if ... else statement:

//console.log() little number if the number entered is less than 5.

//If the number entered is more than 10, log big number.

//Otherwise, log "monkey". 


//G. Monkey in the Middle//





Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

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


//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset,

const krystynsCloset = ["left shoe", "cowboy boots", "right shoe", "GA hoodie", "green pants", "yellow nit hat", "marshmallow peeps"]


//log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log("Krystyn will be wearing " krystynsCloset [3])



//Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

krystynsCloset.splice(5, 1 "raybans")

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

krystynsCloset.splice(1, 5);

//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

console.log("Thom is wearing" + thomsCloset([1].slice (2, 3) + ',' thomCloset[0].slice(3, 4) + ',' thomsCloset[2].slice(1, 1)) 

//In the same way, access one item from Thom's pants array.

console.log(thomsCloset[2, 1])

//Access one item from Thom's accessories array.

console.log(thomsCloset[3, 2])

//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log("Thom is looking fierce in a gray button-up, jeans and wool scarf!")

//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset.splice(2, 1 "Footie PJ's")



//H. What's in Your Closet?//




//IV. Functions//


const printGreeting = function (name)


var sayHello = function () { 
  var name = "Slimer!"; 
  console.log("Hello there, " + name); 
   }; 
  
  sayHello();


//Do you think you could write a function called printGreeting with a parameter name that returns a 
//greeting with the argument interpolated into the greeting?

//Like so?

//console.log(printGreeting("Slimer"));
//=> Hello there, Slimer!

//You think you could? I think so too. Feel free to skip this problem, because you've already done it. 
//If you've done the problem twice, read entire problems carefully before doing them from now on.



//A. printGreeting//




//Write a function printCool that accepts one parameter, name as an argument. The function should 
//print the name and a message saying that that person is cool.

var printCool = function("Captain Reynolds is cool");

console.log(printCool);

//console.log(printCool("Captain Reynolds"));
//=> "Captain Reynolds is cool";



//B. printCool//



//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

var calculateCube = function(num1, num2);
function calculateCube(number) {
  return Math.pow(number,2);
}

function calculateCube(number) {
  return number * number;
}
 

//console.log(calculateCube(5)); couldn't get the console.log to work but do know how to calculate square.
//=> 125


//C. calculateCube//

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

//Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
//The vowel could be upper or lower case.

//console.log(isVowel("a"));
//=> true



//D. isVowel//




Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where 
each number is the length of the corresponding string.

console.log(getTwoLengths("Hank", "Hippopopalous"));
=> [4, 13]

if()


//E. getTwoLengths//





Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4]




//. getMultipleLengths//




Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

console.log(maxOfThree(6, 9, 1));
=> 9



//G. maxOfThree//





Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
=> "Peanutbutter"

const printLongestWord = function(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
          var str = string.split("");
          var longest = 0;
          var word = null;
             for (var i = 0; i <= str.length -1; i==){
               if (longest < str[i]. length) {
                 longest = str[i].length;
                 word = str[i];
               }
             }
             return word;
            }



//H. printLongestWord//


const transmogrify = function(num1, num2, num3)){
       function transmogrify(number){
         console.log Math.(number,2)
       }
      function transmogrify(number) {
        console.log ("transmogrify" 'num1' * 'num2' * 'num3');
      }
    }
      
        


//Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. 
//Your function should return the "transmogrified" result.

//The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

//For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

//console.log(transmogrify(5, 3, 2));
//=> 225




//I. transmogrify//


var reverseWordOrder = ("to be or not to be) 
  function reverseWordOrder(str){
    let words = []
    let currentWord = " ";
    for(let i=0; i < str.length; i++){
      if(str[i] === " ") {
        words.push (currentWord)
      }else{
        currentWord = currentWord = str[i]
    }
  }
     words.push(currentWord)
      for(let i = 0; i < word.length; i++){
        let temp = words[i]
        word[i] = word[word.length -1]
        word[words.length -1] = temp
      }
  }



  


//Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. 
//The function should return a string with the order of the words reversed. Don't worry about punctuation.

//See if you can do it without googling.

//Remember: Jim showed you today that you can index directly into a string:



"hello world"[6]
=> "w"

That and basic loops and variables and arrays are all you need to solve this without the Array methods.

console.log(reverseWordOrder("Ishmael me Call"));
=> "Call me Ishmael"

console.log(reverseWordOrder("I use Lâncome on my comb"));
=> "comb my on Lâncome use I"




//J. reverseWordOrder v2//

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(10));


console.log(getRandomInt(100));

console.log(getRandomInt(523, 13267)) //couldn't get this one to work


Write a function that will return a random integer between 1 and 10. Test it.
Write a function that will return a random integer between 10 and 100. Test it.
Write a function that will return a random number between 532 and 13267. Test it.
Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, 
and return a random element from that array. Call your function a few times, passing in the quotes array. 
Give it a nice semantic name like getRandomElement.



//K. Get down and dirty with Math.random()//




//Objects//


var user= {
  name: "Joe",
  email: "joe@email.com",
  age: 24,
  purchased: [car, bike, tires],
};

//Create an object called user.
//Write in to the object the key-value pairs for name, email, age, and purchased. 
//Set the value of purchased to an empty array []. Set the other values to whatever you would like.



//A. Make a user object//


user.email = "joe@yahoo.com";
user.age = age + 1

//Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
//Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++



//B. Update the user//



console.log(user.push("location"));

//Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).



//C. Adding keys and values//


var user = (purchase.push("carbohydrates"));
var user = (purchase.push("peace of mind"));
var user = (purchase.push("Merion jodhpurs"));
console.log(purchase);



//Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the 
//string "carbohydrates" to the purchased array.
//Our user has purchased an item! They have purchased some "peace of mind". Using .push(), 
//add the string "peace of mind" to the purchased array.
//Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string 
//"Merino jodhpurs" to the purchased array.
//Console.log just the "Merino jodhpurs" from the purchased array.



//D. Shopaholic!//




//If we want to give our user a friend with a name and age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: (),
    purchased: (),
}
//When we console.log user, we would see the friend object added to our user object.
//Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)

user.friend age = age + 1

var user.friend = (purchase.push("The One Ring"))

var 
//Console.log just the friend's name
//Console.log just the friend's location
//CHANGE the friend's age to 55
The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
Console.log just "A latte" from the friend's purchased array.



//E. Object-within-object//



Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.



//F. Loops//
let user = {
  age = 0
  name = "tom"
}
const updateUser() {
  user.age = user.age + 1;
  user.name = user.name.toUpperCase();
}



//Write a single function updateUser that takes no parameters. 
When the function is run, it should:
it should increment the user's age by 1
make the user's name uppercase
The function does not need a return statement, it will merely modify the user object.

Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work 
on our user object, make it take a parameter person, and have it modify the object that is passed in as an 
argument when the function is called. Call your oldAndLoud function with user as the argument.



//G. Functions can operate on objects//




































