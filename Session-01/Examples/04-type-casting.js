// ============================================================
// 📁 04-type-casting.js
// Topic: Type Casting — converting between types explicitly
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. String to Number
var age = Number("22");
console.log(age);        // 22
console.log(typeof age); // number

// 2. Number to String
var score = String(100);
console.log(score);        // "100"
console.log(typeof score); // string

// 3. Truthy and falsy values with Boolean()
console.log(Boolean(1));          // true
console.log(Boolean(0));          // false
console.log(Boolean("Mahmoud"));  // true
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false

// 4. The prompt problem — why Number() matters
// Imagine the user typed "22" in a prompt
var userInput = "22"; // simulating what prompt returns
console.log(userInput + 5);          // "225" ← wrong
console.log(Number(userInput) + 5);  // 27   ← correct


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. What does Number() return for these?
console.log(Number(""));        // ?
console.log(Number(" "));       // ?
console.log(Number("3.14"));    // ?
console.log(Number("22px"));    // ?
console.log(Number(true));      // ?
console.log(Number(false));     // ?
console.log(Number(null));      // ?
console.log(Number(undefined)); // ?

// 6. What does Boolean() return for these?
console.log(Boolean(-1));   // ? — negative numbers are interesting
console.log(Boolean("0"));  // ? — a string containing zero
console.log(Boolean([]));   // ? — an empty array
console.log(Boolean(NaN));  // ?

// 7. Casting then doing math — what's the result?
var input = "50";
var result = Number(input) * 2 + 10;
console.log(result); // ?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 8. Predict the output — your answer: /* ??? */
var a = Number("5");
var b = String(5);
console.log(a == b);
console.log(a === b);
console.log(typeof a, typeof b);

// 9. Predict the output — your answer: /* ??? */
console.log(Number(null) + Number(undefined));
console.log(Number(true) + Number(false) + Number("3"));

// 10. Predict the output — your answer: /* ??? */
var value = "   42   "; // string with spaces around it
console.log(Number(value));        // does it handle spaces?
console.log(Number(value) + 8);
console.log(typeof Number(value));
