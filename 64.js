//Write a function that generates a pyramid pattern of a given height.
function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';

        // Add spaces to left-align the pyramid
        for (let j = height - i; j > 0; j--) {
            row += ' ';
        }

        // Add asterisks for the current row
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }

        console.log(row);
    }
}

// Example usage:
generatePyramid(5);
