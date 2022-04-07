/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-09-20 21:04:17
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-03-29 08:39:26
 */
/* 
 oldVnode 为旧节点  （真实dom）
 newVnode 为新节点

*/

import vnode from "./vnode";
import createElement from "./createElement"
import patchVnode from "./patchVnode"
export default function (oldVnode, newVnode) {

  //  如果oldVnode 没有 sle  就证明是非虚拟节点 (就让它变为虚拟节点) 
  if (oldVnode.sel == undefined) {
    console.log('oldVnode', oldVnode.tagName.toLowerCase()); // div
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(), //sel
      {}, //data
      [], //children
      undefined,
      oldVnode
    )
    console.log('oldVnode',oldVnode);
  }
  // 判断旧的虚拟节点和新的虚拟节点  是不是同一个节点
  if (oldVnode.sel === newVnode.sel) { // 此时判断条件很复杂
    patchVnode( oldVnode, newVnode )
  } else { // 不是同一个节点，暴力删除旧的节点，创建插入新的节点   
    // 把新的虚拟节点 创建为 dom节点
    let newVnodeLem = createElement(newVnode)
    // 获取旧的虚拟节点的 .elm (真实节点)
    let oldVnodeElm = oldVnode.elm;
    //创建新的节点
    if(newVnodeLem){
      oldVnodeElm.parentNode.insertBefore(newVnodeLem,oldVnodeElm)
    }
    // 删除旧节点
    oldVnodeElm.parentNode.removeChild(oldVnodeElm)
  }
}