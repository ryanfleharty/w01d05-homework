//I. Variables & Datatypes
//A. Q + A \\

    //1. You declare a variable by using a keyword like var, let, and const.
//To assign a value to a variable you can use an equal sign. 
//Ex. var age;
//    age = 22; 
    //2. We can change the value of a variable, by using (=) to reassign a 
//new value to the variable. 
// Ex. var dadName = "Trev";
//         dadName = "Trey";  
//Now dadName has the value of "Trey".   
    //3. Agian I would use the ()=) operator, e.g. 
    //Ex. const new_var = old_var;
    //4. When you are declaring a variable you are saying "this is a thing". When you 
//define a variable you are giving it value. "This thing means this!" When you 
//are assigning the variable to a value you use the assignment 
// operator (=) which does not mean equal to!
    //5. pseudocoding is writing out the problem in your own words before you start to 
//code. It is important because it helps you think through the problem, basically 
//you are writing out what should happen and how you will make it happen. Like a gameplan.
    //6. You should take a decent amount of time to go over the problem, before you start 
//to code, thinking about a multiple of different outcomes not just the intended. 
//Programming is 75-90% planning, and 10-25% typing code.
//B. Strings \\
    //1. 
        let firstVariable = "Hello World";
        firstVariable = 30;
        console.log(firstVariable);
        let secondVariable = "Hello World";
        secondVariable = "Goodbye";
        console.log(secondVariable);
        firstVariable = secondVariable;
        console.log(secondVariable);
        secondVariable = "num";
        console.log(firstVariable);
    //2. 
    const yourName = "Tori";
    console.log("Hello, My name is " + yourName);



//C. Booleans \\
    const a = 4;
    const b = 53;
    const c = 57;
    const d = 16;
    const e = 'Kevin';

    console.log(a < b);
    console.log(c > d);
    console.log('Name' === 'Name');
    console.log(true !== false);
    console.log(false == false == false == false == false == false === true);
    console.log(false === false)
    console.log(e ==='Kevin');
    console.log(a > b < c);
    console.log(a <= a < d);
    console.log(48 !== '48');

//D. The farm \\
const animal = (cow) => {
  if (animal == cow) {
    return "Mooo";
  } else {
    return "Hey! You're not a cow.";
  }
}
console.log(animal);
   
    
    
//E. Driver's Ed \\
const age = (dmv) => {
    if (age > 16) {
        dmvGreeting = "Here are the keys";
    } else {
        dmvGreeting = "Sorry, you're too young.";
    }
    console.log("age: 12");
}




//II. Loops  
//Remember to use let!
    //A. The basics\\
  //1.
  const num = [];
    for( let i = 0; i < 10; i++) {
    }
    console.log('value of i is:[i]')
 //2. 
    for (let i = 10; i <= 400; i++) {
        console.log('value of i is:[i]');
    }
//3. 
     for (let i = 12; i < 4000; i+=3) {
        if ( i % 3 == 0) {
        }
    console.log(i);
    }
    //B. Get even\\
   //1. 
   for (var i = 0; i < 200; i+=2) {
console.log(i)
   }
   //2. 
   for (var i = 0; i < 200; i+=2) {
    console.log("This is an even Number ==> [i]");
   }
    //C. Give me Five \\
  
  //1. && //2.
  const foundNum = () => {
    for (let i = 0; i <= 100; i++) {
      if( x % 3 && x % 5 && i % 10) {
        document.write(x);}
      if ( i % 5 == 0) {
        document.write("I found a 5. High five!");
      } else {
        if(i % 10 == 0) {
          document.write("I found a 10. High five!");
        }
        if(i % 3 == 0) {
          document.write("Three is a crowd");
        }
      }
console.log(foundNum[10]);
    }
  }
  
   //D. Savings account \\
  //1. 
  const bank_account = (sum) => {
    let sum = 0;
    for (let i = 1; i < 10; i++){
      sum += 1;
    }
    return sum;
  }
  console.log(bank_account[i]);
  //2.
  function bank_accountBonus()  {
    let sumBonus = 0;
    for (let i = 1; i < 100; i++){
      sumBonus = (i * 2);
    }
    return sumBonus;
  }
  console.log(bank_accountBonus);
  
//E. Multiples of 3 and 5 \\
//I have done this problem before.

  //III. Arrays & Control flow

  //A. Talk about it:\\
  //1. An array is an object that can store multiple values, you acces the values by referring to an
  //index number.
  //2. No, but you can use more the just the length property to organize an array. Example being,
  //forEach would ignore missing values. 
  //3. You should use an array when your elements names are numbers. A real lifes situation to use an array 
  // would be for using it as a tool for keeping inventory. 
  //B. Easy Does It\\
  //1.
  const quotes = ["if only life could be a little more tender and art a little more robust", 
  "It would be wonderful to think that the future is unknown and sort of surprising", 
  "I think there's some connection between absolute discipline and absolute freedom"];

  //C. Accessing elements\\
  const randomThings = [1, 10, "Hello", true]
  //1.
  randomThings[0] = 1;
  randomThings[2] = "World";
  console.log(randomThings[2]);

  //D. Change values\\
  const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
  //1.
  ourClass[2];
  //2.
  ourClass[4] = "Octocat";
  console.log(ourClass[4]);
  //3. 
  ourClass.push("Cloud City");
  console.log(ourClass[5]);

  //E. Mix It Up\\
  const myArray = [5, 10, 500, 20]
//1.
myArray.push("Egon");
console.log(myArray[4]);

//2.
myArray.splice(0, 1);
console.log(myArray[0])

//3.
myArray.unshift("Bob Marley");
console.log(myArray[0]);

//4.
myArray.pop("Egon");
console.log(myArray[3]);

//5.
const backward = myArray.reverse();
console.log(backward);

//F. Biggie Smalls\\
//1. 
const numSize = () => {
if (num < 100) {
    number = "little number";
  } else  {
    number = "big number";
  }
console.log(num(10));
}

//G. Monkey in the Middle\\
//1.
if (num < 5) {
    number = "little number";
  } else if (num > 10) {
    number = "big number";
  }
  else {
      number = "monkey";
  }
  console.log(10); 

  //H. What's in Your Closet?\\
  
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

  //1. 
  kristynsCloset["right sock"]; 
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
  //2. 
 kristynsCloset.splice(6, 0, "raybans");
 console.log(kristynsCloset);
  //3. 
  kristynsCloset["yellow knit hat"] = ["stained knit hat"];
  delete kristynsCloset["yellow knit hat"];
  console.log(kristynsCloset[5]);
  
  //4.
  thomsCloset["grey button-up"];
  console.log(thomsCloset[0][0]);
  //5. 
  thomsCloset["jeans"];
  console.log(thomsCloset[1][1]);

  //6. 
  thomsCloset["raybans"];
  console.log(thomsCloset[2][2]);

  //7. 
  console.log("Thom is looking fierce in a " +  thomsCloset[0][0]  +   thomsCloset[1][1] +  thomsCloset[2][2]);

  //8. 
  thomsCloset[ "PJs"] = thomsCloset["Footie Pajamas"];
  delete thomsCloset[ "PJs"];
  console.log(thomsCloset[1][2]); 
  

  //IV. Functions

  //A. printGreeting\\ Optional question ..... try using the .date() & .getHours() 
  

  /*const da = new date("march");
  const time = da.getHours();
  if (time < 6) {
    document.write("Whats Up!");
  }
  if (time > 6) {
    document.write("Hey Man");
  }
  if (time == 6) {
    document.write("Dude!");
  }
  console.log(time); */

  //B.\\
  const printCool = (name) => {
    return name + " is cool";
};
console.log( printCool( "Captain Reynolds" ) );

  //C. NOTE!!! Math.pow(base, exponent)\\
  const calculateCube = (num) => {
    return Math.pow(num, 3);
}
console.log(calculateCube(5));
console.log(calculateCube(25));
console.log(calculateCube(3));
  //D.\\
  const isVowel = (letter) => {
    const vow = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vow.length; i++) {
      if (vow[i] === letter.toLowerCase()){
        return true;
      }
    }
    return false;
  }
  console.log(isVowel("a"));
  //E.\\
  const getTwoLengths = (string1, string2) => {
    return [string1.length , string2.length];
    }
    console.log(getTwoLengths("Hank", "Hippopopalous"));
  //F.\\
  const getMultipleLengths = (arrOfStr) => {
    const length = [];
    for (let i = 0; i < arrOfStr.length; i++) {
      length.push(arrOfStr[i].length);
    }
    return length;
  }
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
  
  //G. The Math.max() function returns the largest of zero or more numbers.\\
  const maxOfThree = (numOne, numTwo, numThree) => {
    return Math.max(numOne, numTwo, numThree);
  }
  //Remember that order is important!
  console.log(maxOfThree(6, 9, 1));
  //H.
  const printLongestWord = (arrOfStrs) => {
    let longest = "Peanutbutter";
    for (let i = 0; i < arrOfStrs.length; i++) {
      if (arrOfStrs[i].length > longest.length) {
      }
    }
    return longest;
  }
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
  
  //I. (ES7) Exponentiation assignment.\\
  const transmogrify = (num1, num2, num3) => {
    return (num1 * num2) ** num3;
  }
  console.log(transmogrify(5, 3, 2));
   
  //J. Try using a Decrementing for loop.\\
  const reverseWordOrder = (str) => {
    let newStr = " ";
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  }
  console.log(reverseWordOrder("Ishmael me Call"));
  console.log(reverseWordOrder("I use Lâncome on my comb"));
  
  //K. Get down and dirty with Math.random()\\
  //1. 
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log(getRandomInt(10));

  //2. 
  const getRandomInte = (min, max) => {
    let minimum = 10;
    let maximum = 100;
    return Math.floor(Math.random(min) * Math.floor(max))
  }
  console.log(getRandomInte(100));

  

  //3. 
  const getRandomNumb= (min, max) => {
    let minimum = 10;
    let maximum = 100;
    return Math.floor(Math.random(min) * Math.floor(max))
  }
  console.log(getRandomNumb(100));

  

  //4.
  const getRandomNum = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log(getRandomNum(10));

  //5.
const getRandomElement = (quotes) => {
  return quotes[Math.floor(Math.random()*quotes.length)];
     }
     console.log(getRandomElement(quotes));

    //Objects

    //A. Make a user object\\
    //1.  &   //.2
    const user = {
     "name": "Shinobi",
     "email": "shinobinotNinja@gmail.com",
     "age": 200,
     "purchased": [],
      friend: {
       "name": "Ninja",
       "email": "notashinobi@yahoo.com",
       "age": 100,
       "purchased": [],
       "location": "New York",

   }
    }

    //B. Update the user\\
    //1. 
    user.email = "yaas@gmail.com"
    console.log(user.email);
    //2.
    user.age++;
    console.log(user.age);

    //C. Adding keys and values\\
    //1.
    user.location = "Denver";
    console.log(user);
    console.log(user.location);

    //D. Shopaholic!\\
    //1.
    user["purchased"].push("carbohydrates");
    console.log(user["purchased"]);

    //2.
    user["purchased"].push("peace of mind");
    console.log(user["purchased"]);

    //3.
    user["purchased"].push("Merino jodhpurs");
    console.log(user["purchased"]);

    //4.
    console.log(user["purchased"][2]);

    //E. Object-within-object\\
    //1. Done above in the object user.
    //2.
    const friendName = user.friend["name"];
    console.log(user.friend["name"]);

    //3.
    const friendLocation = user.friend["location"];
    console.log(user.friend["location"]);
    
    //4. 
    user.friend["age"] = 55;
    console.log(user.friend["age"]);

    //5.
    user.friend["purchased"].push("The One Ring");
    console.log(user.friend["purchased"]);

    //6.
    user.friend["purchased"].push("A latte");
    console.log(user.friend["purchased"]);

    //7. 
    console.log(user.friend["purchased"][1]);

    //F. Loops\\
    //1.
  
    const arrayLength = user["purchased"].length;
    for (let i = 0; i < user["purchased"].length; i++) { 
        for (let x = 0; x < user["purchased"][i].length; x++) { 
  
          } 
        }
       
    console.log(user["purchased"]);
    
    //2. 
    const arrLength = user.friend["purchased"].length;
    for (let i = 0; i < user.friend.length; i++) { 
        for (let x = 0; x < user.friend["purchased"][i].length; x++) { 
  
          } 
        }
       
    console.log(user.friend["purchased"]);
    
 
    //G. Functions can operate on objects\\
    
    //1.
  
     function updateUser(user) {
     updateUser.toUpperCase();
     i++;
     

     console.log(updateUser(user));
     }
     
//2. 
function oldAndLoud(person) {
 oldAndLoud.toUpperCase();
  i++;
  

  console.log(oldAndLoud(user));
}

//Hungry for more\\