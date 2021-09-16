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

//2つ定義して表示できないか試した。エラーは出ていないが、これでいいのか悪いのか。。。
let checkYear = 2020;
if (isLeapYear(checkYear)) {
  console.log(checkYear+ '年はうるう年です');
} else {
  console.log(checkYear+ '年はうるう年ではありません');
};

let checkYear2 = 2021;
if (isLeapYear(checkYear2)) {
  console.log(checkYear2 + '年はうるう年です');
} else {
  console.log(checkYear2 + '年はうるう年ではありません');
};
