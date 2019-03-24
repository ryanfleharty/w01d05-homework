//|----------------------------------------------------------|
//|                       w01d05-homework                    |
//|                       Collin Brockway                    |
//|                    3/22/2019 - 3/24/2019                 |
//|----------------------------------------------------------|


//A. Q&A
//1. Using let or const, for example: "let variable = 42;"
//2. Using the "=" operator, for example: "variable = 1776;"
//3. Also use "=" operator, e.g. "newvar = variable;"
//4. Wait, what?
//5. Pseudocode is highly human-readable text that has the structure
//   of code, and thus can serve as a guide to structuring the actual
//   code.
//6. Something like 3/4 thinking, 1/4 typing.

//|----------------------------------------------------------|
//|       Everything below is commented out so as not to     |
//|       spam the console, except for the current portion   |
//|       of code that is being tested                       |
//|----------------------------------------------------------|

/*

//B. Strings

//1.

let firstVariable = "Hello World";
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable = "This is a string";
console.log(firstVariable);
console.log(secondVariable);

//Value of firstVariable ought to be now the same as secondVariable,
//since they now simply point to the same location in memory.
//(never mind, that is not the case: had to use "let" in order to
//not run into const redefinition errors, and now the final value of
//firstVariable is not tied to that of secondVariable (would it ever be?)

//2.

const yourName = "Collin Brockway";
console.log("Hello, my name is " + yourName);

//C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true != false);
console.log(false || false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a != b > c);
console.log(a == a != d);
console.log(48 == '48');

//D. The Farm

//1.
const animal = "cow";

//2.
if (animal == "cow") {console.log("mooooo");}

//3.
if (animal != "cow") {console.log("Hey! You're not a cow.");}

//E. Driver's Ed

//1.
const personAge = 15;
//2.
if (personAge >= 16) {console.log("Here are the keys");}
//3.
if (personAge < 16) {console.log("Sorry, you're too young.");}



//II. Loops

//A. The Basics

for (let i = 0; i <= 10; i++)
{
	console.log(i);
}

for (let i = 10; i <= 400; i++)
{
	console.log(i);
}

for (let i = 12; i <= 4000; i = i + 3)
{
	console.log(i);
}

//B. Get even

//Print out the even numbers between 1 and 100
for (let i = 2; i <= 100; i = i + 2)
{
	console.log(i);
}

//Print out all numbers and put a message next to the even ones
for (let i = 1; i <= 100; i++)
{
	console.log(i + (!(i % 2) && "<-- is an even number"));
}



//C. Give me five

//1.
for (let i = 1; i <= 100; i++)
{
	if (!(i % 5)) {console.log(`I found a ${i}. High five!`);}
}

//2.
for (let i = 1; i <= 100; i++)
{
	if (!(i % 5)) {console.log(`I found a ${i}. High five!`);}
	if (!(i % 3)) {console.log(`I found a ${i}. Three is a crowd`);}
}



//D. Bank account

let bank_account = 0;

for (let i = 1; i <= 10; i++)
{
	bank_account = bank_account + i;
}

console.log(bank_account);

bank_account = 0;
//(apparently we spent all our money on coffee or something)

for (let i = 1; i <= 100; i++)
{
	bank_account = bank_account + (i * 2);
}

console.log(bank_account);



//E. Multiples of 3 and 5

//Newsflash, I already did it. Check homework 3 or 4? Whichever it was.



//III. Arrays and Control Flow


//A. Talk about it:
//1. Elements
//2. No
//3. For example, a list of friends in a social media app (elements would
//   be objects)



//B. Easy does it:

const quotes = ["The quick brown fox jumps over the lazy dog", "Four score and seven years ago, our fathers brought forth upon this continent a new nation", "There are more things in heaven and earth, Horatio, than are dreamt of in your philosophy."];


//C. Accessing elements

const randomThings = [1, 10, "Hello", true];

//1. Use randomThings[0]
//2.
randomThings[2] = "World";
//3.
console.log(randomThings[2]);


//D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//1. ourClass[2];
//2.
ourClass[4] = "Octocat";
//3.
ourClass.push("Cloud City");
console.log(ourClass);



//E. Mix it up

const myArray = [5, 10, 500, 20];

//1.
myArray.push("Egon");
myArray.push("my-really-great-string-with-lots-of-dashes");
myArray.splice(0,1);
myArray.splice(0,0,"Bob Marley");
myArray.splice(5,1);
myArray.reverse();

console.log(myArray);

//Yes, reverse is a mutating function. Mutation means it changes the
//original array in memory. No, it doesn't return anything.


//F. Biggie Smalls

const myVar = 1776;

if (myVar < 100)
{
	console.log("little number");
}
else
{
	console.log("big number");
}


//G. Monkey in the middle

const myVar2 = 5;

if (myVar2 < 5)
{
	console.log("little number");
}
else if (myVar2 > 10)
{
	console.log("big number");
}
else
{
	console.log("monkey");
}



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

//Kristyn is very proud of her left shoe
console.log("Kristyn is rocking that " + kristynsCloset[0] + " today!");

kristynsCloset.splice(6,0,"raybans");

kristynsCloset[5] = "stained knit hat";

console.log(`Thom is looking great in a ${thomsCloset[0][3]}, ${thomsCloset[1][2]}, and ${thomsCloset[2][1]}!`);

thomsCloset[0][2] = "Footie Pajamas";

console.log(kristynsCloset);
console.log(thomsCloset);




//IV. Functions


//A. printGreeting

//Well, I guess I already did this, so check whatever previous homework
//I did this in.



//B. printCool

function printCool (n)
{
	console.log(`${n} is cool`);
}

printCool("Odysseus");



//C. calculateCube

function calculateCube(x)
{
	return (x ** 3);
}

console.log(calculateCube(5));



function isVowel(s)
{
	if (s == "a" || s == "e" || s == "i" || s == "o" || s == "u")
	{
		return true;
	}
	return false;
}

console.log(isVowel("a"));



function getTwoLengths(s1, s2)
{
	return [s1.length, s2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));



function getMultipleLengths (sarr)
{
	const lenarr = [];
	for (let i = 0; i <= sarr.length - 1; i++)
	{
		lenarr.push(sarr[i].length);
	}
	return lenarr;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));



//This is inefficient but this assignment is freaking long
//so this is what you get.

function maxOfThree (x1, x2, x3)
{
	if (x1 > x2)
	{
		if (x1 > x3)
		{
			return x1;
		}
		else
		{
			return x3;
		}
	}
	else
	{
		if (x2 > x3)
		{
			return x2;
		}
		else
		{
			return x3;
		}
	}
	
	if (x1 == x2 || x1 == x3)
	{
		return x1;
	}
	if (x2 == x3)
	{
		return x2;
	}
}
console.log(maxOfThree(6, 9, 1));



function printLongestWord(strarr)
{
	let maxfound = 0;
	for (let i = 0; i <= strarr.length - 1; i++)
	{
		if (strarr[i].length > strarr[maxfound].length)
		{
			maxfound = i;
		}
	}
	return strarr[maxfound];
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



function transmogrify(x1, x2, x3)
{
	return (x1 * x2) ** x3;
}
console.log(transmogrify(5, 3, 2));

*/

function reverseWordOrder (str)
{
	let newstr = "";
	let tempstr = "";
	for (let i = str.length - 1; i >= -1; i--)
	{
		if (str[i] == " " || i == -1)
		{
			newstr = newstr + " " + tempstr;
			tempstr = "";
			if (i == -1)
			{
				return newstr;
			}
		}
		else
		{
			tempstr = str[i] + tempstr;
		}
	}
}

console.log(reverseWordOrder("Ishmael me Call"));

