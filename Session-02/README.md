# 📘 Session 02 — Functions & DOM Basics

> **Topics:** Function Declaration · Function Expression · Parameters & Arguments · Return Values · Hoisting · IIFE · DOM Manipulation

---

## Table of Contents

- [1. Functions](#1-functions)
- [2. Function Declaration vs Expression](#2-function-declaration-vs-expression)
- [3. Parameters & Arguments](#3-parameters--arguments)
- [4. Return Values](#4-return-values)
- [5. Hoisting](#5-hoisting)
- [6. IIFE](#6-iife)
- [7. DOM Manipulation](#7-dom-manipulation)
- [🎯 Interview Questions](#-interview-questions)

---

## 1. Functions

A function is a block of code you write once and can run as many times as you want. Instead of repeating yourself, you wrap the logic in a function and just call it when you need it.

```js
// Define the function
function sayHello() {
  console.log("Hello from Mahmoud!");
}

// Call it — as many times as you want
sayHello(); // Hello from Mahmoud!
sayHello(); // Hello from Mahmoud!
```

Without functions, every time you needed that logic, you'd have to copy-paste the code. Functions exist so you don't have to.

---

## 2. Function Declaration vs Expression

There are two ways to create a function in JavaScript, and they behave differently in ways that actually matter.

### Function Declaration

```js
function greet() {
  console.log("Good morning, Mahmoud!");
}

greet(); // ✅ works
```

### Function Expression

You store the function inside a variable, just like you'd store a number or a string.

```js
var greet = function() {
  console.log("Good morning, Mahmoud!");
};

greet(); // ✅ works
```

### What's the actual difference?

The key difference is **hoisting** — but we'll get to that in a moment. For now:

| | Declaration | Expression |
|--|--|--|
| **Hoisted?** | ✅ Yes | ❌ No |
| **Call before defining?** | ✅ Yes | ❌ No |
| **Common use** | General-purpose functions | Callbacks, storing functions in variables |

---

## 3. Parameters & Arguments

- **Parameter** — the placeholder name you define in the function
- **Argument** — the actual value you pass when you call the function

```js
// "name" and "score" are parameters
function showResult(name, score) {
  console.log(name + " scored " + score + " points.");
}

// "Mahmoud" and 95 are arguments
showResult("Mahmoud", 95);  // Mahmoud scored 95 points.
showResult("Ali", 70);      // Ali scored 70 points.
```

Same function, different results depending on what you pass in. That's the whole point.

---

## 4. Return Values

A function can give something back when it's done. You use `return` for that.

```js
function add(a, b) {
  return a + b;
}

var total = add(10, 5);
console.log(total); // 15
```

One important thing — once JavaScript hits `return`, the function stops. Anything written after it doesn't run.

```js
function example() {
  return "done";
  console.log("this never runs"); // ← dead code
}
```

---

## 5. Hoisting

Hoisting is one of JavaScript's quirks that confuses a lot of people — but once you understand it, it starts making sense.

Here's what happens: before your code runs, JavaScript scans through it and **moves variable and function declarations to the top**. Not the values — just the declarations.

### Hoisting with variables

```js
console.log(mahmoudAge); // undefined — not an error
var mahmoudAge = 22;
console.log(mahmoudAge); // 22
```

JavaScript sees it like this internally:

```js
var mahmoudAge;           // declaration moved to the top
console.log(mahmoudAge);  // undefined — declared but no value yet
mahmoudAge = 22;          // assignment stays in place
console.log(mahmoudAge);  // 22
```

### Hoisting with Function Declarations

```js
// ✅ This works — you can call it before you define it
sayHi();

function sayHi() {
  console.log("Hi, Mahmoud!");
}
```

The entire function gets hoisted, so calling it before the definition is fine.

### Hoisting with Function Expressions

```js
// ❌ This breaks
greet();

var greet = function() {
  console.log("Hello, Mahmoud!");
};
```

Why? Because `var greet` gets hoisted (as `undefined`), but the function itself doesn't. So when you try to call `greet()`, JavaScript sees it as `undefined()` — which is not a function.

---

## 6. IIFE

**IIFE** stands for **Immediately Invoked Function Expression** — it's a function that defines itself and runs instantly, all in one go.

```js
(function() {
  console.log("I run immediately!");
})();
```

### Why would you use this?

The main reason is **scope protection**. Variables inside an IIFE are invisible to the outside world.

```js
// Without IIFE — mahmoudScore is in the global scope, anything can touch it
var mahmoudScore = 100;

// With IIFE — mahmoudScore is trapped inside, safe from the outside
(function() {
  var mahmoudScore = 100;
  console.log(mahmoudScore); // 100
})();

console.log(mahmoudScore); // ReferenceError — it doesn't exist out here
```

### The semicolon at the end

```js
(function() {
  console.log("First IIFE");
})(); // ← this semicolon matters

(function() {
  console.log("Second IIFE");
})();
```

Without the semicolon, JavaScript might try to read the second IIFE as arguments being passed to the first one — and crash. Always end your IIFEs with `;`.

---

## 7. DOM Manipulation

The **DOM** (Document Object Model) is how JavaScript sees and interacts with your HTML. Every element on the page is an object you can read, change, or listen to.

### Example 1 — Add items with a button

```html
<button onclick="addItem()">Add Item</button>
<ul id="myList"></ul>

<script>
  function addItem() {
    var list = document.getElementById("myList");
    list.innerHTML += "<li>New item added by Mahmoud</li>";
  }
</script>
```

Every click calls `addItem()`, which grabs the `<ul>` by its ID and appends a new `<li>` to it.

### Example 2 — Read form input and log it

```html
<input type="text" id="firstName" placeholder="First Name">
<input type="text" id="lastName"  placeholder="Last Name">
<button type="button" onclick="showName()">Submit</button>

<script>
  function showName() {
    var first = document.getElementById("firstName").value;
    var last  = document.getElementById("lastName").value;
    console.log("Full name: " + first + " " + last);
  }
</script>
```

> 💡 Use `type="button"` on the button — without it, the default type is `"submit"`, which refreshes the page and clears everything before you can see the output.

---

## 🎯 Interview Questions

<details>
<summary><strong>Q1: What's the difference between a Function Declaration and a Function Expression?</strong></summary>

A **Declaration** gets hoisted — you can call it before you write it in the code.
An **Expression** doesn't — the variable gets hoisted, but the function itself doesn't. Call it too early and you get an error.

```js
// ✅ Declaration — works before the definition
hello();
function hello() { console.log("Hi, Mahmoud!"); }

// ❌ Expression — breaks if called before the definition
hi(); // TypeError: hi is not a function
var hi = function() { console.log("Hi!"); };
```
</details>

<details>
<summary><strong>Q2: What's the difference between a Parameter and an Argument?</strong></summary>

A **parameter** is the placeholder in the function definition.
An **argument** is the real value you pass when you call it.

```js
function greet(name) { ... }  // "name" is the parameter
greet("Mahmoud");              // "Mahmoud" is the argument
```
</details>

<details>
<summary><strong>Q3: What does hoisting actually do?</strong></summary>

Before your code runs, JavaScript moves all `var` declarations and function declarations to the top of their scope. The values stay where they are — only the declarations move.

This is why you can call a function declaration before you write it, but you can't do the same with a function expression.
</details>

<details>
<summary><strong>Q4: What's the point of an IIFE?</strong></summary>

An IIFE runs immediately when the script loads, and everything inside it stays private — it can't be accessed or accidentally overwritten from the outside.

It was especially useful before `let` and `const` existed, as a way to avoid polluting the global scope with variables.
</details>

<details>
<summary><strong>Q5: What happens if you call a function expression before it's defined?</strong></summary>

You get a `TypeError`. The variable gets hoisted as `undefined`, and calling `undefined()` isn't valid.

```js
mahmoud(); // TypeError: mahmoud is not a function

var mahmoud = function() {
  console.log("Hello!");
};
```
</details>

---

*⬅️ [Session 01](../Session-01/README.md) | [Back to main](../README.md) | Session 03 ➡️ (coming soon)*
