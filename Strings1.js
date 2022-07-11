// Strings To Do 1
// Write functions using the JavaScript language for all challenges.
// Use only a single JavaScript file for this assignment.
// Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(' Pl ayTha tF u nkyM usi c ') => 'PlayThatFunkyMusic'
// removeBlanks('I can not BELIEVE it's not BUTTER') => 'IcannotBELIEVEit'snotBUTTER'

var string1 = "I can not BELIEVE it's not BUTTER"

const removeBlanks = (string) => {
    var newString = ''
    for (var i=0; i<string.length; i++) {
        if (string[i] !== ' ') {
            newString += string[i]
        }
    }
    return newString
}
console.log(removeBlanks(string1))


// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
// You are allowed to use isNaN() and Number().

// Examples:

// getDigits('abc8c0d1ngd0j0!8') => 801008

// getDigits('0s1a3y5w7h9a2t4?6!8?0') => 1357924680

var string2 = '0s1a3y5w7h9a2t4?6!8?0'

const getDigits = (string) => {
    var newString = ''
    for (var i=0; i<string.length; i++) {
        if (isNaN(string[i])===false) {
            newString += string[i]
        }
    }
    return Number(newString)
}
console.log(getDigits(string2))


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).
// You are allowed to use .split() and .toUpperCase().

// acronym(' there's no free lunch - gotta pay yer way. ') => 'TNFL-GPYW'. 

// acronym('Live from New York, it's Saturday Night!') => 'LFNYISN'.

var string3 = "Live from New York, it's Saturday Night!"

const acronym = (string) => {
    var array = string.split(' ');
    var newString = '';
    for (var i=0; i<array.length; i++) {
        if (array[i] !== '') {
            newString += array[i][0].toUpperCase()
        }
    }
    return newString;
}
console.log(acronym(string3))


// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces('Honey pie, you are driving me crazy') => 29
// countNonSpaces('Hello world !') => 11

var string4 = 'Hello world !'

const countNonSpaces = (string) => {
    var count = 0;
    for (var i=0; i<string.length; i++) {
        if (isNaN(string[i]) === true) {
            count++
        }
    }
    return count
}
console.log(countNonSpaces(string4))


// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

var array5 = ['There', 'is', 'a', 'bug', 'in', 'the', 'system']
var value5 = 3

const removeShorterStrings = (array, value) => {
    var newArray = []
    for (var i=0; i<array.length; i++) {
        var count = 0;
        for (var j=0; j<array[i].length; j++) {
            count++
        }
        if (count >= value) {
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(removeShorterStrings(array5, value5))