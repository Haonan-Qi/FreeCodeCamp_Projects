# Javascript Algorithms And Data Structures Certification (300 hours)
## Basic JavaScript
### Introduction to JavaScript
- JavaScript is a high-level programming language that all modern web browsers support. It is also one of the core technologies of the web, along with HTML and CSS that you may have learned previously. This section will cover basic JavaScript programming concepts, which range from variables and arithmetic to objects and loops.
### Comment Your JavaScript Code
```javascript
    // This is an in-line comment.
    /* This is a
    multi-line comment */
```
### Declare JavaScript Variables
- In computer science, data is anything that is meaningful to the computer. JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object.
- We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:
`var variableOne`
- Variable names can be made up of numbers, letters, and $ or _, **but may not** contain spaces or start with a number.
### Storing Values with the Assignment Operator
- Assignment always goes from **right to left**. Everything to the right of the = operator is resolved before the value is assigned to the variable to the left of the operator.
### Initializing Variables with the Assignment Operator
- It is common to initialize a variable to an initial value in the same line as it is declared.
`var myVar = 0;`
### Understanding Uninitialized Variables
- When JavaScript variables are declared, they have an initial value of `undefined`
    - If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number".
    - If you concatenate a string with an undefined variable, you will get a literal string of "undefined".
### Understanding Case Sensitivity in Variables
- In JavaScript all variables and function names are `case sensitive`. This means that capitalization matters.
- Write variable names in JavaScript in `camelCase`. 
    - In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
### Add Two Numbers with JavaScript
- Number is a data type in JavaScript which represents numeric data.
    - JavaScript uses the + symbol as addition operation when placed between two numbers.
### Subtract One Number from Another with JavaScript
- JavaScript uses the - symbol for subtraction.
### Multiply Two Numbers with JavaScript
- `myVar = 13 * 13; // assigned 169`
### Divide One Number by Another with JavaScript
- JavaScript uses the / symbol for division.
### Increment a Number with JavaScript
- You can easily increment or add one to a variable with the ++ operator.
`i++;i = i + 1;`
### i++ vs ++i
- The difference between i++ and ++i is the value of the expression.
```js
    var i = 42;
    alert(i++); // shows 42
    alert(i); // shows 43
    i = 42;
    alert(++i); // shows 43
    alert(i); // shows 43
```
### Decrement a Number with JavaScript
`i--`
### Create Decimal Numbers with JavaScript
- We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as `floating point numbers or floats.`
### Multiply Two Decimals with JavaScript
```js
    5 % 2 = 1 because
    Math.floor(5 / 2) = 2 (Quotient)
    2 * 2 = 4
    5 - 4 = 1 (Remainder)
```
- In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.
    - The remainder operator is sometimes incorrectly referred to as the `"modulus"` operator. It is very similar to modulus, ***but*** `does not work properly with negative numbers.`
### Divide One Decimal by Another with JavaScript
- Augmented 
    -  there are operators which do both a mathematical operation and assignment in one step.
```js
    var myVar = 1;
    myVar += 5;
    console.log(myVar); // Returns 6
```
### Finding a Remainder in JavaScript
### Compound Assignment With Augmented Addition
`myVar -= 5;`
### Compound Assignment With Augmented Subtraction
### Compound Assignment With Augmented Multiplication
### Compound Assignment With Augmented Division
### Declare String Variables
```js
    var myName = "your name";
```
- "your name" is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.
### Escaping Literal Quotes in Strings
- In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
`var sampleStr = "Alan said, \"Peter is learning JavaScript\".";`
### Quoting Strings with Single Quotes
- String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.
    - The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. - Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.
`var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";`
`var myStr = `<a href="http://www.example.com" target="_blank">Link</a>;

### Escape Sequences in Strings
|  Code |  Output |
|---|---|
| \' |	single quote |
| \" |	double quote |
| \\ |	backslash |
| \n |	newline |
| \r |	carriage return |
| \t |	tab |
| \b |	backspace |
| \f |	form feed |
### Concatenating Strings with Plus Operator
- Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.
`var a = "a" + 4;console.log(a)`
### Concatenating Strings with the Plus Equals Operator
```js
    var ourStr = "I come first. ";
    ourStr += "I come second.";
```
### Constructing Strings with Variables
```js
    var ourName = "freeCodeCamp";
    var ourStr = "Hello, our name is " + ourName + ", how are you?";
```  
### Appending Variables to Strings
```js
    var anAdjective = "awesome!";
    var ourStr = "freeCodeCamp is ";
    ourStr += anAdjective;
```
### Find the Length of a String
`"Alan Peter".length; // 10`
### Use Bracket Notation to Find the First Character in a String
`firstName[0].`
### Understand String Immutability
- In JavaScript, String values are immutable, which means that they cannot be altered once created.
### Use Bracket Notation to Find the Nth Character in a String
```js
var myStr = "Bob";
myStr[0] = "J";
```
### Use Bracket Notation to Find the Last Character in a String
- Remember that computers start counting at 0, so the first character is actually the zeroth character.
### Use Bracket Notation to Find the Nth-to-Last Character in a String
`firstName[firstName.length - 1].`
### Word Blanks
`firstName[firstName.length - 3]`
### Store Multiple Values in one Variable using JavaScript Arrays
```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
```
### Nest one Array within Another Array
`-var sandwich = ["peanut butter", "jelly", "bread"].`
### Access Array Data with Indexes
- You can also nest arrays within other arrays, like this: `[["Bulls", 23], ["White Sox", 45]]`. This is also called a Multi-dimensional Array.
### Modify Array Data With Indexes
```js
var array = [50,60,70];
array[0]; // equals 50
var data = array[1]; // equals 60
```
### Access Multi-Dimensional Arrays With Indexes

### Manipulate Arrays With push()
- .push() takes one or more parameters and "pushes" them onto the end of the array.
### Manipulate Arrays With pop()
- .pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array `and returns that element.`
### Manipulate Arrays With shift()
- It works just like .pop(), except it removes the first element instead of the last.
### Manipulate Arrays With unshift()
- .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
### Shopping List

### Write Reusable JavaScript with Functions
### Passing Values to Functions with Arguments
### Global Scope and Functions
- Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var
### Local Scope and Functions

### Global vs. Local Scope in Functions
- It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
### Return a Value from a Function with Return

### Understanding Undefined Value returned from a Function
- A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.v
### Assignment with a Returned Value

### Stand in Line
### Understanding Boolean Values
- Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
### Use Conditional Logic with If Statements

### Comparison with the Equality Operator
```js
1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true
```
### Comparison with the Strict Equality Operator
```js
3 === 3 // true
3 === '3' // false
```
### Practice comparing different values
```js
typeof 3 // returns 'number'
typeof '3' // returns 'string'
```
### Comparison with the Inequality Operator
```js
1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false
```
### Comparison with the Strict Inequality Operator
```js
3 !== 3 // false
3 !== '3' // true
4 !== 3 // true
```
### Comparison with the Greater Than Operator
```js
5 > 3 // true
7 > '3' // true
2 > 3 // false
'1' > 9 // false
```
### Comparison with the Greater Than Or Equal To Operator
```js
6 >= 6 // true
7 >= '3' // true
2 >= 3 // false
'7' >= 9 // false
```
### Comparison with the Less Than Operator
- The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator **converts data types** while comparing.
### Comparison with the Less Than Or Equal To Operator
`Like the equality operator, less than or equal to converts data types.`
### Comparisons with the Logical And Operator
`&&`
### Comparisons with the Logical Or Operator
`||`
### Introducing Else Statements

### Introducing Else If Statements
```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```
### Logical Order in If Else Statements

### Chaining If Else Statements

### Golf Code

### Selecting from Many Options with Switch Statements
-  Statements are executed from the first matched case value **until a break** is encountered.

### Adding a Default Option in Switch Statements
- A default statement should be the last case.
```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```
### Multiple Identical Options in Switch Statements
```js
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```
### Replacing If Else Chains with Switch

### Returning Boolean Values from Functions
```js
function isEqual(a,b) {
  return a === b;
}
```
### Return Early Pattern for Functions
- When a return statement is reached, the execution of the current function stops and control returns to **the calling location**.

### Counting Cards

### Build JavaScript Objects
- Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties
- Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
### Accessing Object Properties with Dot Notation
```js
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```
### Accessing Object Properties with Bracket Notation
- The second way to access the properties of an object is bracket notation ([]). `If the property of the object you are trying to access has a space in its name`, you will need to use bracket notation.
```js
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"]; // USS Enterprise
```
### Accessing Object Properties with Variables
- Another use of bracket notation on objects is to access a property which is stored as the value of a variable. `This can be very useful for iterating through an object's properties or when accessing a lookup table.`
```js
var dogs = {
  Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
```
- Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:
```js
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
```

### Updating Object Properties
```js
ourDog.name = "Happy Camper"; 

ourDog["name"] = "Happy Camper";
```
### Add New Properties to a JavaScript Object
- You can add new properties to existing JavaScript objects the same way you would modify them.
### Delete Properties from a JavaScript Object
`delete ourDog.bark;`
### Using Objects for Lookups
- `Objects can be thought of as a key/value storage, like a dictionary.` If you have tabular data, you can use an object to `"lookup" values` rather than `a switch statement` or `an if/else chain`. This is most useful when you know that your input data `is limited to a certain range.`
### Testing Objects for Properties
```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false
```
### Manipulating Complex Objects
- Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
```js
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```
- `This is an array which contains one object inside`. The object has various pieces of `metadata` about an album. It also has a nested "formats" array. If you want to add more album records, you can do this by adding records to the top level array.
- `JavaScript Object Notation or JSON` is a related `data interchange format` used to `store data.`
### Accessing Nested Objects
- The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
```js
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"
```
### Accessing Nested Arrays
Not [""] != ['']
```js
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0]["names"][1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
```
### Record Collection
object[variable]
object["value"]
object.value
- jusg use [ariable]/["value"] always
### Iterate with JavaScript While Loops
```js
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```
### Iterate with JavaScript For Loops
`for ([initialization]; [condition]; [final-expression])`
### Iterate Odd Numbers With a For Loop
```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```
### Count Backwards With a For Loop
```js
var ourArray = [];
for (var i=10; i > 0; i-=2) {
  ourArray.push(i);
}
```
### Iterate Through an Array with a For Loop
```js
var arr = [10,9,8,7,6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```
### Nesting For Loops
```js
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```
### Iterate with JavaScript Do...While Loops
```js
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```
### Profile Lookup
### Generate Random Fractions with JavaScript
- JavaScript has a `Math.random()` function that generates `a random decimal number` between `0 (inclusive)` and not quite up to `1 (exclusive)`. Thus Math.random() can return a 0 but never quite return a 1
### Generate Random Whole Numbers with JavaScript
`Math.floor(Math.random() * 20);`
### Generate Random Whole Numbers within a Range
`Math.floor(Math.random() * (max - min + 1)) + min`

### Use the parseInt Function
`var a = parseInt("007");`
### Use the parseInt Function with a Radix

### Use the Conditional (Ternary) Operator
### Use Multiple Conditional (Ternary) Operators

## ES6
### Introduction to the ES6 Challenges
- `ECMAScript` is `a standardized version of JavaScript with the goal of unifying the language's specifications and features.` As all major browsers and JavaScript-runtimes follow this specification, the term `ECMAScript` is interchangeable with the term `JavaScript`.

- Most of the challenges on freeCodeCamp use the ECMAScript 5 (ES5) specification of the language, finalized in 2009. But JavaScript is an evolving programming language. As features are added and revisions are made, new versions of the language are released for use by developers.

- The most recent standardized version is called `ECMAScript 6 (ES6)`, released in 2015. This new version of the language adds some powerful features that will be covered in this section of challenges, including:
```js
Arrow functions
Classes
Modules
Promises
Generators
let and const
```
### Explore Differences Between the var and let Keywords
- One of the `biggest problems` with declaring variables with the `var` keyword is that you `can overwrite variable declarations without an error.` **reassign value != redeclar**
  - Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.
- A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword.
  - If you were to replace var with let in the variable declarations of the code above, the result would be an error
  - This error can be seen in the console of your browser.
  - So unlike var, when using let, a variable with the same name can only be declared once.
- Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:
```js
"use strict";
x = 3.14; // throws an error because x is not declared
// even javascript allow you do some trick operation
```
### Compare Scopes of the var and let Keywords
- When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
- The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a `block, statement, or expression`, its scope is limited to that `block, statement, or expression`.
```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3
------//equal to below
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3
```
- This behavior will cause problems `if you were to create a function and store it for later use inside a for loop that uses the i variable.` This is because the `stored function will always refer to the value of the updated global i variable.`
```js
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"
```
- i is not defined because `it was not declared in the global scope`. `It is only declared within the for loop statement`. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.
### Declare a Read-Only Variable with the const Keyword
```js
"use strict"
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns err
```
- A common practice when naming constants is to `use all uppercase letters, with words separated by an underscore`.
### Mutate an Array Declared with const
- Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.
- However, it is important to understand that `objects (including arrays and functions) assigned to a variable using const are still mutable`. Using the const declaration only prevents reassignment of the variable identifier.
```js
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```
- because const was used, you `cannot use the variable identifier s to point to a different array` using the assignment operator.
### Prevent Object Mutation
- As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.`freeze` to prevent data mutation.
  - Once the object is frozen, you `can no` longer `add, update, or delete properties from it`. Any attempt at changing the object will be rejected `without an error.`
```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; //will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}
```
### Use Arrow Functions to Write Concise Anonymous Functions
- In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions.` We don't need to name these functions because we do not reuse them anywhere else.`
```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
-----
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
-----
const myFunc = () => "value"
```
### Write Arrow Functions with Parameters
```js
// doubles input value and returns it
const doubler = (item) => item * 2;
```
### Write Higher Order Arrow Functions
- Arrow functions work really well with higher order functions, such as `map(), filter(), and reduce()`, that take other functions as arguments for processing collections of data.
```js
FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
```
### Set Default Parameters for Your Functions
- In order to help us create more flexible functions, ES6 introduces default parameters for functions.
```js
function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```
- The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. You can add default values for as many parameters as you want.
### Use the Rest Operator with Function Parameters
- In order to help us create more flexible functions, ES6 introduces the rest operator for function parameters. `With the rest operator, you can create functions that take a variable number of arguments.` These arguments are stored in an array that can be accessed later from inside the function.
  - The rest operator eliminates the need to check the args array and allows us to apply `map(), filter() and reduce()` on the parameters array.
```js
function howMany(...args) {
  return "You have ###  " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have ###  3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have ###  4 arguments.
```
### Use the Spread Operator to Evaluate Arrays In-Place
```js
es5
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
```
```js
es6
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```
- ...arr returns an unpacked array. In other words, it spreads the array.
- However, the spread operator `only works in-place,` like `in an argument to a function or in an array literal`. The following code will not work:
### Use Destructuring Assignment to Assign Variables from Objects
```js
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
----
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
----
const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54
```
### Use Destructuring Assignment to Assign Variables from Nested Objects
```js
const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
```
### Use Destructuring Assignment to Assign Variables from Arrays
- One key difference between the spread operator and `array destructuring` is that the `spread operator` unpacks all contents of an array into `a comma-separated list`. Consequently, `you cannot pick or choose which elements you want to assign to variables.`
```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```
### Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
- In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
  - The result is similar to Array.prototype.slice()
```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```
- Rest element must be last element
- The rest element only works correctly as the last variable in the list. As in, you cannot use the rest operator to catch a subarray that leaves out last element of the original array.
- The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end `(end not included)`.
  - `The original array will not be modified.`
### Use Destructuring Assignment to Pass an Object as a Function's Parameters
```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
----
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
```
### Create Strings using Template Literals
- not **`** not equal to **'** and **"**
- Secondly, notice that the string is multi-line, `both in the code and the output`. This saves inserting \n within strings.
```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age + 3} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
```
### Write Concise Object Literal Declarations Using Simple Fields
```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
------
const getMousePosition = (x, y) => ({ x, y });
```
### Write Concise Declarative Functions with ES6
- With ES6, You can `remove the function keyword` and `colon altogether` when `defining functions in objects`. Here's an example of this syntax:
```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
------
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```
### Use class Syntax to Define a Constructor Function
- ES6 provides a new syntax to help create objects, using the keyword class.

- This is to be noted, that the class syntax is just a syntax, and not a full-fledged class based implementation of object oriented paradigm, unlike in languages like Java, or Python, or Ruby etc.
```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
-------
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```
### Use getters and setters to Control Access to an Object
```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
```
### Understand the Differences Between import and require
- In the past, the function require() would be used to import the functions and code in external files and modules
  - While handy, this presents a problem: some files and modules are rather large, and you may only need certain code from those external resources.
- ES6 gives us a very handy tool known as import. With it, we can choose which parts of a module or file to load into a given file, saving time and memory.
```js
import { countItems } from "math_array_functions"
import { function } from "file_path_goes_here"
// We can also import variables the same way!
```
- `The whitespace` surrounding the function `inside the curly braces is a best practice` - it makes it easier to read the import statement.
- In most cases, the file path requires a `./ ` before it; otherwise, node will `look in the node_modules directory` first trying to `load it as a dependency.`
### Use export to Reuse a Code Block
- When we want some code - a function, or a variable - to be usable in another file, we must export it in order to import it into another file. Like import, export is a non-browser feature.
- The following is what we refer to as a named export.
```js
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.
-----
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }
```
### Use * to Import Everything from a File
```js
import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```
### Create an Export Fallback with export default
- Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const
- Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

- But a default export can be imported with any name for example:

### Import a Default Export
- The syntax differs in `one key place` - the imported value, add, is `not surrounded by curly braces`, {}. Unlike exported values, the primary method of importing a default export is to simply write the value's name after import.

## Regular Expressions
### intro
- Regular expressions are special strings that represent a search pattern. Also known as `"regex"` or `"regexp"`, they help programmers match, search, and replace text. Regular expressions can appear cryptic because a few characters have special meaning. `The goal is to combine the symbols and text into a pattern that matches what you wan`t, but only what you want. This section will cover the characters, a few shortcuts, and the common uses for writing regular expressions.
### Using the Test Method
- The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and `returns true or false if your pattern finds something or not`.
```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```
### Match Literal Strings
### Match a Literal String with Different Possibilities
- You can search for multiple patterns using `the alternation or OR operator`: `|`.
  - This operator matches patterns either before or after it
```js
/yes|no|maybe/
```
### Ignore Case While Matching
- You can match both cases using what is called a `flag.`
`/ignorecase/i`
### Extract Matches
- You can also `extract the actual matches` you found with the `.match()` method.
```js
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```
### Find More Than the First Match
- To search or extract a pattern `more than once`, you can use the g flag.
```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
```
### Match Anything with Wildcard Period
- The wildcard character . will match any one character.
  - The wildcard is also called dot and period.
```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]
```
### Match Single Character with Multiple Possibilities
- You can search for a literal pattern with some flexibility with `character classes`
  - Character classes allow you to define `a group of characters` you wish to match by `placing them inside square ([ and ]) brackets.`
    - For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this.

### Match Letters of the Alphabet
- `Inside a character set`, you can define `a range of characters` to match using `a hyphen character: -.`
  - For example, to match lowercase letters a through e you would use [a-e].

### Match Numbers and Letters of the Alphabet
- Using the hyphen (-) to match a range of characters `is not limited to letters`. It also `works to match a range of numbers.`
  - For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
  - Also, it is possible to `combine a range of letters and numbers in a single character set.`
```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
```
### Match Single Characters Not Specified
- So far, you have created a set of characters that you want to match, but you could also create `a set of characters that you do not want to match. `
  - These types of character sets are called `negated character sets.`
  - To create a negated character set, you `place a caret character (^)` after the `opening bracket` and `before the characters you do not want to match`.
`/[^aeiou]/gi`
### Match Characters that Occur One or More Times
- Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs `at least once, and may be repeated.`
  - You can use the + character to check `if that is the case.`
  - the character or pattern has to be present consecutively. 
  `["aa"]` `["a", "a"]`
### Match Characters that Occur Zero or More Times
- There's also an option that matches characters that occur `zero` or more times.
  - The character to do this is the asterisk or star: *.
### Find Characters with Lazy Matching
- In regular expressions, `a greedy match` finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called `a lazy match,` which finds the smallest possible part of the string that satisfies the regex pattern.
  - Regular expressions are by `default greedy`
  - However, you can use the `?` character to `change it to lazy matching`
`/t[a-z]*?i/`
- Note the position of ? inside the regx
### Find One or More Criminals in a Hunt
### Match Beginning String Patterns
- `Outside of a character set`, the `caret` is used to search for patterns `at the beginning of strings.`
```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
```

### Match Ending String Patterns
- You can search the end of strings using the `dollar sign character $` at the `end of the regex.`
```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false
```
### Match All Letters and Numbers
- The closest character class in JavaScript to `match the alphabet` is `\w`
  - This shortcut is `equal to [A-Za-z0-9_].`
    - `Note`, this character class also `includes` the `underscore character (_).`
    - `shorthand character classes.`
### Match Everything But Letters and Numbers
- You can search for the `opposite` of the `\w` with `\W`
  - This shortcut is the same as [^A-Za-z0-9_].

### Match All Numbers
- `just` digits or numbers.
  - The shortcut to look for `digit characters` is `\d,`
  - This is equal to the character class [0-9]
### Match All Non-Numbers
- The shortcut to look for non-digit characters is \D
  - his is equal to the character class [^0-9]
### Restrict Possible Usernames
{x,}
```js
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);
```
### Match Whitespace
- You can search for `whitespace` using `\s`
  - This pattern not only matches `whitespace`, but also carriage `return, tab, form feed, and new line characters.`
    - similar to the character class `[\r\t\f\n\v].`
### Match Non-Whitespace Characters
- Search for `non-whitespace using \S,` which is an uppercase s
  - similar to the character class `[^ \r\t\f\n\v].`
### Specify Upper and Lower Number of Matches
- You can specify the lower and upper number of patterns with `quantity specifiers`
  -  Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

  `/a{3,5}h/.`
### Specify Only the Lower Number of Matches
- Sometimes you only want to specify the lower number of patterns with no upper limit.
  - For example, to match only the string "hah" with the letter a appearing `at least 3` times, your regex would be` /ha{3,}h/.`
### Specify Exact Number of Matches
- For example, to match only the word "hah" with the letter a `3 times`, your regex would be `/ha{3}h/.`
### Check for All or None
- Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them `nonetheless.`
  - You can specify the possible existence of an element with `a question mark, ?`
  -  This checks for `zero or one` of the preceding element. 
    - `* zero or more`
### Positive and Negative Lookahead
  - This can be useful when you want to search for multiple patterns over the same string.
```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;//match q when there is a u follwed
let qRegex = /q(?!u)/;//match q when the next character is not u
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
------
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```
### Reuse Patterns Using Capture Groups
- You can search for repeat substrings using capture groups
  - Using the .match() method on a string will return an array with the `string it matches`, along with its `capture group`.
```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```
### Use Capture Groups to Search and Replace
```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
```
- You can also access capture groups in the replacement string with dollar signs ($).
```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
```
### Remove Whitespace from Start and End
- Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the `whitespace` at the `start and end` of it
`.trim()`
```js
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
```

## Debugging
### Introduction to the Debugging Challenges
- After spending time creating a brilliant block of code, it is tough realizing it may have errors. These issues generally come in three forms: 
  - 1) syntax errors that prevent a program from running, 
  - 2) runtime errors when code fails to execute or has unexpected behavior, and 
  - 3) semantic (or logical) errors when code doesn't do what it's meant to.
- Modern code editors (and experience) can help identify `syntax errors`. `Semantic and runtime errors` are harder to find.
- Debugging is frustrating, but it helps to develop (and follow) a step-by-step approach to review your code. 
-  Fortunately, debugging is a learnable skill that just requires a little `patience` and `practice` to master.
### Use the JavaScript Console to Check the Value of a Variable
`console.log('Hello world!');`
### Understanding the Differences between the freeCodeCamp and Browser Console
`console.clear()`
### Use typeof to Check the Type of a Variable
```js
console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"
```
- JavaScript recognizes six `primitive (immutable)` data types: `Boolean, Null, Undefined, Number, String, and Symbol (new with ES6)` and one type for `mutable items`: `Object. `Note that in JavaScript, `arrays` are technically a type of `object`.
### Catch Misspelled Variable and Function Names
- The console.log() and typeof methods are the two primary ways to check intermediate values and types of program output
### Catch Unclosed Parentheses, Brackets, Braces and Quotes
### Catch Mixed Usage of Single and Double Quotes
### Catch Use of Assignment Operator Instead of Equality Operator
### Catch Missing Open and Closing Parenthesis After a Function Call
```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"
```
### Catch Arguments ###  in the Wrong Order When Calling a Function

### Catch Off By One Errors When Using Indexing
- avaScript indexing starts at zero
### Use Caution When Reinitializing Variables Inside a Loop

### Prevent Infinite Loops with a Valid Terminal Condition
- Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable.
- Valid Terminal Condition

## Basic Data Structures
### introduction to the Basic Data Structure Challenges
- Understand the basic properties and differences between arrays and objects, as well as how to choose which to use for a given purpose.
### Use an Array to Store a Collection of Data.
- multi-dimensional array,
  - arrays are also capable of storing complex objects.
- All array's have a length property, which as shown above, can be very easily accessed with the syntax `Array.length.`
`Array.length` !=  `Array.length()` **no ()**
### Access an Array's Contents Using Bracket Notation
- The fundamental feature of any data structure is, of course, the ability to `not only store data`, but to `be able to retrieve` that data `on command.`
- However, it is important to note, that JavaScript arrays are `zero-indexed`, meaning that the first element of an array is actually at the `zeroth position`, not the first.

### Add Items to an Array with push() and unshift()
- Array.push() and Array.unshift().
### Remove Items from an Array with pop() and shift()
- pop() and shift()
### Remove Items Using splice()
-  `remove any number of consecutive elements` from anywhere in an array.
  - splice() can take up to 3 parameters,
```js
array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
```
- splice() not only `modifies` the array it's being called on, but it `also returns a new array` containing the value of the removed elements
### Add Items Using splice()
```js
function colorChange(arr, index, newColor) {
  arr.splice(index, 1, newColor);
  return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

colorScheme = colorChange(colorScheme, 2, '#332327');
// we have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']
```
### Copy Array Items Using slice()
- slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to `stop extraction (extraction will occur up to, but not including the element at this index). `
- will `not change` original data 
### Copy an Array with the Spread Operator
- ES6's new spread operator
```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```
### Combine Arrays with the Spread Operator
```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```
### Check For The Presence of an Element With indexOf()
```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists
```
### Iterate Through All an Array's Items Using For Loops
- JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (`such as every(), forEach(), map(), etc.`), however the technique which is `most flexible` and offers us the greatest amount of `control` is `a simple for loop`.
```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]
```
### Create complex multi-dimensional arrays
- One of the most powerful features when thinking of arrays as data structures, is that `arrays can contain, or even be completely made up of other arrays.`
- However, arrays can contain an `infinite depth` of arrays that can contain other arrays, each with their own `arbitrary levels` of depth, and so on
### Add Key-Value Pairs to JavaScript Objects
- At their most basic, objects are just collections of `key-value pairs`, or in other words, pieces of data mapped to `unique identifiers` that we call `properties or keys.`
```js
let userData = FCC_User.followers;
// userData equals 572
let userData = FCC_User['followers']//保险起见 都用这个
// userData equals 572
```
### Modify an Object Nested Within an Object

### Access Property Names with Bracket Notation
-  Bracket notation is very useful because sometimes object properties `are not known before runtime` or we need to access them `in a more dynamic way.`
### Use the delete Keyword to Remove Object Properties
`delete foods.apples;`
### Check if an Object has a Property
- One uses the `hasOwnProperty()` method and 
- the other uses the `in` keyword. 
```js
users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
```
###  Iterate Through the Keys of an Object with a for...in Statement
- Sometimes you may need to `iterate through all the keys within an object`
  - This requires a specific syntax in JavaScript called a `for...in `statement. 
```js
for (let user in users) {
  console.log(user);
};
```
- Objects `do not maintain` an `ordering` to stored keys like arrays do; thus a keys position on an object, or the relative order in which it appears, is `irrelevant` when referencing or accessing that key.

### Generate an Array of All Object Keys with Object.keys()
- We can also generate an array which `contains all the keys stored in an object` using the `Object.keys()` method and `passing in an object` as the argument. 
  - This `will return an array` with `strings representing each property` in the object. 
  - Again, there will be no specific order to the entries in the array.
`Object.keys(obj)`
### Modify an Array Stored in an Object
-  Additionally, the optional Advanced Data Structures lessons later in the curriculum also cover the `ES6 Map and Set objects`, both of which are `similar` to ordinary objects `but provide some additional` features.



## Basic Algorithm Scripting
### Introduction to Basic Algorithm Scripting
- A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.

- To make solving problems easier, it can be helpful to break them down into many chunks. Then, each chunk can be solved one by one. For example, if you are building a calculator, don't try to solve the problem as a whole. `First, consider how to get inputs. Then, determine each arithmetic operation one by one. Finally, display the results.`

- In this section we will learn to solve basic algorithm problems using JavaScript. This will help you improve your problem solving skills and prepare you to later solve more complex problems.

- Hint
  - If you get stuck, try using console.log() to log variable values to the console. This will help to debug problems.
### Convert Celsius to Fahrenheit
- The algorithm to convert from Celsius to `Fahrenheit` is the `temperature` in Celsius `times 9/5`, `plus 32`.
```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}
------
const convertToF = function(celsius){
  let fahrenheit;
  return fahrenheit;
}
--------
const convertToF = (celsius) => celsius*9/5+32
```
### Reverse a String
```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```
- Our goal is to take the input, str, and return it in reverse. Our first step is to split the string by characters using `split('')`. Notice that we don’t leave anything in between the single quotes, this tells the function to `split` the string `by each character`.
- Next we `chain` the `reverse() function`, which takes our `array` of characters and `reverses` them.
- Finally, we chain` join('')` to put our characters `back together into a string`. Notice once again that we left `no spaces` in the argument for join, this makes sure that the array of characters is joined back together by each character.

```js
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
-----------------------
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');
-----------------------
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
```

### Factorialize a Number
- This one starts easily since `0! = 1`, so you can go ahead and simply return 1 there.
  - Alaways consider the special situation
```js
function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}
factorialize(5);
```

### Find the Longest Word in a String
- str.split(' ') != str.split('')
```js

function findLongestWordLength(str) {
  let tempArr = str.split(' ');
  let maxLength = 0;
  for(let i = 0;i < tempArr.length;i++)
  {
    if (maxLength < tempArr[i].length){
      maxLength = tempArr[i].length
    }
  }
  return maxLength;
}
}
```
### Return Largest Numbers in Arrays
```js
function largestOfFour(arr) {
  let maxNumberInEachSubArry = [];
  for(let i = 0;i < arr.length;i++){
    maxNumberInEachSubArry.push(Math.max(...arr[i]))
  }
  return maxNumberInEachSubArry;
}
------------
function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}
----------------
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
```
- Calling reduce() on an empty array `without an initialValue` will throw a TypeError.
- arr.reduce(callback(accumulator, currentValue[, index[, array]]), [, initialValue])
  - The first time the callback is called, accumulator and currentValue can be one of two values. `If initialValue is provided` in the call to reduce(), then `accumulator` will be equal to `initialValue`, and currentValue will be equal to the first value in the array. `If no initialValue` is provided, then `accumulator` will be equal to the `first value` in the array, and currentValue will be equal to the second.
- The map() method creates a new array with the results of calling a provided function on every element in the calling array.
- Arror func
  - When there is only one parameter, we can remove the surrounding parenthesies:

### Confirm the Ending
- The `endsWith()` method determines whether a string ends with the characters of a specified string, `returning true or false as appropriate.`
```js
function confirmEnding(str, target) {

  return str.slice(-target.length) == target? true:false

}
```
- if you know the index(the position) on which you'll stop (but NOT include), Use slice()
  - if you know the length of characters to be extracted use substr().

### Repeat a String Repeat a String
- string.repeat(numOfRepeat)
### Truncate a String
- length watch your spelling
### Finders Keepers
- The return statement ends `function execution` and specifies a value to be returned to the function caller.
```js
function findElement(arr, func) {
  let arr2 = arr;
  return arr.map((i)=>func(i)?true:false).includes(true)? arr2[arr.map((i)=>func(i)?true:false).indexOf(true)]:undefined;
}
```

### Boo who
- typeof Baby don forget this
```js
function booWho(bool) {
  return bool===true||bool===false?true:false;
}
booWho(null);
-------------------
function booWho(bool) {
      return typeof bool === 'boolean';
    }

    // test here
    booWho(null);
```
### Title Case a Sentence
- Clear the requriement first, there are two of them baby
  - Return the provided string with the first letter of each word capitalized. 
  - Make sure the rest of the word is in lower case.
```js
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
```

### Slice and Splice
```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  return [...arr2.slice(0,n),...arr1,...arr2.slice(n)];
}
```
### Falsy Bouncer
- Falsy values in JavaScript are `false, null, 0, "", undefined, and NaN.`
```js
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  const falsy = [false,null,0,"",undefined,NaN]
  return arr.filter(i=>!falsy.includes(i)
  );
}

function bouncer(arr) {
  return arr.filter(Boolean);
}
```

### Where do I Belong
```js
function getIndexToIns(arr, num) {

return arr.concat(num).sort((a,b) => a-b).indexOf(num);

}

getIndexToIns([1,3,4],2);
```
```js

function getIndexToIns(arr, num) {
  let temp = arr.sort((a, b) => a - b)
  if (temp.includes(num)){
    return temp.indexOf(num)
  }else{
    for(let i=0;i<arr.length;i++){
      if(temp[i]>=num){
        return i;
      }
    } 
  }
  return arr.length
}
```
### Mutations
- `every`
note what result filter will save
```js

function mutation(arr) {
  let f = arr[0].toLowerCase().split("")
  let s = arr[1].toLowerCase().split("")

  console.log(s.filter(e=>!f.includes(e)))
  console.log(s.filter(e=>!f.includes(e)).length)

  return s.filter(e=>!f.includes(e)).length > 0?false:true;
}

mutation(["hello", "hey"]);

-------------------
s.filter(e=>!f.includes(e)).length > 0?false:true
Update-----------------------below
s.every(e=>f.includes(e)) 所有元素满足 返true
```

### Chunky Monkey
```js
function chunkArrayInGroups(arr, size) {
      if (arr.length <= size){
        return [arr];
      }
      else {
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
      }
    }
```
```js
function chunkArrayInGroups(arr, size) {
      // Break it up.
      var newArr = [];
      var i = 0;

      while (i < arr.length) {
        newArr.push(arr.slice(i, i+size));
        i += size;
      }
      return newArr;
    }
    chunkArrayInGroups(["a", "b", "c", "d"], 2);
```
```js
function chunkArrayInGroups(arr, size) {
      var newArr = [];
      while (arr.length) {
        newArr.push(arr.splice(0,size));
      }
      return newArr;
    }
```


## Object Oriented Programming

### Introduction to the Object Oriented Programming Challenges
- At its core, software development `solves a problem` or achieves a result `with computation`. The software development process first `defines a problem,` then `presents a solution`. 
  - Object oriented programming is `one of several major approaches` to the software development process.

- As its name implies, object oriented programming organizes code into `object definitions`. These are sometimes called `classes`, and they group together data `with related behavior`. The `data` is an object's `attributes`, and the `behavior` (or functions) are `methods`.

- The `object structure` makes it flexible within a program. Objects can `transfer information` by `calling and passing data` to another object's `methods`. Also, new classes can `receive`, or `inherit`, all the features from a `base` or `parent class`. This helps to `reduce` repeated code.

- Your choice of programming approach depends on a few factors. These include the type of problem, as well as how you want to structure your `data` and `algorithms`. This section covers object oriented programming principles in JavaScript.
### Create a Basic JavaScript Object
- `objects`: `tangible things` people can `observe` and `interact` with.
```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```
### Use Dot Notation to Access the Properties of an Object
- how to `access` the `values` of those `properties`
```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```
### Create a Method on an Object
- Objects can have a `special` type of `property`, called a `method`.
  - Methods are properties that are functions.
```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Returns "The name of this duck is Aflac."
```

### Make Code More Reusable with the this Keyword
- While this is a valid way to access the object's property, there is a pitfall here. 
  - If the `variable name changes`, `any` `code` referencing the original name would `need` to be `updated` as well.
```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```
### Define a Constructor Function
- Constructors are functions that `create new objects`. They define `properties` and `behaviors` that will belong to the new object. Think of them as a `blueprint` for the creation of new objects.
```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```
- Constructors follow a few conventions:
  - Constructors are defined with a `capitalized name` to distinguish them from other functions that are not constructors.
  - Constructors use the `keyword this` to set properties of the object they will create. Inside the constructor, this refers to `the new object it will create.`
  - Constructors `define properties and behaviors` **instead** of `returning a value` as other functions might.
### Use a Constructor to Create Objects
```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}
let blueBird = new Bird();
```

### Extend Constructors to Receive Arguments
```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```
### Verify an Object's Constructor with instanceof
```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
```
### Understand Own Properties
```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
```
### Use Prototype Properties to Reduce Duplicate Code

- Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects.

- Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.
### Iterate Over All Properties
- You have now seen two kinds of properties: 
  - own properties and 
  - prototype properties.
```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```
### Understand the Constructor Property
- There is a special `constructor property` located on the `object` instances duck and beagle that were created in the previous challenges:
```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); //prints true
console.log(beagle.constructor === Dog); //prints true
```
### Change the Prototype to a New Object
```js
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
### Remember to Set the Constructor Property when Changing the Prototype
- There is `one crucial side effect` of manually setting the prototype to a new object. It `erased` the `constructor` property! 
```js
Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```
### Understand Where an Object’s Prototype Comes From
`Bird.prototype.isPrototypeOf(duck);`
`crow instanceof Bird`
### Understand the Prototype Chain
- `All` objects in JavaScript (`with a few exceptions`) have a `prototype`
- `Object` is a `supertype` for `all objects` in `JavaScript`. 
  - Therefore, any object can use the `hasOwnProperty` method.
### Use Inheritance So You Don't Repeat Yourself

### Inherit Behaviors from a Supertype
### Set the Child's Prototype to an Instance of the Parent
```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

let animal = Object.create(Animal.prototype);

Bird.prototype = Object.create(Animal.prototype);


```
### Reset an Inherited Constructor Property
```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
----------------watch below

Bird.prototype.constructor = Bird;
```
### Add Methods After Inheritance
- In addition to what is inherited from Animal, you want to `add` `behavior` that is `unique` `to` Bird objects.
```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```
### Override Inherited Methods
- by adding a method to ChildObject.prototype using the `same` `method` `name` as the one to override.
```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```
### Use a Mixin to Add Common Behavior Between Unrelated Objects
-  Inheritance does not work well for unrelated objects like `Bird` and `Airplane`. 
- For unrelated objects, it's better to use `mixins`. 
  - A `mixin` allows other objects to use `a collection of functions`.
```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```
- The flyMixin `takes` any `object` and `gives it` the fly `method`.
```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

### Use Closure to Protect Properties Within an Object from Being Modified Externally
- The simplest way to make properties private is by creating a variable within the constructor function. 
  - This `changes` the `scope` of that `variable` to be `within` the constructor `function` versus available globally. 
    - This way, the property `can only be` accessed and changed by methods also `within` the `constructor function.`
- In JavaScript, a `function` always has `access` to the `context in which it was created`. This is called closure.
```js
function Bird() {
  let hatchedEgg = 10; // private property

  this.getHatchedEggCount = function() { // publicly available method that a bird object can use
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
```
### Understand the Immediately Invoked Function Expression (IIFE)
- `immediately invoked function expression` or `IIFE`.
```js
(function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
```
### Use an IIFE to Create a Module
- An immediately invoked function expression (IIFE) is `often used` to group related `functionality` into a `single object or module`. 
```js
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) (); // The two parentheses cause the function to be immediately invoked

motionModule.glideMixin(duck);
duck.glide();
```

## Functional Programming
### Introduction to the Functional Programming Challenges
- Functional programming is an `approach` to `software development` based around the `evaluation of functions`. Like mathematics, functions in programming map `input` to `output` to `produce a result`. You can `combine` basic functions in many ways `to` `build` more and more `complex` programs.

- Functional programming follows a few core principles:

  - Functions are `independent` from the `state` of the `program` or global variab`les. They `only depend on`the arguments` ###  `into` them to make a calculation

  - Functions try to limit any changes to the state of the program and `avoid` changes to the `global` `objects` holding data

  - Functions have `minimal side effects` in the program

- The functional programming software development approach `breaks` a program `into` small, testable `parts`. This section covers basic functional programming principles in JavaScript.
### Learn About Functional Programming
  - Functional programming is a style of programming where solutions are `simple`, `isolated` functions, `without` any `side effects` `outside` of `the function scope`.
`INPUT -> PROCESS -> OUTPUT`
  -
### Understand Functional Programming Terminology
- `Callbacks` are the functions that are slipped or ###  into another function to decide the invocation of that function. You may have seen them ###  to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.
- Functions that can be assigned to a variable, ###  into another function, or returned from another function just like any other normal value, are called `first class functions`. In JavaScript, `all` functions `are` first class functions.
- The functions that take a function as an argument, or return a function as a return value are called `higher order functions`
- When the functions are ###  in to another function or returned from another function, then those functions which gets ###  in or returned can be called a `lambda`.

1. Callbacks 
2. first class functions 
3. higher order functions 
4. lambda

### Understand the Hazards of Using `Imperative` Code
- In English (and many other languages), the `imperative` tense is used to give commands. Similarly, an `imperative` style in programming is one that gives the computer a set of statements to perform a task.

### Avoid Mutations and Side Effects Using Functional Programming
- javaScript offers many `predefined` `methods` that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the `for loop` mentioned above, you could call the `map method` which handles the details of iterating over an array. This helps to `avoid` `semantic` `errors`, like the "Off By One Errors" that were covered in the Debugging section.
### Pass Arguments to Avoid External Dependence in a Function
- One of the `core` `principle` of functional programming is to `not` `change` `things`
  - Changes lead to bugs. 
  - Recall that in functional programming, `changing` or `altering` things is called `mutation`
-  A function, ideally, should be a `pure function`, meaning that it does not cause any `side effects.`
### Refactor Global Variables Out of Functions
- `Another` `principle` of functional programming is to always `declare` your `dependencies` `explicitly`
  - This means if a function depends on a `variable` or `object` being present, `then` pass that variable or object directly into the function as an argument.
```js
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (fixedValue) {
  return fixedValue + 1;
  
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
----------------
var fixedValue = 4;

// Add your code below this line
function incrementer () {
  return fixedValue + 1;
  
  // Add your code above this line
}
```


### Use the map Method to Extract Data from an Array
- Also, we have seen the value in having a function `only depend on` its `input` arguments.
  - functional programming is centered around a theory of functions.
- Functions are considered First Class Objects in JavaScript, which means they can be used like any other object.
- A pure function is allowed to alter `local` `variables` defined within its scope, 
  - although, it's `preferable` to `avoid` that as well.

- `foreach` vs `map`
### Implement map on a Prototype
### Use the filter Method to Extract Data from an Array
### Implement the filter Method on a Prototype
### Return Part of an Array Using the slice Method
### Remove Elements from an Array Using slice Instead of splice
### Combine Two Arrays Using the concat Method
- It returns a new array and `does not mutate` either of the `original` arrays. 
### Add Elements to the End of an Array Using concat Instead of push
- `concat` vs `push`
### Use the reduce Method to Analyze Data
- Array.prototype.reduce(), or simply reduce(), is `the most general of all array operations` in JavaScript.
  - The reduce method allows for more general forms of array processing, and it's possible to show that both `filter` and `map` can be derived as `a special application of reduce.`
### Sort an Array Alphabetically using the sort Method
- The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon `converting` the `elements` into `strings`, then `comparing` their sequences of `UTF-16 code` units values.
  - The `time` and `space` `complexity` of the sort `cannot be guaranteed` as it `depends on` the `implementation`.
### Return a Sorted Array Without Changing the Original Array
```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);
```
### Split a String into an Array Using the split Method
- Since strings are immutable, the split method makes it easier to work with them.
  -  It takes an argument for the delimiter, which can be a character to use to break up the `string` or a `regular expression`. 
```js
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]
```
### Combine an Array into a String Using the join Method
- The join method is used to join the elements of an array together to create a string

### Apply Functional Programming to Convert Strings to URL Slugs
```js
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
return title.split(/\W/).filter((obj)=>{
    return obj !=='';
  }).join('-').toLowerCase();
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
------------+
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join('-');
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
```
### Use the every Method to Check that Every Element in an Array Meets a Criteria

### Use the some Method to Check that Any Elements in an Array Meet a Criteria
- The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.
### Introduction to Currying and Partial Application
- The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
  - In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
- This is useful in your program if you `can't supply all the arguments` to a function `at one time`. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:
  - Similarly, `partial application` can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.

```js
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
-------------
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
curried(1)(2) // Returns 3
```

## Intermediate Algorithm Scripting
### Introduction to the Intermediate Algorithm Scripting Challenges

### Sum All Numbers in a Range
```js
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);
```
### Diff Two Arrays
### Seek and Destroy
`const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));`
### Wherefore art thou
```js
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}
```
### Spinal Tap Case
```js
return str.trim().split(/\s|_|(?=[A-Z])/).join('-').toLowerCase
```
### Pig Latin
```js
function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end  
 return strArr.join("")+"ay";
}

// test here
translatePigLatin("consonant");
```
### Search and Replace
```js
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
--------------------
```
### DNA Pairing
```js
function pairElement(str) {
  let pairRule = {C:"G",G:"C",A:"T",T:"A"}
  return str.split("").map(e=>[e,pairRule[e]])
}

pairElement("GCG");
```
### Missing letters
```js
function fearNotLetter(str) {
  var allChars = '';

  var notChars = new RegExp('[^'+str+']','g');//Note this how to use variable into a Regx directly +++
  //++++++++++++++ str ++++

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}
```
### Sorted Union
```js
//jshint esversion:6

function uniteUnique(...arrays) {

  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
### Convert HTML Entities
```js
function convertHTML(str) {
      // Use Object Lookup to declare as many HTML entities as needed.
      htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        '\'':"&apos;"
      };
      //Use map function to return a filtered str with all entities changed automatically.
      return str.split('').map(entity => htmlEntities[entity] || entity).join('');
    }

    // test here
    convertHTML("Dolce & Gabbana");
  ```
### Sum All Odd Fibonacci Numbers
```js
function sumFibs(num) {
    // Perform checks for the validity of the input
    if (num < 0) return -1;
    if (num === 0 || num === 1) return 1;

    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;
    
    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }
    /////注意这个思路 用变化中的arry的特性 代替i，高级**

    //js 加法运算 用reduc实现
    // Sum only the odd numbers and return the value
    return arrFib.reduce((acc, curr) => {
        return acc + curr * (curr % 2); //简单粗暴的判断奇数偶数的方法 高级
    });
}

// test here
sumFibs(4);
```
### Sum All Primes 
```js
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]
```
```js
function sumPrimes(num) {
  // step 1	
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  // step 2  find a primes Func
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1;
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false;
        m--;
    }
      return true;
  });
  // step 3
  return onlyPrimes.reduce((a,b) => a+b); 
}
// test here
sumPrimes(977);
```
### range()
```js
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
```
```js
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
```
### Smallest Common Multiple
```js
function smallestCommons(arr) {
  // range
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  let smallestCommon = lcm(min, min + 1);

  while(min < max) {
    min++;
    smallestCommon = lcm(smallestCommon, min);
  }

  return smallestCommon;
}
/**
 * Calculates Greatest Common Divisor
 * of two nubers using Euclidean algorithm
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 */
function gcd(a, b) {
  while (b > 0) {
    let tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
}
/**
 * Calculates Least Common Multiple
 * for two numbers utilising GCD
 */
function lcm(a, b) {
  return (a * b / gcd(a, b));
}
// test here
smallestCommons([1,5]);
```
### Drop it
```js
//此思路很高级 可以一用
function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

```
### Steamroller
```js

function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(m=>Array.isArray(m)) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
----------------
function steamrollArray(arr) {
  return arr.toString()
    .replace(',,', ',')       // "1,2,,3" => "1,2,3"
    .split(',')               // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}
---
```
- First we turn the `array` to a `string`, which will give us a string of numbers seperated by a comma, double comma if there was an empty array and literal object text if there was an object, which we can fix it later in our if statement.

### Binary Agents
```js
 function binaryAgent(str) {
      return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
    }

    // test here
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

- However fromCharCode() expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers. See here for more info; Spread Operator
### Everything Be True
```js
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(m=>m[pre]);
}
```
### Arguments Optional
```js
function addTogether(...args) {
      return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ?
          args.reduce((acc, n) => acc += n, 0):
          (n) => typeof n === "number" ? 
            n + args[0]:
            undefined;
    }
```
### Make a Person
```js
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
```
### Map the Debris
```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // Loop through each item in the array arr
  arr.forEach(function(item) {
    // Calculate the Orbital period value
    var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp;
  });
  return arr;
}

// test here
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```

## JavaScript Algorithms and Data Structures Projects