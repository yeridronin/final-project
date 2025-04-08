function greet(name: string): string {
  if (!name) {
    name = "Guest";
  }
  
  return `Hello, ${name}! How are you today?`;
}

console.log(greet("Alice")); // Output: Hello, Alice! How are you today?
