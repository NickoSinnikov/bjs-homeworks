function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i])) {
    result = true;
  } else {
    result = false;
  }

  // Ваш код

  return result; // boolean
}

function advancedFilter(arr) {
  console.log(arr);
  let resultArr = arr.filter((number) => {
     return number > 0;
    }).filter((num) => {
     return num % 3 === 0;
    }).map((elem) => {
     return elem * 10;
    });

  // Ваш код

  return resultArr; // array
}
