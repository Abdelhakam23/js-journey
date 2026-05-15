// ============================================================
// 📁 05-math-methods.js
// Topic: Math Methods — the built-in Math object
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. Rounding
console.log(Math.round(4.5));  // 5 — .5 and above rounds up
console.log(Math.round(4.4));  // 4 — below .5 rounds down
console.log(Math.round(-4.5)); // -4 — negative numbers work differently

// 2. ceil — always rounds UP, no matter what
console.log(Math.ceil(4.1));   // 5
console.log(Math.ceil(4.9));   // 5
console.log(Math.ceil(4.0));   // 4 — already whole, stays the same
console.log(Math.ceil(-4.1));  // -4 — "up" for negatives means toward zero

// 3. floor — always rounds DOWN
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(4.1));  // 4
console.log(Math.floor(-4.1)); // -5 — "down" for negatives means away from zero

// 4. abs — absolute value (removes the negative sign)
console.log(Math.abs(-10)); // 10
console.log(Math.abs(10));  // 10
console.log(Math.abs(-3.5)); // 3.5

// 5. max and min
console.log(Math.max(3, 10, 7, 1, 99)); // 99
console.log(Math.min(3, 10, 7, 1, 99)); // 1

// 6. pow and sqrt
console.log(Math.pow(2, 10)); // 1024
console.log(Math.pow(3, 3));  // 27
console.log(Math.sqrt(25));   // 5
console.log(Math.sqrt(2));    // 1.4142135623730951

// 7. PI
console.log(Math.PI); // 3.141592653589793


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 8. Math.random — different every time
console.log(Math.random()); // a decimal between 0 and 1 (never exactly 1)

// Random integer between 0 and 9
console.log(Math.floor(Math.random() * 10));

// Random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// Random integer between 50 and 100 — can you figure out the formula?
console.log(Math.floor(Math.random() * 51) + 50);

// 9. Practical use — rounding prices
var price = 19.9867;
console.log(Math.round(price * 100) / 100); // ? — round to 2 decimal places

// 10. Using Math with arrays
var scores = [88, 72, 95, 60, 83];
var highest = Math.max(88, 72, 95, 60, 83);
console.log(highest); // 95

// what if the array is dynamic? Math.max doesn't take an array directly
// this is the workaround using apply:
console.log(Math.max.apply(null, scores)); // 95 — same result


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 11. Predict the output — your answer: /* ??? */
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));

// 12. Predict the output — your answer: /* ??? */
console.log(Math.round(-4.5));  // careful — not -5
console.log(Math.floor(-4.5));
console.log(Math.ceil(-4.5));

// 13. Predict the output — your answer: /* ??? */
var a = Math.pow(2, 3);
var b = Math.sqrt(64);
var c = Math.abs(a - b * 2);
console.log(a);
console.log(b);
console.log(c);

// 14. Build a random score generator — predict what range it produces
function getRandomScore() {
  return Math.floor(Math.random() * 41) + 60;
}

// What's the minimum possible output?  /* ??? */
// What's the maximum possible output?  /* ??? */
console.log(getRandomScore());
console.log(getRandomScore());
console.log(getRandomScore());

// 15. Predict the output — your answer: /* ??? */
var prices = [19.99, 5.5, 149.999, 0.1 + 0.2]; // last one is interesting
console.log(prices[3]);                          // floating point surprise
console.log(Math.round(prices[3] * 100) / 100);  // fixed
