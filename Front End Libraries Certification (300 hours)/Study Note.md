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

## React

## Redux

## React and Redux

## Front End Libraries Projects