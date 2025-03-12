function getRandomColor() {
  const colors = ['red', 'green', 'blue'];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
