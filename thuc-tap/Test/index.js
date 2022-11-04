const nums = [2, 7, 11, 15];
const target = 9;

// const twosum = (nums, target) => {
//   let hashNum = {};
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];

//     if (hashNum[target - num] !== undefined) {
//       return [i, hashNum[target - num]];
//     }

//     return (hashNum[target - num] = i);
//   }
// };

var twoSum = function (nums, target) {
  const hasNum = {};
  for (i = 0; i < nums.length; i++) {
    num = nums[i];

    if (hasNum[target - num] !== undefined) {
      return [hasNum[target - num], i];
    }

    hasNum[num] = i;
  }
};

console.log(twoSum(nums, target));
