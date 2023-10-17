function checkEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

console.log(checkEmail("admin@incode.com")); 
console.log(checkEmail("admin@incode"));    
console.log(checkEmail("@incode.com"));