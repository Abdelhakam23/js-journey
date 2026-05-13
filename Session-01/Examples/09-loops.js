// ============================================================
// 📁 09-loops.js
// Topic: For Loops — iteration, control, and common patterns
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. A simple loop that counts up
for (var i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// 2. A loop that counts down
for (var i = 5; i >= 1; i--) {
  console.log("Countdown: " + i);
}

// 3. Building a string inside a loop
var result = "";
for (var i = 1; i <= 3; i++) {
  result += "Session " + i + " | ";
}
console.log(result); // Session 1 | Session 2 | Session 3 |

// 4. Looping with a step of 2
for (var i = 0; i <= 10; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8, 10
}


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. How many times does this loop run?
for (var i = 3; i < 10; i += 3) {
  console.log("i = " + i);
}

// 6. A loop that adds numbers together
var total = 0;
for (var i = 1; i <= 5; i++) {
  total += i;
}
console.log("Total: " + total); // what is the sum of 1+2+3+4+5?

// 7. Nested loop — a loop inside a loop
for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 3; j++) {
    console.log(i + " x " + j + " = " + (i * j));
  }
}

// 8. Mahmoud is practicing — log his progress
var sessions = ["Variables", "Functions", "Arrays", "Objects", "DOM"];
for (var i = 0; i < sessions.length; i++) {
  console.log("Session " + (i + 1) + ": " + sessions[i]);
}


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 9. Predict the output — your answer: /* ??? */
for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log("After loop: " + i);
// hint: what is var i after the loop ends?

// 10. Predict the output — your answer: /* ??? */
var x = 0;
for (var i = 1; i <= 4; i++) {
  if (i % 2 === 0) {
    x += i;
  }
}
console.log(x); // sum of even numbers from 1 to 4

// 11. Predict the output — your answer: /* ??? */
var output = "";
for (var i = 1; i <= 4; i++) {
  if (i === 3) {
    continue; // skip this iteration
  }
  output += i + " ";
}
console.log(output);

// 12. Predict the output — your answer: /* ??? */
var output = "";
for (var i = 1; i <= 5; i++) {
  if (i === 4) {
    break; // stop the loop entirely
  }
  output += i + " ";
}
console.log(output);
