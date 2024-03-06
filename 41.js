//Write a function that returns the first n elements of an array.
function getFirstNElements(array, n) {
    return array.slice(0, n);
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(getFirstNElements(array, 3)); // Output: [1, 2, 3]
