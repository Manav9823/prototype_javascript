# HTML
`HTML tags`: <b> </b>  
`HTML elements`: consists of a start tag, content, and an end tag. <b>This is the content.</b>

`Heading tags`: H1 being at the highest level and H6 at the least.

`redirect to a particular section of a page using HTML`: use anchor tag 
`Attributes`: HTML attributes provide additional information about HTML elements and control their behavior. Eg: id, name, class

`bold vs strong tags`: 
Both <b> and <strong> will render the text in bold by default.
<b> is purely visual, while <strong> conveys importance or urgency.

`create link`: <a href="url">Link Text<a>
`different formats in which colors in HTML can be declared`: built-in, rgb, rgba, hexadecimal

`target attribute in html tag`: <link target="_blank|_self|_parent|_top|framename">

_blank: It opens the link in a new window.
_self: It opens the linked document in the same frame.
_parent: It opens the linked document in the parent frameset.
_top: It opens the linked document in the full body of the window.
framename: It opens the linked document in the named frame.

`alt in image`: The <img> alt attribute is used to specify the alternate text for an image

`table tags`: th, tb, thead, table, tbody, tfooter

`lists`: unordered, ordered, defination

`iframe`: The <iframe> element is still supported and used to embed another HTML document within a current HTML page. src, width, height, title
`embeded`: The <embed> tag in HTML is used for embedding external applications which are generally multimedia content like audio or video into an HTML document. height, src, width, type

`meta tag`: <meta> tags do not display content; they only provide metadata. They help with SEO. Placed inside the head tag

`HTML layout`: 
`Semantic tags`: have meaningful names and clearly describes its meaning to both the browser and the developer.
Eg: header, nav, main, section, article, aside

`HTML entities`: HTML entities are special codes used to display reserved characters, symbols, or invisible characters in HTML documents. 

`non-semantic `: div, span

`void elements`: The elements that only have start tags and do not contain any content within it, these elements are called Void Elements
`changing inline to block`: display: block
`Container vs Empty tags`: 
The Container tags are generally divided into three parts, i.e., the opening tag, content(which will display on the browser), and closing tag.
Eg: html, head, body
The Empty Tags that do not contain any closing tags are known as empty tags. Eg: br, link, img

`media element tags`: audio, video, source

`inline block inline-block`

1. Inline
Definition: Inline elements are displayed in line with the text or other inline elements, without starting on a new line. They only take up as much width as necessary and do not break the flow of the content.
Examples: <span>, <a>, <strong>, <em>, <img>.
Behavior:
Does not start on a new line.
Only takes up as much width as the content.
Cannot have width and height set explicitly.
Margins and paddings only apply horizontally; vertical margins and paddings do not affect the surrounding layout.

2. Block
Definition: Block elements are displayed as blocks, occupying the full width of their parent container, and always start on a new line.
Examples: <div>, <p>, <h1>, <ul>, <li>.
Behavior:
Starts on a new line, pushing other content below.
Takes up the full available width of its parent by default.
Can have width, height, margins, and padding set explicitly.
Margins and padding affect both the vertical and horizontal layout.

3. Inline-Block
Definition: Inline-block elements combine characteristics of both inline and block elements. They flow inline with other elements but behave like block elements, meaning you can set width, height, padding, and margins.
Examples: Commonly used with <span>, <button>, <input>, and <img> when their behavior is altered via CSS.
Behavior:
Does not start on a new line; flows inline with other content.
Respects the width and height properties, unlike inline elements.
Margins and padding affect both vertical and horizontal positioning.

`div vs span`: div: block  span: inline, used to attach css to small section
`How can we create a nested webpage in HTML?`: iframe, embeded tag


# CSS(https://www.geeksforgeeks.org/css-interview-questions-and-answers/)

`selectors` in css

        Universal Selector(*)
            Selects all elements in the document.

        Element Selector
            p {
                color: blue;
            }

        class Selector(.)
        id selector(#)
        descendant selector ('')
        child selector (>)  

        Grouping Selector (Selector1, Selector2)
        h1, h2, h3 {
            font-family: Arial, sans-serif;
        }

        Pseudo-classes 
        a:hover {
            color: red; /* Applies when hovering over a link */
        }

        `child selector example`

        <div>
            <p>Selected by child selector</p>
            <section>
                <p>Not selected by child selector</p>
            </section>
        </div>

        div > p {
            color: red;
        }
        Only the first <p> inside the <div> is selected because it is a direct child. The second <p> is not selected because it is nested inside the <section>.

        `descendant selector example`
        <div>
            <p>Selected by descendant selector</p>
            <section>
                <p>Also selected by descendant selector</p>
            </section>
        </div>

        div p {
            color: blue;
        }

        Both <p> elements inside the <div> will be selected, even though the second <p> is nested within a <section>.


`rgba`(red green blue )
A (Alpha) which specifies the transparency of elements. The value of alpha lies between 0.0 to 1.0 where 0.0. represents fully transparent and 1.0 represents not transparent.

`margin vs border`
Margin is used to create space around elements and padding is used to create space around elements inside the border.


`CSS box model`
The CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself.
Box-Model has multiple properties in CSS. Some of them are given below:

borders
margins
padding
Content

`CSS overflow`
The CSS overflow controls the big content. It tells whether to clip content or to add scroll bars. The overflow contains the following property:

visible
hidden
scroll
auto
1. Visible: The content is not clipped and is visible outside the element box.

2. Hidden: The overflow is clipped and the rest of the content is invisible.

3. Scroll: The overflow is clipped but a scrollbar is added to see the rest of the content. The scrollbar can be horizontal or vertical.

4. Auto: It automatically adds a scrollbar whenever it is required.

Overflow-x and Overflow-y: This property specifies how to change the overflow of elements. x deals with horizontal edges and y deals with vertical edges.

`CSS positioning`(Read from the question gfg)

# JAVASCRIPT                                                                  

Data Types 
    Primitive: boolean string 
    Non Primitive Objects      


`Hoisting`: Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. 

function hoisitng is done completely 
greet() // hii output

function greet() {
    console.log('hii')
}


variable hoisting returns undefined in case of var and refrenceError in case of let and const

greet()
function greet() {
    console.log('firstName') // undefined
    var firstName = 'manav';
    console.log('lastname') // throws Error Refrence Error
    let lastName = 'bansal'
}

== vs === : Type checking in JS

if("0" == false ) return true  // True as 0 will coreced to false implicit corion
if("0" === false ) return true  // False Strict checking

`coercion`: Implict conversion of one data type to another
String coercion: 3 + "3" = "33" (Number value is automatically changed to string type)

Implicit Coercion: 3 + "3" = "33" (Number value is automatically changed to string type)
Explicit Coercion:Number(), a.toString() // methods for explicit coericion 

`statically or Dynamically`: 
JS is a Dynamically typed language means the variable type is checked during run time 

pass by value vs pass by refernce

`IIFE`: IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

(function () {
  // logic here
})();


`HOF`: Functions which takes another function as argument or return a function as output  
First Class Functions: If a function can be treated as a argument, variable or can be returned from a function

`this`: this keyowrd refers to the object that the function is a part of


the value of this changes based on where and hoe its used

- this refers to the object that the method is called on

const child = {
    name: 'manav',
    age: 18,
    yourBio = () => {
        console.log(`my name is ${this.name} and age is ${this.age}`) // inside the obj this refers to the child
    }
}

child.yourBio();

- this refres to the window object in global context

console.log(this)

- this refers to the global context inside simple function

function fun(){
    console.log(this)
}

- this refers to the instance inside the constructor
- Arraow function don't have there own this. Instead they inherit this from the surronding context in which they are defined. This is called lexical scooping.
- Inside classes this refres to the instance of the class

there are basically three values of this 

global context
object itself
surronding this 


If you're running this in strict mode ('use strict'), this at the top level of a module will be undefined. Otherwise, it should point to the window object in a browser environment.

Examples: 

1. const obj = {
    name: "manav",
    takeSelfie: function() {
        console.log(this.name)
    }
}

obj.takeSelfie() // manav

2. console.log(this) // Global context

3. function greet() {
    console.log(this)
}

greet() // the global object


`call apply bind`
Call: The call() method invokes a function with a given this value and arguments provided one by one
Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
Bind: returns a new function, allowing you to pass any number of arguments


`Rest vs spread operator`:  

The rest operator collects multiple elements and condenses them into a single array or object
function a(...numbers){
    console.log(numbers)
}

a(1, 2, 3, 4)


Spread operator
The spread operator expands or spreads elements from an array, object, or iterable into individual elements

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

# call_apply_bind

const obj = {
    name: 'manav',
    type: 'human'
}

function greet(msg){
    console.log(`Hii ${this.name} `, msg)
}
greet.`call`(obj, 'later')
greet.`apply`(obj, ['later'])
const newGreet = greet.`bind`(obj)
newGreet('later')


`Scope and Scope chain`

`Closures`: A closure is the combination of a function bundled(enclosed) together with its lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables, functions and other data even after the outer function has finished its execution.

var let const

arrow functions
`promises`: Its an object representing eventual completion or failure of an async operation.   
callback
Dead Temporal Zone
Strict Mode

`Cookie`: A cookie is a piece of data that is stored on your computer to be accessed by your browser.
Akshay Saini notes

`Slice`: Slice method doesn't mutate the original array but it returns the subset as a new array.
`Splice`: Splice method modifies the original array and returns the deleted array.

Callback Hell

setTimeout(()=>{

}, 1000)

function fun(){

}

Inversion of Control: When we pass a function inside another function we are giving the control of that function to some another function and that can be really dangerous

api.createOrder(cart, function (){
    api.payment(function (){
        api.showPaymentPage()
    })
})

Removing callback hell

createOrder(cart)
.then((orderId)=> return proceedToPayment())
.then((paymentInfo)=> return showOrderSummary())
.then((balanceInfo)=> return showbalanceInfo())
.catch(()=>)


Creating a promise

return new Promise(function(resolve, reject){

})

async
async functions always returns a promise (either you return a promise or async will wrap return statement inside promise and return it) 

function getData() {
    setTimeout(()=> {
        return new Promise((res olve, reject)=>{
            resolve("resolved")
        })
    }, 100000)
}

function getData2() {
    setTimeout(()=>{
        return new Promise((resolve, reject)=>{
            resolve("resolved")
        })
    }, 200000)
}

async getDat(){
    const val1 = await getData()
    console.log(val1)
    const val2 = await getData2()
    console.log(val2)
}

after 10 sec first result
then after 10 sec second result

`Promise.all([])`

Promise.all is used to execute multiple promises concurrently and resolve them into a single promise
Returns a single promise.
Resolves only when all promises have resolved.
Rejects immediately if any promise is rejected.

# Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Output: [10, 20, 30]
  })
  .catch((error) => {
    console.error('One of the promises rejected:', error);
  });

# Promise.allSettled([])

Promise.allSettled is used to execute multiple promises concurrently and resolve them into a single promise that fulfills when all of the input promises have settled (either fulfilled or rejected). Unlike Promise.all, it does not reject when a promise is rejected; it waits for all promises to settle.

const promise1 = Promise.resolve(10);
const promise2 = Promise.reject('Error in promise2');
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(30), 1000); // Resolved after 1 second
});

# Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
    // Output:
    // [
    //   { status: 'fulfilled', value: 10 },
    //   { status: 'rejected', reason: 'Error in promise2' },
    //   { status: 'fulfilled', value: 30 }
    // ]
  });



Promise.race([])

# How to make object immutable 
using Object.freeze(obj)

# async vs defer

Html page parsing is done line by line whenever the page encouters script tag it starts downloading the script file and then parse code after that. 
In case of async the whenevner the html encouters async script it starts downloading it in the background and continues parsing the html when the 
script is downloaded it stops parsing immediately and executes the script file. In case of defer everything is same its just that when whole parsing is 
done then only execution of script is done

# In JavaScript, you can accept a variable number of arguments in a function using the arguments object or the rest parameter (...).

function displayArgs() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
displayArgs(1, 2, 3, 4);

function displayArgs(...args) {
  args.forEach((arg) => console.log(arg));
}
displayArgs(1, 2, 3, 4);



# Shallow cloning vs deep cloning

const userDetails = {
  name: "John Doe",
  age: 14,
  verified: false
};

const newUser = userDetails;
console.log(newUser); // {name: 'John Doe', age: 14, verified: false}

The original object is affected because objects are reference types.
This means any value you store either in the clone or original object points to the same object.
Changing the value using newUser will also change the value of userDetails


If you want to copy without reference type below are the ways to do it 
Copying using different techniques

const newUser = {...UserDetails}
const newUser = Object.assign({}, userDetails)
const newUser = JSON.parse(JSON.stringify(userDetails))


// Deep object
const userDetails = {
  name: "John Doe",
  age: 14,
  status: {
    verified: false,
  }
};

Notice that the deep object has more than one level because there is another object in the userDetails object.
A deep object can have as many levels as you want.

Note: When you use the spread operator or Object.assign() method to clone a deep object, the deeper objects will be referenced.

# Read shallow and deep clone(https://www.freecodecamp.org/news/clone-an-object-in-javascript/)

# regex

const regex = /pattern/flags;


# built in methods (https://dev.to/elpepebenitez/built-in-methods-in-javascript-4bll)
# Additional Methods: 
    Split
    join
    a.toString()

# map filter reduce

const arr = [1, 2, 3, 4];
const output = arr.map((x) => x*2 ) [2, 4, 6, 8]
const output2 = arr.filter((x) => x > 2) [3, 4]


function getSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
}

getSum(arr)

or

const output3 = arr.reduce((acc, curr)=>{
    acc = acc + curr
    return acc
}, 0) // 10

Reduce takes 2 arguments first is the function which has 2 params acc, curr
and second is the intial value of acc

acc is the accumulate(or behave like the sum variable above)
curr is the curr element 


# closure
function outerFunction() {
    let outerVariable = "I'm outside!";
    
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}

const closure = outerFunction();
closure(); // Output: "I'm outside!"


# see nodejs_practice where implemented everything

# Debouncing in JavaScript
Debouncing is a technique used to control the rate at which a function is executed. It ensures that a function is only called after a certain delay has passed since the last time it was invoked. This is particularly useful for handling events like resizing, searching, or scrolling efficiently.

# Garbage collection
Memory management in JavaScript is performed automatically and invisibly to us
The main concept of memory management in JavaScript is reachability.
Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.


function getNumbers() {
  return [1, 2, 3];
}
const firstResult = getNumbers();
const secondResult = getNumbers();
console.log(firstResult === secondResult); // false 


`Event binding` is a concept in JavaScript that allows you to attach event listeners to DOM elements so that specific
functions (event handlers) are executed when a particular event occurs 
(e.g., clicking a button, hovering over an element, pressing a key). 
Event binding is crucial for creating interactive web applications.

`event bubling`: The process of propagating from the closest element to the farthest away 
element in the DOM (Document Object Modal) is called event bubbling.

`event capturing`: the process of propagating from the farthest element to the closest 
element in the DOM is called event capturing. 

`e.stopPropogation()` to end event capturing and bubling

Document → HTML → Body → Parent Element → Target Element (`Capturing`)
Target Element (Event Handling)
Target Element → Parent Element → Body → HTML → Document (`Bubbling`)

Order of Execution(If both phases are enabled, capturing phase needs to be enabled but the bubbling is by default):

Capturing Phase happens first.
Target Phase is when the event is handled by the target element itself.
Bubbling Phase happens last, after the target phase, as the event bubbles back up.

# Javascript-refrences(https://daveceddia.com/javascript-references/)

When a variable holds one of these primitive types, you can’t modify the value itself. 
You can only reassign that variable to a new value.

The difference is subtle, but important!

Said another way, when the value inside a box is a string/number/boolean/symbol/undefined/null, 
you can’t change the value. You can only create new boxes.

This is why, for example, all of the methods on strings return a new string 
instead of modifying the string, and if you want that new value, you’ve gotta store it somewhere.


The other category is the object type.

The big difference from primitive types is that objects are mutable! 
You can change the value in the box.

# Cloning the objects: Three different ways below are

# Spread Method
let clone = { ...userDetails }

# Object.assign() Method
let clone = Object.assign({}, userDetails)

# JSON.parse() Method
let clone = JSON.parse(JSON.stringify(userDetails))

# Loadash to clone the objects 

# map vs forEach

`Return Value`:
map: Returns a new array with the results of applying the provided function.
forEach: Returns undefined and is used only for side effects.


`Chaining`:
map: Can be chained with other array methods (e.g., .filter(), .reduce()) because it returns an array.
forEach: Cannot be chained directly because it returns undefined.

# Generator function

In JavaScript, a generator is a special type of function that can pause its execution and later resume from where it left off. This is achieved using the function* syntax to define a generator function and the yield keyword to pause and resume execution.


`block scope`
Anything inside this {} is block 

var variables are function scoped, they will be stored in the global context while let and const are blocked scope
there will be a different way to store them and it will be blocked scope


{   
    
    var a = 10;
    var b = 100;
    var c = 1000;
    console.log(a) // Output: 10 shadowing in js
    console.log(b)
    console.log(c) 
}
console.log(a) // Output: 10
console.log(b) // Output: Reference error

`shadowing in JS`
    
var a = 100;
let b = 20

{
    var a = 10;
    let b = 200;
    console.log(a) // Output: 10 shadowing in js
    console.log(b) // Output: 200
}
console.log(a) // Output: 10
console.log(b) // Output: 20

we know that let and const are stored in different scope than the global scope, it is known as script scope

so there will be 3 scopes as defined below

Global scope: 
a = 10

Script scope: 
b = 20

block scope: 
b = 200

# scope hierarchy in JavaScript. The priority of scopes goes from inner-most to outer-most scope. In other words, the inner scope has more priority than the outer scope. That is why, the variables inside the function are prioritized and then when the function ends, they are gone from the memory.


# Object.create() for inheritance, using extend keyword is also for inheritance

const parent = {
    lastName: "bansal";
    motherTongue: "Punjabi"
}

const child = Object.create(parent)
child.firstName = "manav"

console.log(child.lastName) "bansal"

# Methods in Js
Object.defineProperty()

# Polyfills
A polyfill is a piece of code (usually JavaScript) that adds missing functionality to older browsers that do not support modern features.

Why Do We Need Polyfills?
1. 🌍 Cross-Browser Compatibility: Older browsers may not support ES6+ features like map, filter, reduce, Promise, etc.
2. 🏗 Backward Compatibility: Allows new JavaScript features to work in older environments.
3. 🚀 Enhances User Experience: Ensures smooth functionality across different devices.

# Polyfill Example for map

Array.prototype.myMap = function(callback){
    let result = []
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this))
    }
    return result
}

let array = [1, 2, 3, 4]
const result = array.myMap((num) => num * 2)
`console.log(result)`


# React 
# code Splitting(https://dev.to/franklin030601/code-splitting-in-react-js-4o2g)

Major features of react
    JSX (developer write Html in JS code)
    Virtual DOM
    SSR
    Unidirectional data flow
    reusable components

`Data binding`(https://www.joshwcomeau.com/react/data-binding/)
 
`Functional Components`
    Function components are the simplest way to create a component in React. They are pure JavaScript functions that take a props object as the first parameter
    and return React elements to display the output.

`Class Components`

Alternatively, you can use ES6 classes to define a component. 

`StateReact`
State of a component is an object that holds some information that may change over the lifetime of the component.
 The important point is whenever the state object changes, the component re-renders.

`Props`
Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes.


The state entity is managed by the component itself and can be updated using the setter(setState() for class components) function.
Unlike props, state can be modified by the component and is used to manage the internal state of the component.
Moreover, changes in the state trigger a re-render of the component and its children. The components cannot become reusable with the usage of state alone.

On the otherhand, props (short for "properties") are passed to a component by its parent component and are read-only, meaning that they cannot be modified by the own component itself. Also, props can be used to configure the behavior of a component and to pass data between components. The components become reusable with the usage of props.

`Virtual DOM`
The Virtual DOM (VDOM) is an in-memory representation of Real DOM

`React Fiber`
Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16

`Reconciliation`
Reconciliation is the process of comparing the previous state of the DOM with the new state, identifying the differences, and updating only the necessary parts to reflect the changes. 
The diffing algorithm is a core part of this reconciliation process in React.js

`Diffing algo`

`Controlled Component`
A component in react is referred to as controlled when we let react control the component for us. 
It means that the component controls the input form, and all of its changes are completely driven by event handlers like setState().

`Uncontrolled`
Uncontrolled Components are the components that are not controlled by the React state and are handled 
by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.

`Controlled vs uncontrolled`
In a controlled component react, state handles all the form data, whereas, in an uncontrolled component, the HTML form element data is managed by only the DOM.
If you are using a controlled component, you are in control of your form input values. The developer can decide what to insert or not and where to insert it.

`Pure Components`
Pure components are the components which render the same output for the same state and props.
In function components, you can achieve these pure components through memoized React.memo() API wrapping around the component.
This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison. So it will be helpful for performance optimizations.

`HOC` What When Why How
React.Memo()
A Higher-Order Component (HOC) in React is like a chef’s recipe that takes a basic ingredient (a component) and
adds special seasonings and flavors (additional props and behavior) to create a customized dish (a new component) without altering the original recipe (component).

`StateFul`
If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. 
These stateful components are either function components with hooks or class components.

`StateLess`
If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components.

`Key` in React
A key is a special attribute you should include when mapping over arrays to render data. Key prop helps React identify which items have changed, are added, or are removed.

Why should index not be used as key

`Functional vs Class Components`
Functional components are simple functions that accept props and return JSX. They are stateless and don't use a constructor or React lifecycle methods.

Class components are ES6 classes that extend React.Component. They have a render method, can use state, a constructor, and React lifecycle methods. They are suitable for managing state and implementing more
complex logic.

React Hooks
React Hooks are built-in functions introduced in React version 16.8 that allow developers to utilize state and lifecycle methods within functional components.

`useState()`
The useState() is a fundamental React Hook used to introduce state variables into functional components

`useEffect()`
Enables performing side effects in functional components, like data fetching or DOM manipulation.

`useContext()`
Creates shared data accessible by components in a hierarchy without passing props through each level

`useReducer`
`useMemo`
The useMemo hook in React is used for memoizing expensive calculations so that they are not unnecessarily recomputed on every render
`useCallback`
The useCallback hook in React is used to memoize callback functions, similar to how useMemo is used to memoize values.
It's particularly useful when passing callbacks to child components that rely on reference equality to avoid unnecessary re-renders.

`useRef`
The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
Unlike useState if we change a value in useRef it will not re-render the webpage

`Ref` Access and interact with DOM elements directly in react. They dont allow rerenders

`JSX`
    Syntatic sugar for react.createElement()
    Javascript XML
    javascript along with HTML

`Difference between Element and components`
    Element: Plain object describing what you want to appear on the screen <div>Login</div>
    Components:  A component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output

`Different phases in react lifecyle`
    Intializing
    Mounting: Component is first created and inserted into the DOM
    Updating: Components state and props are changed
    Unmounting: Component is removed from DOM

`Mounting` phase: 3 main lifecycle Methods
componentWillMount(): The componentWillMount() lifecycle hook is primarily used to implement server-side logic before the actual rendering happens, such as making an API call to the server.

Method is invoked right before component is rendered on the screen for the first time

componentDidMount():  All the AJAX requests and the DOM or state updation should be coded in the componentDidMount() method block.


Method is invoked right after component is rendered on the screen for the first time

`Updating`:  It is also responsible for handling user interaction and passing data within the component hierarchy. Some of the lifecycle methods falling into this category are as follows:

componentWillReceiveProps(): The method invoked immediately before the props of a mounted component get reassigned.

shouldComponentUpdate(): The method invoked before deciding whether the newly rendered props are required to be displayed on the webpage or not.

componentWillUpdate(): The method invoked immediately before the component is re-rendered after updating the states and/or properties.

componentDidUpdate(): The method invoked immediately after the component is re-rendered after updating the states and/or properties.

`Unmounting`: Unmounting is the last phase of the ReactJS component lifecycle. This phase includes those lifecycle methods which are used when a component is getting detached from the DOM container. It is also responsible for performing the required cleanup tasks. Once unmounted, a component can not be re-mounted again. 

componentWillUnmount(): The method invoked immediately before the component is removed from the DOM at last, i.e. right when the component is completely removed from the page and this shows the end of its lifecycle.


`Props Drilling`
`Context`
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

# Error boundaries
Error boundaries are a feature in React that allows you to catch JavaScript errors in the component tree, log those errors, and display a fallback UI instead of crashing the whole application.

`Redux`

Redux is a state management library used for predictable state management in JavaScript applications.
How Why When 

`Server Side Component` use server hooks are not supported 

SSR VS CSR
SEO

Some project to discuss about

We are currently building a new project named as multiboard kanban view. So what it basically does is that there are multiple boards around and there are items inside the board so we fetch those items on the basis of status for those items and show them on the multiboard for better user experience. Everything was running fine until we tested our code for more than 50 boards and 1000 items intially it took a lot of time to load that kanban view and later with more and more items it failed eventually. So to tackle that problem we build a our code using a npm package named as react window

If there is one thing known for being expensive when it comes to developing web pages, it’s manipulating the DOM. React itself aims to decrease the number of times we directly interact with the DOM.

The libraries we’ll discuss in this article help manipulate the DOM in a more effective way when rendering an extensive list of items. They work with the premise that items in a list that are not currently being shown to the user don’t need to exist in the DOM just yet.

List virtualization, or windowing, is a technique for improving the performance of rendering long lists by only writing the visible portion of the list to the DOM.

This works by having a small window element moving over a bigger container, which will host the items, but will only render the items that are currently visible to the user through that window. A few other items in the list, which are outside the limits of the window but are close to the upper and lower boundaries, might be rendered so that when they enter into the view, they will already be loaded into the page. This gives the user a more natural scrolling experience.

Without windowing, React has to write your entire list to the DOM before one list item is visible. So if I had 10,000 list items, I’d have to wait for React to write at least 10,000 <div />s to the DOM before the first item in that list is visible. Ouch.



# React Router
# refforwarding, examples of useRef, useCallback, useMemo, portals,
# concurrent react

# Redux

# Nodejs


Nodejs is single threaded asynchronous event driven javascript run time environmnet

package.json: configration file in which we can add scripts and have dependencies of our project
`Modules`: 
Consider modules to be the same as JavaScript libraries.
A set of functions you want to include in your application.

`Built-in Modules`

http
url
fs

`Local Modules`

When you work with Node.js, you create local modules that you load and use in your program.
const sayHello = require('./sayHello')
sayHello("Maria")

`Third-Party Modules`
npm install <name-of-package>

import modules require modules
module.export = add

`URL`: uniform resource locator

https://ww.manav.com/about?userId=1:

https: protocol(HyperText Transfer Protocol Secure) (Encrypted)
http: (not secure),
ws : (web-sockets)
www.manav.com: Domain- User Friendly Name of IP address of my server
/about: path
userId=1: query params


HTTP Method

GET: GET request is used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.

POST: POST request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.

PUT: A PUT request is used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload. If there are no resources that match the request, it will generate one.

PATCH: PATCH is similar to PUT request, but the only difference is, it modifies a part of the data. It will only replace the content that you want to update.

DELETE: A DELETE request is used to delete the data on the server at a specified location.

HEAD: No message body

OPTIONS: what operations are available


The POST method is used to submit data to a server, the PUT method is used to replace or create a resource at a specific URL, and the PATCH method is used to apply partial modifications to a resource.

cookies
The cookies are the data stored in the user’s browser for quick access. For example, whenever we log in to any website, the server returns the access token, which can be stored in the browser’s cookie with the expiry time. So, whenever a user revisits the website, they don’t need to log in to the website repeatedly if the access token stored in the cookies has not expired

Authentications
Authentication is the process of verifying the identity of a user, ensuring they are who they claim to be. This is typically achieved through the use of credentials, such as usernames and passwords.

Authentication Best Practices

Use HTTPS: Always use HTTPS to secure data transmission between the client and server, especially when handling login credentials.
Password Hashing: Store passwords securely by hashing and salting them. Libraries like bcrypt can help with this.
Session Management: Use secure and random session tokens to manage user sessions.

libraries:

 passport.js: Passport.js is a widely-used authentication library for Node.js. It supports various authentication strategies, including local (username and password), OAuth, and OpenID
 JWT: JSON Web Tokens are a popular way to implement authentication and authorization in Node.js. Users receive a token upon login, which they include in subsequent requests

Authorization
Authorization defines what actions a user is allowed to perform after they’ve been authenticated. It involves granting or denying access to specific resources or functionality.

Role-Based Access Control (RBAC): Implement RBAC to assign roles (e.g., admin, user) to users and restrict access based on their roles.
Middleware: Use middleware functions to check a user’s permissions before granting access to a route or resource.

express middlewares:  
Middleware functions are functions that have access to the request object (req), the response object (res),

HTTP vs https: 

http is like a open postcard any one can open and read the data whereas in https its like a secured lock that can only be open with a key, https encrypts the data using ssl or tls and then the data is send from the one part to another. 
http run over port 80 and https run over port 443

`Http status messages`(https://www.w3schools.com/tags/ref_httpmessages.asp)
`Http headers`(https://www.geeksforgeeks.org/http-headers/)

There are two types of API functions in Node.js:
Asynchronous, Non-blocking functions
Synchronous, Blocking functions

Libuv its a library which has implementation of Event Loop and Thread Pool
event emitter

V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome. V8 is the JavaScript engine i.e. it parses and executes JavaScript code.

Generally, Buffer refers to the particular memory location in memory. Buffer and array have some similarities, but the difference is array can be any type, and it can be resizable. Buffers only deal with binary data, and it can not be resizable

streams

# Backend

`CORS` origin: 

different servers doesn't allow the request localhost:3000 and localhost:3001 will give a CORS origin error

Solutions: Tell the backend developer to whitelist the domain or ip
`Proxy`
`static assests `
`dotenv`

`.gitignore generator`
`.gitkeep`

`cors`: (https://dev.to/arbazsiddiqui/cors-understanding-cross-origin-resource-sharing-4fj)(https://rbika.com/blog/understanding-cors)
`cookie parser`:cookie-parser is middleware that simplifies handling cookies. It parses incoming cookies from client requests and makes them accessible in the req.cookies object. This makes it easier to read and manipulate cookies in your Express JS application without manual parsing.
`express.json()`: It is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());
`express.urlencoded()`: It is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());
`express.static()`: It serves static files and is based on serve-static. 

`package.json`

express: "^4.19.0" ----> Why do we have three dot in the version

4       .     19   .   0
(Major)     (Minor)     (patch)


patch: Small change/bugfix          =====> 4.19.1
Minor: backward compatable          =====> 4.20.1
Major: when breaking changes happen =====> 5.20.1

^ ====> Allowing my project to automatically updated to 4.x.x
~ ====> Find what will happen


`Authorization`
Authorization is the process of checking permission. Once the user has logged in, i.e., the user has been authenticated, the process of reviewing the permission to see if the user can perform the relevant operation or not is called authorization.


`Authentication`: Authentication is the process of verifying the identity. For example, when you enter your credentials at a login screen, the application here identifies you through your credentials. So this is what the authentication is, the process of verifying the identity.

`HTTP Basic Authentication`(https://roadmap.sh/guides/http-basic-authentication):  
sends the WWW-Authenticate header with the value set to Basic, which tells the browser that it needs to trigger the basic authentication flow.

`Cookie based Authentication`: Cookies are domain specific

SSO:

JWT: 

OAuth(https://www.youtube.com/watch?v=sjvL24fciQg&ab_channel=DuoCoderz)


`Multer`
`Cloudinary`

`http Headers`

Request Headers:  from client
Response Headers: from server
Representation Headers: encoding/compression
Payload: data

Most common headers:
    Accept: application/json
    user-agent: postman etc
    authorization
    content-type
    cookie
    cache-control

CORS Headers
Security Headers


HTTP Status Code

1xx Informational
2xx Success
3xx Redirectional
4xx Client Error
5xx Server Error

101 Continue
102 Processing
200 OK
201 created a new resource
202 accepted not completed
301 temporary redirect
302 permanent redirect
400 bad request
401 unauthorized
402 payment required
404 not found
500 internal server error
504 Gateway timeout


# MySQL
MySQL is an open-source relational database management system (RDBMS) that is widely used for managing structured data.

CREATE DATABASE mydatabase;


IN: multiple condition in one WHERE CITY IN() Shothand for multuple OR
ORDER BY     ASC DESC
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

UPDATE SET
DELETE
SELECT * FROM Customers
LIMIT 3 OFFSET 3(Offset 3 means start from index 4);
MIN
MAX
COUNT
AVG
SUM
LIKE
The percent sign (%) represents zero, one, or multiple characters
The underscore sign (_) represents one, single character
LIKE 'a%;
LIKE '_a'
AS
JOIN
UNION



select s.name, s.rollNo, sc.course from STUDENT s LEFT JOIN STUDENT_COURSE sc where s.rollNo = sc.rollNo

# Database

`Normalization`: It is a technique to remove or reduce duplicay from a table Row
Row level: 2 rows are exactly the same, To remove set a primary key in the table

Column Level: 2 columns are exactly same
problems: insertion, updation, deletion problems

`Indexing in mongodb`: 

Indexing is a crucial feature that enhances query processing efficiency. When we simply find using find() command, COLSCAN is done and we are able to find the document and send that to the server on the other hand if we create an index on a field inside a document suppose on name field we create an index, we have generate a new data structure where the data will be in sorted format for the name and now we will do an index scan, also there will be a pointer to this document and the document will be retreved and send to the server. Indexes are stored in the B-tree(balanced) data structures. It stores index keys(on which indexing is done) and pointer to the documents in the collection. When a query is executed, MongoDB can use the index to quickly locate the documents that match the query by searching through the b-tree and using the pointer can fetch those document from the collections

There is a automatic indexing on the _id field


The trade off
    storage space
    write performance

Different types of indexing
    `Single field`  db.students.createIndex({age: 1}), index is created on the age field and the data is sorted in asc order
    `Compound field` db.students.createIndex({age: 1, gender: 1}) index is created on age and gender, sorting is done first on the age and then gender bases
    `MultiKey index`
    `Text Index`



`Queries`
    createIndex()
    dropIndex()
    getIndexes()
    partialFilterExpression()
        db.students.createIndex({age: 1}, partialFilterExpression: {age: {$gt: 22}}) // indexing will be done only on age which is greater than 22
    covered query

`Winning plan`: if there are 2 indexes inside a query, mongodb will first check which query filter has the least time to fetch the data just before running the query and the one with the least time will be declared as a winning plan it will store this inside the cache so that it doesnt have to run the query again and again to find the winning plan 


# Namaste Nodejs Notes(https://heyashu.in/digital-garden/notes/namaste-node-js/e2-js-on-server)

`server`: A server is simply a remote computer. When you run your React app locally, you call it a "local server"

`Story about JS Engine and Node.js`:
You know how JavaScript runs in browsers? Guess, guess! It’s the JavaScript engine! 🧠 Every browser has its own JS engine. It takes the JS code and converts it. But wait, isn’t the JS engine also software? Yep, it’s a program! And what language is it written in? Hmm, what comes after C? D? Nope, it’s C++! 🤓. Most JS engines, like the V8 engine in Chrome, are written in C++. Check out the GitHub repo of V8 JS engine. Over 70% of the code is in C++! 

Every JS engine is written differently, converting JS code to machine code.
Imagine this: Your JS code ➡️ V8 Engine (C++) ➡️ Machine Code.

`Let's write code`
In browser we a window object that provides us with a lot of functionality, such as setTimeout, setInterval etc. These things are not provided by V8 but by the browsers. In nodejs there is nothing called a browser so we have something called global, now similar to browsers this is not porvided by V8 but is present provided by nodejs. 

`this keyword in node js & globalThis`
this keyword by default in node js does not point to global object, as in browsers self, this, frame and window points to the window object, there is `globalThis`

`Module.exports & require`

So, when you use require to include a new module into another module, the code in the required module runs first, and then the rest of the code in your file executes. You can use the require keyword anywhere in your Node.js code.

Note: You can’t directly access variables and functions from one module in another module just by using require. Even if the code runs, you can't directly access the code. For example, if a module sum.js has a function getSum(), and you import sum.js, you still can't access getSum() in your entry file. But why is that?

The reason is that Node.js modules are encapsulated, which means each module has its own scope. To access variables or functions from another module, you need to explicitly export them using module.exports or exports.Modules protect their code by default.

`Common Js and ES Modules`
What we've learned so far with require and module.exports is called CommonJS Modules or CJS. This is the traditional module system used in Node.js. But there's another module system called ES Modules (or ESM, mjs), which is the standard for JavaScript modules in modern web development.

To use ES Modules in Node.js, you need to set your project to use modules. Create a package.json file and include "type": "module" in it. This tells Node.js to use the ES Module system for your project.


# MongoDB

mongoimport --db salestest --collection listingAndReviews C:\MongoSH\listingsAndReviews.json
mongoexport


`elemMatch`
The $elemMatch operator is used to match a single element in an array that meets all specified conditions simultaneously. This means that $elemMatch does not look across multiple elements in the array; instead, it tries to find a single element that satisfies all conditions defined inside it.

`$and`
Example:
When a condition like { "grades.grade": "A" } is used, MongoDB searches through the grades array within each document to see if there is at least one element where grade is "A".
Similarly, { "grades.grade": "B" } checks if there is at least one element in the grades array with grade equal to "B".

MongoDB does not require both conditions to be true for the same element within the array. Instead, it checks if there’s at least one grade: "A" anywhere in the grades array and at least one grade: "B" anywhere in the same array.
If both conditions are satisfied anywhere within the grades array, the document is considered a match.

`Upsert`
In MongoDB, an upsert operation is used to update a document if it exists or insert a new document if it does not exist
To perform an upsert, you typically use the updateOne, updateMany, or findOneAndUpdate methods with the upsert option set to true

`$elemMatch vs $and`

$elemMatch checks within a single element of the array for all conditions to be true, while $and checks conditions across the whole array, potentially matching separate elements for each condition.

$elemMatch is stricter because it looks for a specific scenario within a single array element, making it more precise when you need a particular combination of values within one element


`pre`
`plugin`    
`methods`

# Interview



sdlc
friend class oops
closures
mvc
assert nodejs
different design patterns
scrum pattern

positioning css

state is immutable

static method

setCount(count + 1)
setCount(count => count + 1)

Upating state is async in nature

.push() returns the length of the array

code splitting 
types of code splitting
why use redux


worker thread, thread, currying
Callback passing and calling
Api gateway
lookup in mongodb
for loop in await
pipeline in mongo db
Access allow origin
Proccess object
Fs module
css sibling selector
db design one to many, many to one , comments of comments

Import vs require
Solid principles in react
UseEffect work under hood 
Infinite scroll
Hydration and problems in it
Security vunerability in react
Async vs parallel vs concurrent
Res in middleWare
Cors for sub domain
Duplex and tam in node.js
react component breaking down
static key word
Arrow , global , anonymous
Deboucing, throttling
Tcp ip
Web rtc
Css preprocessor
Ci cd
Clustered vs non Clustered, which to use when
Clustered index
Eval
Struct vs class
Namespaces
