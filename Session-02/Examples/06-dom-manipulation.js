// ============================================================
// 📁 06-dom-manipulation.js
// Topic: DOM Manipulation — reading and changing HTML with JS
//
// To try these examples, create a basic HTML file like this:
//
// <body>
//   <div id="output"></div>
//   <ul id="myList"></ul>
//   <input id="firstName" type="text">
//   <input id="lastName" type="text">
//   <button onclick="yourFunction()">Click</button>
//   <script src="06-dom-manipulation.js"></script>
// </body>
// ============================================================


// ============================================================
// 🟢 EASY — just run it and see what happens
// ============================================================

// 1. Get an element and change its text
// HTML needed: <div id="output"></div>

function changeText() {
  document.getElementById("output").innerHTML = "Hello, Mahmoud!";
}

// 2. Add a new item to a list every time the function runs
// HTML needed: <ul id="myList"></ul>

var itemCount = 0;

function addItem() {
  itemCount++;
  var list = document.getElementById("myList");
  list.innerHTML += "<li>Item " + itemCount + "</li>";
}

// 3. Read what's inside an element
// HTML needed: <div id="output">Some text here</div>

function readText() {
  var content = document.getElementById("output").innerHTML;
  console.log(content);
}


// ============================================================
// 🟡 MEDIUM — think before you run
// ============================================================

// 4. Read two inputs and log the full name
// HTML needed: <input id="firstName"> <input id="lastName">

function showFullName() {
  var first = document.getElementById("firstName").value;
  var last  = document.getElementById("lastName").value;
  console.log("Full name: " + first + " " + last);
}

// 5. What happens if the input is empty?
// Try calling this without typing anything in the inputs first

function showFullNameSafe() {
  var first = document.getElementById("firstName").value;
  var last  = document.getElementById("lastName").value;

  if (first === "" || last === "") {
    console.log("Please fill in both fields.");
    return;
  }

  console.log("Full name: " + first + " " + last);
}

// 6. Use a loop to build a list and inject it all at once
// HTML needed: <ul id="myList"></ul>

function buildList() {
  var topics = ["Variables", "Functions", "Hoisting", "IIFE", "DOM"];
  var html = "";

  for (var i = 0; i < topics.length; i++) {
    html += "<li>" + topics[i] + "</li>";
  }

  document.getElementById("myList").innerHTML = html;
}


// ============================================================
// 🔴 HARD — write your answer in a comment, then run it
// ============================================================

// 7. Predict what gets displayed — your answer: /* ??? */
// HTML needed: <div id="output"></div>

function mystery() {
  var el = document.getElementById("output");
  el.innerHTML = "Step 1";
  el.innerHTML = "Step 2";
  el.innerHTML = "Step 3";
  console.log(el.innerHTML);
}
// does the page show all three steps, or just the last one?

// 8. Predict what gets logged — your answer: /* ??? */
// HTML needed: <input id="firstName" value="Mahmoud">

function readInput() {
  var input = document.getElementById("firstName");
  console.log(input.value);
  console.log(input.innerHTML); // same as value?
  console.log(typeof input);
}

// 9. A counter — predict what the page shows after 3 clicks — your answer: /* ??? */
// HTML needed: <div id="output">0</div>

var clicks = 0;

function countClicks() {
  clicks++;
  document.getElementById("output").innerHTML = clicks;
  console.log("Click number: " + clicks);
}
// what's the difference between what the page shows and what the console logs?

// 10. What's wrong with this code? — your answer: /* ??? */

function brokenFunction() {
  var text = document.getElementById("doesNotExist").innerHTML;
  console.log(text);
}
// hint: try running it and read the error carefully
