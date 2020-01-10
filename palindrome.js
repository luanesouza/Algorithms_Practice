// function isPalindrome(string) {
//
//   const reversedString = string.split('').reverse().join('')
//
//   if(reversedString === string) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false
//   }
// }

function isPalindrome(string) {
  let reversed = '';
  for(let element of string) {
    reversed = element + reversed
  }
  return string === reversed
}

isPalindrome('baby')
