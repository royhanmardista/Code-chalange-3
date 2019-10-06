/**
 *  =======================
 *  RAZIA GANJIL GENAP
 *  =======================
 *
 * [Description]
 * Sebuah fungsi yang akan mengembalikan pemberitahuan kemungkinan tindak pelanggaran 
 * jika pengemudi melalui rute-rute tertentu dengan plat ganjil-genap. Pelanggaran akan terjadi apabila
 * ada plat mobil yang melintas pada rute tertentu pada tanggal tertentu dengan nomor plat 
 * yang tidak sama dengan aturan ganjil genap
 * 
 * [Instructions]
 * 1. Function menerima parameter berupa tanggal, data kendaraan
 * 2. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut)
 * 3. Contoh membaca nomor plat kendaraan adalah misal B 444 XXX, berarti yang dilihat cukup
 * angka paling belakang dari 444 berarti 4, berati nomor plat mobil ini termasuk genap
 * 5. Berlaku hanya untuk MOBIL.
 * 6. Lokasi Ganjil Genap
 *   - Gajah Mada
 *   - Hayam Wuruk
 *   - Sisingamangaraja
 *   - Panglima Polim
 *   - Fatmawati
 *   - Tomang Raya
 *
 * [Rules]
 * 1. tidak boleh menggunakan built in function .filter(), .map(), .reduce(), .includes(), .indexOf()
 */


function kenaRazia(date, data) {
  var lokasiRazia = [
    'Gajah Mada',
    'Hayam Wuruk',
    'Sisingamangaraja',
    'Panglima Polim',
    'Fatmawati',
    'Tomang Raya',
  ]
  // Write your code here
  var ganjil = date % 2 === 1;
  var counter = 0;
  var output = []
    
  for (let i=0; i<data.length; i++) {
    var obj = data[i];
    var objek = {}    
    for (let j=0; j<obj['rute'].length; j++) {          
      for (let k=0; k<lokasiRazia.length; k++) {           
        if (obj['rute'][j] == lokasiRazia[k]) {              
          counter += 1;
          break;
        }                
      }      
    }
    objek.name = obj.name
    objek.tilang = counter;
    var no_plat = obj['plat'].split(" ")[1]    
    if (obj.type == 'Mobil' && objek.tilang != 0 && ganjil != (Number(no_plat[no_plat.length-1]) % 2 == 1)) {
      output.push(objek)             
    }
    counter = 0;  
  }  
 return output; 
}

console.log(kenaRazia(27, [{
  name: 'Denver',
  plat: 'B 2791 KDS',
  type: 'Mobil',
  rute: ['TB Simatupang', 'Panglima Polim', 'Depok', 'Senen Raya']
},
{
  name: 'Toni',
  plat: 'B 1212 JBB',
  type: 'Mobil',
  rute: ['Pintu Besar Selatan', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang']
},
{
  name: 'Stark',
  plat: 'B 444 XSX',
  type: 'Motor',
  rute: ['Pondok Indah', 'Depok', 'Senen Raya', 'Kemang']
},
{
  name: 'Anna',
  plat: 'B 678 DD',
  type: 'Mobil',
  rute: ['Fatmawati', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang', 'Gajah Mada']
},
]))

// [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]