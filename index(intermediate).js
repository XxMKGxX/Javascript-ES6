// Intermidiate Javascript

// Random Number Generation
/* var n = Math.random()
What this does is that it generates numbers random from 0 to 0.9999999999999999(16 decimal places)
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
alert("Your Love Score Is " + love)

//Control Statements: Using If-Else Conditionals And Logic

/*If:
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
This sort of code is called control flow. 
We are controlling the flow of our code.
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