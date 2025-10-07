const confirmEnding = (start, ending) =>
  start.slice(start.length - ending.length) === ending;

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));

console.log(confirmEnding("Abstraction", "action"));
