// ============================================================
// 📁 01-functions.js
// Topic: Functions — what they are and why they exist
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. A basic function — define once, call many times
function greet() {
  console.log("Hello, Mahmoud!");
}

greet(); // Hello, Mahmoud!
greet(); // Hello, Mahmoud!
greet(); // Hello, Mahmoud!

// 2. A function that does a calculation
function showDoubled() {
  var number = 10;
  console.log(number * 2); // 20
}

showDoubled();

// 3. Functions keep your code organized — no repetition
function printSeparator() {
  console.log("----------------------------");
}

printSeparator();
console.log("Session 02 — Functions");
printSeparator();
console.log("Topic: what functions are");
printSeparator();

// 4. A function can call another function
function sayGoodMorning() {
  console.log("Good morning!");
}

function startSession() {
  sayGoodMorning();
  console.log("Let's get to work, Mahmoud.");
}

startSession();


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. What happens if you call a function that doesn't return anything?
function doSomething() {
  var x = 5 + 5;
}

var result = doSomething();
console.log(result); // ?

// 6. Variables inside a function stay inside — they can't be seen outside
function myFunction() {
  var secret = "I'm inside the function";
}

myFunction();
console.log(typeof secret); // ? — can you access it out here?

// 7. Functions are values too — you can store them
var sayHi = function() {
  console.log("Hi, Mahmoud!");
};

console.log(typeof sayHi); // ?
sayHi();                   // ?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 8. Predict the output — your answer: /* ??? */
function outer() {
  var x = 10;

  function inner() {
    console.log(x); // can inner see x?
  }

  inner();
}

outer();

// 9. Predict the output — your answer: /* ??? */
function counter() {
  var count = 0;
  count++;
  console.log(count);
}

counter();
counter();
counter();
// does count keep growing, or does it reset each time?

// 10. Predict the output — your answer: /* ??? */
function a() { console.log("a"); }
function b() { console.log("b"); }
function c() { a(); b(); console.log("c"); }

c();
