/**
 * =========================
 * Mengumpulkan poin belanja
 * =========================
 * 
 * Ibu sedang mengumpulan poin belanja dan kita diminta membantunya.
 * Dari list barang yang ingin ibu beli, yang sudah ibu urutkan dari
 * pentingnya barang itu, kumpulkanlah sebanyak mungkin poin belanja
 * dengan modal yang diberikan.
 * 
 * Ibu mau kita membeli barang sesuai dari list ibu. 
 * Jika sudah sampai barang terakhir di list dan 
 * kita masih ada sisa uang, maka kita mulai lagi membeli
 * dari barang pertama di list.
 * 
 * Daftar Harga Barang:
 * | Nama        | Harga        | Poin  |
 * | ----------- | ------------ | ----- |
 * | Shampoo     | Rp    20.000 |  100  |
 * | Sabun       | Rp    10.000 |   90  |
 * | Kompor      | Rp 1.000.000 |   65  |
 * | Bantal      | Rp    25.000 |   20  |
 * | Daging Sapi | Rp   300.000 |   15  |
 * 
 * Jadi saat punya uang Rp. 40.000,-
 * Kita harusnya membeli shampoo 1 dan sabun 2 (bukan shampoo 2)
 * karena kita beli dulu shampoo, lalu sabun, lalu tidak cukup uang untuk
 * barang berikut di list sampai Daging Sapi, baru kita mulai lagi
 * dari beli shampoo
 *
 * Dan saat punya uang Rp. 55.000,-
 * Kita harusnya membeli shampoo 1, sabun 1, dan bantal 1
 */

function belanja(modal) {
  // Write your code here
  var belanja = {}
  var counter = 0
  while (modal > 10000) {    
    if (modal > 20000 && belanja.Shampoo != counter) {
      modal -= 20000      
      if (!belanja.Shampoo) {
        belanja.Shampoo = 1
      } else {
        belanja.Shampoo += 1        
      }
      counter ++           
    } else if (modal > 10000 && belanja.sabun != counter) {
      modal -= 10000
      if (!belanja.sabun) {
        belanja.sabun = 1
      } else {
        belanja.sabun += 1
        
      }
      counter ++
    } else if (modal > 1000000 && belanja.kompor != counter) {
      modal -= 1000000
      if (!belanja.kompor) {
        belanja.kompor = 1
      } else {
        belanja.kompor += 1
        
      }
      counter ++
    } else if (modal > 25000 && belanja.Bantal != counter) {
      modal -= 25000
      if (!belanja.Bantal) {
        belanja.Bantal = 1
      } else {
        belanja.Bantal += 1
        
      }
      counter ++
    } else if (modal > 300000 && belanja['Daging Sapi'] != counter) {
      modal -= 300000
      if (!belanja['Daging Sapi']) {
        belanja['Daging Sapi'] = 1
      } else {
        belanja['Daging Sapi'] += 1        
      }
      counter ++
    } else {
      counter ++
    }
        
  }
var output = {}
output.belanja = belanja
output.kembali = modal  
return output
}

console.log(belanja(100000))
// { belanja: { Shampoo: 2, Sabun: 3, Bantal: 1 },
//   kembalian: 5000,
//   totalPoin: 490 }

//console.log(belanja(1000000))
// { belanja: { Shampoo: 7, Sabun: 8, Bantal: 7, 'Daging Sapi': 2 },
//   kembalian: 5000,
//   totalPoin: 1590 }

//console.log(belanja(1150500))
// { belanja: { Shampoo: 3, Sabun: 4, Kompor: 1, Bantal: 2 },
//   kembalian: 500,
//   totalPoin: 765 }

//console.log(belanja(0))
// {
//   belanja: 'Kosong',
//   kembalian: 0,
//   totalPoin: 0
// }