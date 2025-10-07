Array Methods (Most Important!)
Transform & Filter
javascript// map - transform each element
const doubled = [1, 2, 3].map(num => num * 2); // [2, 4, 6]

// filter - keep elements that pass test
const evens = [1, 2, 3, 4].filter(num => num % 2 === 0); // [2, 4]

// reduce - reduce to single value
const sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0); // 10

// find - first element that matches
const found = [1, 2, 3, 4].find(num => num > 2); // 3

// findIndex - index of first match
const index = [1, 2, 3].findIndex(num => num === 2); // 1

// some - test if ANY element passes
const hasEven = [1, 3, 4].some(num => num % 2 === 0); // true

// every - test if ALL elements pass
const allEven = [2, 4, 6].every(num => num % 2 === 0); // true
Add/Remove Elements
javascript// push - add to end
arr.push(4); // returns new length

// pop - remove from end
arr.pop(); // returns removed element

// unshift - add to beginning
arr.unshift(0); // returns new length

// shift - remove from beginning
arr.shift(); // returns removed element

// splice - add/remove at any position
arr.splice(1, 2, 'a', 'b'); // at index 1, remove 2, add 'a', 'b'

// slice - copy portion (doesn't modify original)
const copy = arr.slice(1, 3); // from index 1 to 3 (not including 3)
Other Essential Array Methods
javascript// includes - check if value exists
[1, 2, 3].includes(2); // true

// indexOf - find index of value
[1, 2, 3].indexOf(2); // 1

// join - array to string
['a', 'b', 'c'].join('-'); // "a-b-c"

// concat - merge arrays
[1, 2].concat([3, 4]); // [1, 2, 3, 4]

// sort - sort array (mutates!)
[3, 1, 2].sort(); // [1, 2, 3]
[3, 1, 2].sort((a, b) => b - a); // [3, 2, 1] descending

// reverse - reverse array (mutates!)
[1, 2, 3].reverse(); // [3, 2, 1]

// forEach - loop (no return value)
arr.forEach((item, index) => console.log(item, index));
String Methods
javascript// split - string to array
"a-b-c".split('-'); // ['a', 'b', 'c']

// trim - remove whitespace
"  hello  ".trim(); // "hello"

// toLowerCase / toUpperCase
"Hello".toLowerCase(); // "hello"
"Hello".toUpperCase(); // "HELLO"

// includes - check if substring exists
"hello world".includes("world"); // true

// startsWith / endsWith
"hello".startsWith("hel"); // true
"hello".endsWith("lo"); // true

// slice - extract portion
"hello".slice(1, 4); // "ell"

// replace / replaceAll
"hello".replace("l", "x"); // "hexlo"
"hello".replaceAll("l", "x"); // "hexxo"

// indexOf - find position
"hello".indexOf("l"); // 2

// substring - extract between indices
"hello".substring(1, 4); // "ell"

// charAt - character at index
"hello".charAt(1); // "e"

// repeat - repeat string
"ha".repeat(3); // "hahaha"

// padStart / padEnd
"5".padStart(3, "0"); // "005"
Object Methods
javascript// Object.keys - get all keys
Object.keys({a: 1, b: 2}); // ['a', 'b']

// Object.values - get all values
Object.values({a: 1, b: 2}); // [1, 2]

// Object.entries - get key-value pairs
Object.entries({a: 1, b: 2}); // [['a', 1], ['b', 2]]

// Object.assign - merge objects
Object.assign({}, {a: 1}, {b: 2}); // {a: 1, b: 2}

// Object.fromEntries - convert entries to object
Object.fromEntries([['a', 1], ['b', 2]]); // {a: 1, b: 2}

// hasOwnProperty - check if property exists
obj.hasOwnProperty('name'); // true/false
JSON Methods
javascript// JSON.parse - string to object
JSON.parse('{"name": "John"}'); // {name: "John"}

// JSON.stringify - object to string
JSON.stringify({name: "John"}); // '{"name":"John"}'
JSON.stringify(obj, null, 2); // pretty print with 2 spaces
Number Methods
javascript// parseInt / parseFloat
parseInt("123"); // 123
parseFloat("123.45"); // 123.45

// toFixed - decimal places
(123.456).toFixed(2); // "123.46"

// Number - convert to number
Number("123"); // 123

// isNaN - check if not a number
isNaN("hello"); // true
Math Methods
javascriptMath.random(); // random number 0-1
Math.floor(4.7); // 4 - round down
Math.ceil(4.3); // 5 - round up
Math.round(4.5); // 5 - round to nearest
Math.max(1, 2, 3); // 3
Math.min(1, 2, 3); // 1
Math.abs(-5); // 5 - absolute value
DOM Methods (For Vanilla JS)
javascript// Select elements
document.querySelector('.class');
document.querySelectorAll('.class');
document.getElementById('id');

// Create/modify elements

document.createElement('div');

element.appendChild(child);
element.removeChild(child);
element.innerHTML = 'text';
element.textContent = 'text';
element.setAttribute('class', 'name');
element.classList.add('class');
element.classList.remove('class');
element.classList.toggle('class');

// Events
element.addEventListener('click', callback);
element.removeEventListener('click', callback);
Modern ES6+ Methods
javascript// Spread operator
const arr2 = [...arr1]; // copy array
const obj2 = {...obj1}; // copy object

// Destructuring
const {name, age} = person;
const [first, second] = array;

// Template literals
`Hello ${name}`;

// Optional chaining
user?.address?.street;

// Nullish coalescing
const value = data ?? 'default';