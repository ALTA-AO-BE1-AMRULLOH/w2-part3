// angka muncul sekali
function munculSekali(angka) {
    let result = '';
  
    for (let i = 0; i < angka.length; i++) {
      let currentDigit = angka[i];
      let isUnique = true;
  
      for (let j = 0; j < angka.length; j++) {
        if (i !== j && currentDigit === angka[j]) {
          isUnique = false;
          break;
        }
      }
  
      if (isUnique) {
        result += currentDigit;
      }
    } console.log("angka:", angka);
  
    return result.split('').map(Number);
  }
  
  console.log(munculSekali("1234123"));    // [4]
  console.log(munculSekali("76523752"));   // [6, 3]
  console.log(munculSekali("12345"));      // [1, 2, 3, 4, 5]
  console.log(munculSekali("1122334455")); // []
  console.log(munculSekali("0872504"));    // [8, 7, 2, 5, 4]