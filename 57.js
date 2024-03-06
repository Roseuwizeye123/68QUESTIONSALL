//Write a function that checks if a number is prime.
function isPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible by any number between 2 and the square root, it's not prime
        }
    }
    return true; // If not divisible by any number between 2 and the square root, it's prime
}

// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(12)); // Output: false
