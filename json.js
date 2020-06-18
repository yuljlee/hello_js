// JSON
// JavaScript Object Notation 

// 1. Object to JSON

'use strict'

const person = {
    name: 'Jacob',
    grade: '1st',
    age: 6,
    address: 'Fullerton',
    date: new Date(),

//    speak: function() {
//        console.log(`My name is ${this.name}.`);
//    }

    speak: () => {
        console.log(`My name is ${name}.`);
    }
}

//let json = JSON.stringify(person, ['name', 'age', 'date'], '\n\n');

let json = JSON.stringify(person, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'Jacob' : value;
})

//const me = Object.create(person);

//console.log(person);
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'date' ? new Date(value) : value;
});
//person.speak();
//console.log(obj);
console.log(person.date.getDate());
console.log(obj.date.getDate());
