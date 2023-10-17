function checkIPAddress(ip) {
  const ipRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  return ipRegex.test(ip);
}

console.log(checkIPAddress("127.0.0.1"));
console.log(checkIPAddress("555.0.0.1")); 
console.log(checkIPAddress("-1.2.3.4")); 
console.log(checkIPAddress("1.1.1.1.")); 