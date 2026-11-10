function fibonachchi(n) {
  if (n <= 0) {
    return 0;
  }
  let oldingi = 0;
  let hozirgi = 1;
  for (let i = 2; i <= n; i++) {
    let keyingi = oldingi + hozirgi;
    oldingi = hozirgi;
    hozirgi = keyingi;
  }
  return hozirgi;
}

console.log(fibonachchi(10));
console.log(fibonachchi(1));
console.log(fibonachchi(6));
console.log(fibonachchi(0));
