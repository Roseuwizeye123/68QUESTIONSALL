//Write a function that removes the last element from an array.
function removeLastElement(array) {
    array.pop();
    return array;
}

// Example usage:
let array = [1, 2, 3, 4, 5];
console.log(removeLastElement(array)); // Output: [1, 2, 3, 4]
