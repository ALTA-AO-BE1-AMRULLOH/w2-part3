function PairSum(arr, target) {
    const numMap = {}; // Menyimpan elemen yang kita temui
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
  
      if (numMap[complement] !== undefined) {
        result.push(numMap[complement], i);
        return result;
      }
  
      numMap[arr[i]] = i;
    }
  
    return null; // Jika tidak ada pasangan yang ditemukan, kembalikan nol
  }
  console.log(PairSum([1, 2, 3, 4, 6], 6)); // [1, 3]
  console.log(PairSum([2, 5, 9, 11], 11));  // [0, 2]
  console.log(PairSum([1, 3, 5, 7], 12));   // [2, 3]
  console.log(PairSum([1, 4, 6, 8], 10));   // [1, 2]
  console.log(PairSum([1, 5, 6, 7], 6));    // [0, 1]