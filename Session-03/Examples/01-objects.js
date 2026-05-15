// ============================================================
// 📁 01-objects.js
// Topic: Objects — creating, accessing, updating, and methods
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. Creating an object
var developer = {
  name:     "Mahmoud",
  age:      22,
  language: "JavaScript",
  isHired:  false
};

console.log(developer);
console.log(developer.name);     // dot notation
console.log(developer["age"]);   // bracket notation

// 2. Updating a property
developer.isHired = true;
developer.age     = 23;
console.log(developer.isHired); // true
console.log(developer.age);     // 23

// 3. Adding a new property after creation
developer.city = "Cairo";
console.log(developer.city); // Cairo

// 4. A method inside an object
var dev = {
  name:     "Mahmoud",
  language: "JavaScript",

  introduce: function() {
    console.log("Hi, I'm " + this.name + " and I write " + this.language);
  }
};

dev.introduce();


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 5. Dot notation vs bracket notation — when does each fail?
var person = { "first-name": "Mahmoud", age: 22 };

// console.log(person.first-name); // ← will this work?
console.log(person["first-name"]); // ← what about this?

// 6. Using a variable as a key — bracket notation only
var key = "age";
console.log(person[key]);   // ?
console.log(person.key);    // ? — not the same thing

// 7. What happens if you access a property that doesn't exist?
var obj = { name: "Mahmoud" };
console.log(obj.city);       // ?
console.log(typeof obj.city); // ?

// 8. this inside a method — what does it refer to?
var car = {
  brand: "BMW",
  doors: 4,

  describe: function() {
    console.log("This is a " + this.brand + " with " + this.doors + " doors");
  }
};

car.describe(); // ?


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 9. Predict the output — your answer: /* ??? */
var a = { value: 10 };
var b = a;
b.value = 99;
console.log(a.value); // is it 10 or 99?
// hint: objects are assigned by reference, not by value

// 10. Predict the output — your answer: /* ??? */
var obj = { x: 1, y: 2 };

function changeIt(o) {
  o.x = 100;
}

changeIt(obj);
console.log(obj.x); // ?

// 11. Predict the output — your answer: /* ??? */
var counter = {
  count: 0,

  increment: function() {
    this.count++;
    console.log(this.count);
  },

  reset: function() {
    this.count = 0;
    console.log(this.count);
  }
};

counter.increment();
counter.increment();
counter.increment();
counter.reset();
counter.increment();
