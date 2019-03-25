console.log('hello')




// I. 	Variables & Datatypes


// A. Q + A

// 1. 	How do we assign a value to a variable?

	const variableName = {
		valueName1: 'Value to be assigned',
		valueName2: 'Another value to be assigned',
	}


// 2. 	How do we change the value of a variable?

	variableName['valueName1'] = 'Changed value of value 1';
	

// 3.	How do we assign an existing variable to a new variable?

	const newVariable = variableName.valueName2;
	


// 4.	Remind me, what are declare, assign, and define?

	// Declare is to create a new variable
	// Assign is giving it value(s)
	// Define is to specify what those values mean


// 5.	What is pseudocoding and why should you do it?

	// Pseudocoding is to write out in plain english, step by step what you
	// are trying to do to write your code.  It helps to break down your
	// problem into simpler smaller tasks, and then one by one you create
	// in code, those tasks.  Pseudocode helps when a problem seems to be
	// overwhelmingly difficult.  It helps the programmer to realize that 
	// it is in fact not that hard to solve.


// 6.	What percentage of time should be spent thinking about how you're 
// 		going to solve a problem vs actually typing in code to solve it?

	// We've been told that it should be around 75-80% thinking about how
	// and only 20-25% actually writing the code.  For us newbies, I think
	// we still spend about 50% or more writing code because it takes a 
	// bit of debugging and trial and error to get correct, but I absolutely
	// get the concept we're going for here.


// B. Strings

// 1.	Create a variable called firstVariable.
		let firstVariable = " ";

//  	Assign it the value of the string "Hello World"
		firstVariable = "Hello World";

// 		Change the value of this variable to some number.
		firstVariable = 24;

// 		Store the value of firstVariable in a new variable called secondVariable
		let secondVariable = firstVariable;

// 		Change the value of secondVariable to any string.
		secondVariable = "Hello Again";

// 		What is the value of firstVariable?

//		The value of firstVariable is unchanged at this point, so still 24,
//		from line 66.  secondVariable being reassigned to a string simply
//		erased its assignment of being equal to firstVariable on line 69.




// 2.	Create a variable called yourName and set it equal to your 
//		name as a string. Then, write an expression that takes the 
//		string "Hello, my name is " and the variable yourName so 
//		that it returns a new string with them concatenated.

// 		ex: Hello, my name is Jean Valjean

		const yourName = "Nick Johnson";

		console.log("Hello, my name is " + yourName);


// 	C. Booleans


// 		Using the provided variable definitions, replace the blanks 
//		so that all log statements print true in the console. Answers 
//		should be all be valid JS syntax and not weird things that 
//		don't make sense but happen to print true to the console.
	  const a = 4;
	  const b = 53;
	  const c = 57;
	  const d = 16;
	  const e = 'Kevin';

	  console.log(a < b);
	  console.log(c > d);
	  console.log('Name' === 'Name');
	  console.log(true !== false);
	  console.log(false + false == false == false == false == false !== true);
	  console.log(false == false)
	  console.log(e == 'Kevin');
	  console.log(a < b < c);
	  console.log(a + a < d);
	  console.log(48 !== '48');

//	I submitted this again after realizing two of my lines were still false.
// 	I feel like this is specifically what you meant in your instructions as
// 	for what not to do, but I wasn't sure.  Afterall, it's valid JS syntax.


// 	D. The farm

// 1.	Declare a variable animal. Set it to be either "cow" or something else.

	const animal = (type) => {


// 2.	Write code that will print out "mooooo" if the it is equal to cow.
	if (type === 'cow') {
		console.log("mooooo")

// 3.	Change your code so that if the variable animal is anything other 
//		than a cow, it will print "Hey! You're not a cow."
	} else {
		console.log("Hey! You're not a cow!");
	}
}
	animal('cow');
	animal('horse');
// 4.	Commit.




// 		E. Driver's Ed

//	1.	Make a variable that will hold a person's age. 
//		Be semantic.
	const person = (age) => {

//	2.	Write code that will print out "Here are the keys",
//		if the age is 16 years or older.
	if (age >= 16) {
		console.log("Here are the keys");
	}

// 	3. 	If the age is younger than 16, a message should 
//		print "Sorry, you're too young."
		else {
			console.log("Sorry, you're too young");
		}

	}
		person(15);
		person(17);

// 		II. Loops

// 	Remember: USE let when you initialize your for loops!
// 	This is GOOD: for(let i = 0; i < 100; i++)
// 	This is NO GOOD: for(i = 0; i < 100; i++)



//		A. The basics

// 	1.	Write a loop that will print out all the numbers 
//		from 0 to 10, inclusive.

	for(let i = 0; i < 10; i++) {
		console.log(i)
	}


// 	2.	Write a loop that will print out all the numbers 
//		from 10 up to and including 400.

	for(let i = 10; i <= 400; i++) {
		console.log(i)
	}


// 	3. 	Write a loop that will print out every third number 
//		starting with 12 and going no higher than 4000.

	for(let i = 12; i <= 4000;i++) {
		if(i % 3 === 0) {
			console.log(i)
		}
	}

//	B. Get even


//	1.	Print out the even numbers that are within the 
//		range of 1 - 100.

	for(let i = 1; i <= 100;i++) {
		if (i % 2 === 0) {
			console.log(i)
		}
	}


//	2. 	Adjust your code to add a message next to even 
//		numbers only that says: "<-- is an even number".


	for(let i = 1; i <= 100;i++) {
		if (i % 2 === 0) {
			console.log(i + " <-- is an even number.")
		}
	}


// 	C. Give me Five


// 	1.	For the numbers 0 - 100, print out "I found a 
//		number. High five!" if the number is a multiple 
//		of five.

	for(let i = 0; i <= 100; i++)	{
		if(i % 5 === 0) {
			console.log("I found a number. High Five!")
		}
	}


// 	2.	Add to the code from above to print out "I found a 
//		number. Three is a crowd" if the number is a 
//		multiple of three.


	for(let i = 0; i <= 100; i++)	{
		if(i % 5 === 0) {
			console.log("I found a number. High Five!");
		}
		if(i % 3 === 0) {
			console.log("I found a number. Three is a crowd");
		}
	}

// 	D. Savings account



// 	1.	Write code that will save the sum of all the 
//		numbers between 1 - 10 to a variable called 
//		bank_account.
	var total = 0;
	for(let i = 1; i <= 10; i++) {
		total += i;
	}
	console.log(total);

// 	2.	You got a bonus! Your pay is now doubled each 
//		week. Write code that will save the sum of all 
//		the numbers between 1 - 100 multiplied by 2.

	var doubled = 0;
	for(let i = 1; i <= 100; i++) {
		doubled += (i * 2);
	}
	console.log(doubled);


// 	E. Multiples of 3 and 5

// Already done it :)




// 	III. Arrays & Control flow


// 		A. Talk about it:

//	 	What are the things in an array called?

//		They are an indexed collection of data elements.


// 		Do Arrays guarantee those things will be in order?

// 		Yes.  Unless the array is altered or mutated, they
//		will remain in their set order.


//		What real-life thing could you model with an array?

//		Lots of things.  A class attendance list comes to mind.


// 		B. Easy Does It

// 	1.	Create an array that contains three quotes and store 
// 		it in a variable called quotes.

	const quotes = ["Hello", "Hola", "Bonjour"]


// 		C. Accessing elements
// 			Given the following array const 
		randomThings = [1, 10, "Hello", true]

//	1.	How do you access the 1st element in the array?

	console.log(randomThings[0]);


// 	2.	Change the value of "Hello" to "World".

	randomThings[2] = "World";


// 	3.	Check the value of the array to make sure it 
//		updated the array. How? Why, yes! console.log();

	console.log(randomThings[2]);


// 		D. Change values
// 	Given the following array 

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// 	1.	What would you write to access the 3rd element 
//		of the array?

	ourClass[2];


// 	2.	Change the value of "Github" to "Octocat"

	ourClass[4] = "Octocat";


// 	3.	Add a new element, "Cloud City" to the array.

	ourClass.push('Cloud City');


// 		E. Mix It Up

// 	Given the following array: 
	const myArray = [5, 10, 500, 20]


// 	1.	Add the string "Egon" to the end of the array. Add 
//	another string of your choice to the end of the array.

	myArray.push('Egon');
	myArray.push('Agon');


// 	2.	Remove the 5 from the beginning of the array.

	myArray.shift();


// 	3.	Add the string "Bob Marley" to the beginning 
//	of the array.

	myArray.unshift("Bob Marley");


// 	4.	Remove the string of your choise from the end of 
//	the array.
	myArray.splice(3,2);


// 	5.	Reverse this array using Array.prototype.reverse(). 

		myArray.reverse();

//	Did you mutate the array? What does mutate mean? 

//	Yes, a const variable cannot be changed, only mutated.
//	myArray is set as an array, and that cannot change, but
//  the values held inside the array can be mutated, and 
//  that's what we just did.



//	Did the .reverse() method return anything?

//	There was no return without a return or console.log.
//	Using either of those, .reverse() will return your 
//	array in reversed order.



// 	F. Biggie Smalls
// 		Create a variable that contains an integer.
// 		Write an if ... else statement that:

	const integer = 7;

// 	1.	console.log()s "little number" if the number is 
//		entered is less than 100

		if(integer < 100){
			console.log("little number");
		}


// 	2.	console.log()s big number if the number is greater 
//		than or equal to 100.
			else if(integer >= 100)	{
				console.log("big number")
			}


// 		G. Monkey in the Middle
//	 Write an if ... else if ... else statement:


// 	1.	console.log() little number if the number entered 
//		is less than 5.

		if(integer < 5) {
			console.log("little number");
		}
// 	2.	If the number entered is more than 10, log big number.
			else if(integer > 10) {
				console.log("big number");
			}
// 	3.	Otherwise, log "monkey". 
				else {
					console.log("monkey");
				}


// 	H. What's in Your Closet?
//		 Below, we've given you examples of Kristyn and 
//		Thom's closets modeled as data in JavaScript.

	const kristynsCloset = [
	  "left shoe",
	  "cowboy boots",
	  "right sock",
	  "GA hoodie",
	  "green pants",
	  "yellow knit hat",
	  "marshmallow peeps"
	];

	// 	Thom's closet is more complicated. Check out this 
	//	nested data structure!!



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
// 	1.	What's Kristyn wearing today? Using bracket notation 
//	to access items in kristynsCloset, log the sentence 
//	"Kristyn is rocking that " + the third item in Kristyn's 
//	closet + " today!" to the console.
	console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");



// 	2.	Kristyn just bought some sweet shades! Add "raybans" 
//	to her closet after "yellow knit hat".
	kristynsCloset.splice(6,0, "raybans");



// 	3.	Kristyn spilled coffee on her hat... modify this item 
//	to read "stained knit hat" instead of yellow.
	kristynsCloset[5] = "stained knit hat";



// 	4.	Put together an outfit for Thom! Using bracket 
//	notation, access the first element in Thom's shirts array.
	console.log(thomsCloset[0][0]);



// 	5.	In the same way, access one item from Thom's 
//	pants array.
	console.log(thomsCloset[1][1]);



// 	6.	Access one item from Thom's accessories array.
	console.log(thomsCloset[2][0]);



// 	7.	Log a sentence about what Thom's wearing. 
//	Example: "Thom is looking fierce in a grey 
//	button-up, jeans and wool scarf!"
	console.log("Thom is looking fierce in a grey " + thomsCloset[0][3] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][2] + "!");



// 	8.	Get more specific about what kind of PJs Thom's 
//	wearing this winter. Modify the name of his PJ pants 
//	to Footie Pajamas.
	thomsCloset[1][2] = "Footie Pajamas";


// 		IV. Functions

// 		A. printGreeting

//			Already did this one.


// 		B. printCool
// 	Write a function printCool that accepts one parameter, 
//	name as an argument. The function should print the name \
//	and a message saying that that person is cool.

const printCool = (name) => {
	console.log(name + " is cool");
}
printCool("Captain Reynolds");


// C. calculateCube

//	Write a function calculateCube that takes a single number 
//	and prints the volume of a cube made from that number.
	const calculateCube = (num) => {
		console.log(num * num * num);
	}
	calculateCube(5);


// 		D. isVowel

// 	Write a function isVowel that takes a character (i.e. a 
//	string of length 1) and returns true if it is a vowel, 
//	false otherwise. The vowel could be upper or lower case.

	const isVowel = (str) => {
		if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u') {
			return true;
		 }	else {
		 	return false;
		 }
		}

	console.log(isVowel("a"));
	console.log(isVowel("e"));
	console.log(isVowel("r"));


// 		E. getTwoLengths
// 	Write a function getTwoLengths that accepts two 
//	parameters (strings). The function should return an 
//	array of numbers where each number is the length of 
//	the corresponding string.

	const getTwoLengths = (str1, str2) => {
		let array = [str1.length, str2.length];
		return array;
	}
	console.log(getTwoLengths("Hank", "Hippopopalous"));


// 		F. getMultipleLengths
// 	Write a function getMultipleLengths that accepts a 
//	single parameter as an argument: an array of strings. 
//	The function should return an array of numbers where 
//	each number is the length of the corresponding string.
			
	const getMultipleLengths = (argument) => {
			let arr = [];
		for(let i = 0; i < argument.length; i++){
			arr.push(argument[i].length)
	}
		return arr;
	}
	console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


// 		G. maxOfThree

// 	Define a function maxOfThree that takes three numbers
//	as arguments and returns the largest of them. If all 
//	numbers are the same, it doesn't matter which one is 
//	returned. If the two largest numbers are the same, one 
//	of them should be returned.

	const maxOfThree = (num1, num2, num3) => {
		let max = 0;
		if(num1 >= num2 && num1 >= num3) 	{
		max = num1;
		}	else if(num2 > num1 && num2 >= num3){
		max = num2;
		}	else if(num3 > num1 && num3 > num2){
			max = num3;
		}
		return max;
	}
	console.log(maxOfThree(6, 9, 1));

// 		H. printLongestWord
// 	Write a function printLongestWord that accepts a single 
//	argument, an array of strings. The method should return 
//	the longest word in the array. In case of a tie, the 
//	method should return the word that appears first in 
//	the array.

	const printLongestWord = (array) => {
				let longest = "str";
			for(let i = 0; i < array.length; i++){
				if(array[i].length > longest.length){
				longest = (array[i]);
			}	
		}
			return longest;
	
}


 console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


// 		I. transmogrify
// 	Write a Javascript function called transmogrify. 
//	This function should accept three arguments, which you 
//	can assume will be numbers. Your function should return 
//	the "transmogrified" result.

// The transmogrified result of three numbers is the product 
//	of the first two numbers, raised to the power of the 
//	third number.

// For example, the transmogrified result of 5, 3, and 2 
//	is (5 times 3) to the power of 2 is 225.

	const transmogrify = (num1, num2, num3) => {
		let result = (num1 * num2);
		let answer = Math.pow(result, num3);
		return answer;
	}
	


console.log(transmogrify(5, 3, 2));
// => 225



// 		J. reverseWordOrder v2
// 	Without using .split(), .reverse(), or .join(), write 
//	a function reverseWordOrder that accepts a single 
//	argument, a string. The function should return a string 
//	with the order of the words reversed. Don't worry about 
//	punctuation.

		function reverseWordOrder(str)  {
		 let reversed = "";
		 let string = "";
		 for (let i = str.length - 1; i >= -1; i--) {
			if (str[i] == " " || i == -1) {
			reversed = reversed + " " + string;
			string = "";
				if(i == -1){
					return reversed;
				}
		} 
		else
		{
			string = str[i] + string;
		}
		}
	}
	console.log(reverseWordOrder("Hello World"))
	console.log(reverseWordOrder("Ishmael me Call"));
	console.log(reverseWordOrder("I use Lâncome on my comb"));
	


// 	K. Get down and dirty with Math.random()

// 	Write a function that will return a random integer 
//	between 1 and 10. Test it.
{	
const min = 1;
const max = 10;
const random = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random);
}
//	Write a function that will return a random integer 
//	between 10 and 100. Test it.
{
	const min = 10;
	const max = 100
	const random = Math.floor(Math.random() * (max - min +1)) + min;

console.log(random);
}
// 	Write a function that will return a random number 
//	between 532 and 13267. Test it.
{	const min = 532;
	const max = 13267;
	const random = Math.random() * (max - min +1) + min;

console.log(random);
}
// 	Write a function that will return a random number 
//	between 1 and 10. Test it.

{	const min = 1;
	const max = 10;
	const random = Math.random() * (max - min +1) + min;

console.log(random);
}


// 	Add a few more quotes to the quotes array from question
//	III-B-1 above. Write a function that will take an array 
//	as a parameter, and return a random element from that 
//	array. Call your function a few times, passing in the 
//	quotes array. Give it a nice semantic name like 
//	getRandomElement.
	const quote = ["Hello", "Hola", "Bonjour", "Goodbye", "Adios", "Hasta Luego"]

	const getRandomElement = (array) => {
		const min = 0;
		const max = array.length;
const i = Math.floor(Math.random() * (max - min)) + min;
			console.log(array[i]);
}

	console.log(getRandomElement(["Hello", "Hola", "Bonjour", "Goodbye", "Adios", "Hasta Luego"]))

// getting an extra Undefined response on the console, not sure why.


// 		Objects
// 	Let's set up an object data structure. Let's say we have 
//	a website that sells products, and we have a user of our 
//	website, and we want to store that user's data. The 
//	object data structure is a good way to organize the data 
//	from our user.

// 		A. Make a user object

// 	1.	Create an object called user.
const user = {


//	2. 	Write in to the object the key-value pairs for name, 
//	email, age, and purchased. Set the value of purchased 
//	to an empty array []. Set the other values to whatever 
//	you would like.
	name: 'Nick',
	email: 'Blackjacknick@gmail.com',
	age: 33,
	purchased: []
}
console.log(user);

// 		B. Update the user

//	1. 	Our user has changed his or her email address. 
//	Without changing the original user object, update the 
//	email value to a new email address.
	user.email = 'NewEmail@Address.com'

// 	2.	Our user has had a birthday! Without changing the 
//	original user object, increment the age value using the 
// 	postfix operator. Hint: age++
	user.age++;

// 		C. Adding keys and values
// You have decided to add your user's location to the data 
// that you want to collect.

// 	1.	Without changing the original user object, add a 
// new key location to the object, and give it a value or 
// some-or-other location (a string).
	user.location = "Denver, CO";


// 		D. Shopaholic!
// 	1.	Our user has purchased an item! They have purchased 
//	some "carbohydrates". Using .push(), add the string 
//	"carbohydrates" to the purchased array.

	user.purchased.push("carbohydrates");

//	2.	Our user has purchased an item! They have purchased 
//	some "peace of mind". Using .push(), add the string 
//	"peace of mind" to the purchased array.

	user.purchased.push("peace of mind");

// 	3.	Our user has purchased an item! They have purchased 
//	some "Merino jodhpurs". Using .push(), add the string 
//	"Merino jodhpurs" to the purchased array.

user.purchased.push("Merino jodhpurs");


// 	4.	Console.log just the "Merino jodhpurs" from the 
//	purchased array.

console.log(user.purchased[2]);




// 			E. Object-within-object
// 	Remember that you can add an object to an existing 
//	object in the same way that you can add any new 
//	property/value pair.

// 	If we want to give our user a friend with a name and age, 
//	we could write:


// 	When we console.log user, we would see the friend object 
//	added to our user object.

// 	1.	Write a friend object into your user object and 
//	give the friend a name, age, location, and purchased 
//	array (empty for now)
	user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "Denver, CO",
    purchased: []
}

// 	2.	Console.log just the friend's name
	console.log(user.friend.name);

// 	3.	Console.log just the friend's location
	console.log(user.friend.location);

// 	4.	CHANGE the friend's age to 55
	user.friend.age = 55;

// 	5.	The friend has purchased "The One Ring". Use .push() 
// 	to add "The One Ring" to the friend's purchased array.
	user.friend.purchased.push("The One Ring");

// 	6.	The friend has purchased "A latte". Use .push() to 
// 	add "A latte" to the friend's purchased array.
	user.friend.purchased.push("A latte");

// 	7.	Console.log just "A latte" from the friend's 
//	purchased array.
	console.log(user.friend.purchased[1]);


// 		F. Loops

// 	1.	Write a for loop that iterates over the User's 
//	purchased array (NOT the friend's purchased array), and 
//	prints each element to the console.
	for(i = 0; i < user.purchased.length;i++) {
		console.log(user.purchased[i]);
	}


// 	2.	Write a for loop that iterates over the Friend's 
//	purchased array, and prints each element to the console.
	for(i = 0; i < user.friend.purchased.length;i++){
		console.log(user.friend.purchased[i]);
	}

// 		G. Functions can operate on objects
// 	1.	Write a single function updateUser that takes no 
//	parameters. When the function is run, it should:

//  --it should increment the user's age by 1
// 	--make the user's name uppercase
	function updateUser() {
		user.age++;
		user.name = user.name.toUpperCase();
		}

console.log(updateUser());

// The function does not need a return statement, it will 
//	merely modify the user object.

// 	2.	Write a function oldAndLoud that performs the exact 
//	same tasks as updateUser, but instead of hard-coding it 
//	to only work on our user object, make it take a parameter 
//	person, and have it modify the object that is passed in 
//	as an argument when the function is called. Call your 
//	oldAndLoud function with user as the argument.

	function oldAndLoud(person) {
		person.age++;
		person.name = person.name.toUpperCase();
	}
	oldAndLoud(user.friend);




















