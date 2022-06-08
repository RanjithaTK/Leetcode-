// nums1 = [1,2,3,0,0,0] nums2 =[2,5,6]
//    indexes to b filled are 0 0 0

function mergeArray(nums1, m, nums2, n) {
  let first = m - 1 //2
  let second = n - 1 //2
  for (let i = m + n - 1; i >= 0; i--) {
    //i=5,4,3,2,1,0
    if (second < 0) {
      break
    }
    if (nums1[first] > nums2[second]) {
      //loop1 first casel : nums1[2] > nums2[2]  3>6 ? false->else
      //second casel second-- so second =1  ,,, 3>5 false
      nums1[i] = nums1[first]
      first--
    } else {
      nums1[i] = nums2[second] //nums1[5 ] assigned to 6
      //case2  nums1[4]=5
      second-- //1,0 once ngtv will not run
    }
  }
}
console.log(mergeArray(nums1, m, nums2, n))
