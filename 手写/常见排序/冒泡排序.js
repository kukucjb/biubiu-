/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-09 15:29:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-09 16:54:20
 */
/* 
首先从数组的第一个元素开始到数组最后一个元素为止，对数组中相邻的两个元素进行比较，
如果位于数组左端的元素大于数组右端的元素，则交换这两个元素在数组中的位置。
这样操作后数组最右端的元素即为该数组中所有元素的最大值。接着对该数组除最右端的n-1个元素进行同样的操作，
再接着对剩下的n-2个元素做同样的操作，直到整个数组有序排列。算法的时间复杂度为O(n^2)。


*/
let arr = [3, 4, 6, 1, 22, 35, 6, 73, 32, 765, 12]



function sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
}
sort(arr);
console.log(arr);