// ============================================================
// 📁 01-variables.js
// Topic: Variables — declaring, assigning, and reassigning
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. A simple variable storing a name
var developerName = "Mahmoud";
console.log(developerName); // Mahmoud

// 2. Reassigning a variable
var city = "Cairo";
console.log(city); // Cairo
city = "Alexandria";
console.log(city); // Alexandria

// 3. Storing a number
var age = 22;
console.log("Age: " + age); // Age: 22

// 4. Combining two variables into one message
var firstName = "Mahmoud";
var lastName  = "Abdelhakam";
var fullName  = firstName + " " + lastName;
console.log(fullName); // Mahmoud Abdelhakam


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. What gets printed here — and why?
var score = 100;
var score = 200;
console.log(score);

// 6. What is the value of "result" at the end?
var a = 10;
var b = a;
a = 99;
console.log(b); // is it 10 or 99?

// 7. What happens when you log a variable before assigning a value?
var country;
console.log(country);
country = "Egypt";
console.log(country);


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 8. Predict the output — your answer: /* ??? */
var x = 5;
var y = x;
var x = 20;
console.log(x);
console.log(y);

// 9. Predict the output — your answer: /* ??? */
var language = "JavaScript";
var language = "Python";
var language = "Rust";
console.log(language);

// 10. Predict the output — your answer: /* ??? */
var num = 1;
num = num + 1;
num = num + 1;
num = num * 3;
console.log(num);
