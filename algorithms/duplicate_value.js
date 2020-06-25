'use strict'

// Find duplicate value in array 
// Log how many steps were taken

// 1. Using nested loop
// O(N*N)
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
    console.log(`total steps(nested loop): ${steps}`);
    return false;
}

// 2. Linear search
// O(N)
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
    console.log(`total steps(linear search): ${steps}`);
    return false;
}

// 3. Using hash
// O(N)
function hasDuplicateValue(array) {
    let existingValues = {};
    let steps = 0;
    for(let i = 0; i < array.length; i++) {
        steps++;
        if(existingValues[array[i]] === undefined) {
            existingValues[array[i]] = 1;
        } else {
            return true;
        }
        console.log(`index: ${array[i]} => ${existingValues[array[i]]}`);
    }
    console.log(`total steps(hash): ${steps}`);
    return false;
}

//console.log(hasDuplicateValue([2, 9, 5, 2, 7, 20]));
console.log(hasDuplicateValue(['a', 'b', 'c', 'g', 'f', 'r']));