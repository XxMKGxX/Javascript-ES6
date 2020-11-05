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

function getMilk() {
    alert("moveLeft")
    alert("moveLeft")
    alert("moveUp")
    alert("moveUp")
    alert("moveUp")
    alert("moveUp")
    alert("moveRight")
    alert("moveRight")
    alert("buyMilk")
    alert("moveLeft")
    alert("moveLeft")
    alert("moveDown")
    alert("moveDown")
    alert("moveDown")
    alert("moveDown")
    alert("moveRight")
    alert("moveRight")
    alert("eneterHouse")
}

getMilk();

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