/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const helper = (nums, selected = new Set(), output = []) => {
  if (!nums.length) {
    return [];
  }
  if (selected.size >= nums.length) {
    output.push([...selected].map((i) => nums[i]));
    return output;
  }
  for (let i = 0; i < nums.length; i++) {
    if (selected.has(i)) {
      continue;
    }
    if (nums[i] === nums[i - 1] && !selected.has(i - 1)) {
      continue;
    }
    selected.add(i);
    helper(nums, selected, output);
    selected.delete(i);
  }
  return output;
};

var permuteUnique = function(nums) {
  nums.sort();
  return helper(nums);
};
