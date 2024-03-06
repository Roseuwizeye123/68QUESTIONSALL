//Write a function that checks if an array is sorted in ascending order.
function isArraySortedAscending(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false; // If any element is greater than the next one, array is not sorted
        }
    }
    return true; // If all elements are in ascending order, array is sorted
}

// Example usage:
console.log(isArraySortedAscending([1, 2, 3, 4, 5])); // Output: true
console.log(isArraySortedAscending([5, 4, 3, 2, 1])); // Output: false
