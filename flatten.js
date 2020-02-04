let arr = [1, 2, [3, 4, [5, 6]]]
function flatten(arr){

    let newArr = arr.map(e => {

        if (typeof(e) == "object"){
            return e.flat()

        }else{
            return e
        }
    })

    let numberOfObjects = newArr.filter(e => typeof(e) === "object").length
       if (numberOfObjects === 0){
           console.log("what 1")
             return newArr
        }else{
            console.log(numberOfObjects, "what 2")
            flatten(newArr)
        }
    // console.log("hey")
    // return newerArr
}
// flatten(arr)


function flattArray(arr){
  console.log(arr);
  const flattened = [].concat(...arr)
  checkNestedArray(flattened)
  console.log('result', flattened);
  return flattened
}
  let finalArray = []
function checkNestedArray(arr){
  return arr.map(e => {
    if(typeof(e) == 'object'){
      // console.log('here is the obj', e);
      // console.log('here is the array', arr);
      return flattArray(arr)
    } else {
        // console.log('not an object', e);
        return finalArray.push(e)
    }
  })
}

let flattened = checkNestedArray(arr)
console.log('return value', flattened);
// console.log(finalArray);
