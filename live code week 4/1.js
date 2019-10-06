/*
==========================
Gundala Membasmi Kejahatan
==========================
Instruksi
=========
Gundala sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar Gundala tidak dapat menangkap mereka.
Gundala memiliki 3 "nyawa", jika Gundala terkena jebakan maka "nyawa" dari gundala ini akan berkurang.

Keterangan
 - '*' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '#' adalah jalanan biasa
 - 'Begundal' adalah pelaku kejahatan

 Jika nyawa Gundala habis, pertarungan pun akan berakhir. Dan mengembalikan jumlah begundal yang 
 berhasil ditangkap sebelum Gundala gugur.

 [RULES]
  - WAJIB menggunakan PSEUDOCODE
  - DILARANG menggunakan built-in function lain

 */
/** PSEUDOCODE 
STORE "nyawa" with 3
STORE "penjahat" with 0
STORE "i" with 0
STRORE "length" with CALCULATE "array" length
WHILE "nyawa" > 0 & i < "length" 
    DO IF "array" === "*" 
        DO "nyawa" -= 1
        ELSE IF "array" === "Begundal" 
        DO "penjahat" += 1;
        i++
IF  "penjahat" == 0 
    DISPLAY  "Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal"
ELSE IF  i == "length" 
    DISPLAY  "Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap " + penjahat + " begundal."
ELSE 
    DISPLAY "Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap " + penjahat +" begundal."
*/


function basmiKejahatan(gundala) {
  var nyawa = 3
  // Write your code here
  var i = 0;
  var penjahat = 0
  while (nyawa>0 && i < gundala.length) {
      if (gundala[i] == "*") {
          nyawa -= 1;
      } else if (gundala[i]=="Begundal") {
          penjahat += 1;
      }
      i++;
  }
  if (penjahat == 0 ) {
      return "Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal";
  } else if (i == gundala.length){
      return "Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap " + penjahat + " begundal."
  } else {
      return "Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap " + penjahat +" begundal."
  }
}

console.log(basmiKejahatan(['*', '*', '#', '#', 'Begundal', '#', 'Begundal', 'Begundal', '#']));
// Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap 3 begundal.

console.log(basmiKejahatan(['*', '*', '*', 'Begundal', '*', '#', 'Begundal']));
// Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.

console.log(basmiKejahatan(['*', '*', '*', '*', '#', 'Begundal', '*', 'Begundal', '#', 'Begundal']));
// Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.