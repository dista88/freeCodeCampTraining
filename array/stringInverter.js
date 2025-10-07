function reverseString(str) {
  let charArray = str.split("");
  let reversedArray = charArray.reverse();
  let reversedString = reversedArray.join("");
  return reversedString;
}

console.log(reverseString("123"));
