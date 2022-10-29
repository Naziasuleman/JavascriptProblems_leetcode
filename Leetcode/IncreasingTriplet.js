/**Given an integer array nums, return true if there exists a triple of indices (i, j, k)
 * such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false. */

var increasingTriplet = function (nums) {
  if (nums.length < 3) return false;
  let i = Number.MAX_SAFE_INTEGER,
    j = Number.MAX_SAFE_INTEGER;

  for (keys in nums) {
    if (nums[keys] > j) return true;
    else if (nums[keys] > i) j = nums[keys];
    else if (nums[keys] < i) i = nums[keys];
  }
  return false;
};
