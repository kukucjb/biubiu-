/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-12 20:54:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-14 19:55:13
 */

import Observer from "./Observer";

export function observe(value) {
  if (typeof value !== "object") return
  var ob

  console.log('value',value);
  if (typeof value.__ob__ !== "undefined") {  
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  return ob
}