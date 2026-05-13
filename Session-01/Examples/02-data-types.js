// ============================================================
// 📁 02-data-types.js
// Topic: Data Types — string, number, boolean, dynamic typing
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. Check the type of different values
console.log(typeof "Mahmoud"); // string
console.log(typeof 22);        // number
console.log(typeof true);      // boolean
console.log(typeof 3.14);      // number — integers and decimals are both "number"

// 2. Dynamic typing in action — one variable, many types
var info = "Mahmoud";
console.log(typeof info); // string
info = 22;
console.log(typeof info); // number
info = true;
console.log(typeof info); // boolean

// 3. Strings can use single or double quotes — both work
var single = 'Mahmoud';
var double = "Mahmoud";
console.log(single === double); // true


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 4. What type does typeof return for typeof itself?
console.log(typeof typeof 22);

// 5. Is this true or false — and why?
console.log(typeof 22 === "number");
console.log(typeof "22" === "number");

// 6. What gets logged here?
var value = "100";
value = value * 1;
console.log(typeof value);
console.log(value);


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 7. Predict the output — your answer: /* ??? */
var a = "5";
var b = 5;
console.log(typeof a === typeof b);
console.log(a == b);
console.log(a === b);

// 8. Predict the output — your answer: /* ??? */
var x = true;
console.log(typeof x);
x = x + 0;
console.log(typeof x);
console.log(x);

// 9. Predict the output — your answer: /* ??? */
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
