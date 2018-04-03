/*jshint esversion:6*/

/*
1. looping values dari kiri ke kanan
2. jika target sama dengan values, return index setelah itu
3. jika tidak bertemu return -1


1. buat array kosong
2. looping values dari kiri ke kanan
3. jika target sama dengan values[i] maka array kosong tersebut di push dengan index
4. setelah itu return result
*/
'use strict';

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  for(var i = 0 ; i < values.length ; i++){
    if(target === values[i]){
      return i;
    }
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
  var result = [];
  for(var i = 0 ; i < values.length ; i++){
    if(target === values[i]){
      result.push(i);
    }
  }
  return result
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
