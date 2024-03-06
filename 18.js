function calculateBMI(weight, height) {
    // Calculate BMI
    const bmi = weight / (height * height);
    
    // Determine the classification based on BMI value
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

// Example usage:
const weight = 70; // in kg
const height = 1.70; // in meters
console.log("BMI classification:", calculateBMI(weight, height));
