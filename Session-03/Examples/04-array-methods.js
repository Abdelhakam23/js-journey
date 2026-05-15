// ============================================================
// 📁 04-array-methods.js
// Topic: Array Methods — push, pop, shift, unshift, splice,
//        slice, indexOf, includes, reverse, join, sort
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. push — adds to the END
var arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// 2. pop — removes from the END, returns what it removed
var removed = arr.pop();
console.log(removed); // 4
console.log(arr);     // [1, 2, 3]

// 3. unshift — adds to the BEGINNING
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]

// 4. shift — removes from the BEGINNING, returns what it removed
var first = arr.shift();
console.log(first); // 0
console.log(arr);   // [1, 2, 3]

// 5. indexOf — finds the position of an item
var fruits = ["apple", "mango", "banana", "mango"];
console.log(fruits.indexOf("mango"));   // 1 — first match only
console.log(fruits.indexOf("orange"));  // -1 — not found

// 6. includes — just true or false
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false

// 7. join — turns the array into a string
var topics = ["HTML", "CSS", "JavaScript"];
console.log(topics.join(", "));   // "HTML, CSS, JavaScript"
console.log(topics.join(" → ")); // "HTML → CSS → JavaScript"
console.log(topics.join(""));     // "HTMLCSSJavaScript"

// 8. reverse — flips the array (modifies the original!)
var nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums); // [5, 4, 3, 2, 1]


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 9. slice — copies a portion WITHOUT touching the original
var arr = [10, 20, 30, 40, 50];
var portion = arr.slice(1, 3);
console.log(portion); // ?
console.log(arr);     // ? — did it change?

// 10. splice — removes items from the original
var arr = [10, 20, 30, 40, 50];
var removed = arr.splice(1, 2); // start at index 1, remove 2 items
console.log(removed); // ?
console.log(arr);     // ?

// 11. splice — inserting items
var arr = [1, 2, 5, 6];
arr.splice(2, 0, 3, 4); // start at index 2, remove 0, insert 3 and 4
console.log(arr); // ?

// 12. sort — alphabetically by default
var names = ["Sara", "Mahmoud", "Ali", "Ziad"];
names.sort();
console.log(names); // ?

// 13. sort — numbers need a compare function
var numbers = [10, 1, 5, 100, 2];
numbers.sort();
console.log(numbers); // ? — why is this wrong?

numbers.sort(function(a, b) { return a - b; });
console.log(numbers); // ? — now is it right?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 14. Predict the output — your answer: /* ??? */
var arr = [1, 2, 3, 4, 5];
console.log(arr.push(6));   // push returns what?
console.log(arr.pop());     // pop returns what?
console.log(arr.shift());   // shift returns what?
console.log(arr.unshift(0)); // unshift returns what?
console.log(arr);

// 15. Predict the output — your answer: /* ??? */
var arr = ["a", "b", "c", "d", "e"];
var result = arr.slice(1, -1); // negative index means count from the end
console.log(result);
console.log(arr);

// 16. Predict the output — your answer: /* ??? */
var scores = [85, 92, 78, 95, 60];
scores.sort(function(a, b) { return b - a; }); // descending
console.log(scores);
console.log(scores[0]); // highest score
console.log(scores[scores.length - 1]); // lowest score

// 17. Predict the output — your answer: /* ??? */
var developers = [
  { name: "Mahmoud", score: 85 },
  { name: "Sara",    score: 92 },
  { name: "Ali",     score: 78 }
];

developers.sort(function(a, b) { return b.score - a.score; });

for (var i = 0; i < developers.length; i++) {
  console.log((i + 1) + ". " + developers[i].name + " — " + developers[i].score);
}
