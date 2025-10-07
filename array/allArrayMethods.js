// ==============================================
// JAVASCRIPT ARRAY METHODS CHEAT SHEET
// ==============================================

// 1. forEach() - Execute function for each element
const arr1 = [1, 2, 3];
arr1.forEach((item) => console.log(item * 2));
// Output: 2
// Output: 4
// Output: 6

// 2. map() - Create new array with transformed elements
const arr2 = [1, 2, 3];
const mapped = arr2.map((x) => x * 2);
console.log(mapped); // Output: [2, 4, 6]

// 3. filter() - Create new array with elements that pass test
const arr3 = [1, 2, 3, 4, 5];
const filtered = arr3.filter((x) => x % 2 === 0);
console.log(filtered); // Output: [2, 4]

// 4. reduce() - Reduce array to single value
const arr4 = [1, 2, 3, 4];
const reduced = arr4.reduce((acc, curr) => acc + curr, 0);
console.log(reduced); // Output: 10

// 5. find() - Find first element that satisfies condition
const arr5 = [5, 12, 8, 130, 44];
const found = arr5.find((x) => x > 10);
console.log(found); // Output: 12

// 6. findIndex() - Find index of first matching element
const arr6 = [5, 12, 8, 130, 44];
const foundIndex = arr6.findIndex((x) => x > 10);
console.log(foundIndex); // Output: 1

// 7. some() - Check if at least one element passes test
const arr7 = [1, 2, 3, 4, 5];
const hasEven = arr7.some((x) => x % 2 === 0);
console.log(hasEven); // Output: true

// 8. every() - Check if all elements pass test
const arr8 = [2, 4, 6, 8];
const allEven = arr8.every((x) => x % 2 === 0);
console.log(allEven); // Output: true

// 9. includes() - Check if array contains element
const arr9 = [1, 2, 3];
console.log(arr9.includes(2)); // Output: true
console.log(arr9.includes(4)); // Output: false

// 10. indexOf() - Find first index of element
const arr10 = ["a", "b", "c", "b"];
console.log(arr10.indexOf("b")); // Output: 1
console.log(arr10.indexOf("d")); // Output: -1

// 11. lastIndexOf() - Find last index of element
const arr11 = ["a", "b", "c", "b"];
console.log(arr11.lastIndexOf("b")); // Output: 3

// 12. push() - Add elements to end
const arr12 = [1, 2];
const newLength = arr12.push(3, 4);
console.log(arr12); // Output: [1, 2, 3, 4]
console.log(newLength); // Output: 4

// 13. pop() - Remove last element
const arr13 = [1, 2, 3];
const lastElement = arr13.pop();
console.log(arr13); // Output: [1, 2]
console.log(lastElement); // Output: 3

// 14. unshift() - Add elements to beginning
const arr14 = [3, 4];
const newLen = arr14.unshift(1, 2);
console.log(arr14); // Output: [1, 2, 3, 4]
console.log(newLen); // Output: 4

// 15. shift() - Remove first element
const arr15 = [1, 2, 3];
const firstElement = arr15.shift();
console.log(arr15); // Output: [2, 3]
console.log(firstElement); // Output: 1

// 16. splice() - Add/remove elements at specific position
const arr16 = [1, 2, 3, 4, 5];
const removed = arr16.splice(2, 2, 6, 7);
console.log(arr16); // Output: [1, 2, 6, 7, 5]
console.log(removed); // Output: [3, 4]

// 17. slice() - Extract portion of array (non-mutating)
const arr17 = [1, 2, 3, 4, 5];
const sliced = arr17.slice(1, 4);
console.log(sliced); // Output: [2, 3, 4]
console.log(arr17); // Output: [1, 2, 3, 4, 5] (original unchanged)

// 18. concat() - Merge arrays
const arr18a = [1, 2];
const arr18b = [3, 4];
const merged = arr18a.concat(arr18b);
console.log(merged); // Output: [1, 2, 3, 4]

// 19. join() - Convert array to string
const arr19 = ["Hello", "World"];
console.log(arr19.join(" ")); // Output: "Hello World"
console.log(arr19.join("-")); // Output: "Hello-World"

// 20. reverse() - Reverse array order (mutating)
const arr20 = [1, 2, 3];
arr20.reverse();
console.log(arr20); // Output: [3, 2, 1]

// 21. sort() - Sort array (mutating)
const arr21a = [3, 1, 4, 2];
arr21a.sort();
console.log(arr21a); // Output: [1, 2, 3, 4]

const arr21b = ["banana", "apple", "cherry"];
arr21b.sort();
console.log(arr21b); // Output: ['apple', 'banana', 'cherry']

// 22. flat() - Flatten nested arrays
const arr22 = [1, [2, 3], [4, [5]]];
console.log(arr22.flat()); // Output: [1, 2, 3, 4, [5]]
console.log(arr22.flat(2)); // Output: [1, 2, 3, 4, 5]

// 23. flatMap() - Map then flatten
const arr23 = [1, 2, 3];
const flatMapped = arr23.flatMap((x) => [x, x * 2]);
console.log(flatMapped); // Output: [1, 2, 2, 4, 3, 6]

// 24. Array.from() - Create array from array-like object
const str = "hello";
console.log(Array.from(str)); // Output: ['h', 'e', 'l', 'l', 'o']

// 25. Array.of() - Create array from arguments
console.log(Array.of(1, 2, 3)); // Output: [1, 2, 3]
console.log(Array.of(5)); // Output: [5]

// 26. fill() - Fill array with static value
const arr26 = new Array(3).fill(0);
console.log(arr26); // Output: [0, 0, 0]

// 27. copyWithin() - Copy elements within array
const arr27 = [1, 2, 3, 4, 5];
arr27.copyWithin(0, 3);
console.log(arr27); // Output: [4, 5, 3, 4, 5]

// 28. entries() - Get key/value pairs
const arr28 = ["a", "b", "c"];
for (let [idx, val] of arr28.entries()) {
  console.log(idx, val);
}
// Output: 0 'a'
// Output: 1 'b'
// Output: 2 'c'

// 29. keys() - Get array indices
const arr29 = ["x", "y", "z"];
for (let key of arr29.keys()) {
  console.log(key);
}
// Output: 0
// Output: 1
// Output: 2

// 30. values() - Get array values
const arr30 = ["x", "y", "z"];
for (let value of arr30.values()) {
  console.log(value);
}
// Output: 'x'
// Output: 'y'
// Output: 'z'

// 31. Array.isArray() - Check if value is array
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray("hello")); // Output: false

// ==============================================
// PRACTICAL EXAMPLES
// ==============================================

// Method Chaining Example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chainResult = numbers
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((sum, n) => sum + n, 0);
console.log(chainResult); // Output: 60

// Working with Objects
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
];

const userNames = users.map((u) => u.name);
console.log(userNames); // Output: ['John', 'Jane', 'Bob']

const adults = users.filter((u) => u.age >= 25);
console.log(adults.length); // Output: 2

// ==============================================
// QUICK REFERENCE GUIDE
// ==============================================

// MUTATING METHODS (change original array):
// push(), pop(), unshift(), shift(), splice(), reverse(), sort(), fill(), copyWithin()

// NON-MUTATING METHODS (return new array):
// map(), filter(), concat(), slice(), flat(), flatMap()

// SEARCH METHODS:
// find(), findIndex(), indexOf(), lastIndexOf(), includes()

// ITERATION METHODS:
// forEach(), map(), filter(), reduce(), some(), every()

// UTILITY METHODS:
// join(), Array.from(), Array.of(), Array.isArray()

// ==============================================
// END OF ARRAY METHODS CHEAT SHEET
// ==============================================
