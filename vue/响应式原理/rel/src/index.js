/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-11 21:21:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-18 20:15:38
 */
/* 
 作用：
 将一个正常的对象转换为每个层级的属性都是响应式的object

*/

import {
  observe
} from './observe'

let obj = {
  // a: {
    // m: {
    //   n: 5
    // }
  // },
  b: 10,
  c: [1, 2, 3, 4],
  d:{
    per:{
      name:'zs',
      age:''
    }
  }
};

observe(obj)

// console.log('obj',obj);
// console.log(obj.a.m.n);
// obj.c.splice(1,1,[  ])

// console.log('obj.c',obj.c)
obj.b = 10;