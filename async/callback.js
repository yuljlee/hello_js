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

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStroage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStroage.loginUser(
    id,
    password,
    user => {
        userStroage.getRoles(
            user,
            userWithRoll => {
                alert(`Hello ${userWithRoll.name}, you have a ${userWithRoll.roll} roll`);
            },
            error => {
                console.log(error);
            });
    },
    error => {console.log(error)}
);

// callback chain problems
// 1. hard to read codes