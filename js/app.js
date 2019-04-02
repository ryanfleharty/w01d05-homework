console.log('loaded');

PART A

// 1.) You can use bracket or dot notaiotn for assigning values to a vairable. 
// 2.) You can also use brackert or dot notaiton to update or reassign a value to a variable. 

// 4.) Af] function declartion is written slightyl differnet a fuction assignment.
// 	var function = () vs const " "= function() =>
// 5.) Psuedocoding is writting and planning out your code in advance.
// 6.) 80% planning 20% coding 

// PART B


const firstVariable = ("Hello World") => {
	let firstvariable = 10
}


const sceondVariable = firstVariable[10];

sceondVariable[10] = "Hello World"


// 2.)

const yourName = ("Veda Anderson") => {
	console.log (`Hello My Name is ${yourName}`);

}

//PART C
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(4 < 53); 
  console.log(57 > 16);
  console.log('Name' === 'Name');
  console.log(true !== false);
  console.log(false == false == false == false == false ==  false != true);
  console.log(false === false)
  console.log(e == 'Kevin');
  console.log(4 < 53 < 57);
  console.log(a === a != d);
  console.log(48 !== '48');

// PART D

var animal = "cow";

  if(animal === "cow"){
    console.log("Mooo")
  }else{
    console.log("You're not a cow")
  }

// PART E 
var checkAge = (number) => {
  for(let i = 0; i < number; i ++){
    if(number >= 16 ){
      console.log("Here are the keys!")
    }else if(number < 16 ){
      console.log("Sorry you're too young.")
    }
   }
  }
console.log(checkAge(12));


// LOOPS 
// PART A 

for(let i = 0; i <= 10; i++){
console.log(i);

}

for(let i = 10; i <= 400; i++){
  console.log(i);
}

for(let i =12; i <= 4000; i+=3){
  console.log(i);
}


// PART B 1 & 2

for(let i = 0; i <= 100; i+=2){
  console.log('The even number is' + i); 
}

// PART C

for(let i = 0; i <= 100; i++){
  if(i % 5 == 0){
    console.log('I found a ' + i + ' High Five');
  }else if(i % 3 == 0){
    console.log('I found a ' + i + ' Three is a crowd!');
  }
}

// PART D 

sumArray = (arr) =>{
  sum = 0;
  for(i=0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// PART E MULTIPLES OF 3 & 5
let sum = 0
  for(let i = 0; i  < 1000; i++){
  if((i % 5 == 0) || (i % 3 == 0)){
      sum = sum + i;
  }

}
console.log(sum);

// ARRAYS AND CONTROL FLOW 
//   PART A 

// What are the things in an array called?
//     A list of items('string' or number) all represented by an index number.

// Do Arrays guarantee those things will be in order?


// What real-life thing could you model with an array? 
//     A grocery list!

//     PART B

const quotes = ["Tis but a scratch", 
"Did you see the size of that chicken?", 
"What's in the box!"]

  // PART C

const randomThings = [1, 10, "Hello", true]

  randomThings[0];

  randomThings[2] = "World" 

console.log(randomThings);

  // PART D 

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

  ourClass[2]; 

  ourClass[4] = "Octocat"

  ourClass.push("Cloud City"); 

  // PART E

const myArray = [5, 10, 500, 20]

  myArray.push("egon", "peel");

  myArray.shift([0]);

  myArray.unshift("Bob Marley");

  myArray.pop("peel");

  myArray.reverse();

  // PART F 

// let number = (400); 

// if(number < 100){
//   console.log("little number");

//   }else if(number >= 100){
//   console.log("big number");
//   }

//   // PART G

// let number = (7);

//   if(number < 5){
//     console.log("little number");
//   }else if(number > 10){
//     console.log("big number");
//   }else{
//     console.log("monkey")
// }

  // PART H

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

console.log("Kristyn is rocking that " + kristynsCloset[3] + " today!");

kristynsCloset.splice(6, 0, "raybans");

kristynsCloset[5] = "stained knit hat"

console.log(thomsCloset[0][0]);

console.log(thomsCloset[1][1]);

console.log(thomsCloset[2][2]);

console.log("Thom's looking good in his " + thomsCloset[0][0] + " , " + thomsCloset[1][1] 
  + " and " + thomsCloset[2][2] + "!"); 

// IV FUNCTIONS
const printCool =  ( name ) => {
  return name + "is cool";
};

 console.log( printCool( "Captain Reynolds"));

// CALCULATECUBE

const calculateCube = (num) => {
  return num * num * num;

}
console.log(calculateCube(5));

// ISVOWEL

const isVowel = (x) => {

    let result;

    result = x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
    return result;
}
console.log(isVowel("a")); // returns flase if uppercase 

// GETTWOLENGTHS

const getTwoLengths = (str1, str2) => {

  return [str1.length , str2.length];
  
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

 // GETMULTIPLELENGTHS

const getMultipleLengths = ( arrayOfStrings ) => {
    const lengths = [];
    for ( let i = 0; i < arrayOfStrings.length; i++ ){
        lengths.push( arrayOfStrings[i].length );
      }
      return lengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// MAX OF THREE

const maxOfThree = (num1, num2, num3) => {
  return Math.max(num1, num2, num3);
}
 
 console.log(maxOfThree(6, 9, 1));

 // PRINT LONGEST WORD 

 const printLongestWord = (arr) => {
    let longest = " ";
    for (let i =0; i < arr.length; i ++){
      if(arr[i].length > longest.length){
        let longest = arr[i]; 
      }
    }
    return longest; 
 }
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", 
  "Max", "Peanutbutter", "big", "Todd"]));
  // Cant get this one to work quite yet

//TRANSMORGRIFY 

const transmogrify = (num1, num2, num3 ) => {
    x = num1 * num2 
    Math.pow(x);

}
console.log(transmogrify(5, 3, 2));

// REVERSE WORD ORDER

//   Did in class together, however I can pull it from my notebook if need be. 

// Math.random()


const getRandom = (min, max) => {
  if (min==null && max==null)
    return 0;    
  
  if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
}
console.log(getRandom(1, 10));
console.log(getRandom(10, 100));
console.log(getRandom(532, 13267)); 

// OBJECTS

const user = {
    name: 'Veda',
    email: 'veda0719@gmail.com',
    age: 22,
    purchased: []
}

user.email = 'vedaAnderson@gmail.com'
user.age++

user.location = 'Denver, CO'

user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodpurs');

console.log(user.purchased[2]);

// PART E
user.friend = {
    name: "Shai Labeouf",
    age: 42,
    location: 'unknown whereabouts',
    purchased: []
}

user.friend.age = 12;
user.friend.purchased.push('The one ring');
user.friend.purchased.push('A latte'); 

// F LOOPS 

for(let i = 0; i < user.purchased.length; i++){
  console.log(user.purchased[i]);
}

for(let i = 0; i < user.friend.purchased.length; i++){
  console.log(user.friend.purchased[i]);
}

// PART G

const updateUser = () => {
  for (let i = 0; user.length; i++){
    console.log(user.age++)
  }
}
 updateUser();

// const oldAndLoud = (person) =>{

// }
















  