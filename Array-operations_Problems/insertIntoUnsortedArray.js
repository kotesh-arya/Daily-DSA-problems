function insertIntoArray(arr, element, n, capacity, insertingPosition) {
  if (capacity === n) {
    console.log('Sorry the capacity is full!');
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      // console.log(
      //   arr[i],
      //   "element-index",
      //   i,
      //   "incremented index",
      //   i + 1,
      //   arr[i + 1],
      //   "=",
      //   arr[i]
      // );
      //       shift the index of the element to one place(+1)
      arr[i + 1] = arr[i];
      if (i === insertingPosition - 1) {
        arr[i] = element;
        return arr;
      }
    }
  }
}
console.log(insertIntoArray([1, 2, 3, 4], 9, 5, 7, 4));
