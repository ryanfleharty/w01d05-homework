// console.log("Homework page loaded :)");

// // I. VARIABLES AND DATATYPES
// //          A. Q + A
// // 1. We assign a value to a variable using var, let, or const. Then, we choose a 
// //      descriptive name for the variable and set it equal to a value.
// // 2. We redefine a variable's value by setting the variable equal to a new value.
// // 3. We can assign an existing variable a new name by setting the variable equal
// //      to the new variable name.
// // 4. To declare is to introduce a new variable for the first time.
// //    To assign is to set a variable equal to a certain value.
// //    To define is to both declare a variable and assign a value to it.
// // 5. Pseudocoding is a great way to work through the logical steps you'll need to 
// //      program something in plain English. It helps you stay focused on the task 
// //      at hand rather than get distracted by syntax.
// // 6. The vast majority (85%, I'll say) of time devoted to a problem should be devoted
// //      to thinking through the steps and the ways it could be solved most efficiently
// //      while actually typing out the code and testing it should be hashed out at the 
// //      end once you know how you plan to accomplish the task at hand.

// //          B. 
 // 1. The value of firstVariable is still 11. 
 let firstVariable = ("Hello World");
console.log(firstVariable);

 firstVariable = 11;
 console.log(firstVariable);

 let secondVariable = firstVariable;
 console.log(secondVariable);

 secondVariable = ("What time is it?");
 console.log(secondVariable);

 console.log(firstVariable);


 // 2. 
 const yourName = (name) => {
    return ("Hello, my name is " + name); 
}
console.log(yourName("Sami"));

//          C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true > false);
console.log(false === false === false === false === false === false === true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b < c);
console.log(a === a !== d);
console.log(48 == '48');

// //          D. The Farm
const searchCow = (animal) => {
    if (animal === "cow") {
        return ("moooo");
    } else {
        return ("Hey! You're not a cow!")
    }
}

console.log(searchCow("ant"));

//          E. Driver's Ed
const checkAge = (age) => {
    if (age >= 16) {
        console.log("Here are the keys!");
    } else {
        console.log("Sorry, you're too young.");
    }
}

console.log(checkAge(16));

// II. LOOPS
//          A. The Basics
// 1. 
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// // 2. 
for (let i = 10; i <= 400; i++) {
    console.log(i);
}

// // 3.
for (let i = 12; i <= 4000; i = i + 3) {
    console.log(i);
}

//          B. Get Even
// 1. 
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " <-- is an even number");
    }
}

//          C. Give Me Five
// // What should I code for numbers divisble by both three and five? Currently, five wins.
for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log("I found a " + i + ". High five!");
    } else if (i % 3 === 0) {
        console.log("I found a " + i + ". Three is a crowd");
    }
}

// //          D. Savings Account
// // 1.
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
    bank_account += i;
}
console.log(bank_account);

// // 2. 
let bank_account = 0;
for (let i = 1; i <= 100; i++) {
    bank_account += i * 2;
}
console.log(bank_account);

// //          E. Multiples of 3 and 5
// I'm not skipping this even though I've already done it--need the practice!
let total = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 || i % 5) {
        total += i;
    }
}

console.log(total);

// III. ARRAYS AND CONTROL FLOW
//          A. Talk About It
// 1. Arrays are composed of indices, indicated by brackets and beginning with zero: 
//      `array[0]`.
// 2. Arrays' contents will hold whatever order you place them in, but their ordering can be
//      manipulated thorugh various methods.
// 3. Arrays are objects useful for storing a variety of objects, and can be used for
//      anything from holding and organizing inventories, sport statistics, or even 
//      to-do lists.

// //      B. Easy Does It
let quotes = ["Hey", "Hello", "Hi",];
console.log(quotes[0]);

// //          C. Accessing Elements
const randomThings = [1, 10, "Hello", true]
randomThings[2] = "World";
console.log(randomThings[2]);

// //          D. Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// 1.
ourClass[2];
// 2. 
ourClass[4] = "Octocat";
// 3. 
ourClass.push("Cloud City");

console.log(ourClass);

// //          E. Mix It Up
// // 5. All array methods mutate the array, since it has been defined using the const
// //      setter. Mutate means to copy an array's contents and change it without 
// //      altering the original array's values. The reverse method, when printed,
// //      returns the array in reversed order than originally listed.
const myArray = [5, 10, 500, 20];
myArray.push("Egon");
myArray.push("Howdy");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();

console.table(myArray);

// //          F. Biggie Smalls
let i = 1000; 
if (i < 100) {
    console.log("little number");
} else {
    console.log("big number");
}

// //          G. Monkey in the Middle
let i = 11;
if (i < 5) {
    console.log("little number");
} else if (i > 10) {
    console.log("big number");
} else {
    console.log("monkey");
}

// //          H. What's in Your Closet?
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

  // 1.
  console.log("Kristyn in rocking that " + kristynsCloset[2] + " today!");
  // 2.
  kristynsCloset.splice(6, 0, "raybans");
  // 3.
  kristynsCloset[5] = "stained knit hat";
  console.table(kristynsCloset);
// 4.
let shirts = thomsCloset[0];
console.log(shirts[0]);

// // 5.
let pants = thomsCloset[1];
console.log(pants[0]);

// 6.
let acc = thomsCloset[2];
console.log(acc[0]);

// 7.
console.log("Thom is looking fierce in a " + shirts[1] + ", " + pants[0] + ", and " + acc[2] + "!")

// 8.
pants[2] = "Footie Pajamas";
console.table(thomsCloset);

// IV. FUNCTIONS
//          A. Print Greeting--skip
//          B. printCool
const printCool = (name) => {
console.log(name + " is cool");
}

// console.log(printCool("Captain Reynolds"));
//          C. calculateCube
const calculateCube = (num) => {
    console.log(num**3);
}
console.log(calculateCube(5));

//      D. isVowel
const isVowel = (char) => {
    if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U' || char === 'y' || char === 'Y') {
        return true;
    } else {
         return false;
        }
    }


console.log(isVowel('a'));

//      E. getTwoLengths
//
const getTwoLengths = (str1, str2) => {
    let array = [0, 0];
    array[0] = str1.length;
    array[1] = str2.length;
    str1 = array[0];
    str2 = array[1];
    return array;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

//      F. getMultipleLengths
const getMultipleLengths = (arr) => {
    let lengths = [];
    for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
    }
    return lengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
const maxOfThree = (num1, num2, num3) => {
    let max = 0;
    let array = [num1, num2, num3];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        } else {
            return max;
        }
    }
}

console.log(maxOfThree(6, 9, 1));

// //H. printLongestWord 
let longest;
let count = 0;

const printLongestWord = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > count) {
            count = arr[i].length;
            longest = arr[i];
        } 
    }
    return longest;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

   
//          I. transmogrify

const transmogrify = (num1, num2, num3) => {
    return (num1*num2)**num3;
}

console.log(transmogrify(5, 3, 2));

// J. reverseWordOrder v2 : The code below is 100% Adam Wolfmans; I tried this thing out for hours 
// and didn't make any headway. I broke his down step by step to try to understand it better. 

// MY PSEUDOCODE 
// Set function. Needs to recognize separation between words with " ".
// Words need to spelled right, but the chunks between spaces are reversed. 
// Loop through each character in string, pushing each item into reversed variable.

const reverseWordOrder = (str) => {
   
    let reverseSentence = ""; // set empty variable for final reversed sentence
    let word = ""; // set variable for current word
    let str2 = str + " "; // set variable for holding string plus space to make the for loop functional

    for (let i = 0; i < str2.length; i++){ // set loop to move through each character in the string
        if (str2[i] !== " "){ // recognize what characters are letters (not spaces) 
            word = word + str2[i]; // add those characters to the new string to add on to
        } else if (str2[i] === " "){ // if the loop hits a space, that means it's passed a complete word
            reverseSentence = word + " " + reverseSentence; // This adds the current found word to the beginning 
            // of the reverseSentence through concatenation 
            word = ""; // This resets the word variable so that it can hold onto the next word it encounters 
            // in the loop
        }
    }
    return reverseSentence; // this outputs the finalized reversed string outside of the for loop
}

console.log(revWordOrder("Ishmael me Call"));


//      K. Get down and dirty with Math.random()
// 1. 
const random = () => {
    return (Math.floor(Math.random() * 11));
}

// 2. 
const random = () => {
    return (Math.floor(Math.random() * 100) + 10);
}

// 3. 
const random = () => {
    return (Math.floor(Math.random() * 13267) + 532);
}

// 4. 
const random = () => {
    return (Math.floor(Math.random() * 10) + 1);
}

// 5.
const getRandomElement = (arr) => {
    return arr = arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandomElement(["Hey", "Hello", "Hi", "Howdy", "What's up"]));

//              V. OBJECTS
const user = {
    name: "joey",
    email: "joeyrocks@email.com",
    age: 51, 
    purchased: []
};

user.email = "joeyreallyrocks@email.com";
user.age++;
user.location = "Flagstaff";
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased[2]);

// E. Object within an object
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "Los Angeles",
    purchased: []
};
console.log(user.friend.name);
console.log(user.friend.location);

user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);

 //        G. Functions can Operate on Objects
const updateUser = () => {
    user.age++;
    user.name = user.name.toUpperCase();
}
updateUser(user);
console.log(user);

const oldAndLoud = (person) => {
    person.age++;
    person.name = person.name.toUpperCase();
}
oldAndLoud(user);
console.log(user);
