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


// -------------------------- 27 April Problems + 3 Leetcode----------

// Q1: Find the leader in the Array

// Hint: Leader is an element from which all the elements on the right side are smaller.

// const arr = [4, 5, 3, 1, 2];

function findTheLeader(arr) {
  let leadersArr = [];
  let leaderElement;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      leaderElement = arr[i];
      leadersArr.push(arr[i]);
    } else if (arr[i] > leaderElement) {
      leaderElement = arr[i];
      leadersArr.push(arr[i]);
    }
  }
  return leadersArr;
}
// console.log(findTheLeader(arr));

// Q2 : Find the maximum difference between any two elements in the array
// Hint: In this pair, the largest element should be on the right side only!!

// const arr = [7, 6, 4, 3, 9, 8];

function findMaxDifference(arr) {
  let highestDifference = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] - arr[i] > highestDifference) {
        highestDifference = arr[j] - arr[i];
      }
    }
  }
  return highestDifference;
}
// console.log(findMaxDifference(arr));
//

// LEETCODE Problems

// Q: Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

let nums = [10, 4, 8, 3];
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

function getLeftAndRightSumDifferences(nums) {
  let leftSum = [];
  let rightSum = [];
  let leftSummation = 0;
  let rightSummation = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    // console.log(nums[i], `array element on ${i + 1} position`);
    if (i === 0) {
      leftSum[i] = 0;
    } else {
      leftSummation += nums[i - 1];
      leftSum[i] = leftSummation;
    }
  }
  //
  for (let i = nums.length - 1; i >= 0; i--) {
    // console.log(nums[i],"element on particular index");
    // console.log(i)
    if (i === nums.length - 1) {
      // console.log(nums.length - 1, i, "from the extreme end condition");
      rightSum[i] = 0;
    } else {
      // console.log(rightSummation, nums[i + 1], "hhi");
      rightSummation += nums[i + 1];
      rightSum[i] = rightSummation;
    }
  }
  console.log(leftSum, "Left Sum");
  console.log(rightSum, "Right Sum");

  let differenceArray = [];
  for (let i = 0; i < leftSum.length; i++) {
    differenceArray.push(Math.abs(leftSum[i] - rightSum[i]));
  }
  console.log(differenceArray);
}

// getLeftAndRightSumDifferences(nums); //invoke this to see the result
// --------------------------------------------------------------------------

// Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

// Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

// Example 1:

// Input: n = 7
// Output: 21
// Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.

// Example 2:

// Input: n = 10
// Output: 40
// Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.

function divisorsSum(n) {
  let summation = 0;
  for (let i = 1; i <= n; i++) {
    // console.log(i);
    if (i % 3 === 0) {
      console.log(`${i} is divisible by 3 so, added 3 `);
      summation += i;
      // console.log("added 3");
    } else if (i % 5 === 0) {
      summation += i;
      console.log(`${i} is divisible by 5 so, added 5 `);
    } else if (i % 7 === 0) {
      summation += i;
      console.log(`${i} is divisible by 7 so, added 7 `);
    }
  }
  console.log(summation);
}
// divisorsSum(9);
// ----------------------------------------------------------------------