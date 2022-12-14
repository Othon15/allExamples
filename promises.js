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

let value ;

function getSumNum(a,b) {
    const customPromise = new Promise ((resolve, reject) => {
        const sum = a + b ;

        if (sum < 5) {
            resolve (sum)
        } else {
            reject (new Error ("Oops!.. Number must be less than 5"))
        }
    })
    
     return customPromise
}



getSumNum(1,3)
.then(data => {                                         // executed when the promise is fulfilled by the resolve() callback
    console.log("initial data " + data)                // the .then here shows the initial data,then modifies the data by adding 1 and 
    value = data + 1                                  // assigning the resulting sum (data + 1) to the variable value we declared
    
    return value
})

.then(newData => {
    console.log("modified data " + newData)         //the value variable is passed to the next .then method and the data is logged to the console.
})
.catch(err => {                                      //the catch () is called if the promise fails,passing the error of reject ()
    console.log(err)
})  

//output initial data 4
//      modified data 5
 

