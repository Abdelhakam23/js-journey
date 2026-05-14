// ============================================================
// 📁 04-hoisting.js
// Topic: Hoisting — what gets moved to the top and what doesn't
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. var declarations are hoisted — but not their values
console.log(mahmoudName); // undefined — not an error
var mahmoudName = "Mahmoud";
console.log(mahmoudName); // Mahmoud

// 2. Function declarations are fully hoisted
sayHi(); // works fine — called before the definition

function sayHi() {
  console.log("Hi! Function declarations are fully hoisted.");
}

// 3. You can use a declared function anywhere in the file
var total = addNumbers(10, 20);
console.log(total); // 30

function addNumbers(a, b) {
  return a + b;
}

// 4. Multiple declarations — all hoisted, but values stay put
console.log(a); // undefined
console.log(b); // undefined
var a = 1;
var b = 2;
console.log(a); // 1
console.log(b); // 2


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. Function expression — NOT fully hoisted
console.log(typeof greetMahmoud); // ? — what's the type before it's defined?

var greetMahmoud = function() {
  console.log("Hello, Mahmoud!");
};

console.log(typeof greetMahmoud); // ?
greetMahmoud();

// 6. What's the difference between these two?
console.log(declared());   // ?
// console.log(expressed()); // uncomment this — what happens?

function declared() {
  return "I am a declaration";
}

var expressed = function() {
  return "I am an expression";
};

console.log(expressed()); // this is fine — it's after the definition

// 7. Hoisting inside a function — each function has its own scope
function runSession() {
  console.log(topic); // ?
  var topic = "Hoisting";
  console.log(topic); // ?
}

runSession();


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 8. Predict the output — your answer: /* ??? */
var x = 1;

function printX() {
  console.log(x); // is it 1 or undefined?
  var x = 2;
  console.log(x);
}

printX();
console.log(x);

// 9. Predict the output — your answer: /* ??? */
function hoistMe() {
  console.log(typeof secret);
  var secret = "Mahmoud";
  console.log(typeof secret);
  console.log(secret);
}

hoistMe();

// 10. Predict the output — your answer: /* ??? */
mahmoudFunc();

var mahmoudFunc = function() {
  console.log("expression version");
};

function mahmoudFunc() {
  console.log("declaration version");
}

mahmoudFunc();
// think carefully — what gets hoisted and in what order?
