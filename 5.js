function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Example usage:
const numbers = [3, 5, 7, 4, 9];
console.log(sumArray(numbers));