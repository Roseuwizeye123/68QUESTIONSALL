function displayPattern(rows) {
    for (let i = rows; i > 0; i--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '1 ';
        }
        console.log(row);
    }
}

// Example usage:
displayPattern(4);