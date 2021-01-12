// Intermidiate Javascript

// Random Number Generation
/* var n = Math.random()
What this does is that it generates numbers random from 0 to but not including 1(0.9999999999999999(16 decimal places)) 
It never reaches 1
*/

// EXAMPLE: DICE ROLL
var n = Math.random()
n = n * 6;
n = Math.floor(n);
console.log(n);

/*
This will result in numbers being rounded of to the nearest whole number.
Unfortunately the range is up to five and not six.
In order to have a range from 1 to 6 we just add + 1 to: n = Math.floor(n) + 1 
This is know as pseudo Random number generator.
Link to a descriptive video: https://www.khanacademy.org/computing/computer-science/cryptography/crypt/v/random-vs-pseudorandom-number-generators
*/
//CHALLANGE: LOVE CALCULATOR
prompt("What is your name?");
prompt("What is your crush's name?");
var love = Math.random();
love = Math.floor(love * 100) + 1
alert("Your Love Score Is " + love + "%")

//Control Statements: Using If-Else Conditionals And Logic

/*
--When we want to have different outcomes in our code we use control flow. 
--This is the controlling of the code. For example if the road is clear in front of us we go forward.
--But if it is not we find an alternate route.
--In code that is were IF and ELSE statements come in.
If:
This keyword works in manner of carrying out a statemnt when it(the statement) is true
EG if the track is clear: then execute the statement orders(go forward)
ELSE: 
This comes into play when the IF keyword comes out false.
EG Else: turn right.
*/
// This is how code would be written.
if (track === "clear") {
    goStraight();
} else {
    turnRight();
} //goStraight and turnRight are functions
/*
So for our love calculator we can have alerts that come up on certain scores.
*/
prompt("What is your name?");
prompt("What is your crush's name?");
var love = Math.random();
love = Math.floor(love * 100) + 1
if (love > 70) {
    alert("Your Love Score Is " + love + "%." + " You love each other like Kanye loves Kanye")
} else {
    alert("Your Love Score Is " + love + "%")
}
/*-- The else statement can be written as:
else {
    alert("Your Love Score is " + love + "%. Find things that you have in common so that this increases your lovescore.")
} 

*/


// COMPARATORS AND EQUALITY
/* 
 The =, >, <, symbols in code are called comparators. 
 They are known as that because they allow us to compare two different things.
 !== This is used to see if one side is not equal to the other.
 === (Equal To)
 !== (Not Equal To)
 > (Lesser Than)
 < (Greater Than)
 <= (Greater Than Or Equal To)
 >= (Lesser Than Or Equal To)

 === make sure that the datatypes are the same. 
 == make sure the content inside the different datatypes are the same.

 Example: 
 var a = 1;
 var b = "1";

 if a === b {
     console.log("yes");
 } else {
     console.log("no");
 }; -------------------Since there is three equal signs, it will write no.

 if a == b {
     console.log("yes");
 } else {
     consoloe.log("no")
 }; -------------------This will come out as yes because the content in both datatypes are the same.
*/

// COMBINING COMPARATORS

/* 
 There are three combining comparators which are:
 && (AND)
 || (OR)
 ! (NOT)
*/
if (love > 70) {
    alert("Your Love Score Is " + love + "%." + " You love each other like Kanye loves Kanye")

    if (love > 30 && love <= 70) {
        alert("Your Love Score Is " + love + "%")
    }

} else {
    alert("Your Love Score Is " + love + "%" + ". You go togehter like water with oil.")
}

// BMI Calculator Advanced (IF/ELSE)

function bmiCalculator(weight, height) {
    var calculator = weight / (height * height);
    if (calculator <= 18.5) {
        return ("Your BMI is " + calculator + ", so you are underweight.");
    }
    if (calculator >= 18.5 && calculator <= 24.9) {
        return ("Your BMI is " + calculator + ", so you have a normal weight.");
    }
    if (calculator >= 24.9) {
        return ("Your BMI is " + calculator + ", so you are overweight.");
    } else {
        return calculator;
    }
    return interpretation;
}
/*
Note To Self: Make sure to put () after (AND OR NOT).
CHALANGE: LEAP YEAR FINDER
*/
function isLeap(year) {

    if (year % 4 === 0 && (year % 100 !== 0)) {

        return ("Leap year.");

    } else {

        return ("Not leap year.");

    }

}

// WORKING WITH JAVASCRIPT ARRAYS

/*
An Array is a collection of items that are related and can be stored in the same container.
Syntax
var name = ["string", one , "1"] (datatypes are put into the square brackets.)
In order to retreive the data from the array, we use: var myName = name[1]
** Square Brackets are normally used for a collection of data items.
** They are used when creating arrays and when collecting data from arrays.
*/
// GuestList Example:
var guestList = ["Conrad", "Akwesa", "Paida", "Godwin", "Dali"]
guestList[0] // This will retrieve the name Conrad because code always starts at 0

/*Arrays can also check to see if a certain data type is included in the array. i.e name.includes(one)
If it is found inside, then it will return true.
*/
// GuestList Challenge.
var name = prompt("What Is Your Name?");
if (name.includes(["Conrad", "Kayuti", "Collin", "m'Diwa", "Joshua", "Althea", "Nokutenda"])) {
    alert("Welcome to the party!")
} else {
    alert("Sorry, You're not on the list. Goodbye.")
};

//ADDING ELEMENTS AND INTERMIDIATE ARRAY TECHNIQUES

/* There is a function that allows you to put extra data into an array without having to touch the array.
It is know as push (name.push)
When using this be aware that it can only push the data type at the end not at some random position.
That is not all.
You can also remove the last item in the array by using .pop
*/
// FIZZBUZZ Challenge var output = [];
var count = 1;

function fizBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output)
}
/* 
Keep in mind that the order of your if statements matter.
If the first if statement is true it will skip the rest.
**** Note **** When using % make sure that you equal it to 0 (3 % 3 === 0)
*/

//Challange Who is buying Lunch Today?

/*
names = [];

names.push("Angela", "Ben", "Jenny", "Michael", "Chloe");
var randomNo = Math.random();

var nameplace = Math.floor(randomNo * names.length);

return names[nameplace] + " is going to buy Lunch today";

*/