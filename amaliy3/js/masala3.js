function ikkiBaravar(arr) {
  const yangiMassiv = [];
  for (let i = 0; i < arr.length; i++) {
    yangiMassiv.push(arr[i] * 2);
  }
  return yangiMassiv;
}

console.log(ikkiBaravar([1, 5, 10]));
console.log(ikkiBaravar([-3, 0]));
console.log(ikkiBaravar([4, 7, 12]));
console.log(ikkiBaravar([]));
