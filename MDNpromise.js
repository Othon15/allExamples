
//Basic example

// const myFirstPromise = new Promise ((resolve,reject) => {  // We call resolve(...) when what we were doing asynchronously was successful,
//     setTimeout(() =>{                                      //  and reject(...) when it failed.                                           
//         resolve("Success!");                               // In this example, we use setTimeout(...) to simulate async code.
//     },250);                                                // In reality, you will probably be using something like XHR or an HTML API.
// })                                                           
// myFirstPromise.then((successMessage) => {                    // successMessage is whatever we passed in the resolve(...) function above.
//   console.log(`Yay! ${successMessage}`);                   // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
// });


const THRESHOLD_A = 8 //can use zero 0 to guarantee error

function tetheredGetNumber (resolve,reject) {
    setTimeout(() => {
        const randomInt = Date.now () ;
        const value = randomInt % 10 ;
        if (value < THRESHOLD_A){
            resolve(value);
        }else {
            reject (`Too large ${value}`);
        }
    },500);
}


function determineParity(value) {
    const isOdd = value % 2 === 1;
    return { value , isOdd};
}

function troubleWithGetNumber(reason){
    const err = new Error ("Trouble getting number", {cause : reason});
    console.log(err);
    throw  err ;
}

function promiseGetWorld(parityInfo) {
    return new Promise ((resolve,reject) => {
        const {value ,isOdd} = parityInfo;
        if (value >= THRESHOLD_A -1) {
            reject (`Still too large ${value}`);
        } else {
            parityInfo.wordEvenOdd = isOdd ? "odd" : "even"
            resolve(parityInfo);
        }
    });
}

new Promise (tetheredGetNumber)
.then(determineParity,troubleWithGetNumber)
.then(promiseGetWorld)
.then((info) => {
    console.log(`Got : ${info.value},${info.wordEvenOdd}`);
    return info ;
})
.catch((reason) =>{
    if(reason.cause) {
        console.error("Had previously handled error");
    }else {
        console.error(`TRouble with promiseGetWord(): ${reason}`);
    }
})
.finally((info)=> console.log("All done"));