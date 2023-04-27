//             UNCOMMENT A PARTICULAR PROBLEM TO CHECK IT'S SOLUTION IN THE CONSOLE 👁👁

// function insertIntoArray(arr, element, n, capacity, insertingPosition) {
//   if (capacity === n) {
//     console.log('Sorry the capacity is full!');
//   } else {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       // console.log(
//       //   arr[i],
//       //   "element-index",
//       //   i,
//       //   "incremented index",
//       //   i + 1,
//       //   arr[i + 1],
//       //   "=",
//       //   arr[i]
//       // );
//       //       shift the index of the element to one place(+1)
//       arr[i + 1] = arr[i];
//       if (i === insertingPosition - 1) {
//         arr[i] = element;
//         return arr;
//       }
//     }
//   }
// }
// console.log(insertIntoArray([1, 2, 3, 4], 9, 5, 7, 4));

//  24 April 2023 Problems

// [1] Find the largest element in the array

// const arr1 = [333, 44545, 3662, 5];
// let highest = 0;
// for (let i = 0; i < arr1.length; i++) {
//   // console.log("previous index element:",arr1[i-1],"current index element:",arr1[i]);
//   console.log('CASE', i + 1, '===>', 'highest', highest, 'curr-val', arr1[i]);
//   if (highest < arr1[i]) {
//     highest = arr1[i];
//   }
// }
// console.log(highest, 'highest number in the array');
// console.log(Math.max(...arr1)); // Short-cut method

// -------------- second largest element in the array------------
const arr2 = [11, 2, 3, 55, 54, 8, 9];
function getSecondLargestElement(arr) {
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;

  // The looping logic for each element arr[i] in the array
  for (let i = 0; i < arr.length; i++) {
    if (max1 < arr[i]) {
      max2 = max1;
      max1 = arr[i];
    } else if (max2 < arr[i]) {
      max2 = arr[i];
    }
  }
  return max2;
}
console.log(getSecondLargestElement(arr2), 'result');

// -----------------[3] Find if an array is sorted or not ? ------------
// const arr3 = [1,2,3,4,5];

// function checkSortedAscending(arr3) {
//   for (let i = 0; i < arr3.length; i++) {
//     if (arr3[i] > arr3[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkSortedAscending(arr3));

// function checkSortedDecending(arr3) {
//   for (let i = 0; i < arr3.length; i++) {
//     if (arr3[i] < arr3[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkSortedDecending(arr3));

// ---------------- [4] Reverse an array ------------
// const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const reversedArr = [];
// for (let i = arr4.length - 1; i >= 0; i--) {
//   reversedArr.push(arr4[i]);
// }
// console.log(reversedArr);
