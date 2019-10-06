/*
==================================
Nilai Kuliah
==================================
[INSTRUKSI]
Baca soal dengan teliti sebelum mengerjakan!
Professor X ingin membuat suatu function computeGrade untuk menghitung nilai huruf dari mahasiswa nya untuk mata kuliah yang dia ajarkan. 
Bantulah Prof. X untuk mengimplementasikan function tersebut!
Function computeGrade() menerima suatu input berupa perolehan nilai akhir dari seorang mahasiswa di kelas Prof. X. Fungsi ini akan
mengeluarkan output berupa String nilai huruf dari nilai mahasiswa tersebut. 
Nilai huruf tersebut dihitung berdasarkan range dari nilai mahasiswa tersebut, dengan aturan sebagai berikut:
1. Nilai 'A' : 85-100
2. Nilai 'A-': 80-84
2. Nilai 'B+': 75-79
3. Nilai 'B' : 70-74
4. Nilai 'B-': 65-69
5. Nilai 'C+': 60-64
6. Nilai 'C' : 55-59
7. Nilai 'Tidak Lulus': <55
[CONTOH]
- computeGrade(56) akan mengoutput 'C'.
- computeGrade(49) akan mengoutput 'Tidak Lulus'.
- computeGrade(74) akan mengoutput 'B'.
- computeGrade(80) akan mengoutput 'A-'.
- computeGrade(79) akan mengoutput 'B+'.
*/

function computeGrade(nilai) {
  //Implementasi code disini!
  if (nilai >= 85 && nilai <=100) {
    return "A";
  } else if (nilai >= 80 && nilai <= 84) {
    return "A-"
  } else if (nilai >= 75 && nilai <= 79) {
    return "B+";
  } else if (nilai >= 70 && nilai <= 74) {
    return "B";
  } else if (nilai >= 65 && nilai <= 69) {
    return ("B-")
  } else if (nilai >= 60 && nilai <= 64) {
    return "C+";
  } else if (nilai >= 55 && nilai <= 59) {
    return "C";
  }else { 
    return "Tidak Lulus";
  }
}

console.log(computeGrade(56)); //C
console.log(computeGrade(49)); //Tidak Lulus
console.log(computeGrade(74)); //B
console.log(computeGrade(80)); //A-
console.log(computeGrade(79)); //B+
console.log(computeGrade(55)); //C
console.log(computeGrade(73)); //B
console.log(computeGrade(89)); //A