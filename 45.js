//Write a function that calculates the sum of the even numbers in an array.
function sumOfEvenNumbers(array) {
    return array.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvenNumbers(array)); // Output: 12 (2 + 4 + 6)
