// ============================================================
// 📁 06-implicit-conversion.js
// Topic: Implicit Conversion — when JS changes types behind the scenes
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. Subtraction forces strings into numbers
console.log("20" - 5);  // 15
console.log("10" - 3);  // 7

// 2. Multiplication and division do the same
console.log("6" * 2);   // 12
console.log("15" / 3);  // 5

// 3. Booleans become numbers in math
console.log(true  + 1); // 2 — true  = 1
console.log(false + 1); // 1 — false = 0

// 4. null in math
console.log(null + 10); // 10 — null = 0


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. What does NaN actually mean — and what type is it?
var result = "Mahmoud" * 2;
console.log(result);         // ?
console.log(typeof result);  // ? — this one surprises people
console.log(isNaN(result));  // ?

// 6. undefined behaves differently from null in math
console.log(null + 1);      // ?
console.log(undefined + 1); // ?

// 7. What happens when you mix booleans with strings?
console.log(true + "1");  // ?
console.log(false + "1"); // ?

// 8. A tricky subtraction
console.log("10" - "3");  // ?
console.log("10" - true); // ?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 9. Predict the output — your answer: /* ??? */
console.log(null + null);
console.log(null + undefined);
console.log(undefined + undefined);

// 10. Predict the output — your answer: /* ??? */
console.log(true + true + true);
console.log(false - true);
console.log(true * 5);
console.log(false * 100);

// 11. Predict the output — your answer: /* ??? */
console.log("5" - - "3");    // hint: two minus signs
console.log("5" * "4" - 10);
console.log("Mahmoud" - "Mahmoud");
