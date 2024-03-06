// // Switch Case:
// a.    Calculator Switch:
// Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.
function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}

// Example usage:
console.log(calculate(5, '+', 3)); // Output: 8
console.log(calculate(10, '*', 2)); // Output: 20

// b.    Day of Week:
// Create a program that takes a number representing a day of the week (1-7) and outputs the name of the day.
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return 'Sunday';
        case 2:
            return 'Monday';
        case 3:
            return 'Tuesday';
        case 4:
            return 'Wednesday';
        case 5:
            return 'Thursday';
        case 6:
            return 'Friday';
        case 7:
            return 'Saturday';
        default:
            return 'Invalid day number';
    }
}

// Example usage:
console.log(getDayOfWeek(3)); // Output: Tuesday
console.log(getDayOfWeek(8)); // Output: Invalid day number

// c.    Grade System:
// Design a grading system that takes a student's score as input and returns the corresponding grade using a switch case.
function getGrade(score) {
    switch (true) {
        case (score >= 90 && score <= 100):
            return 'A';
        case (score >= 80 && score < 90):
            return 'B';
        case (score >= 70 && score < 80):
            return 'C';
        case (score >= 60 && score < 70):
            return 'D';
        case (score >= 0 && score < 60):
            return 'F';
        default:
            return 'Invalid score';
    }
}

// Example usage:
console.log(getGrade(85)); // Output: B
console.log(getGrade(72)); // Output: C

// d.    Traffic Light:
// Simulate a traffic light using a switch case. The program should output the color of the traffic light based on user input (1 for red, 2 for yellow, and 3 for green).
function getTrafficLightColor(code) {
    switch (code) {
        case 1:
            return 'Red';
        case 2:
            return 'Yellow';
        case 3:
            return 'Green';
        default:
            return 'Invalid code';
    }
}

// Example usage:
console.log(getTrafficLightColor(2)); // Output: Yellow
console.log(getTrafficLightColor(4)); // Output: Invalid code

// e.    Month Name:
// Write a program that takes a number (1-12) representing a month and outputs the name of the month using a switch case.
function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            return 'Invalid month number';
    }
}

// Example usage:
console.log(getMonthName(3)); // Output: March
console.log(getMonthName(13)); // Output: Invalid month number

// f.    Simple Menu:
// Implement a simple menu system using a switch case. The menu should have options for different operations, and the program should execute the selected operation.
function simpleMenu() {
    console.log("1. Option 1");
    console.log("2. Option 2");
    console.log("3. Option 3");
    const choice = parseInt(prompt("Enter your choice:"));
    switch (choice) {
        case 1:
            console.log("Executing Option 1");
            break;
        case 2:
            console.log("Executing Option 2");
            break;
        case 3:
            console.log("Executing Option 3");
            break;
        default:
            console.log("Invalid choice");
    }
}

// Example usage:
simpleMenu();

// g.    Currency Converter:
// Build a currency converter that converts between different currencies using a switch case. Users should input the amount, source currency, and target currency.
function currencyConverter(amount, sourceCurrency, targetCurrency) {
    switch (`${sourceCurrency}-${targetCurrency}`) {
        case 'USD-EUR':
            return amount * 0.85;
        case 'EUR-USD':
            return amount * 1.18;
        case 'USD-GBP':
            return amount * 0.72;
        case 'GBP-USD':
            return amount * 1.39;
        // Add more currency conversions as needed
        default:
            return 'Invalid currency pair';
    }
}

// Example usage:
console.log(currencyConverter(100, 'USD', 'EUR')); // Output: 85
console.log(currencyConverter(100, 'EUR', 'USD')); // Output: 118

// h.    Shape Area:
// Write a program that calculates and outputs the area of different shapes (circle, square, triangle) based on user input using a switch case.
function calculateShapeArea(shape, dimensions) {
    switch (shape.toLowerCase()) {
        case 'circle':
            const radius = dimensions[0];
            return Math.PI * radius * radius;
        case 'square':
            const side = dimensions[0];
            return side * side;
        case 'triangle':
            const base = dimensions[0];
            const height = dimensions[1];
            return 0.5 * base * height;
        default:
            return 'Invalid shape';
    }
}

// Example usage:
console.log(calculateShapeArea('circle', [5])); // Output: ~78.54 (area of a circle with radius 5)
console.log(calculateShapeArea('square', [4])); // Output: 16 (area of a square with side 4)
console.log(calculateShapeArea('triangle', [3, 6])); // Output: 9 (area of a triangle with base 3 and height 6)

// i.    Season Detector:
// Create a program that takes a month as input and outputs the corresponding season (spring, summer, fall, winter) using a switch case.

function getSeason(month) {
    switch (month.toLowerCase()) {
        case 'january':
        case 'february':
        case 'december':
            return 'Winter';
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';
        case 'september':
        case 'october':
        case 'november':
            return 'Fall';
        default:
            return 'Invalid month';
    }
}

// Example usage:
console.log(getSeason('April')); // Output: Spring
console.log(getSeason('September')); // Output: Fall


