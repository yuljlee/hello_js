'use strict'

// insertion sort
function insertionSort(array) {
    for (let index = 1; index < array.length; index++) {
        let position = index;
        let temp_value = array[index];

        while (position > 0 && arrary[position - 1] > temp_value) {
            array[position] = array[position - 1];
            position--;
        }

        array[position] = temp_value;
    }
    return array;
}

insertionSort([4, 2, 7, 1, 3]);
