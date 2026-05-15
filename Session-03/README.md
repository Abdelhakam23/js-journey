# 📘 Session 03 — Objects, Arrays & Built-in Methods

> **Topics:** Objects · Hosted vs Built-in Objects · Accessing Properties · Methods · Hidden Class · Delete · Arrays · Array of Objects · Array Methods · Math Methods

---

## Table of Contents

- [1. What is an Object?](#1-what-is-an-object)
- [2. Hosted vs Built-in Objects](#2-hosted-vs-built-in-objects)
- [3. Creating Objects & Accessing Properties](#3-creating-objects--accessing-properties)
- [4. Adding Methods to Objects](#4-adding-methods-to-objects)
- [5. Hidden Class & Performance](#5-hidden-class--performance)
- [6. Deleting from an Object](#6-deleting-from-an-object)
- [7. Arrays](#7-arrays)
- [8. Array of Objects](#8-array-of-objects)
- [9. Looping Over Arrays](#9-looping-over-arrays)
- [10. Array Methods](#10-array-methods)
- [11. Math Methods](#11-math-methods)
- [🎯 Interview Questions](#-interview-questions)

---

## 1. What is an Object?

An object is a collection of related data stored as **key-value pairs**. Instead of having five separate variables for one person, you group everything together in one place.

```js
// Five separate variables — not great
var name    = "Mahmoud";
var age     = 22;
var city    = "Cairo";
var job     = "Developer";
var isActive = true;

// One object — much better
var mahmoud = {
  name:     "Mahmoud",
  age:      22,
  city:     "Cairo",
  job:      "Developer",
  isActive: true
};
```

Each item inside is called a **property**. The name on the left is the **key**, the value on the right is the **value**.

---

## 2. Hosted vs Built-in Objects

JavaScript comes with two categories of objects you didn't create yourself.

### Built-in Objects

These come with the JavaScript language itself — they exist everywhere JS runs, whether in a browser or a server.

```js
Math.round(4.7);       // 5    — built-in Math object
"Mahmoud".toUpperCase(); // "MAHMOUD" — String methods are built-in
[1, 2, 3].length;      // 3    — Array is built-in
new Date();            // current date and time — built-in
```

### Hosted Objects

These are provided by the **environment** running JavaScript — in a browser, that's the browser itself. They don't exist in Node.js or other environments.

```js
window.alert("Hello!");                      // browser only
document.getElementById("myDiv");            // browser only
console.log("hi");                           // technically hosted too
window.prompt("What's your name?");          // browser only
```

### The difference in one line

| | Built-in | Hosted |
|--|--|--|
| **Provided by** | JavaScript language | The environment (browser, Node.js) |
| **Available everywhere?** | ✅ Yes | ❌ Depends on where JS runs |
| **Examples** | `Math`, `Array`, `String`, `Date` | `window`, `document`, `console` |

---

## 3. Creating Objects & Accessing Properties

### Creating an object

```js
var developer = {
  name:     "Mahmoud",
  age:      22,
  language: "JavaScript",
  isHired:  false
};
```

### Two ways to access properties

```js
// 1. Dot notation — clean and readable, use this most of the time
console.log(developer.name);     // Mahmoud
console.log(developer.age);      // 22

// 2. Bracket notation — use when the key is dynamic or has special characters
console.log(developer["name"]);  // Mahmoud
console.log(developer["age"]);   // 22

// Bracket notation lets you use a variable as the key
var key = "language";
console.log(developer[key]);     // JavaScript
```

### Adding new properties after creation

```js
developer.city    = "Cairo";
developer.company = "Tech Co";
console.log(developer.city); // Cairo
```

### Updating existing properties

```js
developer.isHired = true;
developer.age     = 23;
console.log(developer.isHired); // true
```

---

## 4. Adding Methods to Objects

A **method** is just a function stored as a property inside an object. You use `this` to refer to the object itself from inside.

```js
var developer = {
  name:     "Mahmoud",
  language: "JavaScript",

  introduce: function() {
    console.log("Hi, I'm " + this.name + " and I write " + this.language);
  },

  greet: function(otherName) {
    console.log("Hey " + otherName + ", I'm " + this.name);
  }
};

developer.introduce();       // Hi, I'm Mahmoud and I write JavaScript
developer.greet("Ali");      // Hey Ali, I'm Mahmoud
```

> `this` inside a method refers to the object that owns the method. Without `this`, the function wouldn't know which object's `name` to use.

---

## 5. Hidden Class & Performance

JavaScript engines (like V8 in Chrome) internally create something called a **hidden class** to track the shape of an object — meaning which properties it has and in what order.

### The right way — define all properties upfront

```js
// ✅ Good — V8 creates one hidden class and keeps it
var developer = {
  name: "Mahmoud",
  age:  22,
  city: "Cairo"
};
```

### The wrong way — add properties dynamically from outside

```js
// ❌ Bad for performance — every new property creates a NEW hidden class
var developer = {};
developer.name = "Mahmoud"; // hidden class #1
developer.age  = 22;        // hidden class #2
developer.city = "Cairo";   // hidden class #3
```

Every time you add a property to an already-created object, the engine has to create a new hidden class behind the scenes. If you do this at scale, it slows things down.

**Rule:** define all properties when you create the object. If a value isn't ready yet, just set it to `null`.

```js
// ✅ Better — shape is defined upfront, value filled in later
var developer = {
  name: "Mahmoud",
  age:  null,    // don't know it yet, but the slot is there
  city: null
};

developer.age  = 22;      // updating, not adding — no new hidden class
developer.city = "Cairo";
```

---

## 6. Deleting from an Object

Use the `delete` operator to remove a property from an object completely.

```js
var developer = {
  name:     "Mahmoud",
  age:      22,
  password: "secret123"
};

console.log(developer.password); // secret123

delete developer.password;

console.log(developer.password); // undefined — it's gone
console.log("password" in developer); // false — confirms it's deleted
```

> Setting a property to `null` or `undefined` is not the same as deleting it — the key still exists in the object. `delete` removes the key entirely.

```js
developer.age = null;
console.log("age" in developer); // true — key still there, just empty

delete developer.age;
console.log("age" in developer); // false — key is gone
```

---

## 7. Arrays

An array is an **ordered list of values**. Unlike objects, the keys are automatic — they're just numbers starting from 0 (called **indexes**).

```js
var sessions = ["Variables", "Functions", "Objects", "Arrays"];

// Accessing by index
console.log(sessions[0]); // "Variables" — first item
console.log(sessions[3]); // "Arrays"    — fourth item
console.log(sessions[sessions.length - 1]); // last item, no matter the size

// Arrays can hold any type — even mixed
var mixed = ["Mahmoud", 22, true, null, { city: "Cairo" }];
```

### Common array properties

```js
var arr = [10, 20, 30, 40];

console.log(arr.length); // 4 — number of items
console.log(arr[0]);     // 10 — first item
console.log(arr[arr.length - 1]); // 40 — last item
```

### Updating items

```js
var scores = [80, 90, 70];
scores[1] = 95;
console.log(scores); // [80, 95, 70]
```

---

## 8. Array of Objects

This is one of the most common patterns in real JS — a list of objects, each one representing a record.

```js
var developers = [
  { name: "Mahmoud", age: 22, language: "JavaScript" },
  { name: "Sara",    age: 25, language: "Python"     },
  { name: "Ali",     age: 28, language: "Rust"       }
];

// Access a specific object
console.log(developers[0]);          // { name: "Mahmoud", age: 22, ... }

// Access a property on a specific object
console.log(developers[0].name);     // Mahmoud
console.log(developers[1].language); // Python

// Update a value
developers[2].age = 29;
console.log(developers[2].age); // 29
```

---

## 9. Looping Over Arrays

```js
var topics = ["Variables", "Functions", "Objects", "Arrays"];

// Classic for loop — gives you full control
for (var i = 0; i < topics.length; i++) {
  console.log("Topic " + (i + 1) + ": " + topics[i]);
}

// Looping over an array of objects
var developers = [
  { name: "Mahmoud", language: "JavaScript" },
  { name: "Sara",    language: "Python"     },
  { name: "Ali",     language: "Rust"       }
];

for (var i = 0; i < developers.length; i++) {
  console.log(developers[i].name + " writes " + developers[i].language);
}
```

---

## 10. Array Methods

### Adding & Removing

```js
var arr = [1, 2, 3];

// push — adds to the END, returns the new length
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// pop — removes from the END, returns the removed item
var last = arr.pop();
console.log(last); // 4
console.log(arr);  // [1, 2, 3]

// unshift — adds to the BEGINNING, returns the new length
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]

// shift — removes from the BEGINNING, returns the removed item
var first = arr.shift();
console.log(first); // 0
console.log(arr);   // [1, 2, 3]
```

### Searching

```js
var fruits = ["apple", "mango", "banana", "mango"];

// indexOf — returns the index of the first match, -1 if not found
console.log(fruits.indexOf("mango"));   // 1
console.log(fruits.indexOf("orange"));  // -1

// includes — returns true or false
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
```

### Transforming

```js
var scores = [80, 90, 70, 85];

// reverse — reverses the array IN PLACE (modifies the original)
scores.reverse();
console.log(scores); // [85, 70, 90, 80]

// join — joins all items into a string
var topics = ["HTML", "CSS", "JavaScript"];
console.log(topics.join(", "));  // "HTML, CSS, JavaScript"
console.log(topics.join(" → ")); // "HTML → CSS → JavaScript"

// slice — returns a portion of the array WITHOUT modifying the original
var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // [2, 3] — from index 1, up to (not including) 3
console.log(arr);             // [1, 2, 3, 4, 5] — unchanged

// splice — adds or removes items IN PLACE (modifies the original)
var arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);         // start at index 2, remove 1 item
console.log(arr);         // [1, 2, 4, 5]

arr.splice(2, 0, 99, 100); // start at index 2, remove 0, insert 99 and 100
console.log(arr);           // [1, 2, 99, 100, 4, 5]
```

### Sorting

```js
// sort — sorts alphabetically by default
var names = ["Sara", "Mahmoud", "Ali"];
names.sort();
console.log(names); // ["Ali", "Mahmoud", "Sara"]

// sort numbers — you need a compare function, otherwise it sorts as strings
var numbers = [10, 1, 5, 100, 2];
numbers.sort();
console.log(numbers); // [1, 10, 100, 2, 5] ← wrong! sorted as strings

numbers.sort(function(a, b) { return a - b; });
console.log(numbers); // [1, 2, 5, 10, 100] ← correct, ascending

numbers.sort(function(a, b) { return b - a; });
console.log(numbers); // [100, 10, 5, 2, 1] ← descending
```

### Quick reference

| Method | What it does | Modifies original? |
|--------|-------------|-------------------|
| `push(x)` | Adds `x` to the end | ✅ Yes |
| `pop()` | Removes last item | ✅ Yes |
| `unshift(x)` | Adds `x` to the beginning | ✅ Yes |
| `shift()` | Removes first item | ✅ Yes |
| `indexOf(x)` | Returns index of `x`, or -1 | ❌ No |
| `includes(x)` | Returns true/false | ❌ No |
| `reverse()` | Reverses the array | ✅ Yes |
| `join(sep)` | Joins items into a string | ❌ No |
| `slice(s, e)` | Returns a portion | ❌ No |
| `splice(s, n)` | Removes/inserts items | ✅ Yes |
| `sort()` | Sorts the array | ✅ Yes |

---

## 11. Math Methods

`Math` is a built-in object — you don't create it, it's just there.

```js
// Math.round — rounds to the nearest integer
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

// Math.ceil — always rounds UP
console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(4.9));  // 5

// Math.floor — always rounds DOWN
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4

// Math.abs — removes the negative sign
console.log(Math.abs(-10)); // 10
console.log(Math.abs(10));  // 10

// Math.max / Math.min — largest and smallest from a list
console.log(Math.max(3, 10, 7, 1)); // 10
console.log(Math.min(3, 10, 7, 1)); // 1

// Math.pow — raises a number to a power
console.log(Math.pow(2, 10)); // 1024

// Math.sqrt — square root
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(2));  // 1.4142...

// Math.random — returns a random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // something like 0.6372...

// Random integer between 0 and 9
console.log(Math.floor(Math.random() * 10));

// Random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// Math.PI — the value of π
console.log(Math.PI); // 3.141592653589793
```

### Quick reference

| Method | What it does | Example | Result |
|--------|-------------|---------|--------|
| `Math.round(x)` | Nearest integer | `Math.round(4.5)` | `5` |
| `Math.ceil(x)` | Always rounds up | `Math.ceil(4.1)` | `5` |
| `Math.floor(x)` | Always rounds down | `Math.floor(4.9)` | `4` |
| `Math.abs(x)` | Absolute value | `Math.abs(-5)` | `5` |
| `Math.max(...)` | Largest value | `Math.max(1,9,3)` | `9` |
| `Math.min(...)` | Smallest value | `Math.min(1,9,3)` | `1` |
| `Math.pow(x, y)` | x to the power of y | `Math.pow(2, 8)` | `256` |
| `Math.sqrt(x)` | Square root | `Math.sqrt(9)` | `3` |
| `Math.random()` | Random 0–1 decimal | `Math.random()` | `0.472...` |
| `Math.PI` | Value of π | `Math.PI` | `3.14159...` |

---

## 🎯 Interview Questions

<details>
<summary><strong>Q1: What's the difference between dot notation and bracket notation?</strong></summary>

Both access properties — the difference is flexibility.

Dot notation is cleaner but only works when you know the key name upfront:
```js
developer.name // works
```

Bracket notation works when the key is dynamic (stored in a variable) or contains special characters:
```js
var key = "name";
developer[key]; // works — dot notation can't do this
```
</details>

<details>
<summary><strong>Q2: What's the difference between slice and splice?</strong></summary>

`slice` returns a **copy** of a portion — it never touches the original array.
`splice` **modifies** the original — it removes or inserts items in place.

```js
var arr = [1, 2, 3, 4, 5];

arr.slice(1, 3);  // returns [2, 3] — arr is still [1, 2, 3, 4, 5]
arr.splice(1, 2); // removes 2 items starting at index 1 — arr is now [1, 4, 5]
```
</details>

<details>
<summary><strong>Q3: Why does sort() give wrong results with numbers?</strong></summary>

By default, `sort()` converts items to strings and sorts them alphabetically. So `10` comes before `2` because `"1"` comes before `"2"` alphabetically.

```js
[10, 1, 5, 2].sort(); // [1, 10, 2, 5] ← wrong

// Fix: pass a compare function
[10, 1, 5, 2].sort(function(a, b) { return a - b; }); // [1, 2, 5, 10] ✅
```
</details>

<details>
<summary><strong>Q4: What's the difference between delete and setting a property to null?</strong></summary>

`null` keeps the key but empties the value. `delete` removes the key entirely.

```js
var obj = { name: "Mahmoud", age: 22 };

obj.age = null;
console.log("age" in obj); // true — key still exists

delete obj.age;
console.log("age" in obj); // false — key is gone
```
</details>

<details>
<summary><strong>Q5: What is the hidden class and why does it matter?</strong></summary>

JavaScript engines track the "shape" of an object — which properties it has and in what order — using an internal structure called a hidden class. When you add properties to an object after it's created, the engine creates a new hidden class each time, which hurts performance.

The fix is simple: define all properties upfront when you create the object, even if some values are `null` for now.
</details>

<details>
<summary><strong>Q6: What's the difference between hosted and built-in objects?</strong></summary>

**Built-in objects** come with JavaScript itself — `Math`, `Array`, `String`, `Date`. They're available anywhere JS runs.

**Hosted objects** are provided by the environment — in a browser, that's things like `window`, `document`, and `console`. They don't exist in non-browser environments like Node.js.
</details>

<details>
<summary><strong>Q7: How do you get a random integer between two numbers?</strong></summary>

```js
// Random integer between min (inclusive) and max (inclusive)
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(1, 10));  // anywhere from 1 to 10
console.log(randomBetween(50, 100)); // anywhere from 50 to 100
```
</details>

---

*⬅️ [Session 02](../session-02/README.md) | [Back to main](../README.md) | Session 04 ➡️ (coming soon)*
