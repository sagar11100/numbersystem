const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30];
const primes = [];

for (let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    if(num <= 1) continue;
    let isPrime = true;

    for (j = 2; j <= Math.sqrt(num);j++){
        if (num % j == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        primes.push(num);
    }
    console.log(primes);
}

const primeArray = primes;
let max = primes[0];
let min = primes[0];

for (let k = 1; k < primes.length; k++){
    if (primes[k] > max){
        max = primes[k];
    }
    if (primes[k] < min){
        min = primes[k];
    }
    console.log(max);
    console.log(min);
    
} 

let primeSum = 0;

for (l = 0; l < primes.length; l++){
    primeSum += primes[l];
}
console.log(primeSum);