/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-09 17:22:32
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-11 17:51:31
 */
let qsort = function (arr, start, end) {
  let pvot = start;
  let left = start;
  let right = end;

  if (left > right) {
    return;
  }
  while (left < right) {

    //先看右边，依次往左递减
    while ((left < right) && (arr[right] >= arr[pvot])) {
      right--;
    }

    //再看左边，依次往右递增
    while ((left < right) && (arr[left] <= arr[pvot])) {
      left++;
    }

    if (left < right) {
      [arr[right], arr[left]] = [arr[left], arr[right]]

    } else {
      //最后将基准为与i和j相等位置的数字交换 也可以放在while 外面执行

      [arr[pvot], arr[right]] = [arr[right], arr[pvot]]
    }
  }

  //递归调用左半数组
  qsort(arr, start, left - 1);
  //递归调用右半数组
  qsort(arr, right + 1, end);
}

let arr = [6, 1, 2, 7, 9, 20, 4, 5, 10, 8];
qsort(arr, 0, arr.length - 1);
console.log(arr);