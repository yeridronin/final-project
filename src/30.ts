function calculateGCD(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findFactors(n: number): Array<number> {
  const factors = new Set<number>();
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.add(i);
    }
  }
  return Array.from(factors);
}

function isPerfectSquare(x: number): boolean {
  const root = Math.sqrt(x);
  return Math.floor(root) * Math.floor(root) === x;
}

// Example usage
console.log(`GCD of 12 and 18 is ${calculateGCD(12, 18)}.`);
console.log(`Factors of 36 are ${findFactors(36)}.`);
console.log(`Is 25 a perfect square? ${isPerfectSquare(25)}`);
