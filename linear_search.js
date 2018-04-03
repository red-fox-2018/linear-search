'use strict'
/*
- PSEUDOCODE
1. Linier Search
  - LOOP from 0 to values length and plus one for every iteration
  -   IF values[i] equal to target, RETURN index
  - RETURN -1
2. Global Linier Search
  - INITIALIZE result to empty array
  - LOOP values, and SET two parameter data (value) and index
  -   IF data equal target, ADD index to result
  - RETURN result
*/

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  for (let i = 0; i < values.length; i++) {
    if (values[i] === target) return i;
  }

  return -1;
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  let result = [];

  values.forEach((data, index) => {
    if (data === target) result.push(index);
  });

  return result;
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
