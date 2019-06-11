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

```html
    
```

## Applied Visual Design
## Introduction to the Applied Visual Design Challenges
- Visual Design in web development is a broad topic. It combines typography, color theory, graphics, animation, and page layout to help deliver a site's message. The definition of good design is a well-discussed subject, with many books on the theme.

- At a basic level, most web content provides a user with information. The visual design of the page can influence its presentation and a user's experience. In web development, HTML gives structure and semantics to a page's content, and CSS controls the layout and appearance of it.

- This section covers some of the basic tools developers use to create their own visual designs
## Create Visual Balance Using the text-align Property
- text-align: justify; 
    - causes all lines of text except the last line to meet the left and right edges of the line box.
- text-align: center; 
    - centers the text
- text-align: right; 
   - right-aligns the text
- And text-align: left; 
    - (the default) left-aligns the text.
## Adjust the Width of an Element Using the width Property
```html
    width: em rm mm;
```
## Adjust the Height of an Element Using the height Property
```html
    height: ;
```
## Use the strong Tag to Make Text Bold
```html
    <strong></strong>
    font-weight:bold;
```
## Use the u Tag to Underline Text
```html
    <u></u>
    text-decoration: underline;
```
## Use the em Tag to Italicize Text
```html
    <em></em>
    font-style: italic;
```
## Use the s Tag to Strikethrough Text
```html
    text-decoration: line-through;
    <s></s>
```
## Create a Horizontal Line Using the hr Element
```html
    <hr/> /*this is a self-closing tag*/
```
## Adjust the background-color Property of Text
```html
    background-color: rgba(45, 45, 45, 0.1)
```
## Adjust the Size of a Header Versus a Paragraph Tag
```html
    font-size
```
## Add a box-shadow to a Card-like Element
```html
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```
## Decrease the Opacity of an Element
```html
    opacity 0 mean full opacity 
```
## Use the text-transform Property to Make Text Uppercase
| Value  |  Result |
|---|---|
|lowercase|	"transform me"|
|uppercase|	"TRANSFORM ME"|
|capitalize|	"Transform Me"|
| initial	 |   Use the default value   
|inherit	|Use the text-transform value from the parent element|
|none|	Default: Use the original text|
## Set the font-size for Multiple Heading Elements
```html
    /*idea here is that h2 only should be used to identify level not the actual size*/
```
## Set the font-weight for Multiple Heading Elements
```html
    same as above
```
## Set the font-size of Paragraph Text
```html
    font-size
```
## Set the line-height of Paragraphs
```html
    
```
## Adjust the Hover State of an Anchor Tag
```html
    a:hover {
        color: red;
    }
```
## Change an Element's Relative Position
- CSS treats each HTML element as its own box, which is usually referred to as the CSS Box Model. Block-level items automatically start on a new line (think headings, paragraphs, and divs) while inline items sit within surrounding content (like images or spans). The default layout of elements in this way is called the normal flow of a document, but CSS offers the position property to **override it**.

- When the position of an element is set to relative, **it allows you to specify how CSS should move it relative to its current position in the normal flow of the page**. **It pairs with the CSS offset properties of left or right, and top or bottom**. These say how many pixels, percentages, or ems to move the item away from where it is normally positioned. The following example moves the paragraph 10 pixels away from the bottom:
```html
    p {
        position: relative;
        bottom: 10px;
    }
```
- Changing an element's position to relative does not remove it from the normal flow - **other elements around it still behave as if that item were in its default position.**

- Positioning gives you a lot of flexibility and power over the visual layout of a page. It's good to remember that no matter the position of elements, the underlying HTML markup should be organized and make sense when read from top to bottom. This is how users with visual impairments (who rely on assistive devices like screen readers) access your content.
## Move a Relatively Positioned Element with CSS Offsets
- The CSS **offsets** of **top or bottom, and left or right** tell the browser how far to offset an item **relative** to where it would sit in **the normal flow of the document**.
```html
    
```
## Lock an Element to its Parent with Absolute Positioning
- The next option for the CSS position property is absolute, which locks the element in place relative to its **parent container**. Unlike the relative position, **this removes the element from the normal flow of the document**, so surrounding items **ignore it**. The CSS offset properties (top or bottom and left or right) are used to adjust the position.

- One nuance with absolute positioning is that it will be locked relative to its **closest positioned ancestor**. If you forget to 
- **add a position rule to the parent item**, (**this is typically done using position: relative;)**, 
- **the browser will keep looking up the chain and ultimately default to the body tag.**
```html
    
```
## Lock an Element to the Browser Window with Fixed Positioning
- The next layout scheme that CSS offers is the fixed position, which is a type of absolute positioning that locks an element relative to the browser window.
- One key difference between the fixed and absolute positions is that an element with a fixed position won't move **when the user scrolls.**
```html
    
```
## Push Elements Left or Right with the float Property
- The next positioning tool does not actually use position, but sets the float property of an element. **Floating elements are removed from the normal flow of a document** and pushed to either the left or right of their containing parent element. It's commonly used with the **width** property to specify how much horizontal space the floated element requires.
```html
    float:right;
```
## Change the Position of Overlapping Elements with the z-index Property
- It must be an integer (i.e. a whole number and not a decimal), and **higher values for the z-index** property of an element **move it higher in the stack** than those with lower values.
```html
    
```
## Center an Element Horizontally Using the margin Property
 - Images are inline elements by default, but **can be changed to block elements** when you set the **display property to block**.
```html
    
```
## Learn about Complementary Colors
- Color theory and its impact on design is a deep topic and only the basics are covered in the following challenges. **On a website, color can draw attention to content, evoke emotions, or create visual harmony. Using different combinations of colors can really change the look of a website, and a lot of thought can go into picking a color palette that works with your content.**
- The color wheel is a useful tool to visualize how colors relate to each other - **it's a circle where similar hues are neighbors and different hues are farther apart.When two colors are opposite each other on the wheel, they are called complementary colors.** They have the characteristic that if they are **combined,** they "cancel" each other out and create a gray color. However, when placed side-by-side, these colors appear more vibrant and produce a strong visual contrast.
- visual impairments consideration

```html
    red (#FF0000) and cyan (#00FFFF)
    green (#00FF00) and magenta (#FF00FF)
    blue (#0000FF) and yellow (#FFFF00)
```
## Learn about Tertiary Colors
- Red (R), green (G), and blue (B) are called primary colors.   
- Mixing two primary colors creates the secondary colors cyan (G + B), magenta (R + B) and yellow (R + G). 
    - These secondary colors happen to be the complement to the primary color not used in their creation, and are opposite to that primary color on the color wheel. 
- Tertiary colors are the result of combining **a primary color** with **one of its secondary color neighbors.** For example, red (primary) and yellow (secondary) make orange. This adds six more colors to a simple color wheel for a total of twelve.
- There are various methods of selecting different colors that result in a harmonious combination in design. One example that can use tertiary colors is called the split-complementary color scheme. 
    - This scheme starts with a base color, then pairs it with the two colors that are adjacent to its complement. The three colors provide strong visual contrast in a design, but are more subtle than using two complementary colors.
    - This color scheme has the same strong visual contrast as the complementary color scheme, but has **less tension**.
```html
    
```
## Adjust the Color of Various Elements to Complementary Colors
- The Complementary Colors challenge showed that opposite colors on the color wheel can make each other appear more vibrant when placed side-by-side. However, the strong visual contrast can be jarring if it's overused on a website, and can sometimes make text harder to read if it's placed on a complementary-colored background. In practice, one of the colors is usually dominant and the complement is used to bring visual attention to certain content on the page
## Adjust the Hue of a Color
- **Hue is what people generally think of as 'color'**. If you picture a spectrum of colors starting with red on the left, moving through green in the middle, and blue on right, the hue is where a color fits along this line. In hsl(), hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between **0 and 360**.
- **Saturation is the amount of gray in a color**. A fully saturated color has no gray in it, and a minimally saturated color is almost completely gray. This is given as a percentage with **100%** being fully saturated.
- **Lightness is the amount of white or black in a color**. A percentage is given ranging from **0%** (black) to **100%**(white), where 50% is the normal color.
## Adjust the Tone of a Color
- The hsl() option in CSS also makes it easy to adjust the tone of a color. Mixing white with a pure hue creates a tint of that color, and adding black will make a shade. Alternatively, a tone is produced by adding gray or by both tinting and shading. Recall that the 's' and 'l' of hsl() stand for saturation and lightness, respectively. The saturation percent changes the amount of gray and the lightness percent determines how much white or black is in the color. This is useful when you have a base hue you like, but need different variations of it.
```html
    
```
## Create a Gradual CSS Linear Gradient
```html
    background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```
## Use a CSS Linear Gradient to Create a Striped Element
```html
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
```
## Create Texture by Adding a Subtle Pattern as a Background Image
```html
    background:  url(https://i.imgur.com/MJAkxbh.png)
```
## Use the CSS Transform scale Property to Change the Size of an Element
```html
    p {
        transform:scale(2);
    }
```
## Use the CSS Transform scale Property to Scale an Element on Hover
```html
    p:hover {
        transform: scale(2.1);
    }
```
## Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
```html
    p {
     transform: skewX(-32deg);
    }
```
## Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
```html
    p {
        transform: skewX(-32deg);
    }
```
## Create a Graphic Using CSS
```html
    <style>
        .heart {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: pink;
        height: 50px;
        width: 50px;
        transform: ;
        }
        .heart::after {
        background-color: blue;
        content: "";
        border-radius: 25%;
        position: absolute;
        width: 50px;
        height: 50px;
        top: 0px;
        left: 25px;
        }
        .heart::before {
        content: "";
        background-color: black;
        border-radius: 50%;
        position: absolute;
        width: 50px;
        height: 50px;

        left: 0px;
    }
</style>
```
## Create a More Complex Shape Using CSS and HTML
```html
    
```
## Learn How the CSS @keyframes and animation Properties Work
- animation-name sets the name of the animation, which is later used by @keyframes to tell CSS which rules go with which animations.
- animation-duration sets the length of time for the animation.
- @keyframes is how to specify exactly what happens within the animation over the duration. This is done by giving CSS properties for specific "frames" during the animation, with percentages ranging from 0% to 100%. If you compare this to a movie, the CSS properties for 0% is how the element displays in the opening scene. The CSS properties for 100% is how the element appears at the end, right before the credits roll. Then CSS applies the magic to transition the element over the given duration to act out the scene. Here's an example to illustrate the usage of @keyframes and the animation properties:
```css
    #anim {
        animation-name: colorful;
        animation-duration: 3s;
    }
    @keyframes colorful {
        0% {
            background-color: blue;
        }
        100% {
            background-color: yellow;
        }
    }
```
## Use CSS Animation to Change the Hover State of a Button
```css
    <style>
    img:hover {
        animation-name: width;
        animation-duration: 500ms;
    }

    @keyframes width {
        100% {
        width: 40px;
        }
    }
</style>
```
## Modify Fill Mode of an Animation
```css
    /*That's great, but it doesn't work right yet. Notice how the animation resets after 500ms has passed, causing the button to revert back to the original color. You want the button to stay highlighted.*/
    button:hover {
        animation-name: background-color;
        animation-duration: 500ms;
        /* add your code below this line */
        animation-fill-mode: forwards;
        /* add your code above this line */
    }
```
## Create Movement Using CSS Animation
```css
    #rect {
    animation-name: rainbow;
    animation-duration: 4s;
    }

    @keyframes rainbow {
    0% {
        background-color: blue;
        top: 0px;
        
    }
    50% {
        background-color: green;
        top: 50px;
        
    }
    100% {
        background-color: yellow;
        top: 0px;
        
    }
```
## Create Visual Direction by Fading an Element from Left to Right
```css
    @keyframes fade {
        50% {
        left: 60%;
        opacity: 0.1;
        }
    } 
```
## Animate Elements Continually Using an Infinite Animation Count
```css
    #ball {
        width: 100px;
        height: 100px;
        margin: 50px auto;
        position: relative;
        border-radius: 50%;
        background: linear-gradient(
        35deg,
        #ccffff,
        #ffcccc
        );
        animation-name: bounce;
        animation-duration: 1s;
        animation-iteration-count: 5;
    }
```
## Make a CSS Heartbeat using an Infinite Animation Count
```html
    animation-iteration-count:infinite;
    infinite ~== finite
```
## Animate Elements at Variable Rates
```html
    same element sam duration time 
    same state at different position
```
## Animate Multiple Elements at Variable Rates
```html
    Same stat different durantion
    during
    duration
```
## Change Animation Timing with Keywords
```html
    animation-duration:
    animation-timing-function:
```
## Learn How Bezier Curves Work
```html
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```
## Use a Bezier Curve to Move a Graphic
```html
    
```
## Make Motion More Natural Using a Bezier Curve
```html
    
```