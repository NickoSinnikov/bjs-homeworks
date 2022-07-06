// Задание 1
function getArrayParams(arr) {
  let min = Infinity,
    max = -Infinity,
    sum = null,
    avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
    console.log(sum);
  }

  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (elem of arrOfArr) {
    let sum = func(elem);
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;

  for (k = 0; k < arr.length; k++) {
    if (arr[k] < min) {
      min = arr[k];
    }
    if (arr[k] > max) {
      max = arr[k];
    }
  }
  let diff = Math.abs(max - min);
  console.log(diff);
  return diff;
}
