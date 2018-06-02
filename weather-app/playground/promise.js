var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Args must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, 7).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Result 2: ', res)
}).catch((errorMessage)=>{
    console.log(errorMessage);
});


var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //it's only possible to resolve OR reject a promise, not both
        //resolve('Hey. It worked!');
        reject('Unable to fulfill promise!');
    }, 2500);

});

//let's avoid complex if statments (callbacks)
somePromise.then((message) => {
    console.log('Sucess: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});