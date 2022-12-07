//jshint esversion:6

//https://blog.logrocket.com/guide-promises-node-js/
//Promisification refers to a transformation. It is the conversion of a callback-accepting function into a promise-returning function.
//Promisification aids in dealing with callback-based APIs while maintaining code consistency.

const fs = require ("fs");
const util = require ("util");

const readFile = util.promisify(fs.readFile);        // Use promisify to fs.readFile to promise based method

readFile("./promise.txt","utf8")                      // Reading the .txt file
.then((text) =>{

    console.log(text);
})
.catch((err) => {
    console.log("Error",err);
});