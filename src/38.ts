function sumNumbers(numbers: number[]): number {
    if (!numbers || numbers.length === 0) {
        throw new Error("The array is empty or null.");
    }

    let total = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function calculateGCD(num1: number, num2: number): number {
    if (!num1 || !num2) {
        throw new Error("The arguments must be numbers.");
    }

    while (num2 !== 0) {
        let temp = num2;
        num2 = Math.floor((num1 / num2));
        num1 = temp;
    }
    return num1;
}

function findMax(numbers: number[]): number {
    if (!numbers || numbers.length === 0) {
        throw new Error("The array is empty or null.");
    }

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function displayResults(numbers: number[]): void {
    console.log(`The sum of the array is: ${sumNumbers(numbers).toString()}`);
    console.log(`The greatest common divisor of 2 and 4 is: ${calculateGCD(2, 4).toString()}`);
    console.log(`The maximum value in the array is: ${findMax(numbers).toString()}`);
}
