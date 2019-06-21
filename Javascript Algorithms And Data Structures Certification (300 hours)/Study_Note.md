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
- will not change original data 
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





## Object Oriented Programming
## Functional Programming
## Intermediate Algorithm Scripting
## JavaScript Algorithms and Data Structures Projects