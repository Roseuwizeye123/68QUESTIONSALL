function calculateAverage(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum / arr.length;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers)); // Output: 3

const moreNumbers = [10, 20, 30, 40, 50];
console.log(calculateAverage(moreNumbers)); // Output: 30

const emptyArray = [];
console.log(calculateAverage(emptyArray)); // Output: undefined

