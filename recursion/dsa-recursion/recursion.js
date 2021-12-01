"use strict";

/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length===0) return 1;
  return nums[0]*product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, count=0) {
  if (words.length===0) return count;
  if (words[0].length<count){
    return longest(words.slice(1), count);
  } else {
    return longest(words.slice(1), words[0].length);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0) {
  if (idx < str.length){
    return str[idx] + everyOther(str, idx+2);
  }
  return "";
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  if (str[idx] !== str[str.length-idx-1]) return false; 
  if (idx>str.length/2) return true;
  return isPalindrome(str,idx+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx>=arr.length) return -1;
  return (arr[idx]===val) ? idx : findIndex(arr, val, idx+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length===0) return ""
  return str[str.length-1] + revString(str.slice(0,str.length-1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out=[]) {
  for (let key in obj){
    if (typeof(obj[key])==="object"){
      gatherStrings(obj[key], out);
    }
    if (typeof(obj[key])==="string"){
      out.push(obj[key]);
    }
  }
  return out;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length-1) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
