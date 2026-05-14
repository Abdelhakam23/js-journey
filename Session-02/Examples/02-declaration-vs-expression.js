// ============================================================
// 📁 02-declaration-vs-expression.js
// Topic: Function Declaration vs Function Expression
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. Function Declaration — the classic way
function sayHello() {
  console.log("Hello from a declaration!");
}

sayHello();

// 2. Function Expression — stored in a variable
var sayHello2 = function() {
  console.log("Hello from an expression!");
};

sayHello2();

// 3. Both do the same job — the difference is HOW they're stored
function addDeclaration(a, b) {
  return a + b;
}

var addExpression = function(a, b) {
  return a + b;
};

console.log(addDeclaration(3, 4)); // 7
console.log(addExpression(3, 4));  // 7

// 4. typeof works on both
function declared() {}
var expressed = function() {};

console.log(typeof declared);  // function
console.log(typeof expressed); // function


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. Can you call a declaration before you write it?
greetMahmoud();

function greetMahmoud() {
  console.log("Hey Mahmoud — this works because of hoisting!");
}

// 6. Can you call an expression before you write it?
// uncomment the line below and see what happens
// welcomeMahmoud();

var welcomeMahmoud = function() {
  console.log("This won't work if called before this line.");
};

welcomeMahmoud(); // this one is fine — it's after the definition

// 7. Overwriting a function expression is easy — is that a good thing?
var calculate = function() {
  console.log("Version 1");
};

calculate(); // ?

calculate = function() {
  console.log("Version 2");
};

calculate(); // ?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 8. Predict the output — your answer: /* ??? */
var fn = function() {
  console.log("expression");
};

function fn() {
  console.log("declaration");
}

fn();

// 9. Predict the output — your answer: /* ??? */
console.log(typeof myFunc);

var myFunc = function() {
  return 42;
};

console.log(typeof myFunc);
console.log(myFunc());

// 10. Predict the output — your answer: /* ??? */
function run() {
  console.log("first");
}

run();

function run() {
  console.log("second");
}

run();
// hint: function declarations with the same name — what wins?
