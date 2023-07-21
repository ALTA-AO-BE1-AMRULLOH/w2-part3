//prime  number menggunakan square root
function primeNumber(number) {
    console.time("PRIME NUMBER")
    if (number <= 1) {

        return false;
    } console.timeEnd("PRIME NUMBER")
    for (let i = 2; i <= Math.sqrt(number); i++) { 
        if (number % i === 0) {
        return false;
        }
    }  
    return true;
}
/*
(math.sqrt) untuk menghitung akar kuadrat dan akar kubik di java,
kita gunakan fungsi Math.sqrt() untuk akar kuadrat dan Math.cbrt() untuk akar kubik.
*/

console.log(primeNumber(1000000007)) // true
console.log(primeNumber(1500450271)) // true
console.log(primeNumber(1000000000)) // false
console.log(primeNumber(10000000019)) // true
console.log(primeNumber(10000000033)) // true