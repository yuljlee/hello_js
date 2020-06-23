'use strict'

// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
 
    }
}

const userStroage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStroage
    .loginUser(id, password)
    .then(id => userStroage.getRoles(id)) //
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} roll`))
    .catch(console.log);



/*
userStroage.loginUser(
    id,
    password,
    user => {
        userStroage.getRoles(
            user,
            userWithRoll => {
                alert(`Hello ${userWithRoll.name}, you have a ${userWithRoll.role} roll`);
            },
            error => {
                console.log(error);
            });
    },
    error => {console.log(error)}
);
*/
