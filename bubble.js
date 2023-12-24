function bubbleSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let perfect = true;
    for (let j = 0; j < arr.length - i; j++) {
      count++;
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        perfect = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (perfect) break;
  }
  return arr;
}
bubbleSort([45, 6, 7, 23, 1, 19]);
module.exports = bubbleSort;
