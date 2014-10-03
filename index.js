/**
 * 1. create a new repo on Github called TIY-hw08 (08 for the day,
 * 2. add this script file to your index.html and run it in the browser to get the output
 * 3. debug and see the console.log() messages in the chrome dev tools
 */

/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b) {
    "use strict";
    //...
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(max(23, 27));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z) {
    "use strict";
    //...
    if (x > y) {
        if (x > z) {
            return x;
        } else {
            return z;
        }
    } else {
        if (y > z) {
            return y;
        } else {
            return z;
        }
    }
}

console.log(maxOfThree(14, 20, 8));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    "use strict";
    //...
    var x = char;

    switch (x.toLowerCase()) {
        case "a":
            return true;
            break;
        case "e":
            return true;
            break;
        case "i":
            return true;
            break;
        case "o":
            return true;
            break;
        case "u":
            return true;
            break;
        default:
            return false;
            break;
    }
}

console.log(isVowel('E'));

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
    "use strict";
    //...
    // var newPhrase = phrase.split("");
    // for ( var i in newPhrase) {
    //     switch (i.toLowerCase()) {
    //         case "a":
    //             return true;
    //             break;
    //         case "e":
    //             return true;
    //             break;
    //         case "i":
    //         return true;
    //             break;
    //         case "o": 
    //         return true;
    //             break;
    //         case "u":
    //         return true;
    //             break;
    //         default:
    //             return i+i;
    //             break;
    //     }
    // }
}


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

var myNumbers = [1, 2, 3, 4];

function sum(someArray) {
    "use strict";
    //...
    var sum = 0;
    for (var i in someArray) {
        // console.log(someArray[i]);
        sum += someArray[i];
    }
    return sum;
}

function multiply(someArray) {
    "use strict";
    //...
    var product = 1;
    for (var i in someArray) {
        // console.log(someArray[i]);
        product *= someArray[i];
    }
    return product;
}

console.log(sum(myNumbers));
console.log(multiply(myNumbers));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(s) {
    "use strict";
    return (s).split("").reverse().join("");

    //...
}
console.log(reverse('hello'));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
    "use strict";
    //...
    
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    "use strict";
    //...
}
