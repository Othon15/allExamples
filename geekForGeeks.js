//jshint esversion:6

// var promise = new Promise (function(resolve,reject){
// const x = "geeksforgeeks"
// const y = "geeksforgeeks"

// if (x === y ) {
//     resolve();
// } else {
//     reject();
// }
// });

// promise.
// then (function () {
//     console.log("Success,you are GEEK");

// }).
// catch(function(){
//     console.log("some error has occured");
// });

//.then example using only .then() no .catch()

//resolve 

// var promise = new Promise (function(resolve,reject){
//     resolve("geeks for geeks");
// })

// promise
// .then(function(successMessage){
// //success handler function is invoked 
//     console.log(successMessage)
// },function(errorMessage) {
//     console.log(errorMessage)
// });

//reject

// var promise = new Promise (function(resolve,reject){
//     reject ("Promise rejected")
// })

// promise
// .then(function(successMessage){
//     console.log(successMessage);
// },function(errorMessage){
// //error handler function is invoked 
//     console.log(errorMessage);
// })


//.catch example using .then() and .catch()