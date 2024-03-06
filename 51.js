//Write a function that filters out negative numbers from an array.
function filterOutNegativeNumbers(array) {
    return array.filter(number => number >= 0);
}

// Example usage:
const array = [1, -2, 3, -4, 5, -6];
console.log(filterOutNegativeNumbers(array)); // Output: [1, 3, 5]
