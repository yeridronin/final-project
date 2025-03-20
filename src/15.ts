interface User {
  name: string;
  age: number;
}

function greet(user: User): void {
  console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

greet({ name: "John", age: 30 });
