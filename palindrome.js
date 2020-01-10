function isPalindrome(string) {

  const reversedString = string.split('').reverse().join('')

  if(reversedString === string) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false
  }
}

isPalindrome('baby')
