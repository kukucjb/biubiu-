/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-09 16:57:39
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-09 17:20:24
 */


/* 
1、从数组第2个元素开始抽取元素。

2、把它与左边第一个元素比较，如果左边第一个元素比它大，则继续与左边第二个元素比较下去，直到遇到不比它大的元素，然后插到这个元素的右边。

3、继续选取第3，4，….n个元素,重复步骤 2 ，选择适当的位置插入。
*/
let arr = [4, 1, 3, 20,24, 19, 16, 17]

function sort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      } else {
        break
      }
    }
    console.log(arr);
  }
}

sort(arr)

console.log(arr);