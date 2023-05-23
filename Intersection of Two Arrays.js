

let intersection = (nums1, nums2)=> {

    let res =new Map();
   for (let x = 0; x < nums1.length; x++) {
   
    for (let i = 0; i < nums2.length; i++) {
     
        nums1[x] == nums2[i] && !res.has(nums2[i]) ?   res.set(nums2[i] ) : null

    }
   }
   return [...res.keys()]
};


let arr1 = [1,2,2,1]
let arr2 = [2,2]
console.log(intersection(arr1,arr2))

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.