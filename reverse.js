function reverseString(string) {
  const reversedString = string.split('').reverse().join('')
  return reversedString;
}

function reverseStringTwo(string) {
  //only works sometimes
  const stringArray = string.split('')
  let placeholder;
  let newArray = [];
  for(let i = 0; i <= stringArray.length + 2; i++) {
    console.log(i);
    placeholder = stringArray.pop()
    newArray.push(`${placeholder}`)

  }
  let newString = newArray.join('')
  console.log(newString);

}

reverseStringTwo('banana')
