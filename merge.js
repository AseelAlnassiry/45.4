function merge(arr1, arr2) {
  // Empty Array
  const res = [];

  // Start pointers at the beginning
  let p1 = 0;
  let p2 = 0;

  // Comparison
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] > arr2[p2]) {
      res.push(arr2[p2]);
      p2++;
    } else {
      res.push(arr1[p1]);
      p1++;
    }
  }

  //Exhaust
  if (p1 === arr1.length) res.push(...arr2.slice(p2));
  if (p2 === arr2.length) res.push(...arr1.slice(p1));
  return res;
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  // standard case
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort };
