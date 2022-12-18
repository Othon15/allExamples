//jshint esversion:6


//https://blog.logrocket.com/guide-promises-node-js/

// function getSumNum (a, b) {
//     const customPromise = new Promise( (resolve,reject) =>{                                            
//         const sum = a + b

          
//     if (sum<= 5){
//         resolve("Let's go!!")
//     } else {
//         reject (new Error("Oops!...Number must be less than 5'"))
//     }

//     })
    
//     return customPromise

// }

// getSumNum(1,3).then(data =>{        //executed when the promise is fulfilled by the resolve() callback          resolve () pair with .then
//     console.log(data)

// })
// .catch(err => {                    // the catch () is called if the promise fails,passing the error of reject ()   reject () pair with  .catch
//     console.log(err)
// })


/////////modify previous code like this following the example!!!!!!!

// let value ;

// function getSumNum(a,b) {
//     const customPromise = new Promise ((resolve, reject) => {
//         const sum = a + b ;

//         if (sum < 5) {
//             resolve (sum)
//         } else {
//             reject (new Error ("Oops!.. Number must be less than 5"))
//         }
//     })
    
//      return customPromise
// }



// getSumNum(1,3)        //function from above
// .then(data => {                                         // executed when the promise is fulfilled by the resolve() callback
//     console.log("initial data " + data)                // the .then here shows the initial data,then modifies the data by adding 1 and 
//     value = data + 1                                  // assigning the resulting sum (data + 1) to the variable value we declared
    
//     return value
// })

// .then(newData => {
//     console.log("modified data " + newData)         //the value variable is passed to the next .then method and the data is logged to the console.
// })
// .catch(err => {                                      //the catch () is called if the promise fails,passing the error of reject ()
//     console.log(err)
// })  

// //output initial data 4
// //      modified data 5
 
/////////////////////////promise chaining article from Peter 15/12/2022   https://javascript.info/promise-chaining

// EXAMPLE 1

// new Promise (function (resolve, reject) {
//     setTimeout (() => resolve(1),1000); // (*)

// }).then (function(result){  // (**)

//     console.log(result); //1
//     return result * 2;

// }).then (function(result){

//     console.log(result); //2
//     return result * 2;

// }).then(function (result) {

//     console.log(result); // 4
//     return result *2 

// });


// let promise = new Promise(function(resolve, reject) {             //What we did here is just several handlers to one promise. 
//     setTimeout(() => resolve(1), 1000);                           //They don’t pass the result to each other; instead they process it independently.
//   });                                                             //All .then on the same promise get the same result – the result of that promise
//                                                                   // So in the code above all alert show the same: 1.
//   promise.then(function(result) {                                 //In practice we rarely need multiple handlers for one promise. Chaining is used much more often.   
//     console.log(result); // 1
//     return result * 2;
//   });
  
//   promise.then(function(result) {
//     console.log(result); // 1
//     return result * 2;
//   });
  
//   promise.then(function(result) {
//     console.log(result); // 1
//     return result * 2;
//   });

//EXAMPLE 2  ASYNCHRONOUS ACTIONS

// new Promise (function (resolve, reject){                 //Here the first .then shows 1 and returns new Promise(…) in the line (*). 
//                                                          //After one second it resolves, and the result (the argument of resolve,
//     setTimeout(() => resolve(1),1000);                   //here it’s result * 2) is passed on to the handler of the second .then. 
//                                                          //That handler is in the line (**), it shows 2 and does the same thing.
// }).then(function(result) {                               //So the output is the same as in the previous example: 1 → 2 → 4, 
//                                                          //but now with 1 second delay between alert calls.
//     console.log(result);  //1                            //Returning promises allows us to build chains of asynchronous actions.

//     return new Promise((resolve,reject)=> {  //(*)
//         setTimeout(() => resolve (result *2 ), 1000);
//     });
// }).then (function(result){      // (**)

//     console.log(result); //2

//     return new Promise ((resolve, reject) =>{
//         setTimeout(() => resolve (result *2),1000);

//     })
// }).then( function (result) {
//     console.log(result);   // 4

// });

//////////////////////////////blog rocket///////////////////////////////////

// function perfectSquare (number, callback) {
//     const bool = Number.isInteger(Math.sqrt(number))
//     if (!bool) {
//       return callback(`Number ${number} is NOT a perfect square` )
//     }
//     callback(`Number ${number} is a perfect square`)
//   }

//   // callback function
//   function callback(data){
//     console.log(data)
//   }


//   perfectSquare(25, callback)       


// function perfectSquare(number){
//     return new Promise(function(fulfilled,rejected){
//         const bool = Number.isInteger(Math.sqrt(number))
//     if (!bool){
//         return rejected(new Error(`Number ${number} is NOT a perfect square`))
//     }
//     fulfilled(`Number ${number} is a perfect square`)
//     })
// }


// perfectSquare(25).then(res => {
//     console.log(res)
// }) 

