// ============================================================
// 📁 03-null-vs-undefined.js
// Topic: null vs undefined — what they mean and how they differ
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. undefined — declared but never assigned
var mahmoudJob;
console.log(mahmoudJob);        // undefined
console.log(typeof mahmoudJob); // "undefined"

// 2. null — intentionally empty
var currentProject = null;
console.log(currentProject);        // null
console.log(typeof currentProject); // "object" ← old JS bug, never fixed

// 3. Assigning a value after undefined
var score;
console.log(score); // undefined
score = 95;
console.log(score); // 95

// 4. Resetting a value to null on purpose
var sessionTopic = "Variables";
console.log(sessionTopic); // Variables
sessionTopic = null;
console.log(sessionTopic); // null — cleared intentionally


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. Loose vs strict equality — what's the difference here?
console.log(null == undefined);  // ?
console.log(null === undefined); // ?

// 6. What happens when you do math with null and undefined?
console.log(null + 1);      // ?
console.log(undefined + 1); // ?

// 7. Which of these are truthy and which are falsy?
console.log(Boolean(null));      // ?
console.log(Boolean(undefined)); // ?
console.log(Boolean(0));         // ?
console.log(Boolean(""));        // ?
console.log(Boolean("0"));       // ? — careful with this one


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 8. Predict the output — your answer: /* ??? */
var a = null;
var b;
console.log(a == b);
console.log(a === b);
console.log(typeof a === typeof b);

// 9. Predict the output — your answer: /* ??? */
var x = null;
x = x + 1;
console.log(x);
console.log(typeof x);

var y;
y = y + 1;
console.log(y);
console.log(typeof y);

// 10. Predict the output — your answer: /* ??? */
var value = undefined;
console.log(value == null);
console.log(value === null);
console.log(value + " Mahmoud");
