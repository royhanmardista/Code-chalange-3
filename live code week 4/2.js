/*
=============
Reverse Array
=============

Function reverseAll() mengambil input berupa sebuah array, dan mengembalikan kebalikan dari isi array tersebut
beserta kebalikan dari angka-angka di dalamnya.

CONTOH:

input : [123, 456]

PROSES:
1. 456 dibalik jadi 654
2. 123 dibalik jadi 321
3. 654 akan berada di index 0 array dan 321 akan berada di index 1 array

output: [654, 321]

catatan: output merupakan array of numbers, bukan array of string

DILARANG MENGGUNAKAN:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/

function reverseAll(arr) {
  //Implementasi kode disini!
  var newArr = [];
  var element = "";
  for (let i = arr.length-1; i>=0; i--) {
    arr[i] = String(arr[i]);
    for (let j = arr[i].length-1; j>=0; j--) {
      element += arr[i][j]; 
    }
    element = Number(element);
    newArr.push(element);
    element = "";
  }
  return newArr;
}

console.log(reverseAll([123, 521, 456])) //[654,125,321]
console.log(reverseAll([897])) //[798]
console.log(reverseAll([])) //[]