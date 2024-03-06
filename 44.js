//Write a function that checks if all elements in an array are positive.
function areAllPositive(array) {
    return array.every(element => element > 0);
}

// Example usage:
console.log(areAllPositive([1, 2, 3])); // Output: true
console.log(areAllPositive([0, 1, 2])); // Output: false (0 is not positive)
console.log(areAllPositive([-1, -2, -3])); // Output: false (all elements are negative)
