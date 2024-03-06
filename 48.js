//Write a function that returns the reverse of an array.
function reverseArray(array) {
    return array.slice().reverse();
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1]
