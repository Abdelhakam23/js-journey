// ============================================================
// 📁 07-operators.js
// Topic: Arithmetic, Comparison, Logical, Increment & Decrement
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. Basic arithmetic
console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 / 3); // 3.333...
console.log(10 % 3); // 1 — remainder after division

// 2. Increment and decrement
var mahmoudScore = 10;
mahmoudScore++;
console.log(mahmoudScore); // 11
mahmoudScore--;
console.log(mahmoudScore); // 10

// 3. Comparison operators
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(10 <= 9);  // false
console.log(10 == "10");  // true  — loose equality
console.log(10 === "10"); // false — strict equality

// 4. Logical operators
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false || true);  // true
console.log(false || false); // false
console.log(!true);          // false


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. Operator precedence — what's the result?
console.log(2 + 3 * 4);    // ?
console.log((2 + 3) * 4);  // ?
console.log(10 - 2 * 3);   // ?
console.log(10 % 3 + 1);   // ?

// 6. Pre vs post increment — spot the difference
var x = 5;
console.log(x++); // ? — returns current value, THEN increments
console.log(x);   // ?

var y = 5;
console.log(++y); // ? — increments FIRST, then returns
console.log(y);   // ?

// 7. Logical operators with non-boolean values
console.log(1 && 2);    // ? — not just true/false
console.log(0 && 2);    // ?
console.log(1 || 2);    // ?
console.log(0 || "Mahmoud"); // ?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 8. Predict the output — your answer: /* ??? */
var a = 5;
var b = a++;
console.log(a);
console.log(b);

// 9. Predict the output — your answer: /* ??? */
var mahmoudAge = 22;
var hasID = true;

console.log(mahmoudAge >= 18 && hasID);
console.log(mahmoudAge < 18 || hasID);
console.log(!(mahmoudAge > 18));
console.log(mahmoudAge >= 18 && !hasID);

// 10. Predict the output — your answer: /* ??? */
console.log(0 || "" || null || undefined || "Mahmoud" || 100);
console.log(1 && "hello" && true && 42);
console.log(null && "this won't show");
