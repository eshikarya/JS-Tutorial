'use strict';  // STRICT MODE ACTIVATION ---- Should be first line of code


/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 123;
// const if = 123;

*/




// FUNCTIONS



function logger(){
    console.log(`I'm Jane Doe.`);
}

// calling/invoking/running the function
logger(25); //since function definition does not include parameters 25 passed as argument won't get used! instead of how in java it throws error!!!
logger('hello',23,132,'what'); //since function definition does not include parameters 25 passed as argument won't get used! instead of how in java it throws error!!!
logger();


function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    // console.log(apples+oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const mixedJuice = fruitProcessor(2,5);

console.log(mixedJuice);

console.log(fruitProcessor(1,6));

