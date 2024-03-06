function ageClassification(age) {
    if (age >= 0 && age <= 12) {
        return "MIMICRY";
    } else if (age >= 13 && age <= 19) {
        return "SELF-DISCOVERY";
    } else if (age >= 20 && age <= 45) {
        return "COMMITMENT";
    } else {
        return "LEGACY";
    }
}

// Example usage:
console.log(ageClassification(5));  // Output: "MIMICRY"
console.log(ageClassification(15)); // Output: "SELF-DISCOVERY"
console.log(ageClassification(30)); // Output: "COMMITMENT"
console.log(ageClassification(50)); // Output: "LEGACY"
