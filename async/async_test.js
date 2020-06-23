const promise = new Promise((reslolve, reject) => {
    setTimeout(() => {
        //reslolve('lee');
        reject(new Error('network error'));
    }, 2000)
    //console.log('ok');
})

promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('done');
    })