function findMin(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    
    let min = arr[0]; // Assume the first element is the minimum
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if a smaller element is found
        }
    }
    
    return min;
}

// Example usage:
const numbers = [1, 3, 5, 2, 4];
console.log(findMin(numbers)); // Output: 1

const moreNumbers = [10, 2, 8, 20, 15];
console.log(findMin(moreNumbers)); // Output: 2

const emptyArray = [];
console.log(findMin(emptyArray)); // Output: undefined