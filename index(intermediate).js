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