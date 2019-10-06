/**
 * ============
 * Count Profit
 * ============
 * 
 * [DESCRIPTION]
 * PT XYZ memiliki beberapa cabang usaha masing masing cabang meberikan laporan bulanan income dan outcome mereka, 
 * data ini telah terkumpul dalam bentuk berikut
 * 
 * [EXAMPLE]
 * 
 * [INPUT]
 * @month  = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec'];
 * @branches = [
 *   [
 *     [4000, 2500, 2000, 2500, 2500, 3500, 3500, 2500, 2200, 3400, 2200, 4000], //Income
 *     [300, 900, 900, 900, 2200, 2300, 2300, 2200, 500, 1600, 500, 2200] //Outcome
 *   ], //Branch 2
 *   [
 *     [2200, 2500, 2000, 2000, 2500, 4000, 2200, 2200, 2000, 2500, 2000, 3500], //Income
 *     [900, 2200, 900, 200, 900, 2200, 500, 500, 500, 2200, 1200, 2900] //Outcome
 *   ], //Branch 2
 *   [
 *     [2000, 2500, 2200, 2200, 2500, 3300, 2900, 2500, 4500, 2900, 3500, 4000], //Income
 *     [500, 600, 500, 900, 2200, 2200, 2200, 1700, 2200, 2500, 2200, 2200] //Outcome
 *   ] //Branch 3
 * ]
 * 
 * dari data tersebut tampikan hasil `profit (income dikurangi dengan outcome)` perbulan masing-masing cabang
 * dengan format sebagai berikut:
 * | {bulan} | {profit branch 1} | {profit branch 2} | {profit branch 3} |
 * 
 * OUTPUT: 
 *     | br 1 | br 2 | br 3 |
 * jan | 3700 | 1300 | 1500 |
 * feb | 1600 | 300  | 1900 |
 * mar | 1100 | 1100 | 1700 |
 * apr | 1600 | 1800 | 1300 |
 * may | 300  | 1600 | 300  |
 * jun | 1200 | 1800 | 1100 |
 * jul | 1200 | 1700 | 700  |
 * aug | 300  | 1700 | 800  |
 * sep | 1700 | 1500 | 2300 |
 * oct | 1800 | 300  | 400  |
 * nov | 1700 | 800  | 1300 |
 * dec | 1800 | 600  | 1800 |
 * 
 * [RULES]
 * 1. Dilarang menggunakan built-in function kecuali push.
 * */

function printBranch(branches) {
  // Write your code here
  let output = []     
  for (let j=0; j<branches[0][0].length; j++) {    
    let temp = [] 
      for (let i=0; i<branches.length; i++) {
        temp.push(branches[i][0][j]-branches[i][1][j])
      }
    output.push(temp)  
  }
  const final = []
  for (let i=0; i<=branches[0][0].length; i++) {
    temp = []
    for (let j=0; j<=branches.length; j++) {
      if (i===0) {
        if (j===0) {
          temp.push('    ')
        } else {
          temp.push('br '+ j)
        }        
      } else if (j===0) {
        if (i===1) {
          temp.push('jan')
        } else if (i===2) {
          temp.push('feb')
        } else if (i===3) {
          temp.push('mar')
        } else if (i===4) {
          temp.push('apr')
        } else if (i===5) {
          temp.push('mei')
        } else if (i===6) {
          temp.push('jun')
        } else if (i===7) {
          temp.push('jul')
        } else if (i===8) {
          temp.push('aug')
        } else if (i===9) {
          temp.push('sep')
        } else if (i===10) {
          temp.push('oct')
        } else if (i===11) {
          temp.push('nov')
        } else if (i===12) {
          temp.push('dec')
        } 
      } else {
        temp.push(output[i-1][j-1])
      }
    }
    final.push(temp)
  }
  output = []
  for (let i=0; i<final.length; i++) {
    output.push(final[i].join('  |'))
  }
  return output.join('\n')  
}

//TEST CASE 1
var data1 = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ],
  [
    [1200, 2500, 2000, 2000, 1500, 2000, 1200, 1200, 2000, 2500, 2000, 3500], //Income
    [700, 1200, 700, 1200, 700, 1200, 500, 500, 500, 1200, 1200, 1700] //Outcome
  ],
  [
    [2000, 1500, 1200, 1200, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1200, 1200, 1200, 1500, 1200, 1500, 1200, 2200] //Outcome
  ]
]
//console.log(data1[1][1][1])
console.log(printBranch(data1));

/*
    | br 1 | br 2 | br 3 |
jan | 700  | 500  | 1500 |
feb | 800  | 1300 | 900  |
mar | 1300 | 1300 | 700  |
apr | 800  | 800  | 500  |
may | 1300 | 800  | 300  |
jun | 2200 | 800  | 800  |
jul | 2200 | 700  | 800  |
aug | 1300 | 700  | 1000 |
sep | 700  | 1500 | 800  |
oct | 800  | 1300 | 1000 |
nov | 700  | 800  | 800  |
dec | 1800 | 1800 | 1800 |
*/

// TEST CASE 2
var data2 = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ]
]

console.log(printBranch(data2))
/*
    | br 1 |
jan | 700  |
feb | 800  |
mar | 1300 |
apr | 800  |
may | 1300 |
jun | 2200 |
jul | 2200 |
aug | 1300 |
sep | 700  |
oct | 800  |
nov | 700  |
dec | 1800 |
*/