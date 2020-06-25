'use strict'

// selection sort
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let lowestIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[lowestIndex] > array[j]) {
                lowestIndex = j;
            }
        }
        if (lowestIndex !== i) {
            let temp = array[lowestIndex]; // 1
            array[lowestIndex] = array[i]; // 
            array[i] = temp;
        }
    }
    return array;
}

console.log(selectionSort([4, 1, 3, 2, 7]));

