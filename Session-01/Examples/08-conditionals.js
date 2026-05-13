// ============================================================
// 📁 08-conditionals.js
// Topic: if / else if / else · switch · fall-through
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. Basic if/else
var mahmoudScore = 75;

if (mahmoudScore >= 90) {
  console.log("Excellent!");
} else if (mahmoudScore >= 60) {
  console.log("Good job!");
} else {
  console.log("Keep going!");
}

// 2. Checking a simple condition
var isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back, Mahmoud.");
} else {
  console.log("Please log in.");
}

// 3. Switch — clean way to handle multiple options
var day = 3;
var dayName;

switch (day) {
  case 1: dayName = "Monday";    break;
  case 2: dayName = "Tuesday";   break;
  case 3: dayName = "Wednesday"; break;
  case 4: dayName = "Thursday";  break;
  case 5: dayName = "Friday";    break;
  default: dayName = "Weekend";
}

console.log(dayName); // Wednesday


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 4. What prints — and what doesn't?
var age = 18;

if (age > 18) {
  console.log("Adult");
} else if (age < 18) {
  console.log("Minor");
}
// what happens when age is exactly 18?

// 5. Nested conditions
var mahmoudAge  = 22;
var hasLicense  = false;

if (mahmoudAge >= 18) {
  if (hasLicense) {
    console.log("Mahmoud can drive.");
  } else {
    console.log("Mahmoud is old enough but has no license.");
  }
} else {
  console.log("Mahmoud is too young to drive.");
}

// 6. Switch with a default catch-all
var grade = "Z";

switch (grade) {
  case "A": console.log("Excellent"); break;
  case "B": console.log("Good");      break;
  case "C": console.log("Average");   break;
  default:  console.log("Invalid grade");
}


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 7. Predict the output — your answer: /* ??? */
var x = 0;

if (x) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// 8. Predict the output — your answer: /* ??? */
// This is fall-through — no break statements
var num = 1;

switch (num) {
  case 1: console.log("One");
  case 2: console.log("Two");
  case 3: console.log("Three");
  default: console.log("Default");
}

// 9. Predict the output — your answer: /* ??? */
var score = 85;
var grade;

switch (true) {
  case score >= 90: grade = "A"; break;
  case score >= 80: grade = "B"; break;
  case score >= 70: grade = "C"; break;
  default:          grade = "F";
}

console.log("Mahmoud's grade: " + grade);

// 10. Predict the output — your answer: /* ??? */
var a = "1";
var b = 1;

if (a == b) {
  console.log("loose: equal");
} else {
  console.log("loose: not equal");
}

if (a === b) {
  console.log("strict: equal");
} else {
  console.log("strict: not equal");
}
