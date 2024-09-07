console.log("Ordering your pizza...");

// Creating a promise
const pizzaPromise = () => {
    return new Promise((resolve, reject) => {
        //resolve and reject are callback functions
        // what is callback function?
        // A callback function is a function that is passed as an argument to another function, to be "called back" at a later time.
        let order = true;

        if (order) {

            setTimeout(() => { // setTimeout is used to simulated a delay
                resolve("After 5 seconds, Pizza delivered!");
            
            }, 5000);
        } else{

        }
    });
}

// calling the function with a promise
// use .then() to handle the resolved promise
// use .catch() to handle the rejected promise

pizzaPromise()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

console.log("Waiting for your pizza...");

//terminology
// Promise: An object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.\
// Resolve: A callback function that is used when the promise is fulfilled.
//Reject: A callback function that is used when the promise is rejected.
// .then(): A method that is used to handle the resolved promise.
// .catch(): A method that is used to handle the rejected promise.