// function iterativeLog(array) {
//   array.forEach(element, index, array)=> {
//     console.log(`${index}: ${element}`);
//   })
// }


function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  const sampleArray = [1, 2, 3];

  sampleArray.forEach(callback);
  return sampleArray;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
