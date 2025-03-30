function isPalindrome(s: string): boolean {
  const lowerCase = s.toLowerCase();
  const reversedLowerCase = s.split('').reverse().join('');
  
  if (s === reversedLowerCase) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
