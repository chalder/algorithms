/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, start = 0, end = s.length - 1, nDeletions = 1) {
  if (nDeletions < 0) {
    return false;
  }
  let left = start;
  let right = end;
  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        validPalindrome(s, left + 1, right, nDeletions - 1) ||
        validPalindrome(s, left, right - 1, nDeletions - 1)
      );
    }
    left += 1;
    right -= 1;
  }
  return true;
};
