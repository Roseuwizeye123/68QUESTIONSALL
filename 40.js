//Write a function that squares each element of an array.
function squareArrayElements(array) {
    return array.map(element => element ** 2);
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(squareArrayElements(array)); // Output: [1, 4, 9, 16, 25]
