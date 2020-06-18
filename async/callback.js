'use strict'

// JavaScript is syncronous.
// Execute the code block in order after hoisting.
// hoisting: var, funtion declaration

console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

// Syncronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('Hello'));

// asyncronous callback

function printWithDelay(print, delay) {
    setTimeout(print, delay);
}

printWithDelay(() => console.log('async callback'), 2000);