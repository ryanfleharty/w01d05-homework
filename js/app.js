console.log("Day 5 HW");

//Variables & Datatypes
//A. Q & A
//1. let/const name = value;
//2. name = newValue;
//3. let/const newVariable = name;
//4. declare is the first time and uses "=", assign 
//is after you've declared a variable and want to reassign
//a new value
//5. psuedocode is thinking through/writing down what your 
//code is going to do in english in order to process/map out
//your code before beginning to write actual code
//6. you should spent like 75-90% of your time thinking
//and 10-25% coding


//B. Strings
//1.
let firstVariable = "Hello World";
firstVariable = 27;
let secondVariable = firstVariable;
secondVariable = "Bye";
console.log(firstVariable);
//the value of the first variable is still 27

//2. 
let yourName = "Alex";
console.log("Hello, my name is " + yourName);

//C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true != false);
console.log((false == false == false == false == false == false) == true);
console.log(false === false);
console.log(e == 'Kevin');
console.log(a < b < c);
console.log((a == a) < c);
console.log(48 == '48');

//D. 
let animal = "cow";
animal = "horse";


if(animal == "cow"){
	console.log("Mooooooo");	
} else {
	console.log("Hey, you're not a cow!");
}

//E.
let age = 24;

if(age > 16){
	console.log("Here are the keys");
} else {
	console.log("Sorry, you're too young.");
}

//Loops

//A. 
//1. 
for(let i = 0; i <= 10; i++){
	console.log(i);
}
//2.
for(let i = 10; i <=400; i++){
	console.log(i);
}

//3.
for(let i = 12; i < 4000; i+=3){
	console.log(i);
}

//B. Get Even
//1.
for(let i = 1; i <= 100; i++){
	if(i % 2 === 0){
		console.log(i + " is an even number");
	}
}

//C. 
//1. 
for(let i = 0; i <= 100; i++){
	if(i % 3 === 0){
		console.log("I found a " + i + " . Three is a crowd.");
	}
	if(i % 5 === 0){
		console.log("I found a " + i + " . High five!");
	}
}

//D.
//1.

let bankAccount = 0;

for(let i = 0; i <= 10; i++){
	bankAccount = bankAccount + i;
}
console.log(bankAccount);

//2. 

let newBankAccount = 0;

for(let i = 0; i <= 100; i++){
	newBankAccount = newBankAccount + i;
}
console.log(newBankAccount * 2);

//E.
//I've already done it, but am going to do it again for practice

let totalSum = 0;

for(let i = 0; i <= 1000; i++){
	if(i % 3 === 0 || i % 5 === 0){
		totalSum = totalSum + i;
	}
}
console.log(totalSum);

//Arrays & Flow Control
//A. 
//1. elements
//2. yes unless we perform actions on them to change the 
//order or add/remove from the array
//3. grocery list

//B.

let quotes = ["The mountains are calling and I must go.", "And that has made all the difference.", 
"Que sera sera."];

//C.
const randomThings = [1, 10, "Hello", true];

randomThings[2] = "World";
console.log(randomThings[2]);

//D.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

console.log(ourClass[2]);

ourClass[4] = "Octocat";

ourClass.push("Cloud City");

console.log(ourClass);

//E.
const myArray = [5, 10, 500, 20];

myArray.push("Egon", "Sup");

console.log(myArray);

myArray.shift();

myArray.unshift("Bob Marley");

myArray.pop();

console.log(myArray);

myArray.reverse();

console.log(myArray);

//mutate means to adjust, not change completely 

//F.
const myNumber = 7;
if(myNumber < 100){
	console.log("little number");
} else {
	console.log("big number");
}

//G.
if(myNumber < 5){
	console.log("little number");
} else if(myNumber > 10){
	console.log("big number");
} else {
	console.log("monkey");
}

//H.
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

console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');

kristynsCloset.splice(6, 0, "raybans");

console.log(kristynsCloset);

kristynsCloset[5] = "stained yellow hat";

console.log(kristynsCloset);

thomsCloset[0][0];
thomsCloset[1][1];
thomsCloset[2][1];

console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + 
thomsCloset[1][1] + ", and " + thomsCloset[2][1] + "!");

thomsCloset[1][2] = "Footie Pajamas";













