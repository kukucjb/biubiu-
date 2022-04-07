/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-09-20 22:35:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-03-28 20:19:33
 */

import createElement from "./createElement";
// import updateChildren from "./updateChildren"

import updateChildren from "./updateChildren copy"


export default function patchVnode(oldVnode, newVnode) {
 
  // 判断新的节点有没有children
  // 新的节点没有children
  if (newVnode.children == undefined) {
    if (newVnode.text !== oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text
    }
  } else { // 新的节点有children
    console.log('有新的节点');
    // 新的虚拟节点有,旧的虚拟节点有
    if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
      console.log('最复杂的情况');
      updateChildren(oldVnode.elm,oldVnode.children,newVnode.children)
    } else { // 新的虚拟节点有,旧的虚拟节点没有
      //  遍历新的 子节点  创建dom元素 添加到dom中
      // 把旧节点的内容置空
      oldVnode.elm.innerText = ""
      for (let child of newVnode.children) {
        let childDom = createElement(child)
        oldVnode.elm.appendChild(childDom)
      }
    }
  }
}