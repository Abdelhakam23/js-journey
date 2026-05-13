// ============================================================
// 📁 05-plus-operator.js
// Topic: The + Operator — addition vs concatenation
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. Number + Number = math
console.log(10 + 5);  // 15
console.log(3 + 3);   // 6

// 2. String + String = joined text
console.log("Mahmoud" + " " + "Abdelhakam"); // Mahmoud Abdelhakam

// 3. String + Number = concatenation (number joins the string)
console.log("Score: " + 100); // Score: 100
console.log("Level " + 5);    // Level 5

// 4. Number + String = concatenation too
console.log(100 + " points"); // 100 points
console.log(5 + " stars");    // 5 stars


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. Order matters — JavaScript reads left to right
console.log(10 + 5 + " items"); // ?
console.log("items: " + 10 + 5); // ?

// 6. Parentheses change everything — what's the difference?
console.log("Total: " + (10 + 5));  // ?
console.log("Total: " + 10 + 5);    // ?

// 7. What happens here?
var a = "3";
var b = "4";
console.log(a + b);           // ?
console.log(Number(a) + Number(b)); // ?

// 8. Mixed types in a longer chain
console.log(1 + 2 + 3 + "4" + 5 + 6); // ?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 9. Predict the output — your answer: /* ??? */
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log(1 + "2" + 3);

// 10. Predict the output — your answer: /* ??? */
var mahmoudScore = 80;
var bonus = "20";
console.log("Final score: " + mahmoudScore + bonus);
console.log("Final score: " + (mahmoudScore + Number(bonus)));

// 11. Predict the output — your answer: /* ??? */
console.log(true + true + "1");
console.log("1" + true + true);
console.log(1 + true + "1" + false);
