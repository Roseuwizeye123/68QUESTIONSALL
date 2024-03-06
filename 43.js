//Write a function that sorts an array of numbers in ascending order.
function sortNumbersAscending(array) {
    return array.slice().sort((a, b) => a - b);
}

// Example usage:
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log(sortNumbersAscending(array)); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]
