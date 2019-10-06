/**
 * ===================
 * Proxytia BUT Object
 * ===================
 * 
 * [DESCRIPTION]
 * Masih ingat dengan proxitia? Kali ini buatlah sebuah function yang mengecek apakah karakter yang kamu buat
 * sudah valid untuk bermain di proxytia.
 * 
 * [INSTRUCTIONS]
 * 1. fungsi menerima 3 parameter: `name, role, weapon`
 * 2. fungsi akan mengecek apakah role dan senjata yang digunakan sudah valid atau belum
 * 
 * [RULES]
 * 1. `Dilarang menggunakan built-in functions`
 * 2. Asumsi semua parameter selalu terisi
 */

function proxytiaObject(name, role, weapon) {
  var proxytia = {
    ksatria: ['pedang', 'tombak'],
    tabib: ['gada'],
    penyihir: ['tongkat']
  }
  // Write your code here
  if (!proxytia[role]) {
    return "Role invalid"
  } else {
    
    for (var key in proxytia) {
      if (key == role) {
        for (let j=0; j<proxytia[key].length; j++) {
          if (weapon == proxytia[key][j]) {
            return "Selamat datang di Proxytia " + role + " " + name + " , gunakan " + weapon + " mu untuk bermain."
          }        
        }
        return "Senjata invalid."
      }
    } 
  }
  
    /*if (role === 'ksatria') {
      if (weapon === proxytia.ksatria[0] || weapon === proxytia.ksatria[1]) {
        return "Selamat datang di Proxytia " + role + " " + name + " , gunakan " + weapon + " mu untuk bermain."
      } else {
        return "Senjata invalid."
      }
    } else if (role === 'tabib') {
      if (weapon === proxytia.tabib[0]) {
        return "Selamat datang di Proxytia " + role + " " + name + " , gunakan " + weapon + " mu untuk bermain."
      } else {
        return "Senjata invalid."
      }
    } else if (role == 'penyihir'){
      if (weapon === proxytia.penyihir[0]) {
        return "Selamat datang di Proxytia " + role + " " + name + " , gunakan " +weapon + " mu untuk bermain."
      } else {
        return "Senjata invalid."
      } 
    }  else {
      return "Role invalid"
    }*/

}

console.log(proxytiaObject('Ucup', 'ksatria', 'tombak'))
// Selamat datang di Proxytia ksatria Ucup, gunakan tombakmu untuk bermain.

console.log(proxytiaObject('Icha', 'penyihir', 'pedang'))
// Senjata invalid.

console.log(proxytiaObject('Armedi', 'Programmer', 'tongkat'))
// Role invalid

console.log(proxytiaObject('Stef', 'penyihir', 'tongkat'))
// Selamat datang di Proxytia penyihir Stef, gunakan tongkatmu untuk bermain.