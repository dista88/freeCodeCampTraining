Must Learn (Use Daily)

.map() - Transform each item

javascript   const nums = [1, 2, 3];
   const doubled = nums.map(n => n * 2); // [2, 4, 6]

.filter() - Keep items that match condition

javascript   const nums = [1, 2, 3, 4];
   const evens = nums.filter(n => n % 2 === 0); // [2, 4]

.find() - Get first item that matches

javascript   const users = [{id: 1}, {id: 2}];
   const user = users.find(u => u.id === 2); // {id: 2}

.reduce() - Combine array into single value

javascript   const nums = [1, 2, 3];
   const sum = nums.reduce((total, n) => total + n, 0); // 6

.forEach() - Loop through items

javascript   nums.forEach(n => console.log(n));
Learn These Next (Still Common)

.includes() - Check if item exists
.some() - Check if ANY item matches
.every() - Check if ALL items match
.push() / .pop() - Add/remove from end
.slice() - Copy portion of array