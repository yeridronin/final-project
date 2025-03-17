interface User {
  name: string;
  age: number;
}

function getUser(id: number): User | null {
  const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 20 },
  ];

  return users.find((user) => user.id === id);
}
