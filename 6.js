function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    
    let max = arr[0]; // Assume the first element is the maximum
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger element is found
        }
    }
    
    return max;
}

// Example usage:
const numbers = [1, 3, 5, 2, 4];
console.log(findMax(numbers)); // Output: 5

const moreNumbers = [10, 2, 8, 20, 15];
console.log(findMax(moreNumbers)); // Output: 20

const emptyArray = [];
console.log(findMax(emptyArray)); // Output: undefined
