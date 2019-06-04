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