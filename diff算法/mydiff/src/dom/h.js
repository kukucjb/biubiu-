/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-09-14 23:42:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-20 20:45:07
 */
import vnode from "./vnode"
// 生成虚拟dom
export default function (sel, data, params) {

  //  h函数的 第三个参数是字符串类型 意味着他没有子元素
  if (typeof params == "string") {
    return vnode(sel, data, undefined, params, undefined)
  }
  // h函数的 第三个参数是数组  意味着他有子元素
  else if (Array.isArray(params)) {
    let children = []
    for (let item of params) {
      children.push(item)
    }
    return (vnode(sel, data, children, undefined, undefined))
  }
}