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
// console.log(insertIntoArray([1, 2, 3, 4], 9, 5, 7, 4));

//  24 April 2023 Problems

// [1] Find the largest element in the array

const arr1 = [333,44545,3662,5];
let highest = 0;
for (let i=0;i<arr1.length;i++){
  // console.log("previous index element:",arr1[i-1],"current index element:",arr1[i]);
  console.log("CASE",i+1,"===>","highest",highest , "curr-val", arr1[i])
  if(highest < arr1[i]){
    highest = arr1[i];
  }
}
console.log(highest, "highest number in the array")
// console.log(Math.max(...arr1)); // Short-cut method
