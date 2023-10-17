function validateYear(year) {
  const numericYear = parseInt(year, 10);

  if (isNaN(numericYear)) {
      return false;
  }
  return numericYear >= 0 && numericYear <= 9999;
}

console.log(validateYear("2023"));   // true
console.log(validateYear("0000"));   // true
console.log(validateYear("0010"));   // false
console.log(validateYear("-2023"));  // false
console.log(validateYear("abc"));    // false
console.log(validateYear(" 2023"));  // false