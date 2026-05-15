// ============================================================
// 📁 02-hidden-class-and-delete.js
// Topic: Hidden Class (performance) · Deleting properties
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. delete removes a property completely
var developer = {
  name:     "Mahmoud",
  age:      22,
  password: "secret123"
};

console.log(developer.password);      // secret123
delete developer.password;
console.log(developer.password);      // undefined
console.log("password" in developer); // false — it's gone

// 2. Setting to null is NOT the same as deleting
var obj = { name: "Mahmoud", age: 22 };

obj.age = null;
console.log(obj.age);          // null
console.log("age" in obj);     // true — key still exists

delete obj.age;
console.log("age" in obj);     // false — now it's actually gone

// 3. The "in" operator — check if a key exists
var car = { brand: "BMW", doors: 4 };
console.log("brand" in car);   // true
console.log("color" in car);   // false


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 4. What's the difference between these two approaches?

// Approach A — all properties defined upfront (good for performance)
var devA = {
  name: "Mahmoud",
  age:  null,
  city: null
};
devA.age  = 22;
devA.city = "Cairo";

// Approach B — properties added dynamically (bad for performance)
var devB = {};
devB.name = "Mahmoud";
devB.age  = 22;
devB.city = "Cairo";

// Both end up with the same values — what's actually different?
console.log(devA);
console.log(devB);

// 5. Can you delete a variable? What happens?
var mahmoud = "developer";
delete mahmoud;
console.log(mahmoud); // ? — does delete work on variables?

// 6. What does delete return?
var obj = { x: 1, y: 2 };
var result = delete obj.x;
console.log(result);  // ? — true or false?
console.log(obj);     // ?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 7. Predict the output — your answer: /* ??? */
var obj = { a: 1, b: 2, c: 3 };

delete obj.b;

for (var key in obj) {
  console.log(key + ": " + obj[key]);
}

// 8. Predict the output — your answer: /* ??? */
var person = {
  name: "Mahmoud",
  age:  22
};

delete person.age;

console.log(person.age);           // ?
console.log(typeof person.age);    // ?
console.log("age" in person);      // ?

person.age = undefined;
console.log("age" in person);      // ? — is it back?

// 9. Hidden class — predict which approach is faster and why
// (you can't see the speed difference in console, but explain it in a comment)

// Option A
var opt_a = { x: 0, y: 0, z: 0 };
opt_a.x = 10;
opt_a.y = 20;
opt_a.z = 30;

// Option B
var opt_b = {};
opt_b.x = 10;
opt_b.y = 20;
opt_b.z = 30;

// Your answer: /* Option ___ is faster because ??? */
