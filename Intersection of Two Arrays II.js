// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// nums1 = [1,2,2,1], nums2 = [2]
// nums1 = [1,2,2,1], nums2 = [2]

// var intersect = (nums1, nums2)=> {

//     let result = [];
//     let hashTable = {};
//     for (let num of nums1) {
//       if (hashTable[num]) {
//         hashTable[num]++;
//       } else {
//         hashTable[num] = 1;
//       }
//     }

//     for (let num of nums2) {
//         if (hashTable[num] > 0) {
//           result.push(num);
//           hashTable[num]--;
//         }
//       }

//       return hashTable;
// };


var intersect = (nums1, nums2)=> {

    let data = [] ;
 
    for (let x = 0; x < nums1.length ; x++) {
            for (let i = 0; i < nums2.length ; i++) {
                
               if(nums1[x] === nums2[i]) {
                data.push(nums1[x]);
             
                nums2[i] = null;
                break
               }
            }
    
    }

   return data;

};
// let nums1 = [1,2,2,1] , nums2 = [2]
// let nums1 = [1,2,2,1] , nums2 = [1,2]
// let nums1 = [4,9,5], nums2 = [9,4,9,8,4]
let  nums1 = [1,2,2,1], nums2 = [2,2]
// let  nums1 = [1,2], nums2 = [1,1]
// let  nums1 = [2,1], nums2 = [1,2]

console.log(intersect(nums1,nums2))