function getRandomTsCode(): string {
  const min = 0;
  const max = 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
