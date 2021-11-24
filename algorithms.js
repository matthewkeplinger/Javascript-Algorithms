//Matt Keplinger, 02 Aug 2021
//Algorithms.js
//DevCodeCamp, Week 2, Day 1

"use strict"

function runThis() {
    // reverseStringLoop(userString);                      //reverse a string
    // capitalLetter(capString);                           //capitalize first letter of each word in a string
    // smashString('aaaabbbbbcccccddddd');                 //compress and count instances of chars in string
    // testPalindrome('racecar');                          //palindrome test (no spaces)
    // console.log(testPalindromeDeluxe(inputString));     //palindrome test that can handle spaces, punctuation, user input
    // console.log(happyNumber(23));                       //test to see if a number is a happy number
    // isPrime(100);                                       //number of Prime Numbers to display
    // fibonacciSequence();                                //prints Fibonacci Sequence
    // console.log(fibonacci(10));                         //tests to see if number is a Fibonacci number
    console.log(recursiveFibonacci(10));                //same thing, add recursion
    // leapYears(2021, 20);                                //starting year, number of iterations
    // console.log(validateEmail());                       //leave blank, user input is built into function
    // console.log(largeArrVal(testArray));                //return the largest value in an array
}


//REVERSE STRING
let userString = prompt('Enter a string to reverse:');
function reverseStringLoop(userString) {
    let firstString = userString;
    let newString = '';
    for (let i = userString.length - 1; i >= 0; i--) {
        newString += userString[i];
    }
    console.log(firstString);
    console.log(newString);
}


//STRING CAPITALIZER (FIRST LETTER OF EACH WORD ONLY)
let capString = prompt('Enter a string.  All first letters will be capitalized');
function capitalLetter(capString) {
    let spaceEater = capString.split(' ');
    for (let i = 0; i < spaceEater.length; i++) {
        spaceEater[i] = spaceEater[i][0].toUpperCase() + spaceEater[i].substr(1);
    }
    spaceEater.join(' ');
    console.log(spaceEater);
}


//STRING COMPRESS, COUNT INSTANCES OF EACH CHAR, OUTPUT
let smooshString = prompt('Enter a string and feel free to repeat values.  All values will be counted.')
function smashString(smooshString) {
    let stringIn = smooshString;
    let stringOut = '';
    let instanceCounter = 0;

    for (let i = 0; i < stringIn.length; i++) {
        instanceCounter++;
        if (stringIn[i] != stringIn[i + 1]) {
            stringOut += instanceCounter + stringIn[i];
            instanceCounter = 0;
        }
    }
    console.log(stringOut);
}


//PALINDROME CHECK
//Step One: pass in user input
//Step Two: split string in half and check each half against the other
//return result
let stringRev = prompt('Enter a string to see if it is a palindrome');
function testPalindrome(stringRev) {
    let strLength = stringRev.length;
    for (let i = 0; i < 1 / 2; i++) {
        if (stringRev[i] !== stringRev[strLength - 1 - i]) {
            console.log(`${stringRev} is not a palindrome`);
        }
        else {
            console.log(`${stringRev} is a palindrome`);
        }
    }
}

//Palindrome Check, deals with spaces
//Step One: pass in user input, convert all to same case, remove all spaces
//Step Two: split string in half and check each half against the other
//return result

let inputString = prompt('Enter a phrase to see whether it is a palindrome or not');
function testPalindromeDeluxe(inputString) {
    let testCase = /[^A-Za-z0-9]/g;
    let input = inputString.toLowerCase().replace(testCase, '');
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            return false;
        }
    }
    return true;
}


//HAPPY NUMBERS
function happyNumber(num) {
    let sum = 0;
    while (num > 0) {
        let thisNum = num % 10;
        num = Math.floor(num / 10);
        sum += thisNum * thisNum;
    }
    if (sum === 1) {
        return `happy`;
    }
    else if (sum > 1 && sum <= 4) {
        return `sad`;
    }
    return happyNumber(sum);
}


//Prime number list up to given value (num) 100 used for testing.
function isPrime(num) {
    let isPrime = 1;
    for (let i = 2; i < num; i++) {
        isPrime = 1;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime === 1) {
            console.log(`Prime Number: ${i}`);
        }
    }
}


//FIBONACCI SEQUENCES
function fibonacciSequence() {
    let numOne, numTwo, result;
    numOne = 0;
    numTwo = 1;
    result = numTwo;
    for (let i = 0; i < 10; i++) {
        console.log(numTwo);
        result = numOne + numTwo;
        numOne = numTwo;
        numTwo = result;
    }
}


function fibonacci(num) {
    let numArr = [0, 1]
    for (let i = 2; i < num; i++) {
        numArr.push(numArr[i - 1] + numArr[i - 2]);
    }
    return numArr[num - 1];
}


function recursiveFibonacci(num) {
    if (num < 3) {
        return num - 1;
    } else {
        return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
    }
}


//Prints the next sequence of leap years (counter) from a given year (thisYear)
function leapYears(thisYear, counter) {
    while (counter >= 0) {
        if ((thisYear % 4 === 0) && (thisYear % 100 !== 0) || (thisYear % 400 === 0)) {
            console.log(thisYear);
            thisYear++;
            counter--;
        }
        else {
            thisYear++;
        }
    }
}


//Basic Email Validation function.  Tests for acceptable characters, @ sign, and a domain with 2-4 chars (.com, .tv, .org, etc.)
//Step One: user input string
//Step Two: test string against characters, ensure that it has at least '@' and 2-4 letters after period for domain
function validateEmail() {
    let userInput = prompt('Enter a string to test for validity as an email address');
    let acceptableChars = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return acceptableChars.test(userInput);
}

//Largest value in an array
let testArray = [23, 18, 35, 6, 4, 11];
function largeArrVal(testArray) {
    let maxVal = testArray[0];
    for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] > maxVal) {
            maxVal = testArray[i];
        }
    }
    return `Largest array value is ${maxVal}`;
}


runThis();