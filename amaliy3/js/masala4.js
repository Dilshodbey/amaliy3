function anagrammi(a, b) {
  const birinchiTartib = a.toLowerCase().split("").sort().join("");
  const ikkinchiTartib = b.toLowerCase().split("").sort().join("");
  return birinchiTartib === ikkinchiTartib;
}

console.log(anagrammi("Kitob", "bokit"));
console.log(anagrammi("olma", "olam"));
console.log(anagrammi("salom", "solaq"));
console.log(anagrammi("Dars", "sard"));
console.log(anagrammi("", ""));
