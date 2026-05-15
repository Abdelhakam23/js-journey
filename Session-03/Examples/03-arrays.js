// ============================================================
// 📁 03-arrays.js
// Topic: Arrays — creating, accessing, updating, looping
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. Creating an array
var topics = ["Variables", "Functions", "Objects", "Arrays"];

console.log(topics);
console.log(topics[0]);  // first item
console.log(topics[3]);  // fourth item
console.log(topics.length); // 4

// 2. Last item — works no matter the array size
console.log(topics[topics.length - 1]); // "Arrays"

// 3. Updating an item
var scores = [80, 90, 70];
scores[1] = 95;
console.log(scores); // [80, 95, 70]

// 4. Arrays can hold any type — even mixed
var mixed = ["Mahmoud", 22, true, null, { city: "Cairo" }];
console.log(mixed[0]); // "Mahmoud"
console.log(mixed[4]); // { city: "Cairo" }
console.log(mixed[4].city); // "Cairo"


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. What happens when you access an index that doesn't exist?
var arr = [1, 2, 3];
console.log(arr[5]);        // ?
console.log(typeof arr[5]); // ?

// 6. Looping over an array
var languages = ["JavaScript", "Python", "Rust", "Go"];

for (var i = 0; i < languages.length; i++) {
  console.log(i + ": " + languages[i]);
}

// 7. Array of objects — access a property from each one
var developers = [
  { name: "Mahmoud", language: "JavaScript" },
  { name: "Sara",    language: "Python"     },
  { name: "Ali",     language: "Rust"       }
];

for (var i = 0; i < developers.length; i++) {
  console.log(developers[i].name + " writes " + developers[i].language);
}

// 8. Summing up values from an array
var prices = [100, 250, 75, 400];
var total  = 0;

for (var i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log("Total: " + total); // ?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 9. Predict the output — your answer: /* ??? */
var arr = [1, 2, 3];
arr[5] = 10;
console.log(arr);
console.log(arr.length);
console.log(arr[3]); // what fills the gaps?

// 10. Predict the output — your answer: /* ??? */
var arr = [[1, 2], [3, 4], [5, 6]];
console.log(arr[0]);
console.log(arr[1][0]);
console.log(arr[2][1]);

// 11. Predict the output — your answer: /* ??? */
var developers = [
  { name: "Mahmoud", scores: [80, 95, 70] },
  { name: "Sara",    scores: [90, 85, 88] }
];

console.log(developers[0].scores[1]);
console.log(developers[1].name);
console.log(developers[1].scores[0] + developers[0].scores[0]);
