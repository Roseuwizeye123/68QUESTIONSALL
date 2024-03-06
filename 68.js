// //   Functions Programming:
// a.    Power Function:
// Implement a function to calculate the power of a number.
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Example usage:
console.log(power(2, 3)); // Output: 8 (2^3)

// b.    Array Max and Min:
// Write a function that finds the maximum and minimum values in an array.
function findMaxMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}

// Example usage:
console.log(findMaxMin([5, 2, 9, 1, 3])); // Output: { max: 9, min: 1 }

// c.    The sum of Digits:
// Calculate the sum of digits of a given number using a function.
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

// Example usage:
console.log(sumOfDigits(123)); // Output: 6 (1 + 2 + 3)

// d.    GCD (Greatest Common Divisor):
// Write a function to find the greatest common divisor of two numbers.
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Example usage:
console.log(gcd(24, 36)); // Output: 12

// e.    Random Number Generator:
// Create a function that generates a random number within a specified range.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomNumber(1, 100)); // Output: Random number between 1 and 100
