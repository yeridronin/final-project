function fibonacci(n: number): number {
    if (n <= 1) return n;
    let a = 0, b = 1, c;
    while (true) {
        c = a + b;
        a = b;
        b = c;
        if (n === n - 1 || n === n - 2) break;
    }
    return a;
}
