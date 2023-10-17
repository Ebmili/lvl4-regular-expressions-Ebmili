function checkDateFormat(dateString) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(dateString);
}


console.log(checkDateFormat("2023-01-01")); 
console.log(checkDateFormat("1900-01-01")); 
console.log(checkDateFormat("20230101"));  
console.log(checkDateFormat("0000-01-01"));  
console.log(checkDateFormat("30-012023"));   
console.log(checkDateFormat("01-14-2023")); 
console.log(checkDateFormat("44-01-2023")); 