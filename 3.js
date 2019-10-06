/**
 * ================
 * Matrix Generator
 * ================
 * 
 * [Description]
 * 1. matrixGenerator merupakan sebuah fungsi yang menerima input berupa string
 * 2. fungsi akan mengembalikan sebuah array multidimensi dengan ukuran angka yang sama (1x1, 2x2, 3x3, ...dst)
 * 3. Ukuran dari array multidimensi tersebut ditentukan dari jumlah karakter yang ada di input
 *    sehingga array result yang bentuknya persegi (ukuran x ukuran) memuat seluruh karakter pada input
 * 4. Jika array result telah diisi dan masih menyisakan ruang (bentuknya masih belum (ukuran x ukuran)
 *    atau masih belum persegi) maka sisa elemen yang kosong tersebut diisi dengan karakter '*'
 * 
 * [Contoh]
 * @input = 'abcdefgh'
 * jumlah karakter = 8
 * maka ukuran 3 => 3*3 = 9
 * 
 * Kenapa ukuran 3?
 * Karena jika ukuran 2*2 terlalu kecil (total = 4, hanya muat 'abcd')
 * dan jika ukuran 4*4 terlalu besar
 * 
 * maka array akan berbentuk seperti berikut =
 * [
 *  ['a', 'b', 'c'],
 *  ['d', 'e', 'f'],
 *  ['g', 'h']
 * ]
 * 
 * Karena result belum berbentuk persegi (3 x 3) maka result ditambah dengan satu '*' pada akhir array,
 * sehingga array output sekarang berukuran 3x3:
 * @output =
 * [
 *  ['a', 'b', 'c'],
 *  ['d', 'e', 'f'],
 *  ['g', 'h', '*']
 * ]
 * 
 * [Rules]
 * 1. `Hanya boleh` menggunakan built-in function .push()
 * 2. Diperbolehkan menggunakan built-in function Math
 */

function matrixGenerator(str) {
  // Write your code here
  var output = []  
  var index = 0
  panjang = Math.ceil(Math.sqrt(str.length))  
  var index = 0
             
    for (let j=0; j<panjang; j++) { 
      var temp = []      
      for (let k=index; k<index+panjang; k++) {        
       if (str[k] != undefined) {
        temp.push(str[k])
       } else {
        temp.push('*')
       }
      }
      index += panjang
      output.push(temp) 
    }     
              
     
 return output
}

console.log(matrixGenerator('abcdefgh'))
// [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', '*' ] ]

console.log(matrixGenerator('pq98d327b5c3v'))
/*
[ [ 'p', 'q', '9', '8' ],
  [ 'd', '3', '2', '7' ],
  [ 'b', '5', 'c', '3' ],
  [ 'v', '*', '*', '*' ] ]
*/

console.log(matrixGenerator('q289c370bcq2f98fdg89'))
/*
[ [ 'q', '2', '8', '9', 'c' ],
  [ '3', '7', '0', 'b', 'c' ],
  [ 'q', '2', 'f', '9', '8' ],
  [ 'f', 'd', 'g', '8', '9' ],
  [ '*', '*', '*', '*', '*' ] ]
*/

console.log(matrixGenerator('654dg8erfg654dsf3g2d4sfg657sfdg89'))
/*
[ [ '6', '5', '4', 'd', 'g', '8' ],
  [ 'e', 'r', 'f', 'g', '6', '5' ],
  [ '4', 'd', 's', 'f', '3', 'g' ],
  [ '2', 'd', '4', 's', 'f', 'g' ],
  [ '6', '5', '7', 's', 'f', 'd' ],
  [ 'g', '8', '9', '*', '*', '*' ] ]
*/

console.log(matrixGenerator('p23f4793847f9834jd983274t0'))
/*
[ [ 'p', '2', '3', 'f', '4', '7' ],
  [ '9', '3', '8', '4', '7', 'f' ],
  [ '9', '8', '3', '4', 'j', 'd' ],
  [ '9', '8', '3', '2', '7', '4' ],
  [ 't', '0', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', '*', '*' ] ]
*/