function kebabCase(s) {
  const kichikSatr = s.trim().toLowerCase();
  const bolaklar = kichikSatr.split(" ");
  const sozlar = [];
  for (let i = 0; i < bolaklar.length; i++) {
    if (bolaklar[i] !== "") {
      sozlar.push(bolaklar[i]);
    }
  }
  return sozlar.join("-");
}

console.log(kebabCase("Mening Birinchi Saytim"));
console.log(kebabCase("  Bosh   Sahifa "));
console.log(kebabCase("Web Dasturlash Fani"));
console.log(kebabCase(""));
