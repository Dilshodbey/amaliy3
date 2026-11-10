function tekislash(arr) {
  const tekisMassiv = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        tekisMassiv.push(arr[i][j]);
      }
    } else {
      tekisMassiv.push(arr[i]);
    }
  }
  return tekisMassiv;
}

console.log(tekislash([1, [2, 3], [4, 5], 6]));
console.log(tekislash([[7], [], 8]));
console.log(tekislash([[10, 20], 30, [40]]));
console.log(tekislash([]));
