/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-13 20:33:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-14 19:49:28
 */

import { def } from './util'
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
  def(arrayMethods,methodName,function(){
    original.call(this,...arguments)
  },false)
})