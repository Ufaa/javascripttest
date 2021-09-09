let arr1 = [2, 4, 7, 5, 4, 3, 8];
let arr2 = arr1.filter(function (val, i, arr) {
  return arr.indexOf(val) === i;
});

console.log(arr2); // [2, 4, 7, 5, 3, 8]

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear = 2021;
if (isLeapYear(checkYear)) {
  console.log(checkYear + '年はうるう年です');
} else {
  console.log(checkYear + '年はうるう年ではありません');
};
