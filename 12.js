function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < cols; j++) {
            if (j < rows - i) {
                row += '1 ';
            } else {
                row += '0 ';
            }
        }
        console.log(row);
    }
}

// Example usage:
displayPattern(4, 4);