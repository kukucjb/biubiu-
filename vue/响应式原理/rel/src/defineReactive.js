/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-12 20:25:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-18 20:13:45
 */
import {observe} from './observe'
import Dep from './Dep'

export  function defineReactive(data, key, value) {
  const dep = new Dep()



  if (arguments.length == 2) {
    value = data[key];
  }

  // if(typeof value=='object') {

  // 子元素要 observe  至此形成了递归 
   let childOb =  observe(value)
  // }
  // 拦截对 obj[key]的访问 和设置 
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('读取' + key);
      return value
    },
    // 对设置值的拦截
    set(newVal) {
      console.log('设置' + key);  
      value = newVal
      // 当设置了新值 这个新值也要被observe
      childOb = observe(newVal)
      dep.notify()
    }
  })
}