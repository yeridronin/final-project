const arr = [0, 1, 2, 3];
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
getRandomElement(arr);
