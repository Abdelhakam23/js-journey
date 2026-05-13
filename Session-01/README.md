# 📘 Session 01 — JavaScript Basics

> **Topics:** Variables · Data Types · `null` vs `undefined` · Type Conversion · The `+` Operator · Implicit Conversion · Operators · Conditionals · Loops

---

## Table of Contents

- [1. What is JavaScript?](#1-what-is-javascript)
- [2. Comments](#2-comments)
- [3. Output](#3-output)
- [4. Variables](#4-variables)
- [5. Data Types](#5-data-types)
- [6. null vs undefined](#6-null-vs-undefined)
- [7. User Input & Type Casting](#7-user-input--type-casting)
- [8. The `+` Operator — Addition or Concatenation?](#8-the--operator--addition-or-concatenation)
- [9. Implicit Conversion](#9-implicit-conversion)
- [10. Arithmetic Operators](#10-arithmetic-operators)
- [11. Increment & Decrement](#11-increment--decrement)
- [12. Comparison & Logical Operators](#12-comparison--logical-operators)
- [13. Conditionals](#13-conditionals)
- [14. Loops](#14-loops)
- [🎯 Interview Questions](#-interview-questions)

---

## 1. What is JavaScript?

JavaScript is the language that makes websites actually do things. HTML gives you the structure, CSS makes it look nice — but JavaScript is what makes a button actually work when you click it.

Before jumping into JS, you should have a basic understanding of:
- **HTML** — the skeleton of a webpage
- **CSS** — the styling layer
- **Bootstrap / jQuery** — tools that sit on top of JS and make common things easier

### Where do you write it?

```html
<!-- Option 1: directly inside your HTML -->
<script>
  console.log("Hello!");
</script>

<!-- Option 2: in a separate file (the clean way) -->
<script src="app.js"></script>

<!-- Option 3: inline on an element (avoid this for anything serious) -->
<button onclick="alert('Hi!')">Click Me</button>
```

> 💡 Always put your `<script>` tag at the **bottom of `<body>`** — that way the page loads before your script tries to interact with it.

---

## 2. Comments

Comments are notes you leave in the code. JavaScript completely ignores them — they're just for you (or whoever reads your code later).

```js
// Single-line comment — quick note on one line

/*
  Multi-line comment
  Use this when you need more space to explain something
*/
```

> **Shortcuts:** `Ctrl + /` for single-line | `Shift + Alt + A` for multi-line

---

## 3. Output

There are three main ways to show something in JavaScript:

```js
// 1. A pop-up dialog on screen
window.alert("Welcome, Mahmoud!");

// 2. Inject content directly into an HTML element
document.getElementById("myDiv").innerHTML = "Hello, Mahmoud!";

// 3. Log to the browser console (press F12 → Console tab)
console.log("This one's for developers, Mahmoud.");
```

You'll use `console.log` the most — it's your best friend for debugging.

---

## 4. Variables

Think of a variable as a labeled box. You put something inside it, give the box a name, and then you can use or change what's inside whenever you want.

```js
// Create the box and put something in it
var myName = "Mahmoud";
console.log(myName); // Output: Mahmoud

// Change what's inside
myName = "Abdelhakam";
console.log(myName); // Output: Abdelhakam
```

### Naming rules

JavaScript is picky about variable names. Here's what works and what doesn't:

```js
// ✅ Valid names
var developerName = "Mahmoud"; // camelCase — the standard
var developer_age = 22;        // underscores are fine too
var $score = 100;              // can start with $

// ❌ Invalid names
var 1developer = "Mahmoud";    // can't start with a number
var developer-name = "Mahmoud";// hyphens aren't allowed
var if = "test";               // "if" is a reserved keyword in JS
```

### Joining strings together

```js
var firstName = "Mahmoud";
var lastName  = "Abdelhakam";
console.log(firstName + " " + lastName); // Output: Mahmoud Abdelhakam
```

---

## 5. Data Types

JavaScript has a few core types you need to know:

```js
var info = "Mahmoud"; // String  — text, always wrapped in quotes
info = 22;            // Number  — any numeric value
info = true;          // Boolean — only two possible values: true or false
info = null;          // Null    — intentionally empty
info = undefined;     // Undefined — no value assigned yet
```

Here's the interesting part — JavaScript lets you reassign a variable to a completely different type. This is called **dynamic typing**, and it's one of the things that makes JS flexible (and sometimes confusing).

---

## 6. null vs undefined

These two trip up almost everyone at first. They both mean "nothing" — but in very different ways.

### `undefined`

JavaScript assigns this automatically when a variable is declared but never given a value.

```js
var mahmoudAge;
console.log(mahmoudAge); // undefined
// JS is saying: "I know this variable exists, but nobody told me what's in it."
```

### `null`

You set this yourself — it's a deliberate signal that something is intentionally empty.

```js
var currentProject = null;
console.log(currentProject); // null
// You're saying: "I know this is empty, and that's on purpose."
```

### The difference at a glance

| | `undefined` | `null` |
|--|--|--|
| **Who sets it?** | JavaScript, automatically | You, on purpose |
| **What it means** | "No value assigned yet" | "Intentionally empty" |
| **`typeof`** | `"undefined"` | `"object"` ⚠️ |

```js
var a;
var b = null;

console.log(typeof a); // "undefined"
console.log(typeof b); // "object" ← this is actually an old bug in JS that was never fixed

console.log(a == b);   // true  — loose equality sees them as the same
console.log(a === b);  // false — strict equality knows they're different
```

> **Rule of thumb:** use `null` when you want to say "empty on purpose." Let JavaScript handle `undefined` on its own.

---

## 7. User Input & Type Casting

### The problem — `prompt` always returns a string

```js
var age = window.prompt("How old are you, Mahmoud?");
console.log(typeof age); // "string" — always, no matter what the user types

// So if Mahmoud types 22...
console.log(age + 5); // "225" — not 27! Because "22" + 5 = "225"
```

Even if the user types a number, `prompt` wraps it in quotes. JavaScript has no idea if you wanted a number or not.

### The fix — Explicit Type Casting

You tell JavaScript exactly what type you want:

```js
// Convert to a number
var age   = Number(window.prompt("How old are you?"));
var score = Number(window.prompt("What's your score?"));

console.log(typeof age); // "number" ✅
console.log(age + 5);    // 27 ✅ (if Mahmoud typed 22)

// Convert to a string
var level = 5;
console.log(String(level));         // "5"
console.log(typeof String(level));  // "string"

// Convert to a boolean
console.log(Boolean(1));          // true
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false — empty string is falsy
console.log(Boolean("Mahmoud"));  // true  — any non-empty string is truthy
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
```

---

## 8. The `+` Operator — Addition or Concatenation?

Here's one of JavaScript's most confusing quirks. The `+` operator does two completely different things depending on what you give it.

### When both sides are numbers → Addition

```js
var points = 10;
var bonus  = 5;
console.log(points + bonus); // 15
```

### When at least one side is a string → Concatenation

```js
var firstName = "Mahmoud";
var lastName  = "Abdelhakam";
console.log(firstName + " " + lastName); // "Mahmoud Abdelhakam"
```

### ⚠️ Order matters — JavaScript reads left to right

This is where people get confused:

```js
// Numbers first, then a string
console.log(10 + 5 + " points"); // "15 points"
// → 10 + 5 = 15 (number), then 15 + " points" = "15 points"

// String first, then numbers
console.log("Mahmoud: " + 10 + 5); // "Mahmoud: 105"
// → "Mahmoud: " + 10 = "Mahmoud: 10", then + 5 = "Mahmoud: 105"

// The fix — use parentheses to control the order
console.log("Total: " + (10 + 5)); // "Total: 15" ✅
```

### The rule, simplified

```
number + number   →  number        (math)
string + anything →  string        (concatenation)
anything + string →  string        (concatenation)
```

---

## 9. Implicit Conversion

Implicit conversion is when JavaScript quietly converts a type behind the scenes — without you asking it to. This can produce results you didn't expect.

### With arithmetic operators (anything except `+`)

```js
// Subtraction, multiplication, and division force strings into numbers
console.log("20" - 5);  // 15 ✅
console.log("20" * 2);  // 40 ✅
console.log("20" / 4);  // 5  ✅

// But if the string isn't actually a number...
console.log("Mahmoud" - 5); // NaN
```

### With booleans

```js
console.log(true  + 1); // 2 — true becomes 1
console.log(false + 1); // 1 — false becomes 0
```

### With null and undefined

```js
console.log(null + 1);      // 1   — null becomes 0
console.log(undefined + 1); // NaN — undefined doesn't convert to a number
```

### NaN — Not a Number

`NaN` is JavaScript's way of saying "I tried to do math, but this isn't a number."

```js
var result = "Mahmoud" * 2;
console.log(result);         // NaN
console.log(typeof result);  // "number" ← yes, NaN's type is actually "number". Confusing, we know.
console.log(isNaN(result));  // true ← use isNaN() to check for it properly
```

### Quick reference table

| Expression | Result | Why |
|---|---|---|
| `"5" - 2` | `3` | string → number (with `-`) |
| `"5" + 2` | `"52"` | number → string (with `+`) |
| `true + 1` | `2` | true → 1 |
| `false + 1` | `1` | false → 0 |
| `null + 1` | `1` | null → 0 |
| `undefined + 1` | `NaN` | undefined can't convert |
| `"Mahmoud" * 2` | `NaN` | not a number |

---

## 10. Arithmetic Operators

| Operator | Does | Example | Result |
|----------|------|---------|--------|
| `+` | Add / Concatenate | `5 + 3` | `8` |
| `-` | Subtract | `5 - 3` | `2` |
| `*` | Multiply | `5 * 3` | `15` |
| `/` | Divide | `9 / 3` | `3` |
| `%` | Remainder after division | `10 % 3` | `1` |

### Operator precedence

JavaScript follows the same math rules you learned in school — multiplication and division happen before addition and subtraction.

```js
console.log(2 + 3 * 4);   // 14  — multiplication first
console.log((2 + 3) * 4); // 20  — parentheses first
console.log(5 + 5 + "2"); // "102" — 10, then concatenation
console.log("2" + 5 + 5); // "255" — concatenation from the start
```

---

## 11. Increment & Decrement

A quick way to add or subtract 1 from a variable:

```js
var mahmoudScore = 10;

mahmoudScore++; // same as: mahmoudScore = mahmoudScore + 1
console.log(mahmoudScore); // 11

mahmoudScore--; // same as: mahmoudScore = mahmoudScore - 1
console.log(mahmoudScore); // 10
```

### Post vs Pre — the subtle difference

```js
var x = 5;

console.log(x++); // 5 — returns the current value, THEN increments
console.log(x);   // 6

console.log(++x); // 7 — increments FIRST, then returns the new value
```

---

## 12. Comparison & Logical Operators

### Comparison operators

```js
var mahmoudAge = 22;
var friendAge  = "22";

console.log(mahmoudAge == friendAge);  // true  — same value, different types (JS converts them)
console.log(mahmoudAge === friendAge); // false — different types, so: not equal
console.log(mahmoudAge > 18);          // true
console.log(mahmoudAge <= 22);         // true
```

> **Always use `===`** — it checks both value and type, which means fewer surprises.

### Logical operators

```js
var mahmoudAge = 22;

console.log(mahmoudAge > 18 && mahmoudAge < 30); // true  — AND: both must be true
console.log(mahmoudAge < 18 || mahmoudAge > 30); // false — OR: at least one must be true
console.log(!true);                               // false — NOT: flips the value
```

---

## 13. Conditionals

### if / else if / else

```js
var mahmoudScore = 75;

if (mahmoudScore >= 90) {
  console.log("Excellent, Mahmoud!");
} else if (mahmoudScore >= 60) {
  console.log("Good job, Mahmoud!");
} else {
  console.log("Keep going, Mahmoud!");
}
// Output: Good job, Mahmoud!
```

### Switch statement

When you have more than 4 or 5 conditions to check, `switch` keeps things cleaner than a long chain of `else if`.

```js
var day = 3;
var dayName = "";

switch (day) {
  case 1: dayName = "Monday";    break;
  case 2: dayName = "Tuesday";   break;
  case 3: dayName = "Wednesday"; break;
  default: dayName = "Unknown";
}

console.log(dayName); // Wednesday
```

> ⚠️ Don't forget `break`. Without it, JavaScript keeps running the next cases even if they don't match — this is called **fall-through**, and it's almost never what you want.

---

## 14. Loops

### For loop

A `for` loop runs a block of code a specific number of times.

```js
for (var i = 1; i <= 5; i++) {
  console.log("Mahmoud's attempt number: " + i);
}
// Output:
// Mahmoud's attempt number: 1
// Mahmoud's attempt number: 2
// ... up to 5
```

It has three parts:
1. `var i = 1` — where to start
2. `i <= 5` — keep going as long as this is true
3. `i++` — what to do after each iteration

### ⚠️ Infinite loops — avoid these

```js
// ❌ Forgot i++ — this will run forever and freeze the browser
for (var i = 0; i < 5; ) {
  console.log("This never stops.");
}
```

---

## 🎯 Interview Questions

<details>
<summary><strong>Q1: What's the difference between == and ===?</strong></summary>

`==` checks value only — it converts types if needed before comparing.
`===` checks both value **and** type — no conversion happens.

```js
22 == "22"  // true  — JS converts "22" to a number first
22 === "22" // false — number vs string, not equal
```

Always use `===` in real code. It's more predictable.
</details>

<details>
<summary><strong>Q2: What's the difference between null and undefined?</strong></summary>

`undefined` — JavaScript assigned this automatically because the variable has no value yet.
`null` — you assigned this yourself to say "intentionally empty."

```js
var a;        // undefined — JS's doing
var b = null; // null      — your doing

console.log(a == b);  // true  — loose equality groups them together
console.log(a === b); // false — strict equality sees them as different
```
</details>

<details>
<summary><strong>Q3: Why does prompt always return a string?</strong></summary>

Because `window.prompt` is designed to collect text input — it has no way of knowing whether you wanted a number or not. Everything comes back as a string.

```js
// ❌ This breaks
var age = window.prompt("Age?");
console.log(age + 5); // "225" if user typed 22 — concatenation, not addition

// ✅ This works
var age = Number(window.prompt("Age?"));
console.log(age + 5); // 27
```
</details>

<details>
<summary><strong>Q4: What's the difference between + for addition and + for concatenation?</strong></summary>

JavaScript decides based on what's on each side:
- Both sides are numbers → addition
- At least one side is a string → concatenation

And since JS reads left to right, order changes everything:

```js
10 + 5 + " items"    // "15 items"  — math first, then concatenation
"items: " + 10 + 5   // "items: 105"— concatenation all the way through
"items: " + (10 + 5) // "items: 15" ✅ — parentheses force the math first
```
</details>

<details>
<summary><strong>Q5: What's wrong with this code?</strong></summary>

```js
var age = 18;
if (age > 18) {
  console.log("Can vote");
} else if (age < 18) {
  console.log("Cannot vote");
}
```

Nothing prints when `age` is exactly 18 — neither condition covers it.

```js
// Fix: use >= instead of >
if (age >= 18) {
  console.log("Can vote");
} else {
  console.log("Cannot vote");
}
```
</details>

<details>
<summary><strong>Q6: What happens if you forget break in a switch statement?</strong></summary>

The code "falls through" — it keeps executing the cases below even if they don't match.

```js
var day = 1;
switch (day) {
  case 1: console.log("Monday");
  case 2: console.log("Tuesday");  // also runs!
  default: console.log("Unknown"); // also runs!
}
// Output: Monday, Tuesday, Unknown
```

Add `break` after each case to stop this.
</details>

---

*⬅️ [Back to main](../README.md) | [Session 02 ➡️](../Session-02/README.md)*
