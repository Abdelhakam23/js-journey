// ============================================================
// 📁 05-iife.js
// Topic: IIFE — Immediately Invoked Function Expression
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. The simplest IIFE — defines and runs immediately
(function() {
  console.log("I ran immediately!");
})();

// 2. IIFE with a return value
var message = (function() {
  return "Hello from Mahmoud's IIFE!";
})();

console.log(message); // Hello from Mahmoud's IIFE!

// 3. IIFE with parameters
(function(name) {
  console.log("Welcome, " + name + "!");
})("Mahmoud");

// 4. Two IIFEs — semicolons matter
(function() {
  console.log("First IIFE");
})();

(function() {
  console.log("Second IIFE");
})();


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. Variables inside an IIFE are invisible outside
(function() {
  var secret = "hidden";
  console.log("Inside: " + secret); // ?
})();

console.log(typeof secret); // ? — can you see it out here?

// 6. IIFE vs regular function — spot the key difference
function regularFunc() {
  var x = 10;
}
regularFunc(); // you have to call it manually

(function() {
  var y = 10;
  console.log("IIFE ran on its own: " + y);
})(); // this runs itself

console.log(typeof x); // ?
console.log(typeof y); // ?

// 7. IIFE that captures a value and uses it
var mahmoudLevel = 5;

var levelMessage = (function(level) {
  if (level >= 5) {
    return "Advanced";
  } else {
    return "Beginner";
  }
})(mahmoudLevel);

console.log(levelMessage); // ?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 8. Predict the output — your answer: /* ??? */
var result = (function(a, b) {
  return a * b + 10;
})(3, 4);

console.log(result);

// 9. Predict the output — your answer: /* ??? */
(function() {
  var count = 0;
  count++;
  count++;
  console.log(count);
})();

console.log(typeof count); // ?

// 10. Predict the output — your answer: /* ??? */
var mahmoud = (function() {
  var name  = "Mahmoud";
  var score = 100;
  return name + " scored " + score;
})();

console.log(mahmoud);
console.log(typeof name);  // ? — is name accessible here?
console.log(typeof score); // ?

// 11. What breaks here and why? — your answer: /* ??? */
// (function() {
//   console.log("First");
// })()   ← no semicolon
// (function() {
//   console.log("Second");
// })();
// hint: try removing the semicolon between the two IIFEs and see what happens
