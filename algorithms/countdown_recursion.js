'use strict'

// use loop
/*
function countdown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
*/

countdown(10);

// use recursion
function countdown(num) {
    console.log(num);
    if (num === 0) { // base case
        return;
    } else {
        countdown(num-1);
    }
}