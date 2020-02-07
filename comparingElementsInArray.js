function duplicateCount(text){
  let arrayOfText = text.toLowerCase().split('')

  let position = 0;
  let counter = 0;
  while(position < arrayOfText.length) {

    for(i = 0; i < arrayOfText.length; i++) {

      let placeholder = arrayOfText[position];
      console.log('current element', placeholder);
      console.log('comparing to', arrayOfText[position]);
      if(placeholder === arrayOfText[i + 1]){
        console.log('they are the same', placeholder);
        counter ++
      }
      else {
        console.log('nope', position);
        position++
      }
    }
  }
  console.log(counter);
  return counter;
}


// duplicateCount(""), 0);
duplicateCount("aab");
// duplicateCount("aabbcde"), 2);
// duplicateCount("aabBcde"), 2,"should ignore case");
// duplicateCount("Indivisibility"), 1)
// duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
