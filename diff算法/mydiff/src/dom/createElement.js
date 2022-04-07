/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-09-20 21:28:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-21 00:09:53
 */

/* 
newVnode 为新节点 就是要创建的节点
*/
export default function createElement(vnode) {
  // 创建dom节点
  let domNode = document.createElement(vnode.sel)
  // 判断有没有子节点    childre 是不是为 undefined  
  if (vnode.children == undefined) {
    domNode.innerText = vnode.text;
  }else if(Array.isArray(vnode.children)){  // 新的节点有children 
    // 说明内部有子节点 需要递归创建节点  
    console.log('vnode.children',vnode.children);
    for(let child of vnode.children){
          let childDom = createElement(child)
          domNode.appendChild(childDom)
    }
  }

  // 补充elm 属性
  vnode.elm = domNode
  return domNode
}