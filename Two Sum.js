
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp = new Map();
    for (let i = 0; i < nums.length; i++) {
        let res = target - nums[i];
        if(mp.has(res)){
            return[mp.get(res),i]
        }
        mp.set(nums[i] , i)
        
    }
};

// var twoSum = function(nums, target) {
//     let n = nums.length ;
//     for (let x = 0; x < n; x++) {
//        for (let i = x +1 ; i < n; i++) {
//         let res = nums[x] + nums[i];
//         if(res == target){
//             return[x ,i]
//         }
        
//        }
        
//     }
// };


let nums = [3,2,4];
let target = 6
console.log(twoSum(nums, target))


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:


// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:


// Input: nums = [3,3], target = 6
// Output: [0,1]