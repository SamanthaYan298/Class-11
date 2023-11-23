// 18 For Loop
// Level 1
// 18-1
for(var i = 0; i < 10; i++) {
    console.log(i);
}

console.log("finished");
/**
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 * 9
 * finished
 */

// 18-2
for(var k = 0; k < 5 || k == 5; k++) {
    console.log(k);
}

console.log("finished");
/**
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 * finished
 */

// 18-3
for(var k = 2; k < 4 || k == 4; k++) {
    console.log(k);
}

console.log("finished");
/**
 * 2
 * 3
 * 4
 * finished
 */

// 18-5
var text = "";

for(var i = 0; i < 7; i++) {
    if(i == 5) {
        text = "finished";
    }
}

console.log(text[0].toUpperCase() + text.slice(1) + " at the number " + i);
/**
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * finished
 * Finished at the number 7.
 */


// Level 2
// 18-1
for(var k = 0; k < 4 || k == 4; k += 2) {
    console.log(k);
}

/**
 * 0
 * 2
 * 4
 */

console.log("finished"); // finished

// 18-2
var count = 0;

for(count = 1; count <= 10; count++) {
    if(5 == count) {
        break;
    }
    console.log(count);
}

console.log("Broken out of the loop at count: " + count + ".");
/**
 * 1
 * 2
 * 3
 * 4
 * 5
 * Broken out of the loop at count: 5
 */

// 18-3
var count = 0;
for(count = 1; count <= 10; count++) {
    if(5 == count) {
        continue;
    }
    console.log(count);
}

console.log("Broken out of the loop at count: " + count + ".");
/**
 * 1
 * 2
 * 3
 * 4
 * 6
 * 7
 * 8
 * 9
 * 10
 * Broken out of the loop at count: 11
 */

// 18-4
for(var i = 5; i >= 0; i--) {
    switch(i){
        case 0:
            console.log("We are at case 0.");
        case 1:
            console.log("We are at case 1.");
        break;
        case 2:
            console.log("We are at case 2.");
        case 3:
            console.log("We are at case 3.");
        break;
        default:
            console.log("We are at the default case.");
    }
}
/**
 * We are at the default case.
 * We are at the default case.
 * We are at case 3.
 * We are at case 2.
 * We are at case 3.
 * We are at case 1.
 * We are at case 0.
 * We are at case 1.
 */

// 18-5
for(var counter = 1; counter <= 10; counter++) {
    if(8 == counter || counter == 5) {
        break;
    }
    if(1 == counter || counter == 3) {
        continue;
    }
    console.log(counter);
}

console.log("We are out of the loop and the counter stopped at: " + counter +".");

/**
 * 2
 * 4
 * We are out of the loop and the counter stopped at: 5.
 */

// 18-6
for(var count = 1; count <= 10; count++) {
    if(count == 5) {
        continue;
    }
    if(count == 9) {
        continue;
    }
    if(count == 7) {
        continue;
    }
    console.log(count);
}

/**
 * 1
 * 2
 * 3
 * 4
 * 6
 * 8
 * 10
 */


// Level 3
// 18-1
for(var i = 10, j = 20; (i > 0) && (j > 10); i--, j--) {
    console.log(i);
};

/**
 * 10
 * 9
 * 8
 * 7
 * 6
 * 5
 * 4
 * 3
 * 2
 * 1
 */

// 18-2
for(var i = 5; i > 0; i--) {
    switch(i) {
        case 0: case 1:
            console.log("We got to case 0 or 1.");
            break;
        case 2: case 3:
            console.log("We got to case 2 or 3.");
            break;
        case 4:
            console.log("We got to case 4.");
            break;
    }
}

/**
 * We got to case 4.
 * We got to case 2 or 3.
 * We got to case 2 or 3.
 * We got to case 0 or 1.
 */

// 18-3
for(var count = 1; count <= 10; count++) {
    if((8 == count) || (count == 5)) {
        break;
    } if((1 == count) || (count == 3)) {
        continue;
    }
    console.log(count);
}

/**
 * 2
 * 4
 */

// 20- while/break and do/while
// 20-1-0 While/break

var i = 0;

while (i < 3) {
    console.log(i);
    i++;
};

/**
 * 0
 * 1
 * 2
 */

// 20-1-2

var i = 0;

while (i <= 5) {
    console.log(i);
    i++;
}

/**
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 */

// 20-1-3
var i = 0;

while(i <= 5) {
    console.log(i);
    i += 2;
}

/**
 * 0
 * 2
 * 4
 */

// 20-1-4
var i = 0;
while(i <= 6) {
    console.log(i);
    i += 2;
}

/**
 * 0
 * 2
 * 4
 * 6
 */

// 20-1-5
var i = 0;

while(i <= 6) {
    if(i % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
    i++;
}

/**
 * Even;
 * Odd;
 * Even;
 * Odd;
 * Even;
 * Odd;
 * Even;
 */

// 20-1-6
var i = 0;
var proceed = true;

console.log("Start. The value is " + proceed + ".");

while(proceed) {
    i++;
    if(i == 3) {
        proceed = false;
    }
    console.log("Done. The value if " + proceed + " and the number ended at " + i + ".");
}

/**
 * Start. The value is true
 * Done. The value if true and the number ended at 1
 *  Done. The value if true and the number ended at 2
 * Done. The value if false and the number ended at 3
 */ 

// 20-1-7
var i = 0;
var proceed = true;

console.log("Start. The value is " + proceed + ".");

while(proceed) {
    if(i == 3) {
        proceed = false;
    }
    i++;
}
console.log("Done. The value is " + proceed + " and the number ended at " + i + ".");

/**
 * Start. The value is true.
 * Done. The value is false and the number ended at 4.
 */

// 20-1-8
//var i = 0;
//var proceed = true;

//console.log("Start. The value is " + proceed + ".");

//while (proceed) {
//    if(i == 3) {
//        proceed = false;
//        break;
//    } if(i == 2) {
//        i++;
//    }
//    i++;
//}

//console.log("Done. The value is " + proceed + " and the number ended at " + i + ".");
// Start. The value is true.

// 20-2-0 Do-While / Break
// 20-2-1
var i = 0;
do {
    console.log(i)
    i++;
} while (i < 5);

/**
 * 0
 * 1
 * 2
 * 3
 * 4
 */

// 20-2-2
var i = 0;

do {
    console.log(i)
    i += 2;
} while (i < 5);

/**
 * 0
 * 2
 * 4
 */

// 20-2-3
var i = 1;

do {
    console.log(i)
    i += 2;
} while (i < 5);

/**
 * 1
 * 3
 */

// 20-2-4
var i = 1;
var proceed = true;

do {
    console.log(i);
    if(i == 3) {
        break;
    }
    i++;
} while (proceed);

/**
 * 1
 * 2
 * 3
 */

// 20-2-5
var i = 1;
var j = 0;

do {
    console.log("The value of i is " + i + ".");
    console.log("The value of j is " + j + ".");
    if(i == j) {
        break;
    }
    i++;
    j += 2;
} while(i < 5);

/**
 * The value of i is 1.
 * The value of j is 0.
 * The value of i is 2.
 * The value of j is 2.
 */


// 21 Ternary Operator
// 21-1
var name = "George";
var beverage = (name === "Fred") ? true : false;

console.log(beverage); // false

// 21-2
var name = "Fred";
var beverage = (name === "Fred") ? true : false;

console.log(beverage); // true

// 21-3
var age = 20;
var beverage = (age === 21) ? "beer" : "Juice";

console.log(beverage); // Juice

// 21-4
function hello() {
    console.log("Hello person.");
};

function goodbye() {
    console.log("Goodbye person.");
};

var authenticated = true ? hello() : goodbye(); // Hello person

// 21-5
function getFee(isMember) {
    return (isMember ? '$3.00' : '$15.00');
}

console.log(getFee(true)); // $3.00
console.log(getFee(false)); // $15.00
console.log(getFee(null)); // $15.00

// 21-6
var a = 2.0;
var a2 = 2.0;

console.log(a == 2.0 ? true : false); // true
console.log(a2 == 4.0 ? 'Result#1' : 'Result#2'); // Result#2
console.log(a2 == 4.0 ? 'Result#3' : 'Result#4'); // Result#4

console.log(a == 2.0 ?
        (a2 == 4.0 ? 'Result#1' : 'Result#2') :
        (a2 == 4.0 ? 'Result#3' : 'Result#4')); // Result#2