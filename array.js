'use strict'

// Array

// 1. Declaration

//console.clear();

//const flutes = ['apple', 'banana', 'grape'];

//console.log(flutes);

// array quiz

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];

    let strfruits = '';
    for (let i = 0; i < fruits.length; i++) {
        strfruits = strfruits + ', ' + fruits[i];
    }

    console.log(strfruits);
}
  
// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const arrFruits = fruits.split(',');

    console.log(arrFruits);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];

    const reversed = array.reverse();

    // Careful: reverse is destructive -- it changes the original array.
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];

    array.splice(0, 2);

    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    //const found = students.find(element => element.score === 90);
    const found = students.find(function (element) 
                                {return element.score === 90});
    console.log(found);
}

// Q6. make an array of enrolled students
{
    const copyItems = [];
    students.forEach(function(item){
        if (item.enrolled === true)
            copyItems.push(item);
    })
    //const found = students.find(element => element.enrolled === true);
    console.log(copyItems);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const copyItems = [];
    students.forEach(function(item){
        copyItems.push(item.score);
    })

    console.log(copyItems);
}

// Q8. check if there is a student with the score lower than 50
{
    const copyItems = [];
    students.forEach(function(item){
        if (item.score < 50)
            copyItems.push(item);
    })
    //const found = students.find(element => element.enrolled === true);
    console.log(copyItems);
}

// Q9. compute students' average score
{
    const copyItems = [];
    let sumScore = 0;
    students.forEach(function(item){
        sumScore += item.score;
    })
    //const found = students.find(element => element.enrolled === true);
    console.log('sum: ', sumScore, 'avg: ', sumScore/5);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    let scores = [];
    //let strScore = '';
    students.forEach(function(item){
        scores.push(item.score);
    })
    
    console.log(scores.toString());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    let scores = [];
    //let strScore = '';
    students.forEach(function(item){
        scores.push(item.score);
    })

    console.log(scores.sort().toString());
}