// ============================================================
// 📁 03-parameters-and-arguments.js
// Topic: Parameters & Arguments — passing data into functions
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. A function with one parameter
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Mahmoud"); // Hello, Mahmoud!
greet("Ali");     // Hello, Ali!

// 2. A function with two parameters
function introduce(name, age) {
  console.log(name + " is " + age + " years old.");
}

introduce("Mahmoud", 22);
introduce("Sara", 19);

// 3. A function with a return value
function add(a, b) {
  return a + b;
}

var result = add(10, 5);
console.log(result); // 15

// 4. Using the return value directly
console.log(add(3, 7));   // 10
console.log(add(100, 1)); // 101


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. What happens if you pass fewer arguments than parameters?
function showInfo(name, city) {
  console.log(name + " lives in " + city);
}

showInfo("Mahmoud"); // only one argument — what is city?

// 6. What happens if you pass MORE arguments than parameters?
function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4, 999)); // extra argument — does it crash?

// 7. Parameters are local — they don't exist outside the function
function setScore(score) {
  console.log("Inside: " + score);
}

setScore(100);
console.log(typeof score); // ? — can you access score out here?

// 8. Passing the result of a function as an argument to another
function double(n) {
  return n * 2;
}

function announce(value) {
  console.log("The result is: " + value);
}

announce(double(7)); // ?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 9. Predict the output — your answer: /* ??? */
function swap(a, b) {
  var temp = a;
  a = b;
  b = temp;
  console.log("Inside — a: " + a + ", b: " + b);
}

var x = 1;
var y = 2;
swap(x, y);
console.log("Outside — x: " + x + ", y: " + y);
// hint: does swapping inside the function affect x and y outside?

// 10. Predict the output — your answer: /* ??? */
function calculate(a, b, c) {
  return a + b * c;
}

console.log(calculate(2, 3, 4));
console.log(calculate(1, 1, 1));
console.log(calculate(0, 5, 10));

// 11. Predict the output — your answer: /* ??? */
function mystery(mahmoud) {
  return mahmoud + mahmoud;
}

console.log(mystery(5));
console.log(mystery("5"));
console.log(mystery(true));
// hint: the + operator behaves differently per type
