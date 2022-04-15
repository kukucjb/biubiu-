/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-09 17:22:32
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-11 19:13:24
 */
/* 
  原理：
从数列中挑出一个元素，称为 "基准"（pivot）;
重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；
 参考  https://blog.csdn.net/weixin_40017062/article/details/115732885
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