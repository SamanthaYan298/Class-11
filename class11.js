// Incrementing
/** 1 can change values
 * Initialize a variable called num to the value of 4.
 * Increment num by 1
 */

var num = 4;
num = num + 1;
console.log(num);


/** 2 can change values
 *  Increment num by 1
 */

num +=1;
console.log(num); 


/** 3 only can increment by 1;
 *  Increment num by 1
 */

num++;
console.log(num);


/** 4 with for Loops
 *  
 */

var sentence ="";

for (var i = 0; i < 4; i++) {
    sentence += "The number is " + i + ". ";
};

console.log(sentence); // The number is 0. The number is 1. The number is 2. The number is 3. 


// Decrementing
/** 1 can change values
 * Initialize a variable called num to the value of 4.
 * Decrement num by 1
 */

var num = 4;
num = num -1;
console.log(num);


/** 2 can change values
 *  Decrement num by 1
 */

num -=1;
console.log(num);


/** 3 only can increment by 1;
 *  Increment num by 1
 */

num--;
console.log(num);

/** 4 with for Loops
 *  
 */

var sentence = "";

for (var i = 4; i > 0; i--) {
    sentence += "The number is " + i + ". ";
}

console.log(sentence); // The number is 4. The number is 3. The number is 2. The number is 1.


// Ternary Operator 
// Example 1
// condition ? exprIfTrue : exprIfFalse

function canDrive(age) {
    age >= 16 ? console.log("Yes you can drive") : console.log("No you cannot drive")
}

canDrive(18); // Yes you can drive


// Example 2:

var canVote = true;

var voted = canVote ? "Yes" : "No"

console.log(voted); // yes


// Example 3 multiple checking for different values

function example(num) {
    return num == 1 ? "You gessed 1"
        : num == 2 ? "You gessed 2"
        : num == 3 ? "You gessed 3"
        : "You did not guess any right numbers"
}

console.log(example(1)); // You gessed 1
console.log(example(2)); // You gessed 2
console.log(example(3)); // You gessed 3
console.log(example(4)); // You did not guess any right numbers


// Example how we can convert a string to a number

var valueOne = 1;

var valueTwo = "1";

// type of operator returns a string indicating the type of the operand's value
console.log(typeof valueOne); // number
console.log(typeof valueTwo); // string

// Number() converts a string or other value to the Number type
valueTwo = Number(valueTwo);
console.log(typeof valueTwo);


// Do While Loop Example 1

var proceed = true;
var j = 0;

do {
    j++;
    if (j == 3) {
        proceed = false;
    }
    console.log(j);
} while (proceed)

console.log("done");


// Do While Loop Example 2

var i = 0;

do {
    i++;
    console.log(i);
} while (i < 5)

console.log("done");


// While Loop Example 1

var proceed = true;

var j = 0;

while(proceed) {
    j++;
    if(j == 3) {
        proceed = false;
    }
    console.log(j);
}

console.log("done");


// While Loop Example 2

var i = 0;

while(i < 10) {
    i++;
    console.log(i);
}

console.log("Finished");


// While Loop Example 3

var proceed = true;
var number = 0;

while(proceed) {
    console.log(number);

    if(number == 3) {
        proceed = false;
    }

    number++;
}

console.log(number);

/**
 * 0
 * 1
 * 2
 * 3
 * 4
 */