/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Hacktiv8.
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(listHarga, history) {
  // Write your code here
  var harga = {}
  
  for (let i=0; i<listHarga.length; i++) {      
    harga[listHarga[i].nama] = listHarga[i].harga    
  }

  var newArr = history.split(".")
  var newArr1= []
  for (let i=0; i<newArr.length; i++) {
    newArr1.push(newArr[i].split("-"))
  }

  var newArr2 = [];
  for (let i=0; i<newArr1.length; i++) {
    newArr1[i][1] = newArr1[i][1].split(",")
  }

  var output = {};
  var counter = 0
  var pengeluaran = 0;
  for (let i=0; i<newArr1.length; i++) {
    var keyName = newArr1[i][0]    
    for (let j=0; j<newArr1[i][1].length; j++) {      
      counter += harga[newArr1[i][1][j]]
      pengeluaran += harga[newArr1[i][1][j]]             
      }
    output[keyName] = counter;
    counter = 0;      
    }
  output.TotalTabungan = 70000 - pengeluaran  
  return output  
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000
  },
  {
    nama: "nasi",
    harga: 2000
  },
  {
    nama: "cola",
    harga: 1000
  },
  {
    nama: "chiki",
    harga: 1500
  },
  {
    nama: "hotdog",
    harga: 3000
  },
  {
    nama: "aqua",
    harga: 2000
  }
]

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`
console.log(jumlahTabungan(hargaMakanan, historyPembelian))