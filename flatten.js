let arr = [1, 2, [3, 4, [5, 6]]]
// function flatten(arr){
//
//     let newArr = arr.map(e => {
//
//         if (typeof(e) == "object"){
//             return e.flat()
//
//         }else{
//             return e
//         }
//     })
//
//     let numberOfObjects = newArr.filter(e => typeof(e) === "object").length
//        if (numberOfObjects === 0){
//            console.log("what 1")
//              return newArr
//         }else{
//             console.log(numberOfObjects, "what 2")
//             flatten(newArr)
//         }
//     // console.log("hey")
//     // return newerArr
// }
// flatten(arr)


function flattArray(arr){
  const flattened = [].concat(...arr)

  checkNestedArray(flattened)
}


function checkNestedArray(arr){
  flattenedArray = []

  arr.map(e => {

    if(typeof(e) === 'object'){
      let finalArray = flattArray(arr)

    } else {
        return flattenedArray = arr;
    }
  })
  return flattenedArray
}

let flattened = checkNestedArray(arr)

console.log(flattened);
