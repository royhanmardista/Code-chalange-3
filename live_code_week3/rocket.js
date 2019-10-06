/*
==============
Kotak Berlipat
==============
Instruksi
=========
Buatlah sebuah function bernama kotakBerlipat yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama determinant.

Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana 
- baris mewakili kelipatan counter
    - baris 1 akan berisi deret dengan basis kelipatan 1
    - baris 2 akan berisi deret dengan basis kelipatan 2
    dst
- kolom berisi simbol-simbol yang: 
    - @ mewakili kelipatan determinan
    - * yang bukan kelipatan dari determinan

contoh 1 (kotakBerlipat(3)):
Proses
1 2 3 = baris satu, kelipatan satu
2 4 6 = baris dua, kelipatan dua
3 6 9 = baris tiga, kelipatan tiga

OUTPUT
* * @
* * @
@ @ @


contoh 2 (kotakBerlipat(4)):
1 2 3 4   = baris satu, kelipatan satu
2 4 6 8   = baris dua, kelipatan dua
3 6 9 12  = baris tiga, kelipatan tiga
4 8 12 16 = baris empat, kelipatan empat

OUTPUT
* * * @
* @ * @
* * * @
@ @ @ @

Note: 
1. Setiap simbol diberikan spasi.
2. Tinggi kotak sesuai dengan nilai parameter yang diberikan!
3. Pola bersifat dinamis (parameter determinan bisa diisi angka positif berapa saja)
*/

function kotakBerlipat(determinant) {
  // Write your code here
if (determinant > 0) {
  for (i=1; i<=determinant; i++) {
    var kata = "";
    var angka = i;
    for (j=0; j< determinant; j++) {
      if (angka % determinant === 0) {
        kata = kata + "@" + " ";
      } else {
        kata = kata + "*" + " ";
      }            
      angka += i;
    }
    console.log(kata);
    } 
} else if (determinant === undefined) {
    console.log ("determinant harus diisi")
} else {
    console.log('determinant harus positif')
  }
}

kotakBerlipat(2);
// Output
// * @
// @ @


kotakBerlipat(10);
// * * * * * * * * * @
// * * * * @ * * * * @
// * * * * * * * * * @
// * * * * @ * * * * @
// * @ * @ * @ * @ * @
// * * * * @ * * * * @
// * * * * * * * * * @
// * * * * @ * * * * @
// * * * * * * * * * @
// @ @ @ @ @ @ @ @ @ @


kotakBerlipat(-1); // Angka harus nilai positif.


kotakBerlipat(); // Angka harus diisi.
