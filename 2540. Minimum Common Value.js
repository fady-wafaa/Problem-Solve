// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays.
//  If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.


// let nums1 = [1,2,3], nums2 = [2,4]
// let nums1 = [1,2,3], nums2 = [2,4]
let nums1 = [1,2,3,6], nums2 = [2,3,4,5,1]
// let nums1 = [1,2,3,6], nums2 = [9,11,12]

let getCommon = (nums1, nums2)=> {
    if (nums1.length <1) {
        return Math.min(...nums2)
     
    }else if(nums2.length <1){
        return Math.min(...nums1)
    }
    let Output = []
    let r = Math.min(...nums2)
    let l = Math.min(...nums1)
 
    if(r == l){
        Output.push(r)
    }

    if(Output.length < 1){
                return -1
            }
    return Math.min(...Output)
};

// let getCommon = (nums1, nums2)=> {
//     if (nums1.length <1) {
//         return Math.min(...nums2)
     
//     }else if(nums2.length <1){
//         return Math.min(...nums1)
//     }
//     let Output = []
//     let res = {};

//     for (const item of nums2) {
//         if (res[item]) {
//             res[item]++;
//         }else{
//             res[item] = 1
//         }
//     }
//     console.log('res[min]', res)
//     for (const min of nums1) {
//         if(res[min] > 0) {
//             Output.push(min);

//         }
//     }
//     if(Output.length < 1){
//         return -1
//     }
//     return Math.min(...Output)

// };




console.log(getCommon(nums1, nums2))