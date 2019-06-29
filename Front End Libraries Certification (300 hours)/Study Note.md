# Front End Libraries Certification (300 hours)
## Bootstrap
### Introduction to the Bootstrap Challenges
- Bootstrap is a front-end framework used to design responsive web pages and web applications. `It takes a mobile-first approach to web development.` Bootstrap includes `pre-built CSS styles` and `classes`, `plus` some `JavaScript functionality`. Bootstrap uses a responsive `12 column grid layout` and `has` design `templates` for:
```js
buttons
images
tables
forms
navigation
```
- This section introduces some of the ways to use Bootstrap in your web projects.
### Use Responsive Design with Bootstrap Fluid Containers
- `Bootstrap` will `figure out` how `wide` your `screen` is and `respond by` `resizing` your HTML `elements` - hence the name `Responsive Design`.
    - With responsive design, there is `no need to design a mobile version` of your website. It will look good on devices with screens of any width.
```js
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
</head>
```
- To get `started`, we should nest all of our HTML (except the link tag and the style element) in a `div` `element` with the `class` `container-fluid`.
### Make Images Mobile Responsive
- Fortunately, with Bootstrap, all we need to do is `add` the `img-responsive` `class` to your `image`. Do this, and the image should perfectly fit the width of your page.
### Center Text with Bootstrap
- Now that we're using Bootstrap, we can `center` our heading `element` to make it look better. All we need to do is add the class `text-center` to our h2 element.
### Create a Bootstrap Button
- `Bootstrap` has its `own styles` for `button` elements, which `look` much `better` than the plain HTML ones.
### Create a Block Element Bootstrap Button
- Create a new button element below your large kitten photo. Give it the `btn` and `btn-default` classes, as well as the `text` of "Like".
### Taste the Bootstrap Button Color Rainbow
```js
<button class="btn btn-default btn-block">Submit</button>
```
- This button would `take` up `100%` of the `available` `width`.
### Call out Optional Actions with btn-info
- Bootstrap `comes with` several `pre-defined colors` for `buttons`. The `btn-info` class is used to call attention to optional actions that the user can take.

### Warn Your Users of a Dangerous Action with btn-danger
- Bootstrap comes with several pre-defined colors for buttons. The `btn-danger` class is the button color you'll use to notify users that the button performs a `destructive action`, such as deleting a cat photo.
### Use the Bootstrap Grid to Put Elements Side By Side
- Most of Bootstrap's classes can be applied to a div element.
- Put the Like, Info and Delete buttons side-by-side by nesting all three of them within one <div class="row"> element, then each of them within a <div class="col-xs-4"> element.
### Ditch Custom CSS for Bootstrap

### Use a span to Target Inline Elements
- By using the inline span element, you can put several elements on the same line, and even style different parts of the same line differently. vs `btn-block`
`<p>Things cats <span class="text-danger">love</span></p>`

### Create a Custom Heading
### Add Font Awesome Icons to our Buttons
- Font Awesome is a convenient `library` of `icons`. These icons are `vector graphics`, stored in the `.svg` file format. These icons are treated `just like` `fonts`.
    - Note that the `span` element is also `acceptable` for use with `icons`.
`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous">`
`<i class="fa fa-info-circle"></i>`
    
### Add Font Awesome Icons to all of our Buttons
```html
<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
    </div>
  </div>
</div>
```
### Responsively Style Radio Buttons
### Responsively Style Checkboxes
### Style Text Inputs as Form Controls
`<button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>`
### Line up Form Elements Responsively with Bootstrap
- To center images which use the `.img-responsive` class, use `.center-block` **instead of** `.text-center`. 
### Create a Bootstrap Headline
### House our page within a Bootstrap container-fluid div
### Create a Bootstrap Row
### Split Your Bootstrap Row
### Create Bootstrap Wells
- Bootstrap has a class called well that can create a `visual sense of depth` for your columns.
### Add Elements within Your Bootstrap Wells
### Apply the Default Bootstrap Button Style
### Create a Class to Target with jQuery Selectors
### Add id Attributes to Bootstrap Elements
### Label Bootstrap Wells
### Give Each Element a Unique id
### Label Bootstrap Buttons
### Use Comments to Clarify Code



## jQuery
### Introduction to jQuery
- jQuery is a light`weight, "write less, do more",JavaScript library`. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and `wraps` them into `methods` that you can call `with a single line of code`.
- jQuery is `one` of the many `libraries` for `JavaScript`. It is designed to `simplify` scripting done `on` the `client` side. jQuery's most `recognizable` `characteristic` is its dollar sign `($)` syntax. With it, you can `easily` manipulate `elements`, create `animations` and handle `input events`.
### Learn How Script Tags and Document Ready Work
- Now we're ready to learn jQuery, `the most popular JavaScript tool` of all time.
  - Your browser will run `any` JavaScript `inside` a `script element`, including `jQuery`.
  - The `important` thing to know is that `code` you put `inside` this `function` will run `as soon as` your browser `has loaded` your page.

### Target HTML Elements with Selectors Using jQuery
- `document ready function.`
  - `$`, usually referred to as a `dollar sign operator`, or as `bling`.
  - jQuery often `selects` an `HTML` element with a `selector`, then does something to that element.

### Target Elements by Class Using jQuery
```js
  $(document).ready(function() {
    $("button").addClass("animated bounce");
  });
```
### Target Elements by id Using jQuery
### Delete Your jQuery Functions
### Target the Same Element with Multiple jQuery Selectors
### Remove Classes from an Element with jQuery
### Change the CSS of an Element Using jQuery
```js
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");

  });
</script>
```
### Disable an Element Using jQuery
```js
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true)
  });
</script>
```
### Change Text Inside an Element Using jQuery
- jQuery has a function called` .html()` that lets you `add HTML tags` and `text` within an element. `Any content previously` within the element will be completely `replaced` with the content you provide using this function.
```js
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("h3").html("<em>jQuery Playground</em>");
  });
</script>
```
### Remove an Element Using jQuery
### Use appendTo to Move Elements with jQuery
### Clone an Element Using jQuery
### Target the Parent of an Element Using jQuery
### Target the Children of an Element Using jQuery
### Target a Specific Child of an Element Using jQuery
### Target Even Elements Using jQuery
### Use jQuery to Modify the Entire Page
```js
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
  });
  $("body").addClass("animated fadeOut");
</script>
```

## Sass
### Introduction to the Sass Challenges
- `Sass`, or `"Syntactically Awesome StyleSheets"`, is a language extension of CSS. It adds features that aren't available using basic CSS syntax. Sass makes it easier for developers to simplify and maintain the style sheets for their projects.

- `Sass` can `extend` the `CSS` language because it is a `preprocessor`. It takes code written using Sass syntax, and `converts` it `into` basic `CSS`. This allows you to create `variables`, nest CSS rules into others, and `import` other Sass files, among other things. The result is more `compact`, `easier` to `read` `code`.

- There are `two syntaxes` available for `Sass`. The `first`, known as `SCSS (Sassy CSS)` and used throughout these challenges, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. Files using this syntax have the .scss extension.

- The `second` and older syntax, known as the `indented syntax` (or sometimes just "`Sass`"), uses `indentation` rather than `brackets` to indicate nesting of selectors, and newlines rather than semicolons to separate properties. Files using this syntax have the .sass extension.

- This section introduces the basic features of `Sass`.
### Store Data with Sass Variables
- In `JavaScript`, variables are defined using the `let` and `const` keywords. In `Sass`, variables start with a `$` followed by the variable name.
  - One example where variables are useful is when a number of `elements` `need` to be the `same color`. If that color is changed, the `only place to edit` the code is the variable value.
```js
$headings-color: green;
//To use variables:
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```
### Nest CSS with Sass
- For a `large project`, the CSS file will have many lines and rules. This is where nesting can help `organize` your `code` by placing `child` style rules within the respective `parent` elements:
  - There are four different combinators in CSS:
    - descendant selector (space)
      - the descendant selector matches all elements that are descendants of a specified element.
    - child selector (>)
      - The child selector selects all elements that are the immediate children of a specified element.
    - adjacent sibling selector (+)
      - The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.
      - Sibling elements must have the same parent element, and "adjacent" means "immediately following".
    - general sibling selector (~)
      - The general sibling selector selects all elements that are siblings of a specified element.
```js
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
---------------
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```
### Create Reusable CSS with Mixins
- `Newer CSS features` take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may `need` `vendor prefixes.` Consider "box-shadow":
```cs
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x, $y, $blur, $c;
  -moz-box-shadow: $x, $y, $blur, $c;
  -ms-box-shadow: $x, $y, $blur, $c;
  box-shadow: $x, $y, $blur, $c;
}
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```
### Use @if and @else to Add Logic To Your Styles

```cs
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```
### Use @for to Create a Sass Loop
- @for is used in `two ways`: `"start through end"` or `"start to end"`. 
  - The main `difference` is that "start to end" `excludes` the `end number`, and "start through end" `includes` the `end number`.
  - This is a powerful way to create `a grid layout`. Now you have twelve options for column widths available as CSS classes.
```cs
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
---------------
//The #{$i} part is the syntax to combine a variable (i) with text to make a string. When the Sass file is converted to CSS, it looks like this:
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```
### Use @each to Map Over Items in a List
```cs
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
----
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```
`#{$col}`
### Apply a Style Until a Condition is Met with @while
```cs
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```
### Split Your Styles into Smaller Chunks with Partials
```js
//"_mixins.scss"
@import 'mixins'
```
###    One Set of CSS Styles to Another Element
```js
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}

.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

## React
### Introduction to the React Challenges
- React, `popularized` by `Facebook`, is an `open-source` JavaScript `library` for `building user interfaces`. It is used to `create components`, `handle state and props`, `utilize event listeners` and `certain life cycle methods` to `update data` as it changes.

- React combines HTML with JavaScript functionality to create its `own markup language`, `JSX`. This section will introduce you to all of these concepts and how to implement them for use with your own projects.

  - React is an Open Source view library `created` and `maintained` by `Facebook`
### Create a Simple JSX Element
- React uses a `syntax extension of JavaScript` called `JSX` that allows you to `write HTML` directly `within JavaScript`. 
  - It lets you `use the full programmatic power` of `JavaScript` within HTML, and helps to `keep your code readable`. 
- For the most part, `JSX` is `similar` to the `HTML` that you have already learned, however there are `a few key differences` that will be covered throughout these challenges.
- For instance, because JSX is a `syntactic extension` of JavaScript, you can actually write `JavaScript` `directly` `within` `JSX`.
  - To do this, you simply `include` the `code` you `want` to be treated `as` `JavaScript` within `curly braces:` { 'this is treated as JavaScript code' }. Keep this in mind, since it's used in several future challenges.
  - However, because JSX is `not` `valid` `JavaScript`, JSX code must be `compiled into` JavaScript
    - The `transpiler` `Babel` is a popular tool for this process. 

### Create a Complex JSX Element
- One important thing to know about `nested` `JSX` is that it must return a `single` `element`.
- For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.
```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
----------
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```
### Add Comments in JSX
`{/* */}`
### Render HTML Elements to the DOM
```js
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById(`challenge-node`))
```
### Define an HTML Class in JSX
- `One key difference` in `JSX` is that you `can no longer` use the word class to define HTML classes. This is because `class` is a `reserved word` in JavaScript. Instead, JSX uses `className`.
```js
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
```
### Learn About Self-Closing JSX Tags
- For example the line-break tag can be written as <br> or as <br />, but should never be written as <br></br>, since it doesn't contain any content.
- In JSX, the rules are a little different
  - The line-break tag, for example, must always be written as <br /> in order to be valid JSX that can be transpiled


### Create a Stateless Functional Component
- `Components` are the `core` `of` `React`. `Everything` in `React` `is a` `component` and here you will learn how to create one.
- There are `two ways` to create a React component.
  - The `first way` is to use a JavaScript function
    - Defining a component in this way creates `a stateless functional component`
    - For now, think of a stateless component as one that `can receive data and render it`, but `does not` `manage` or `track` `changes` to that `data`. 
    - To create a component with a `function`, you simply write a `JavaScript function` that `returns` either `JSX` or `null`
    ```js
    const DemoComponent = function() {
      return (
        <div className='customClass' />
      );
    };
    ```
    - Because a `JSX` component `represents` `HTML`, you could `put` several `components` `together` to create a `more` `complex` HTML page. This is `one` of the `key advantages` of the component architecture React provides. It allows you to compose your `UI` from many `separate`, `isolated` `components`. This makes it easier to `build` and `maintain` `complex` user interfaces.
  - The `other way` to define a React component is with the `ES6` `class` `syntax`. In the following example, `Kitten extends React.Component`:
```js
class Kitten extends React.Component {
constructor(props) {
  super(props);
}

render() {
  return (
    <h1>Hi</h1>
  );
}
}
```
- It is best practice to call a component's constructor with `super`, and pass `props` to both. 
### Create a React Component
### Create a Component with Composition
```js
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
        <ChildComponent />

        { /* change code above this line */ }
      </div>
    );
  }
};
```
### Use React to Render Nested Components
-  You break down your UI into its basic building blocks, and those pieces become the components
  - This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.

### Compose React Components
```js
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }
      <TypesOfFruit />
      { /* change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
        <Fruits />
        { /* change code above this line */ }
      </div>
    );
  }
};
```
### Render a Class Component to the DOM
```js

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}

        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfVehicles />,'node-id')//Note this
```
### Write a React Component from Scratch
```js
class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  //function later
  render() {
    return (
      // The JSX code you put here is what your component will render
    );
  }
};
```
### Pass Props to a Stateless Functional Component
```js
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};
```
### Pass an Array as Props
```js
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
```
### Use Default Props
```js
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line
ShoppingCart.defaultProps = {
  items: 0
}
```
### Override Default Props
```js
<Component propsName={Value}/>
<Items quantity={50}/>
```
### Use PropTypes to Define the Props You Expect
- Note: As of React v15.5.0, PropTypes is imported independently from React, like this: import React, { PropTypes } from 'react';
```js
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
**itemName**.propTypes = {
  **props**: PropTypes.**dataType**.isRequired
};
```
### Access Props Using this.props
- The ES6 class component uses a slightly different convention to access props.
- `Anytime` you refer to a `class` `component` `within` `itself`, you use the `this` keyword. 
`{this.props.data}`
### Review Using Props with Stateless Functional Components
- A common pattern is to try to `minimize` `statefulness` and to `create` `stateless` functional components wherever possible. 
### Create a Stateful Component

### Render State in the User Interface
- When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop.
  - React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.
  - Note that if you make a component stateful, no other components are aware of its state. Its state is completely `encapsulated`, or `local` to that `component`, unless you `pass` `state` `data` `to` a child `component` as `props`

### Render State in the User Interface Another Way
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
    const name = this.state.name;
    // change code above this line
    return (
      <div>
        { /* change code below this line */ }
        {name}
        { /* change code above this line */ }
      </div>
    );
  }
};
```
### Set State with this.setState
### Bind 'this' to a Class Method
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // change code below this line
    this.addItem = this.addItem.bind(this)
    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button onClick={this.addItem}>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};
```
### Use State to Toggle an Element
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    if (this.state.visibility == true) {
    this.setState({
      visibility: false
    });} else {
      this.setState({
        visibility: true
      })
    }
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
```
### Write a Simple Counter
### Create a Controlled Input
```js
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
    // change code above this line
  }
  // change code below this line
handleChange(event) {
    this.setState({
      input: event.target.value
    });
}
  
  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}
    <input value={this.state.input} onChange = {this.handleChange.bind(this)}/>
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```

### Create a Controlled Form
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault(); //*******Note this
    this.setState({
      input: '',
      submit: this.state.input
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }
          <input value={this.state.input} onChange={this.handleChange}/>
          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }
        <h1>{this.state.submit}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};
```
### Pass State as Props to Child Components
```js
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         // Here we will call this.state.name in order to pass the value of CamperBot
         // to the NavBar component
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      // Since we passed in the CamperBot state value into the the NavBar component above
      // the h1 element below will render the value passed from state
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```
### Pass a Callback as Props
```js
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ 
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        }
        { /* change code above this line */ 
        <RenderInput input={this.state.inputValue}/>
        }
       </div>
    );
  }
};


class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```
### Use the Lifecycle Method componentWillMount
- React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. 

- componentWillMount()
  - The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. 
- componentDidMount()
  - This method is `called` `after a component is mounted to the DOM`
  - The componentDidMount() method is also the best place to `attach` any `event listeners` you need to add for specific functionality. 
- componentWillUnmount()
  - It's good practice to use this lifecycle method to `do` any `clean up` on React components `before` they are `unmounted` and `destroyed`. 
- componentWillReceiveProps()
  - 
shouldComponentUpdate()

componentWillUpdate()

componentDidUpdate()

componentWillUnmount()

### Use the Lifecycle Method componentDidMount
- Most web developers, at some point, need to `call an API endpoint to retrieve data`. If you're working with React, it's important to know `where to perform this action`.

- The best practice with React is to place `API calls or any calls to your server` in the lifecycle method `componentDidMount()`. 
- This method is `called` `after a component is mounted to the DOM`. Any calls to `setState()` here will `trigger a re-rendering of your component.` When you `call an API in this method`, and `set your state with the data that the API returns`, it `will automatically trigger an update once you receive the data`.
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
};
```
### Add Event Listeners
- The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality. React provides a `synthetic event system` which wraps the native event system present in browsers. This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers.

- You've already been using some of these synthetic event handlers such as onClick(). React's synthetic event system is great to use for most interactions you'll manage on DOM elements. `However`, if you want to `attach` an `event` `handler` to the `document` or `window` objects, you `have to` do this `directly`.
```JS
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```
### Manage Updates with Lifecycle Methods
- Another lifecycle method is `componentWillReceiveProps()` which is `called` whenever a `component` is `receiving new props`
- This method receives the `new props` as an argument, which is usually `written` as `nextProps`. You can use this argument and `compare with` `this.props` and perform actions before the component updates. For example, you may call setState() locally before the update is processed.
- Another method is `componentDidUpdate()`, and is called immediately `after a component re-renders`. Note that `rendering` and `mounting` are considered `different` things in the component lifecycle. When a page `first loads`, all components are `mounted` and this is where methods like `componentWillMount()` and `componentDidMount()` are called. After this, `as state changes`, components `re-render` themselves. The next challenge covers this in more detail.

### Optimize Re-Renders with shouldComponentUpdate
```js
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
      if (nextProps.value % 2 == 0) {
        return true;
      }
      return false;
     // change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};
```
### Introducing Inline Styles
```js
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
    );
  }
};
```
### Add Inline Styles in React
- You may have noticed in the last challenge that there were several other syntax differences from HTML inline styles in addition to the style attribute set to a JavaScript object. First, the names of certain CSS style properties use camel case. For example, the last challenge set the size of the font with fontSize instead of font-size. Hyphenated words like font-size are invalid syntax for JavaScript object properties, so React uses camel case. As a rule, any hyphenated style properties are written using camel case in JSX.

- All property value `length units` (like height, width, and fontSize) are a`ssumed to be in px` unless otherwise specified. If you want to use em, for example, you wrap the value and the units in quotes, like `{fontSize: "4em"}`. Other than the length values that default to px, `all other` property values should be `wrapped in quotes`.
### Use Advanced JavaScript in React Render Method
- You can also write JavaScript directly in your render methods, before the return statement, without inserting it inside of curly braces
  - This is because it is not yet within the JSX code. When you want to use a variable later in the JSX code inside the return statement, you place the variable name inside curly braces.
```js
const inputStyle = {
  width: 235,
  margin: 5
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt', 
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it', 
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex];

    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} /><br />
        <button onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        <p>
          { /* change code below this line */ }
          <p>
            {answer}          
          </p>
          { /* change code above this line */ }
        </p>
      </div>
    );
  }
};
```
### Render with an If/Else Condition
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line

if (this.state.display === true) {
  return (
    <div>
      <button onClick={this.toggleDisplay}>Toggle Display</button>
      <h1>Displayed!</h1>
    </div>
  );
}else {
  return (
    <div>
      <button onClick={this.toggleDisplay}>Toggle Display</button>
    </div>
  )
}

  }
};
```
### Use && for a More Concise Conditional
```js
{condition && <p>markup</p>}
```
- If the condition is true, the markup will be returned. If the condition is false, the operation will immediately return `false` after evaluating the condition and return `nothing`
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>} 
       </div>
    );
  }
};
```
### Use a Ternary Expression for Conditional Rendering
```js

const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
      this.state = {
        input: '',
        userAge: ''
      }
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        {
    (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge== '')? buttonOne: buttonThree
        }
      </div>
    );
  }
};
```
### Render Conditionally from Props
```js
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
  {
    this.props.fiftyFifty
  }
  </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
  this.setState({
    counter: this.state.counter + 1
  });
}
  render() {
 let expression = Math.random() > .5;
     return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
        {(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> }

        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
```
### Change Inline CSS Conditionally Based on Component State
```js

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line
    if(this.state.input.length>=15){
      inputStyle={
        border:'3px solid red'
      }
    }
    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```
### Use Array.map() to Dynamically Render Elements
```js
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      userInput: '',
      toDoList: []
    }
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(i => <li>{i}</li>); // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};
```
### Give Sibling Elements a Unique Key Attribute
```js

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((item) =>
  <li key={item+1}>{item}</li>// Note this <array f elements>
);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```
### Use Array.filter() to Dynamically Filter an Array
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(e=>e.online==true)
    const renderOnline = usersOnline.map(e=><li>{e.username}</li>);
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};
```
### Render React on the Server with renderToString
- So far, you have been rendering React components `on the client`. Normally, this is what you will always do. `However`, there are some use cases where it makes sense to `render` a React component on the `server`. Since React is a JavaScript `view` `library` and you can run JavaScript on the `server` with `Node`, this is possible. In fact, React provides a `renderToString()` method you can use for this purpose.
- There are two key reasons why rendering on the server may be used in a real world app.
  -  `First`, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. 
  - If you render the `initial` `HTML` `markup` on the server and send this to the client, the initial page load contains all of the page's markup which can be `crawled` `by` `search engines`.
  - Second, this creates a `faster initial page load experience` `because` the rendered HTML is `smaller` than the JavaScript code of the entire app. React will still be able to recognize your app and manage it `after the initial load`.
```js
ReactDOMServer.renderToString(<App />);
```

## Redux

## React and Redux

## Front End Libraries Projects