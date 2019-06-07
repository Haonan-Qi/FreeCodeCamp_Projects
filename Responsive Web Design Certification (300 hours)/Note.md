# Introduction to Basic HTML & HTML5

## Basic HTML and HTML5
- HTML, or ``HyperText Markup Language``, is a **markup language used to describe the structure of a web page**. It uses a special syntax or notation to organize and give information about the page to the browser. Elements usually have opening and closing tags that surround and give meaning to content.
- The HyperText part of HTML comes from the early days of the web and its original use case. Pages usually contained static documents that contained references to other documents. These references contained hypertext links used by the browser to navigate to the reference document so the user could read the reference document without having to manually search for it.
- As web pages and web applications grow more complex, the W3 Consortium updates the HTML specification to ensure that a webpage can be shown reliably on any browser. The latest version of HTML is HTML5.
- This section introduces how to use HTML elements to give structure and meaning to your web content.
### Say Hello to HTML Elements
```html
    <p></p>
```
### Headline with the h2 Element
```html
    <h></h>
```
### Inform with the Paragraph Element
```html
    <p></p>
```
### Fill in the Blank with Placeholder Text
- Web developers traditionally use lorem ipsum text as placeholder text. The 'lorem ipsum' text is randomly scraped from a famous passage by Cicero of Ancient Rome.
- Lorem ipsum text has been used as placeholder text by typesetters since the 16th century, and this tradition continues on the web.
`Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`
### Uncomment HTML
```html
    <!--This is comment block in HTML-->
```
### Comment out HTML
```html
    <!--This is comment block in HTML-->
```
### Introduction to HTML5 Elements
- These tags make your HTML easier to read, and also help with Search Engine Optimization (SEO) and accessibility.
```html
    header, footer, nav, video, article, section
```
### Add Images to Your Website
```html
    <img src="https://www.your-image-source.com/your-image.jpg" alt="img">
```
### Link to External Pages with Anchor Elements
```html
    <a href="https://freecodecamp.org">this links to freecodecamp.org</a>
```
### Link to Internal Sections of a Page with Anchor Elements
```html
    <a href="#contacts-header">Contacts</a>
    <h2 id="contacts-header">Contacts</h2>
```
### Nest an Anchor Element within a Paragraph
```html
    <p>Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.</p>
```
### Make Dead Links Using the Hash Symbol
- Sometimes you want to add a elements to your website before you know where they will link.
- This is also handy when you're changing the behavior of a link using JavaScript, which we'll learn about later.
```html
    <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>
```
### Turn an Image into a Link
```html
    <a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."></a>
```
### Create a Bulleted Unordered List
```html
    <ul>
        <li>milk</li>
        <li>cheese</li>
    </ul>
```
### Create an Ordered List
```html
    <ol>
        <li>Garfield</li>
        <li>Sylvester</li>
    </ol>
```
### Create a Text Field
```html
    <input type="text">
```
### Add Placeholder Text to a Text Field
```html
    <input type="text" placeholder="this is placeholder text">
```
### Create a Form Element
```html
    <form action="/url-where-you-want-to-submit-form-data"></form>
```
### Add a Submit Button to a Form
- Let's add a submit button to your form. Clicking this button will send the data from your form to the URL you specified with your form's action attribute.
```html
    <button type="submit">this button submits the form</button>
```
### Use HTML5 to Require a Field
```html
    <input type="text" required>
```
### Create a Set of Radio Buttons
- n icon representing one of a set of options, only one of which can be selected at any time.
- Radio buttons are a type of input.
- Each of your radio buttons can be nested within its own label element. By wrapping an input element inside of a label element it will automatically associate the radio button input with the label element surrounding it.
```html
    <label><input type="radio" name="indoor-outdoor">Indoor</label>
```
### Create a Set of Checkboxes
- Checkboxes are a type of input
- Each of your checkboxes can be nested within its own label element. By wrapping an input element inside of a label element it will automatically associate the checkbox input with the label element surrounding it.
- All related checkbox inputs should have the same name attribute.
- It is considered best practice to explicitly define the relationship between a checkbox input and its corresponding label by setting the for attribute on the label element to match the id attribute of the associated input element.
- name is used to group inpout together
```html
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label>
```
### Check Radio Buttons and Checkboxes by Default
```html
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Energetic</label><br>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
```
### Nest Many Elements within a Single div Element
- The div element, also known as a division element, is a general purpose container for other elements.
```html
    <div>
    </div>
```
### Declare the Doctype of an HTML Document
- At the top of your document, you need to tell the browser which version of HTML your page is using. HTML is an evolving language, and is updated regularly. Most major browsers support the latest specification, which is HTML5. However, older web pages may use previous versions of the language.
```html
    <!DOCTYPE html><!-- **this mean the DOCTYPE is HTML 5**>
    <html>
        <!-- Your HTML code goes here -->
    </html>
```
### Define the Head and Body of an HTML Document
- Metadata elements, such as ``link, meta, title, and style,`` typically go inside the head element.
```html
    <!DOCTYPE html>
    <html>
        <head>
            <!-- metadata elements -->
        </head>
        <body>
            <!-- page contents -->
        </body>
    </html>
```


## Basic CSS
### Introduction to Basic CSS
- Cascading Style Sheets (CSS) tell the browser how to display the text and other content that you write in HTML.

- Note that CSS is **case-sensitive** so be careful with your capitalization. CSS has been adopted by all major browsers and allows you to control:
    - color
    - fonts
    - positioning
    - spacing
    - sizing
    - decorations
    - transitions

- There are three main ways to apply CSS styling. 
    - You can apply inline styles directly to HTML elements with the style attribute. 
    - Alternatively, you can place CSS rules within style tags in an HTML document. 
    - Finally, you can write CSS rules in an external style sheet, then reference that file in the HTML document. 

``The idea behind CSS is that you can use a selector to target an HTML element in the DOM (Document Object Model) and then apply a variety of attributes to that element to change the way it is displayed on the page.``

### Change the Color of Text
- inline styles
`<h2 style="color: blue;">CatPhotoApp</h2>`
`Note that it is a good practice to end inline style declarations with a;`
### Use CSS Selectors to Style Elements
```html
    <style>
        h2 {color: red;}
    </style>
```
### Style Multiple Elements with a CSS Class
```html
    <style>
        .blue-text {
            color: blue;
        }
    </style>
    <h2 class="blue-text">CatPhotoApp</h2>
```
### Change the Font Size of an Element
```html
    <style>
        h1 {
            font-size: 30px;
        }
    </style>
```
### Set the Font Family of an Element
```html
    <style>
        h2 {
            font-family: sans-serif;
        }
    </style>
```
### Import a Google Font
```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        h2 {
            font-family: FAMILY_NAME, GENERIC_NAME;
        }
    </style>
```
### Specify How Fonts Should Degrade
```html
    <style>
        p {
            font-family: Helvetica, sans-serif;
        }
    </style>
```
### Size Your Images
```html
    <style>
        .larger-image {
            width: 500px;
        }
    </style>
```
### Add Borders Around Your Elements
```html
    <style>
        .thin-red-border {
            border-color: red;
            border-width: 5px;
            border-style: solid;
        }
  </style>
```
### Add Rounded Corners with border-radius
```html
    <style>
        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 10px;/* 50% */
        }
    </style>
```
### Make Circular Images with a border-radius
```html
    <style>
        .smaller-image {
            width: 100px;
            border-radius: 50%;
        }
    </style>
```
### Give a Background Color to a div Element
```html
    <style>
        .green-background {
            background-color: green;
        }
    </style>
```
### Set the id of an Element
```html
    <h2 id="cat-photo-app">
```
### Use an id Attribute to Style an Element
```html
    <style>
        #cat-photo-element {
            background-color: green;
        }
    </style>
```
### Adjust the Padding of an Element
- An element's padding controls the amount of space between the element's **content** and **its border**.
```html
    <style>
        .red-box {
            background-color: crimson;
            color: #fff;
            padding: 20px;
        }
    </style>
```
### Adjust the Margin of an Element
- An element's margin controls the amount of space between an element's border and surrounding elements.
```html
    <style>
        .red-box {
            background-color: crimson;
            color: #fff;
            margin: 20px;
        }
    </style>
```
### Add a Negative Margin to an Element
```html
    <style>
        .red-box {
            background-color: crimson;
            color: #fff;
            margin: -15;
        }
    </style>
```
### Add Different Padding to Each Side of an Element
```html
    <style>
        .red-box {
            background-color: crimson;
            color: #fff;
            padding-top: 40px;
            padding-right: 20px;
            padding-bottom: 20px;
            padding-left: 40px;
        }
    </style>
```
### Add Different Margins to Each Side of an Element
```html
    <style>
        .red-box {
            background-color: crimson;
            color: #fff;
            margin-top: 40px;
            margin-right: 20px;
            margin-bottom: 20px;
            margin-left: 40px;
        }
    </style>
```
### Use Clockwise Notation to Specify the Padding of an Element
```html
    <style>
        .red-box {
            background-color: crimson;
            color: #fff;
            padding: 20px 40px 20px 40px;
        }
    </style>
```
### Use Clockwise Notation to Specify the Margin of an Element
```html
    <style>
        .red-box {
            background-color: crimson;
            color: #fff;
            margin: 20px 40px 20px 40px;
        }
    </style>
```
### Use Attribute Selectors to Style Elements
```html
    <style>
        [type='radio'] { /* attributeName='targetValue'*/
            margin: 20px 0px 20px 0px;
        }
    </style>
```
### Understand Absolute versus Relative Units
- The two main types of length units are absolute and relative. 
    - absolute  
        - Absolute units tie to physical units of length. For example, in and mm refer to inches and millimeters, respectively. 
    - relative
        - em is based on the size of an element's font. If you use it to set the font-size property itself, it's relative to the **parent's font-size**.
        - rem is a unit of typography equal to the root font-size. This means 1rem is always equal to the font-size defined in <html>.
```html
    <style>
        html { font-size: 100% } /* This means 16px by default*/
    </style>    
```
### Style the HTML Body Element
- Every HTML page has a body element. 
- Can be proed using next code
```html
    <style>
        html { font-size: 100% } /* This means 16px by default*/
        body { color: black } 
    </style>
```
### Inherit Styles from the Body Element
- Remember, you can style your body element just like any other HTML element, and **all your other elements** will **inherit your body element's styles**.
```html
    <style>
        body { color: black } 
    </style>
```
### Prioritize One Style Over Another
- Sometimes your HTML elements will receive multiple styles that conflict with one another.
- LIFO
```html
    <style>
        body { color: black } 
        #red-text{ color:red }
    </style>
```
### Override Styles in Subsequent CSS
- We just proved that browsers read CSS from **top to bottom**. That means that, in the event of a conflict, the browser will use whichever CSS declaration came last.
```html

```
### Override Class Declarations by Styling ID Attributes
- But we're not done yet. There are other ways that you can override CSS.
- **Id** declarations override **class** declarations, regardless of where they are declared in your style element CSS.
```html

```
### Override Class Declarations with Inline Styles
- **inline** styles will override **all the CSS declarations** in your style element.
```html

```
### Override All Other Styles by using Important
- background-color: black !important;
```html
    <style>
        body {
            background-color: black !important;
            font-family: monospace;
        }
    </style>
```
### Use Hex Code for Specific Colors
- RGB
- each use 2 digital code represent
```html
    <style>
        body {
            background-color: #000000;
        }
    </style>
```
### Use Hex Code to Mix Colors
```html
    <style>
        body {
            background-color: #FFA500;
        }
    </style>
```
### Use Abbreviated Hex Code
- For example, red's hex code #FF0000 can be shortened to #F00. This shortened form gives one digit for red, one digit for green, and one digit for blue.
```html

```
### Use RGB values to Color Elements
- Instead of using six hexadecimal digits like you do with hex code, with RGB you specify the brightness of each color with a number between 0 and 255.
```cs
    rgb(255, 255, 255)
```
### Use RGB to Mix Colors
```cs
    rgb(0, 255, 255)
```
### Use CSS Variables to change several elements at once
```html
    <style>
        .penguin {
            --penguin-skin: black;
        }
        .penguin-top {
            background: var(--penguin-skin, gray);/* can specific a backup color after comma*/
        }
    </style>
```
### Create a custom CSS Variable
- To create a CSS Variable, you just need to give it a name with two dashes in front of it and assign it a value like this:`penguin-skin`  
- Note logic here **has to be inside a block** before it use 
### Use a custom CSS Variable
```html
    <style>
        :root {
            --red-color: red;
        }
        --penguin-skin: gray;/*Wrong Position*/
        .penguin {
            position: relative;
            margin: auto;
            display: block;
            margin-top: 5%;
            width: 300px;
            height: 300px;
            --penguin-skin: gray;
        }
        .penguin-top {
                top: 10%;
                left: 25%;
                /* change code below */
                background: var(--penguin-skin);
                /* change code above */
                width: 50%;
                height: 45%;
                border-radius: 70% 70% 60% 60%;
        }
  </style>
```
### Attach a Fallback value to a CSS Variable
```html
    background: var(--penguin-skin, gray);/* can specific a backup color after comma*/
```
### Improve Compatibility with Browser Fallbacks
```html
    <style>
        :root {
            --red-color: red;
        }
        .red-box {
            background: red;
            background: var(--red-color);
        }
    </style>
```
### Cascading CSS variables
```html
    <style>
        :root {
            --red-color: red;/**/
        }

    </style>
```
### Change a variable for a specific area
```html

```
### Use a media query to change a variable
```html
    <style>
        @media (max-width: 350px) {
            :root {
            --penguin-skin:black;
            }
        }
    </style>
```