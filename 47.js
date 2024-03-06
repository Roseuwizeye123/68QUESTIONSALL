//Write a function that generates a random number between a given range.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomNumber(1, 10)); // Output: Random number between 1 and 10 (inclusive)
console.log(getRandomNumber(-5, 5)); // Output: Random number between -5 and 5 (inclusive)
