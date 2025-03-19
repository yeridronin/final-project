const generateRandomTsCode = () => {
  const numbers = "0123456789";
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let code = "";

  for (let i = 0; i < 5; i++) {
    code += numbers[Math.floor(Math.random() * numbers.length)];
    code += letters[Math.floor(Math.random() * letters.length)];
  }

  return code;
};
