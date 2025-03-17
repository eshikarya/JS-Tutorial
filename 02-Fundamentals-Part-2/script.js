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

/*

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

*/



/*
// Function declaration vs expression


//function declaration


// const age1 = calcAge1(1999);
//function can be called before function declaration

function calcAge1(birthYear){
    return 2025 - birthYear;
}

const age1 = calcAge1(1999);

console.log(age1);


//function expression --- anonymous function

// const age2 = calcAge2(1999);
// Cannot access 'calcAge2' before initialization

const calcAge2 = function (birthYear){
    return 2025 - birthYear;
}

const age2 = calcAge2(1999);

console.log(age1,age2);

*/



/*

// Arrow Function
const calcAge3 = birthYear => 2025-birthYear;

const age3 = calcAge3(2000);
console.log(age3);


const yearsUntilRetirement = (birthYear,firstName) =>{
    const currentAge = 2025 - birthYear;
    const retirement = 65 - currentAge;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1999));
*/


//FNS CALLING OTHER FNS

/* 

const cutPieces = function(fruit){
    return fruit*4;
};

const fruitProcessor = function(apples,oranges){
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
};

console.log(fruitProcessor(2,3));
*/

/* 

// Introduction to Arrays

//first way to create array --- literal syntax
const friends = ['Alex','Jane','Joe'];
console.log(friends);


//second way to create array
const year = new Array(1990,1995,2000,2005,2010);
// console.log(years);


console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = "Ray";
console.log(friends);

const jonas = ['Jonas','Doe',2025-1991,'teacher',friends];
console.log(jonas);
console.log(jonas.length);


//Exercise
const calcAge = function (birthYear){
    return 2025 - birthYear;
}

const years = [1990,1965,2000];

// console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

console.log(age1,age2,age3);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);


// Basic Array Methods


const friends = ['Alex','Jane','Joe'];


//add elements
const newLength = friends.push('Hannah');
console.log(friends);

friends.unshift('John');
console.log(friends);


//remove elements
const poppedElement = friends.pop(); //last element
console.log(friends);
console.log(poppedElement);

friends.shift(); //first element
console.log(friends);

console.log(friends.indexOf('Alex'));
console.log(friends.indexOf('Mary')); //-1



//.includes uses strict equality to check if element is present in array
friends.push(23);
console.log(friends.includes('Alex')); //true
console.log(friends.includes('Mary')); //false
console.log(friends.includes('23')); //false -- type conversion not done 
console.log(friends.includes(23)); //true

*/


/*
//OBJECTS

const jane = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 2025 - 1995,
    job: 'teacher',
    friends: [
        'John',
        'Jack',
        'Mary'
    ]
};

console.log(jane);



// dot vs bracket notations

console.log(jane.lastName);
console.log(jane['lastName']);

//bracket notation can be used for handling expressions

//  RETRIEVING OBJECTS
//eg 1: concatenate
const nameKey = 'Name';
console.log(jane['first' + nameKey]);
console.log(jane['last' + nameKey]);

//eg 2: user defined input
const interestedIn = prompt('What do you want to know about Jane? Choose between firstName,lastName,age,job,friends');

// ----> console.log(jane.interestedIn)  ==== this will return undefined since no key with the name 'interestedIn' exists

if (jane[interestedIn]) {
    console.log(jane[interestedIn]); // here interestedIn is an expression which is evaluated and hence replaced by the value user enters.
}
else {
    console.log('Wrong Request! Choose between firstName,lastName,age,job,friends');
}


// ADDING OBJECTS
jane.location = 'Germany';
jane['gender'] = 'female';

console.log(jane);

console.log(`${jane.firstName} has ${jane.friends.length} friends, and her best friend is ${jane.friends[0]}.`);
*/



// OBJECT METHODS

const jane = {
    firstName:'Jane',
    lastName:'Doe',
    birthYear: 1995,
    hasDriversLicense:true,
    job:'teacher',
    friends:['Manny','Bob','Alex'],

    // calcAge:function(birthYear){
    //     return 2025-birthYear;
    // }

    // calcAge:function(){
    //     // console.log(this); // this is equal to "current object calling the method which in this case is JONAS"
    //     return 2025-this.birthYear;
    // }

    calcAge:function(){
        this.age = (2025-this.birthYear);
        return this.age;
    },

    summary:function(){
        
        const finalString =  `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and she has ${this.hasDriversLicense? 'a':'no'} driver's license.`
        
        return finalString;
    }

};

// console.log(jane.calcAge());
// console.log(jane.age);

console.log(jane.summary());




