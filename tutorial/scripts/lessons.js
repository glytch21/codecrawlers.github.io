// Lesson 1 Pages...

const JavaScriptIntro = `<span>INTRODUCTION TO JAVASCRIPT</span>

<h2>
    What is JavaScript?
</h2>

<p>
    In this lesson, you will learn introductory coding concepts including <a href="https://www.codecademy.com/resources/docs/javascript/data-types" target="_blank">data types</a> and built-in objects—essential knowledge for all aspiring developers. Make sure to take notes and pace yourself. This foundation will set you up for understanding the more complex concepts you'll encounter later.
</p>

<div class="instructions">
    <img src="../public/icons2/checkbox.png" alt="instructions-icon">
    Instructions
</div>

<p>Move to the next exercise when you're ready to begin.</p>`
const emptyConsole = ``

const Console = `<span>INTRODUCTION TO JAVASCRIPT</span>

<h2>
    Console
</h2>

<p>
    The console is a panel that displays important messages, like <a href="https://www.codecademy.com/resources/docs/javascript/errors" target="_blank">errors</a>, for developers. 
    Much of the work the computer does with our code is invisible to us by default. 
    If we want to see things appear on our screen, we can print, or log, to our console directly.
</p>
<p>
    In JavaScript, the <span class="highlight">console</span> keyword refers to an object, a collection of data and actions, that we can use in our code. 
    Keywords are words that are built into the JavaScript language, so the computer recognizes them and treats them specially.
</p>
<p>
    One action, or method, that is built into the <span class="highlight">console</span> object is the <span class="highlight">.log()</span> method. 
    When we write <span class="highlight">console.log()</span> what we put inside the parentheses will get printed, or logged, to the console.
</p>
<p>
    It's going to be very useful for us to print values to the console, so we can see the work that we're doing.
</p>

<textarea name="" id="editor2" cols="30" rows="10">console.log(5);</textarea>

<p>
    This example logs <span class="highlight">5</span> to the console. The semicolon denotes the end of the line, or statement. 
    Although in JavaScript your code will usually run as intended without a semicolon, we recommend learning the habit of ending each statement with a semicolon so you never leave one out in the few instances when they are required.
</p>
<p>
    You'll see later on that we can use <span class="highlight">console.log()</span> to print different kinds of data.
</p>

<div class="instructions">
    <img src="../public/icons2/checkbox.png" alt="instructions-icon">
    Instructions
</div>

<ol type="1">
    <li>Use the <span class="highlight">console.log</span> code in the editor to log your age to the console.</li>
    <!-- <p>Run your code when you are ready to see the result.</p> -->

    <li>On the next line, write another <span class="highlight">console.log</span> to print out a different number representing the number of weeks you've been programming.</li>
</ol>`

const Comments = `<span>INTRODUCTION TO JAVASCRIPT</span>

<h2>
    Comments
</h2>

<p>
    Programming is often highly collaborative. In addition, our own code can quickly become difficult 
    to understand when we return to it— sometimes only an hour later! For these reasons, it's often 
    useful to leave notes in our code for other developers or ourselves.
</p>
<p>
    As we write JavaScript, we can write <a href="https://www.codecademy.com/resources/docs/javascript/comments?page_ref=catalog" target="_blank">comments</a> 
    in our code that the computer will ignore as our program runs. These comments exist just for human readers.
</p>
<p>
    Comments can explain what the code is doing, leave instructions for developers using the code, or add any other useful annotations.
</p>
<p>
    There are two types of code comments in JavaScript:
</p>

<ol type="1">
    <li style="margin-bottom: 0;">A single line comment will comment out a single line and is denoted with two forward slashes <span class="highlight">//</span> preceding it.</li>
</ol>

<textarea id="editor2">// Prints 5 to the console
console.log(5)</textarea>

<p>
    You can also use a single line comment to comment after a line of code:
</p>

<textarea id="editor3">console.log(5);  // Prints 5</textarea>

<ol>
    <li>A multi-line comment will comment out multiple lines and is denoted with <span class="highlight">/*</span> 
        to begin the comment, and <span class="highlight">*/</span> to end the comment.</li>
</ol>

<textarea id="editor4">/*
This is all commented
console.log(10);
None of this is going to run!
console.log(99);
*/
</textarea>

<p>
    You can also use this syntax to comment something out in the middle of a line of code:
</p>

<textarea id="editor5">console.log(/*IGNORED!*/);  // Still just prints 5</textarea>

<div class="instructions">
    <img src="../public/icons2/checkbox.png" alt="checkbox-icon">
    Instructions
</div>

<ol>
    <li>
        Let's practice adding some code comments.

        <p style="margin-top: .5rem;">
            To the right, we've provided you with the beginning of the book Catch-22 by Joseph Heller.
        </p>

        <p style="margin-top: .5rem;">
            On line 1, write a single line comment that says <span class="highlight">Opening line</span>.
        </p>
    </li>
    <li>
        Single line comments are great for adding context to your code. Multi-line comments are often 
        best suited to prevent a block of code from running. However, both types of comments can be used 
        for either purpose.

        <p style="margin-top: .5rem;">
            Use a multi-line comment to comment out the rest of the code after the first <span class="highlight">console.log</span> line. 
            Only <span class="highlight">It was love at first sight.</span> should be logged to the console.
        </p>
    </li>
</ol>`
const CommentsConsole = `// This is a comment. This will not affect the code whatsoever.
`

const DataTypes = `<span>INTRODUCTION TO JAVASCRIPT</span>

<h2>
    Data Types
</h2>

<p>
    <a href="https://www.codecademy.com/resources/docs/javascript/data-types?page_ref=catalog" target="_blank">Data types</a> 
    are the classifications we give to the different kinds of data that we use in programming. 
    In JavaScript, there are eight fundamental data types:
</p>

<ul>
    <li>
        Number: Any number, including numbers with decimals: <span class="highlight">4</span>, 
        <span class="highlight">8</span>, <span class="highlight">1516</span>, <span class="highlight">23.42</span>.
    </li>
    <li>
        BigInt: Any number, greater than 2<sup>53</sup>-1 or less than -(2<sup>53</sup>-1), with n appended to the number: 1234567890123456n.
    </li>
    <li>
        String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: 
        <span class="highlight">' ... '</span> or double quotes <span class="highlight">" ... "</span>, though we prefer single quotes. Some people like to think of string as a fancy word for text.
    </li>
    <li>
        Boolean: This data type only has two possible values— either <span class="highlight">true</span> or <span class="highlight">false</span> (without quotes). 
        It's helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
    </li>
    <li>
        Null: This data type represents the intentional absence of a value, and is represented by the keyword <span class="highlight">null</span> (without quotes).
    </li>
    <li>
        Undefined: This data type is denoted by the keyword <span class="highlight">undefined</span> (without quotes). 
        It also represents the absence of a value though it has a different use than <span class="highlight">null</span>. 
        <span class="highlight">undefined</span> means that a given value does not exist.
    </li>
    <li>
        Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
    </li>
    <li>
        Object: Collections of related data.
    </li>
</ul>

<p>
    The first 7 of those types are considered primitive data types. They are the most basic data types in the language. 
    Objects are more complex, and you'll learn much more about them as you progress through JavaScript. 
    At first, eight types may not seem like that many, but soon you'll observe the world opens with possibilities once you start leveraging each one. 
    As you learn more about objects, you'll be able to create complex collections of data.
</p>

<p>
    But before we do that, let's get comfortable with strings and numbers!
</p>

<textarea id="editor2">console.log('Location of Codecrawlers headquarters: Alangilan, Batangas City, Batangas');
console.log(40);</textarea>

<p>
    In the example above, we first printed a string. Our string isn't just a single word; it includes both capital and lowercase letters, spaces, and punctuation.
</p>

<p>
    Next, we printed the number 40, notice we did not use quotes.
</p>

<div class="instructions">
    <img src="../public/icons2/checkbox.png" alt="checkbox-icon">
    instructions
</div>

<ol type="1">
    <li>On line 1, log the string <span class="highlight">'JavaScript'</span> to the console.</li>
    <li>On line 2, log the number <span class="highlight">2011</span> to the console.</li>
    <li>On line 3, print <span class="highlight">'Woohoo! I love to code! #codecrawlers'</span> to the console.</li>
    <li>On line 4, print the number <span class="highlight">20.49</span> to the console.</li>
</ol>`

const ArithmeticOperators = `<span>INTRODUCTION TO JAVASCRIPT</span>

<h2>
    Arithmetic Operators
</h2>

<p>Basic arithmetic often comes in handy when programming.</p>

<p>
    An <a href="https://www.codecademy.com/resources/docs/javascript/operators?page_ref=catalog" target="_blank">operator</a> is a character that performs a task in our code. 
    JavaScript has several built-in arithmetic operators, that allow us to perform mathematical calculations on numbers. 
    These include the following operators and their corresponding symbols:
</p>

<ol>
    <li>Add: <span class="highlight">+</span></li>
    <li>Subtract: <span class="highlight">-</span></li>
    <li>Multiply: <span class="highlight">*</span></li>
    <li>Divide: <span class="highlight">/</span></li>
    <li>Remainder: <span class="highlight">%</span></li>
</ol>

<p>The first four work how you might guess:</p>

<textarea id="editor2">console.log(3 + 4);  // Prints 7
console.log(5 - 1);  // Prints 4
console.log(4 * 2);  // Prints 8
console.log(9 / 3);  // Prints 3</textarea>

<p>
    Note that when we <span class="highlight">console.log()</span> the computer will evaluate the expression inside the parentheses and 
    print that result to the console. If we wanted to print the characters <span class="highlight">3 + 4</span>, we would wrap them in 
    quotes and print them as a string.
</p>

<textarea id="editor3">console.log(11 % 3);  // Prints 2
console.log(12 % 3);  // Prints 0</textarea>

<p>
    The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand 
    number as many times as it evenly can: <span class="highlight">11 % 3</span> equals 2 because 3 fits into 11 three times, leaving 2 as 
    the remainder.
</p>

<div class="instructions">
    <img src="../public/icons2/checkbox.png" alt="checkbox-icon">
    Instructions
</div>

<ol>
    <li>
        Inside of a <span class="highlight">console.log()</span>, add <span class="highlight">3.5</span> to your age.
        <p style="margin-top: .5rem;">
            This is the age you'll be when we start sending people to live on Mars.
        </p>
    </li>
    <li>
        On a new line write another <span class="highlight">console.log()</span>. Inside the parentheses, 
        take the current year and subtract <span class="highlight">1969</span>.
        <p style="margin-top: .5rem;">
            The answer is how many years it's been since the 1969 moon landing.
        </p>
    </li>
    <li>
        Create another <span class="highlight">console.log()</span>. Inside the parenthesis divide 
        <span class="highlight">65</span> by <span class="highlight">240</span>.
    </li>
    <li>
        Create one last <span class="highlight">console.log()</span>. Inside the parentheses, 
        multiply <span class="highlight">0.2708</span> by <span class="highlight">100</span>.
        <p style="margin-top: .5rem;">
            That's the percent of the sun that is made up of helium. Assuming we could stand on the sun, we'd all sound like chipmunks!
        </p>
    </li>
</ol>`

const StringConcatenation = `<span>INTRODUCTION TO JAVASCRIPT</span>

<h2>
    String Concatenation
</h2>

<p>
    <a href="https://www.codecademy.com/resources/docs/javascript/operators" target="_blank">Operators</a> aren't 
    just for numbers! When a + operator is used on two strings, it appends the right string to the left string:
</p>

<textarea id="editor2">console.log('hi' + 'ya');  // Prints 'hiya'
console.log('wo' + 'ah');  // Prints 'woah'
console.log('I love to ' + 'code.');
// Prints 'I love to code.'</textarea>

<p>
    This process of appending one string to another is called <a href="https://www.codecademy.com/resources/docs/javascript/strings?page_ref=catalog" target="_blank">concatenation</a>. 
    Notice in the third example we had to make sure to include a space at the end of the first string. 
    The computer will join the strings exactly, so we needed to make sure to include the space we wanted between the two strings.
</p>

<textarea id="editor3">console.log('front ' + 'space');
// Prints 'front space'
console.log('back' + ' space');
// Prints 'back space'
console.log('no' + 'space');
// Prints 'nospace'
console.log('middle' + ' ' + 'space');
// Prints 'middle space'</textarea>

<p>
    Just like with regular math, we can combine, or chain, our operations to get a final result:
</p>

<textarea id="editor4">console.log('One' + ', ' + 'two' + ', ' + 'three!');
// Prints 'One, two, three!'</textarea>

<div class="instructions">
    <img src="../public/icons2/checkbox.png" alt="checkbox-icon">
    Instructions
</div>

<ol type="1">
    <li>
        Inside a <span class="highlight">console.log()</span> statement, concatenate the two strings 
        <span class="highlight">'Hello'</span> and <span class="highlight">'World'</span>.
        <p style="margin-top: .5rem;">Note: You should concatenate the two strings exactly (without introducing any additional characters).</p>
    </li>
    <li>
        We left off the space last time. Create a second <span class="highlight">console.log()</span> statement in which you 
        concatenate the strings <span class="highlight">'Hello'</span> and <span class="highlight">'World'</span>, but this time make sure to also include 
        a space (<span class="highlight">' '</span>) between the two words.
    </li>
</ol>`

const Properties = `<span>INTRODUCTION TO JAVASCRIPT</span>

<h2>
    Properties
</h2>

<p>
    When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of 
    the data type. All <a href="https://www.codecademy.com/resources/docs/javascript/data-types" target="_blank">data types</a> have access to specific properties that are passed down to each instance. 
    For example, every string instance has a property called <span class="highlight">length</span> that stores the number of characters in that string. 
    You can retrieve property information by appending the string with a period and the property name:
</p>

<textarea id="editor2">console.log('Hello'.length);  // Prints 5</textarea>

<p>
    The <span class="highlight">.</span> is another operator! We call it the dot operator.
</p>

<p>
    In the example above, the value saved to the <span class="highlight">length</span> property is retrieved from the 
    instance of the string, <span class="highlight">'Hello'</span>. The program prints <span class="highlight">5</span> to the console, 
    because <span class="highlight">Hello</span> has five characters in it.
</p>

<div class="instructions">
    <img src="../public/icons2/checkbox.png" alt="checkbox-icon">
    Instructions
</div>

<ol>
    <li>Use the <span class="highlight">.length</span> property to log the number of characters in the following string to the console:</li>
    <textarea id="editor3">'Teaching the world how to code'</textarea>
</ol>`

const Methods = `<span>INTRODUCTION TO JAVASCRIPT</span>

<h2>
    Methods
</h2>

<p>
    Remember that <a href="https://www.codecademy.com/resources/docs/javascript/methods?page_ref=catalog" target="_blank">methods</a> are 
    actions we can perform. Data types have access to specific methods that allow us to handle instances 
    of that data type. JavaScript provides a number of string methods.
</p>

<p>
    We call, or use, these methods by appending an instance with:
</p>

<ul>
    <li>a period (the dot operator)</li>
    <li>the name of the method</li>
    <li>opening and closing parenthesis</li>
</ul>

<p>
    E.g. <span class="highlight">'example string'.methodName()</span>.
</p>

<p>
    Does that syntax look a little familiar? When we use <span class="highlight">console.log()</span> 
    we're calling the <span class="highlight">.log()</span> method on the <span class="highlight">console</span> 
    object. Let's see <span class="highlight">console.log()</span> and some real string methods in action!
</p>

<textarea id="editor2">console.log('hello;.toUpperCase());  // Prints 'HELLO'
console.log('Hey'.startsWith('H'));  // Prints true</textarea>

<p>Let's look at each of the lines above:</p>

<ul>
    <li>
        On the first line, the <span class="highlight">.toUpperCase()</span> method is called on the string instance 
        <span class="highlight">'hello'</span>. The result is logged to the console. This method returns a string in 
        all capital letters: <span class="highlight">'HELLO'</span>.
    </li>
    <li>
        On the second line, the <span class="highlight">.startsWith()</span> method is called on the string instance 
        <span class="highlight">'Hey'</span>. This method also accepts the character <span class="highlight">'H'</span> as an input, or argument, 
        between the parentheses. Since the string <span class="highlight">'Hey'</span> does start with the letter <span class="highlight">'H'</span>, 
        the method returns the boolean <span class="highlight">true</span>.
    </li>
</ul>

<p>
    You can find a list of built-in string methods in the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">JavaScript documentation</a>. 
    Developers use documentation as a reference tool. It describes JavaScript's keywords, 
    methods, and syntax.
</p>

<div class="instructions">
    <img src="../public/icons2/checkbox.png" alt="checkbox-icon">
    Instructions
</div>

<ol>
    <li>
        Use the <span class="highlight">.toUpperCase()</span> method to log the string <span class="highlight">'Codecrawlers'</span> to the console in all 
        capital letters.
    </li>
    <li>
        In the second <span class="highlight">console.log()</span> statement in app.js, we have a string 
        <span class="highlight">' Remove whitespace '</span> which has spaces before and after the words 
        <span class="highlight">'Remove whitespace'</span>.

        <p style="margin-top: .5rem;">
            If we browse the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">JavaScript string documentation</a>, we find several built-in string 
            methods that each accomplish a different goal. The one method that seems ideal for 
            us is <span class="highlight">.trim()</span>.
        </p>
        <p style="margin-top: .5rem;">
            Use the method to remove the whitespace at the beginning and end of the string 
            in the second <span class="highlight">console.log()</span> statement.
        </p>
    </li>
</ol>`

const BuiltInObjects = `<span>INTRODUCTION TO JAVASCRIPT</span>

<h2>
    Built-in Objects
</h2>

<p>
    In addition to <span class="highlight">console</span>, there are other <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects" target="_blank">objects built into JavaScript</a>. Down the line, 
    you'll build your own <a href="https://www.codecademy.com/resources/docs/javascript/objects" target="_blank">objects</a>, 
    but for now these “built-in” objects are full of useful functionality.
</p>

<p>
    For example, if you wanted to perform more complex mathematical operations than arithmetic, 
    JavaScript has the built-in <span class="highlight">Math</span> object.
</p>

<textarea id="editor2">console.log(Math.random());  // Prints a random number between 0 and 1</textarea>

<p>
    In the example above, we called the <span class="highlight">.random()</span> method by appending 
    the object name with the dot operator, the name of the method, and opening and 
    closing parentheses. This method returns a random number between 0 (inclusive) 
    and 1 (exclusive).
</p>

<p>
    To generate a random number between 0 and 50, we could multiply this result by 50, like so:
</p>

<textarea id="editor3">Math.random() * 50;</textarea>

<p>
    The example above will likely evaluate to a decimal. To ensure the answer is a whole number, 
    we can take advantage of another useful <span class="highlight">Math</span> method called 
    <span class="highlight">Math.floor()</span>.
</p>

<textarea id="editor4">Math.floor(Math.random() * 50);</textarea>

<p>In this case:</p>

<ol>
    <li><span class="highlight">Math.random()</span> generates a random number between 0 and 1.</li>
    <li>We then multiply that number by 50, so now we have a number between 0 and 50.</li>
    <li>Then, <span class="highlight">Math.floor()</span> rounds the number down to the nearest whole number.</li>
</ol>

<p>
    If you wanted to see the number printed to the terminal, you would still need to use a 
    <span class="highlight">console.log()</span> statement:
</p>

<textarea id="editor5">console.log(Math.floor(Math.random() * 50));  // Prints a random whole number between 0 and 50</textarea>

<p>
    To see all of the properties <a href="https://www.codecademy.com/resources/docs/javascript/methods" target="_blank">methods</a>
    on the <span class="highlight">Math</span> object, take a look at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank">the documentation here</a>.
</p>

<div class="instructions">
    <img src="../public/icons2/checkbox.png" alt="checkbox-icon">
    Instructions
</div>

<ol>
    <li>
        Inside of a <span class="highlight">console.log()</span>, create a random number with 
        <span class="highlight">Math.random()</span>, then multiply it by <span class="highlight">100</span>.
    </li>
    <li>
        Now, use Math.floor() to make the output a whole number.
        <p style="margin-top: .5rem;">
            Inside the <span class="highlight">console.log()</span> you wrote in the last step, put the existing 
            <span class="highlight">Math.random() * 100</span> code inside the parentheses of <span class="highlight">Math.floor()</span>.
        </p>
    </li>
    <li>
        Find a method on the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank">JavaScript <span class="highlight">Math</span> object</a> that returns the smallest integer greater than or equal to a decimal number.
        <p style="margin-top: .5rem;">
            Use this method with the number <span class="highlight">43.8</span>. Log the answer to the console.
        </p>
    </li>
    <li>
        Use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank">JavaScript documentation</a> 
        to find a method on the built-in <span class="highlight">Number</span> object that checks if a number is an integer.
        
        <p style="margin-top: .5rem;">
            Put the number <span class="highlight">2017</span> in the parentheses of the method and use 
            <span class="highlight">console.log()</span> to print the result.
        </p>
    </li>
</ol>`

const Review = `<span>INTRODUCTION TO JAVASCRIPT</span>

<h2>
    Review
</h2>

<p>
    Let's take one more glance at the concepts we just learned:
</p>

<ul>
    <li>
        Data is printed, or logged, to the console, a panel that displays messages, with <span class="highlight">console.log()</span>.
    </li>
    <li>
        We can write single-line <a href="https://www.codecademy.com/resources/docs/javascript/comments" target="_blank">comments</a>
         with <span class="highlight">//</span> and multi-line comments between 
         <span class="highlight">/*</span> and <span class="highlight">*/</span>.
    </li>
    <li>
        There are 7 fundamental <a href="https://www.codecademy.com/resources/docs/javascript/data-types" target="_blank">data types</a>
         in JavaScript: <a href="https://www.codecademy.com/resources/docs/javascript/strings" target="_blank">strings</a>, 
         numbers, booleans, null, undefined, symbol, and object.
    </li>
    <li>
        Numbers are any number without quotes: <span class="highlight">23.8879</span>
    </li>
    <li>
        Strings are characters wrapped in single or double quotes: <span class="highlight">'Sample String'</span>
    </li>
    <li>
        The built-in arithmetic <a href="https://www.codecademy.com/resources/docs/javascript/operators" target="_blank">operators</a>
         include <span class="highlight">+</span>, <span class="highlight">-</span>, <span class="highlight">*</span>, <span class="highlight">/</span>, and <span class="highlight">%</span>.
    </li>
    <li>
        <a href="https://www.codecademy.com/resources/docs/javascript/objects" target="_blank">Objects</a>,
        including instances of data types, can have properties, stored information. The properties are denoted with a 
        <span class="highlight">.</span> after the name of the object, for example: <span class="highlight">'Hello'.length</span>.
    </li>
    <li>
        Objects, including instances of data types, can have 
        <a href="https://www.codecademy.com/resources/docs/javascript/methods" target="_blank">methods</a> 
        which perform actions. Methods are called by appending the object or instance with a period, 
        the method name, and parentheses. For example: <span class="highlight">'hello'.toUpperCase()</span>.
    </li>
    <li>
        We can access properties and methods by using the <span class="highlight">.</span>, dot operator.
    </li>
    <li>
        Built-in objects, including <span class="highlight">Math</span>, are collections of methods and properties that JavaScript provides.
    </li>
</ul>

<p>
    Here are a few more resources to add to your toolkit:
</p>

<ul>
    <li><a href="https://www.codecademy.com/resources/docs/javascript" target="_blank">Codecademy Docs: JavaScript</a></li>
    <li><a href="https://www.codecademy.com/workspaces/new" target="_blank">Codecademy Workspaces: JavaScript</a></li>
</ul>

<p>
    Make sure to bookmark these links so you have them at your disposal.
</p>`



// Page Content Logic
const Lesson1 = [JavaScriptIntro, Console, Comments, DataTypes, ArithmeticOperators,
                 StringConcatenation, Properties, Methods, BuiltInObjects, Review]
const L1Console = [emptyConsole, emptyConsole, CommentsConsole, emptyConsole, emptyConsole, 
                   emptyConsole, emptyConsole, emptyConsole, emptyConsole, emptyConsole]

const Lesson2 = []

const Lesson3 = []


const guideArray = Lesson1
const consoleArray = L1Console

const guideContent = document.querySelector('.guide-content')
const pagination = document.querySelector('.pagination')

const consoleContent = document.getElementById('editor')


let page = JSON.parse(localStorage.getItem('page')) || 0

const updateContent = () => {
    guideContent.innerHTML = guideArray[page]
    pagination.innerHTML = `${page + 1} / ${guideArray.length}`

    consoleContent.innerHTML = consoleArray[page] || ''

    if (page === 9) {
        document.querySelector('.next').innerHTML = 'Practice Game'
    } else {
        document.querySelector('.next').innerHTML = 'Next'
    }
}

updateContent()

const nextPage = () => {
    if (page < guideArray.length - 1) {
        page++
        localStorage.setItem('page', JSON.stringify(page))
    } else {
        return;
    }
    updateContent()
    codeEditor()    // this is to make sure that the textarea gets converted into CodeMirror immediately
}

const previousPage = () => {
    if (page > 0) {
        page--
        localStorage.setItem('page', JSON.stringify(page))
    } else {
        return
    }
    updateContent()
    codeEditor()
}

let pagePM = JSON.parse(localStorage.getItem('pagePM')) || 0

const practice = (pageNumber) => {
    pagePM = pageNumber
    localStorage.setItem('pagePM', JSON.stringify(pagePM))

    window.location.href = "../practicemode/practice-environment.html"
}