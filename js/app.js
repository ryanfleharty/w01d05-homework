// JavaScript weekend REPS!

// I. VARIABLES & DATA TYPES
// A. Q + A
// 1
var x = "y";
// 2
x = "z";
// 3
var y = x;
// 4
// declare is is to create a variable using "var", "let", or "const".
// assign is to give a variable a certain value
// define is to give a variable a new value
// 5
// pseudocoding is writing out each step of a code, what it will
// be doing, in English. It is good to plan and keep things organized.
// 6
// whatever percent of time is necessary, so usuaslly about 60%-40%.

// B. Strings
// 1
let firstVariable = "hello world";
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable = 8;
// the value of firstVariable is 5.
// 2
const yourName = "Will";
const newStr = `Hello, my name is ${yourName}.`

// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true !== false);
console.log(false === false && false === false && false === false && true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b < c);
console.log((a === a) < d);
console.log(48 == '48');

// D. THE FARM
// 1-4
const animals = "cow";
const areYouACow = (animal) => {
  if (animal === "cow"){
    console.log("moooooo");
  } else {
    console.log("hey! you're not a cow!");
  }
  return animal
}

// D. DRIVER'S ED
// 1
const personsAge = 17;
// 2
if (personsAge >= 16) {
  console.log("Here are the keys");
// 3
} else {
  console.log("Sorry, youre too young");
}


// II. Loops
// A. THE BASICS
// 1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// 2
for (let i = 10; i <= 400; i++) {
  console.log(i);
}
// 3
for (let i = 12; i <= 400; i += 3) {
  console.log(i);
}

// B. GET EVEN
// 1-2
for (let i = 2; i <= 100; i += 2) {
  console.log(i + "<-- is an even number");
}
// C. GIVE ME FIVE
// 1
for (let i = 0; i <= 100; i ++) {
  if (i % 5 === 0) {
    console.log(`I found a ${i}. High Five!`);
  } else if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd.`);
  }
}

// D. SAVINGS ACCOUNT
// 1
const sumMoney = (limit) => {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
  }
  return sum;
}
let bank_account = sumMoney(10);
console.log(bank_account);
// 2
bank_account = sumMoney(100) * 2;
console.log(bank_account);

// E. MULTIPLES OF 3 AND 5
const sumFizzBuzz = (limit) => {
  let sum = 0;
  for (let i = 3; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumFizzBuzz(100));


// ARRAYS & CONTROL FLOW
// A. TALK ABOUT IT
// 1
// Elements
// 2
// No
// 3
// The names of people in a classroom

// B. EASY DOES IT
// 1
const hemingwayQuotes = ["Never mistake motion for action.","Happiness in intelligent people is the rarest thing I know.", "If you are lucky enough to have lived in Paris as a young man, then wherever you go for the rest of your life it stays with you, for Paris is a moveable feast."]

// C. ACCESSING ELEMENTS
const randomThings = [1, 10, "Hello", true];
// 1
randomThings[0];
// 2
randomThings[2] = "World";
// 3
console.log(randomThings[2]);

// D. CHANGE VALUES
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// 1
ourClass[2];
// 2
ourClass[4] = "Octocat";
// 3
ourClass.push("Cloud City");

// E. MIX IT UP
const myArray = [5, 10, 500, 20]
// 1
myArray.push("Egon");
myArray.push("Schiele")
// 2
myArray.shift();
// 3
myArray.unshift("Bob Marley");
// 4
myArray.pop()
// 5
myArray.reverse();
// the .reverse function reversed the order of elements

// F. BIGGIE SMALLS
// 1-2
let integer = 5;
if (integer < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// G. MONKEY IN THE MIDDLE
// 1-3
if (integer < 5) {
  console.log("little number");
} else if (integer > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// H. WHAT'S IN YOUR CLOSET
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
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
// 1
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// 2
kristynsCloset.splice(5,0,"raybans");
// 3
kristynsCloset[6] = "stained knit hat";
// 4-7
console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][2]}!`);
// 8
thomsCloset[1][2] = "Footie PJs";


// FUNCTIONS
// A. PRINTGREETING
const printGreeting = (name) => {
  console.log(`Hello there ${name}!`);
}
// B. PRINTCOOL
const printCool = (name) => {
  console.log(`${name} is cool!`);
}
// C. CALCULATECUBE
const calculateCube = (dimension) => {
  let volume = dimension * dimension * dimension;
  return volume;
}
// D. ISVOWEL
const isVowel = (letter) => {
  letter.toLowerCase();
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    return true;
  }
}
// E. GETTWOLENGHTS
const getTwoLengths = (str1,str2) => {
  let arr = [];
  arr[0] = str1.length;
  arr[1] = str2.length;
  return arr;
}
// F. GETMULTIPLELENGTHS
const getMultipleLengths = (strArr) => {
  let arr = []
  for (i = 0; i < strArr.length; i++) {
    arr[i] = strArr[i].length;
  }
  return arr;
}
// G. MAXOFTHREE
const maxOfThree = (num1,num2,num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num3 && num2 > num1) {
    return num2;
  } else if (num3 > num2 && num3 > num1){
    return num3
  } else {
    return num2;
  }
}
// H. PRINTLONGESTWORD
const printLongestWord = (strArr) => {
  let longest = 0;
  for (i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longest) {
      longest = strArr[i].length;
    }
  }
  return longest;
}
// I. TRANSMORGIFY
const transmogrify = (num1,num2,num3) => {
  return num1 * num2 ** num3;
}
// J. REVERSEWORDORDER
const reverseWordOrder = (str) => {
  let arr = [];
  let strReversed = "";
  let spaceArrIndex = [0];
  str = " " + str;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      spaceArrIndex.push(i);
    }
  }
  for (let i = spaceArrIndex[spaceArrIndex.length-1]; i < str.length-1; i++){
  arr.push(str[i+1]);
}
  for (let i = spaceArrIndex[spaceArrIndex.length-2]; i >= 0; i--) {
    for (let x = spaceArrIndex[i]; x < spaceArrIndex[i+1]; x++) {
      arr.push(str[x]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    strReversed += arr[i];
  }
  return strReversed
}

console.log(reverseWordOrder("oh my god this is a test to see how well this works"));
// K. GET DOWN AND DIRTY WITH MATH.RANDOM()
// 1
const randomInt = (num) => {
  return Math.floor(Math.random() * num);
}
console.log(randomInt(10));
// 2
const randomInt2 = (num) => {
  return Math.floor(Math.random() * num - 10) + 10;
}
console.log(randomInt2(100));
// 3
const randomInt3 = (num) => {
  return (Math.random() * num - 532) + 532;
}
console.log(randomInt3(13267));
// 4
const randomInt4 = (num) => {
  return (Math.random() * num);
}
console.log(randomInt4(10));
// 5
const getRandomElement = (arr) => {
  let num = Math.floor(Math.random() * (arr.length));
  console.log(num);
  return arr[num]
}
console.log(getRandomElement(hemingwayQuotes));
