//masking emaail function
const maskEmail = (email) => {
  let masked = "";
  let atIndex = email.indexOf("@");
  for (let i = 0; i < atIndex; i++) {
    if (i === 0 || i === atIndex - 1) {
      masked += email[i];
    } else {
      masked += "*";
    }
  }
  return masked + email.substring(atIndex);
};

//Build a Celsius to Fahrenheit Converter
const convertCtoF = (celcius) => {
  let fahrenheit = celcius * (9 / 5) + 32;
  return fahrenheit;
};

//card counting
let count = 0;

const cc = (card) => {
  if (card >= 1 && card <= 6) {
    count += 1;
  } else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count -= 1;
  }
  return count + (count > 0 ? " Bet" : " Hold");
};

//leap year calculator
const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else return `${year} is not a leap year.`;
};

// finding largest num arr
const largestArr = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
let numbers = [1, 2, 22, 212, 21];
console.log(largestArr(numbers));
