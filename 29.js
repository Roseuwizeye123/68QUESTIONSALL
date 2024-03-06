//Create a function that displays odd numbers between 1 and 100

function displayOddNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

// Example usage:
displayOddNumbers();
