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




















