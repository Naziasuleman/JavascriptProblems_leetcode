/***Given an integer array nums and an integer k, return true if nums has a continuous subarray 
 * of size at least two whose elements sum up to a multiple of k, or false otherwise.An integer 
 * x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k. */

var checkSubarraySum = function (nums, k) {
  if (nums.length > 1) {
    let set = new Set();
    let sum = 0;
    let prevrem = 0;
    for (let n of nums) {
      sum += n;
      let rem = sum % k;

      if (set.has(rem)) return true;
      set.add(prevrem);
      prevrem = rem;
    }
    return false;
  } else return false;
};
