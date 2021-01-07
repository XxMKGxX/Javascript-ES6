//Starting Code with alerts and prompts

// In order to write 2 alerts but on different lines, press SHIFT + ENTER keys to o to the next line.
/* Chrome has snippets for editing your code for example without having to press SHIFT and ENTER all the time to go to the next line of code. 
--In javascript there are keywords that a browser can read. 
--You cant just type in any word and it will work. 

      Message
        |
        |
alert("Hello"); --End
  |
  |
function

--Anything said inside the quotation marks are not going to affect the functionality of the code.

--The Prompt displays a dialog with an optional message prompting the user to input some text.
*/

//Understand Variables and Data Types in Javascript.
//--Data types.
/*-- A string ("") is a data type.This tells the computer the functionality of that specific data and run it as text.
--Numbers as well are data types and Boleans.
--Booleans are data types that only give out a true or false result.
--typeof is another data type which gives out the type of data type that is inside the round brackets.

//--Variables
-- Variables are a Keyword.
--This helps in storing data. 
-- When a user types in data from a prompt without the aid of a variable, the data is lost.
--But when a variable is used, this stores the data and the recipient, that is me, will be able to see that data.
--When changing the contents of a variable all we need to do is create another variable to take in the contents of the original variable.
Example a=3; b=8; 
Result: var c=a ; b=c; a=b;
*/

//Variable Naming In Javascript.
/*-- When it comes to naming a variable, Javascript does not care if it is a weird name variable so long as it does not conflcit with the following:

1. var is not allowed to be used as a variable name. e.g var var (this actually brings out an error before doing anything else.)
2. a variable name cannot start with a number. But numbers can be used inside the name e.g my123
3. The _ is the only symbol that can be used to write variable names. e.g name_one.
4. Camel casing is encouraged to make reading easier. E.G myName (Capital N)
5. You cannot have space in a variable name.
*/

// Working With Strings and Numbers.

/*
//Concatenation
--This is the joining of strings without having to write 2 different lines of code.
--This can also be used when combining variables. 
--By doing this we reduce the number of lines of Code.
*/

//EXAMPLE:
alert("Hello " + "World!") //The result being Hello World!

//.length feature
/*-- This feature is used to find out how many characters are found inside a certain string.
e.g name.length = 6 
-- The results are found inside the console. 

*/

// .slice function

var message = prompt("Feel free to write up to 180 characters.")
var messageCount = message.slice(0, 140)
alert(messageCount)

/* This allows the alert to
        return the content written inside the propmt
        for it to reach up 140 characters.*/

var messageCount = message.length
var finale = 180 - messageCount
alert(messageCount + "have been written")
alert("You have written " + messageCount + " characters. You have " + finale + " characters left")

var name = "Conrad"
name.slice(0, 3)

// toUppercase() function

/* This allows the words written to be put in uppercase even though they are written in lowercase*/

//Example:

var name = "Conrad";
name.toUpperCase();

//RESULT: CONRAD(this will be found inside the console.)

/* Although this was written inside the console, the contentfor it to be UpperCase is stil lost.
 The good thing is that it can be fixed by giving that name.toUpperCase() a variable.*/
// Example:
name = name.toUpperCase();
// this will definately fix it.
// Challenge: make the first letter of a name cappped and the rest uncapped
var name = prompt("What is your name?");
var cappedLetter = name.slice(0, 1);
var uncappedLetter = name.slice(1, name.length);
var cL = cappedLetter.toUpperCase();
var uL = uncappedLetter.toLowerCase();
alert("Hello, " + cL + uL);

// Numbers

/* Addition in Javascript is quite simple (just use the plus sign lol)
Same thing with subtract
The only different thing used is the modulo which uses the % (percentage sign)
The modulo divides and gives back a reminder instead of just giving the answer of the division.
EXAMPLE:
 */
var e = 9 % 6
    //RESULT:
3
/* BOMDAS is used in programming were we multiply or divide first before adding or subtracting
EXAMPLE: var cost = 3 + 5 * 2 
RESULT: 13 
Brackets can be used to let the computer to start with the brackets before everything else.
*/
// CHALLANGE: Dog Human Calculator:

var dogAge = prompt("How old is your Dog?")
var humanAge = (dogAge - 2) * 4 + 21
alert("Your Dog is " + humanAge + " years old in human years")

// Incremetation And Decrementation
/*
        Incrementaition in coding takes place by just adding 2 + symbols
        Increment
        e.g var x = 5
        x = x++  (x + 1)
        This will give out 6

        The same can be done with minus. 
        x = x-- (x-1)
        This is known as Decrement.
        If you want to add more than just one, we use += 
        Example: x += 2 = 7 (x = x + 2 = 7)
*/
// FUNCTIONS
/* Functions allow us to create a series of instructions, package it into a block of code and give it a name.
 

With functions, once it has been called out, it will execute the code under the given name.
Functions are similar with variables.
In order to call the function we just need to use the name given to the function.
i.e getMilk(); And this will allow it to be executed.

When it comes to alerts we do not want to be clicking the ok button all the time. 
In order to stop this we can replace alert with console.log. 


*/

// Example:

function getMilk(bottles) {
    console.log("moveLeft")
    console.log("moveLeft")
    console.log("moveUp")
    console.log("moveUp")
    console.log("moveUp")
    console.log("moveUp")
    console.log("moveRight")
    console.log("moveRight")
    var numberOfBottles = Math.floor(money / 1.5);
    console.log("buy " + numberOfBottles + " bottles of Milk")
    console.log("moveLeft")
    console.log("moveLeft")
    console.log("moveDown")
    console.log("moveDown")
    console.log("moveDown")
    console.log("moveDown")
    console.log("moveRight")
    console.log("moveRight")
    console.log("eneterHouse")
}
// This helps us to input the number bottles and how much money will be spent.
getMilk(2);

/* 
  Karel Code
function main() {
    turnLeft();
    move();
    turnRight();
    move();
    turnLeft();
    move();
    turnRight();
    move();
    turnLeft();
    move();
    turnRight();
    move();
    turnLeft();
    move();
    turnRight();
    move();
}

*/

//FUNCTIONS: PARAMETERS AND ARGUMENTS

/* The contnent found inside the round brackests are known as inputs.
for example when we state buy milk in the function,
we can specify the number of bottles of milk required to be bought. 
inside the brackets of the creating function we specify the name of the input which will be bottles.
Then when we call the function, inside those brackets we specify the number of bottles. 
// CHALLANGE: LIFE IN WEEKS.
*/

function lifeInWeeks(age) {

    let timeLeft = 90 - age
    let x = timeLeft * 365
    let y = timeLeft * 52
    let z = timeLeft * 12

    console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.")
}

lifeInWeeks(18);

// FUNCTIONS: OUTPUTS AND RETURN VALUES
/*
When it came to use the money input we were able to get the number of bottles required.
In addition to receiving an input it can give out an output by using the return keyword.
In this case we are giving out money modulo 1.5 (return money % 1.5) remember 1.5 being the cost of one bottle
So in order for us to see the change, we would have to create a var called change and we console.log the result out.
When just calling the function we will not get the output back because we have not included the return keyword.
Calling the function we use the output and then put that output inside a var (change) in order for us to get the result.
We put return just before we reach closing curly braces.
EXAMPLE:

return money % 1.5 (Thus giving us the change)

var change = getMilk(5)
console.log(change) ((Result being 0.5 or 50cents))

More than one input can be used 

// CHALLENGE: BMI CALCULATOR
function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}
Check Documentation for Math.pow, as well as Math.floor()
*/