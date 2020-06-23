'use strict'

// Find duplicate value in array 
// Log how many steps were taken
// 1. Using nested loop
function hasDuplicateValue(array) {
    let steps = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            steps++;
            if (i !== j && array[i] === array[j]) {
                return true;
            }
        }
    }
    console.log(`total steps: ${steps}`);
    return false;
}

const dup = [2, 9, 5, 8, 7, 20];
let result = hasDuplicateValue(dup);
console.log(result);

// 2. Linear search

function hasDuplicateValue(array) {
    let existingNumbers = [];
    let steps = 0;
    for(let i = 0; i < array.length; i++) {
        steps++;
        if(existingNumbers[array[i]] === undefined) {
            existingNumbers[array[i]] = 1;
        } else {
            return true;
        }
    }
    console.log(`total steps: ${steps}`);
    return false;
}