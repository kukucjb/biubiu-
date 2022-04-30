/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-13 20:33:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-18 20:17:49
 */

import {
  def
} from './util'
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]


const arrayPrototype = Array.prototype
export const arrayMethods = Object.create(arrayPrototype)


methodsToPatch.forEach(methodName => {
  const original = arrayPrototype[methodName]

  def(arrayMethods, methodName, function (...args) {
    // console.log('args',args);
    const ob = this.__ob__
    const result = original.apply(this, args)
    // console.log('result',result);
    let inserted
    switch (methodName) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    // 判断有没有插入的新项目，让新项目也变为响应的
    // console.log('inserted',inserted);
    if (inserted) ob.observeArray(inserted)

    ob.dep.notify()
    return result
  }, false)
})