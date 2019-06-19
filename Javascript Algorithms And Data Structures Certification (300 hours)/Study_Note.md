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
- In order to help us create more flexible functions, ES6 introduces the rest operator for function parameters. With the rest operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
  - The rest operator eliminates the need to check the args array and allows us to apply `map(), filter() and reduce()` on the parameters array.
```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
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
### Use Destructuring Assignment to Assign Variables from Nested Objects
### Use Destructuring Assignment to Assign Variables from Arrays
### Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
### Use Destructuring Assignment to Pass an Object as a Function's Parameters
### Create Strings using Template Literals
### Write Concise Object Literal Declarations Using Simple Fields
### Write Concise Declarative Functions with ES6
### Use class Syntax to Define a Constructor Function
### Use getters and setters to Control Access to an Object
### Understand the Differences Between import and require
### Use export to Reuse a Code Block
### Use * to Import Everything from a File
### Create an Export Fallback with export default
### Import a Default Export


## Regular Expressions
## Debugging
## Basic Data Structures
## Basic Algorithm Scripting
## Object Oriented Programming
## Functional Programming
## Intermediate Algorithm Scripting
## JavaScript Algorithms and Data Structures Projects