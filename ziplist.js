function zipList(arr1, arr2) {
  const returnArray = [];
  for (let i = 0; i < arr1.length; i++) {
    returnArray.push(arr1[i]);
    returnArray.push(arr2[i]);
  }
  return returnArray;
}

function zipListEasyWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
console.log(zipList(array1, array2));
console.log(zipListEasyWay(array1, array2));
