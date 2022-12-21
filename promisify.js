//jshint esversion:6

//https://blog.logrocket.com/guide-promises-node-js/
//Promisification refers to a transformation. It is the conversion of a callback-accepting function into a promise-returning function.
//Promisification aids in dealing with callback-based APIs while maintaining code consistency.

const fs = require ("fs");
const util = require ("util");

// const readFile = util.promisify(fs.readFile);        // Use promisify to fs.readFile to promise based method

// readFile("./promise.txt","utf8")                      // Reading the .txt file
// .then((text) =>{

//     console.log(text);
// })
// .catch((err) => {
//     console.log("Error",err);
// });

///////////////////////////////////////

function perfectSquare(number){
    return new Promise(function(fulfilled,rejected){
        const bool = Number.isInteger(Math.sqrt(number))
    if (!bool){
        return rejected(new Error(`Number ${number} is NOT a perfect square`))
    }
    fulfilled(`Number ${number} is a perfect square`)
    })
}


let promiseCall = util.promisify(perfectSquare)
  promiseCall(25).then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })