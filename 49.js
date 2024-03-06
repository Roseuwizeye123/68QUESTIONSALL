//Write a function that calculates the Fibonacci sequence up to n numbers.
function fibonacciSequence(n) {
    let fibonacci = [0, 1]; // Initialize Fibonacci sequence with first two numbers
    
    // Generate Fibonacci sequence up to n numbers
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    
    return fibonacci.slice(0, n); // Return Fibonacci sequence up to n numbers
}

// Example usage:
console.log(fibonacciSequence(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
