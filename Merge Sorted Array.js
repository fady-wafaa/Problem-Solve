// var merge = (nums1, m, nums2, n)=> {
    
//     // let arr = nums1.filter(e => e != 0);
//     let merged = [];
 
    
//     let res = [...nums1 , ...nums2].filter(e => e!= 0);
   
//     if(res.length <= 1){
//         return merged
//     }
  
//     let mid = Math.floor(res.length /2);
//     let left = res.slice(0, mid)
//     let right = res.slice(mid);

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             merged.push(left.shift());
//         }else{
//             merged.push(right.shift())
//         }
//     }
// //    [...merged,...left, ...right];
//     // data.filter(e => e!= 0)
//      merged.concat(left,right)
//     // return merged.concat(left,right)
 
// };

function merge(nums1, m, nums2, n) {
    let merged = [];
    let i = 0, j = 0;
  
    while (i < m && j < n) {
      if (nums1[i] < nums2[j]) {
        merged.push(nums1[i]);
        i++;
      } else {
        merged.push(nums2[j]);
        j++;
      }
    }
  
    while (i < m) {
      merged.push(nums1[i]);
      i++;
    }
  
    while (j < n) {
      merged.push(nums2[j]);
      j++;
    }


    for (let k = 0; k < merged.length; k++) {
      nums1[k] = merged[k];
    }
  }



let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
console.log(merge(nums1, m, nums2, n))
// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109