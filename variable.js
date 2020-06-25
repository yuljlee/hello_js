// 1. use strict
// add in ES5
// use this for Vanila JavaScript
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES 6)

console.log("Hello World!");

let a = 10;

let golobalName = 'globalName';
{
    let name = 'lee';
    console.log(name);
    name = 'HaeAh';
    console.log(name);
    console.log(golobalName);
}
console.log(name);
console.log(golobalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
age = 4;
console.log(age);
var age;

// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count} type: ${typeof count}`);
console.log(`value: ${size} type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, nAn
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);