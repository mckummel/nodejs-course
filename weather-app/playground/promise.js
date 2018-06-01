var somePromise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        //it's only possible to resolve OR reject a promise, not both
        //resolve('Hey. It worked!');
        reject('Unable to fulfill promise!');
    },2500);
    
});

//let's avoid complex if statments (callbacks)
somePromise.then((message)=>{
    console.log('Sucess: ',message);
}, (errorMessage) => {
    console.log('Error: ',errorMessage);
});