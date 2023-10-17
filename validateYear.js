function validateYear(year) {
  const numericYear = parseInt(year, 10);

  if (isNaN(numericYear)) {
      return false;
  }
  return numericYear >= 0 && numericYear <= 9999;
}

console.log(validateYear("2023"));
console.log(validateYear("0000")); 
console.log(validateYear("0010"));   
console.log(validateYear("-2023")); 
console.log(validateYear("abc")); 
console.log(validateYear(" 2023")); 