// async & await
// clear style of using promise :)
// Syntactic suger

// 1. async
function fetchUser() {
    // do network request in 10 secs...
    return new Promise((resolve, reject) => {
        //return 'lee';
        resolve('lee');
    });
}

async function fetchUser() {
    // do network request in 10 secs...
    return 'lee';
}

const user = fetchUser();
user.then(console.log);
//console.log(`user value: ${user} type: ${typeof user}`);