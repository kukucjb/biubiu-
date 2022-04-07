/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-09-28 20:52:12
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-06 17:19:18
 */
/* 
 参数1 真实的dom
 参数2 旧的虚拟节点
 参数3 新的虚拟节点


*/
import createElement from './createElement';
import patchVnode from './patchVnode';
// 判断两个虚拟接节点是否为为同一个节点
function sameVnode(vNode1, Vnode2) {
  return vNode1.key == Vnode2.key
}

export default (parentElm, oldCH, newCh) => {
  // console.log('parentElm,oldCH,newCh', parentElm, oldCH, newCh);

  // 旧前指针
  // 旧后指针
  //新前指针
  //新后指针
  let oldStartIndex = 0
  let oldEndIndex = oldCH.length - 1
  let newStartIndex = 0
  let newEndIndex = newCh.length - 1


  // 旧前虚拟节点
  // 旧后虚拟节点
  // 新前虚拟节点
  // 新后虚拟节点
  let oldStartVnode = oldCH[0]
  let oldEndVnode = oldCH[oldEndIndex]
  let newStartVnode = newCh[0]
  let newEndVnode = newCh[newEndIndex]

  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {


    // 旧前和新前

    if (oldStartVnode == undefined) {
      oldStartVnode = oldCH[++oldStartIndex]
    }
    else if (oldEndVnode == undefined) {
      oldEndVnode = oldCH[--oldEndIndex]
    }
    else if (sameVnode(oldStartVnode, newStartVnode)) {
      console.log('1');
      if (newStartVnode) {
        newStartVnode.elm = oldEndVnode?.elm
      }

      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldCH[++oldStartIndex]
      newStartVnode = newCh[++newStartIndex]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      // 旧后和新后
      console.log('2');
      if (newEndVnode) {
        newEndVnode.elm = oldEndVnode?.elm
      }
      patchVnode(oldEndVnode, newEndVnode)
      oldEndVnode = oldCH[--oldEndIndex]
      newEndVnode = newCh[--newEndIndex]
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      // 旧前和新后
      console.log('3');
      patchVnode(oldStartVnode, newEndVnode)
      if (newEndVnode) {
        newEndVnode.elm = oldStartVnode?.elm
      }
      // 把旧前指定的节点移动v 到旧后指向的节点后面
      parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
      oldStartVnode = oldCH[++oldStartIndex]
      newEndVnode = newCh[--newEndIndex]
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      console.log('4');

      // 旧后和新前
      patchVnode(oldEndVnode, newStartVnode)
      if (newStartVnode) {
        newStartVnode.elm = oldEndVnode?.elm
      }
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
      oldEndVnode = oldCH[--oldEndIndex]
      newStartVnode = newCh[++newStartIndex]
    } else {
      // 第五种情况 上面情况都不满足 =>查找
      console.log('5');
    // 创建一个节点 存放虚拟节点（判断新旧有没有相同节点）
      const keyMap = {}
      for( let i=oldStartIndex;i<=oldEndIndex;i++){
          const key = oldCH[i]?.key
          if(key) keyMap[key] =i
      } 
      console.log('oldCH',oldCH);
      // 在旧节点中寻找新前指向的节点 
      let indexInOld = keyMap[newStartVnode.key]
      // 如果有，说明数据在新旧节点中都存在  移动位置就可以
      if(indexInOld){
          const elmMove = oldCH[indexInOld]
          patchVnode(elmMove,newStartVnode)
          // 处理过的节点 在旧虚拟节点的数组中，oldStartVnode, newEndVnode
          oldCH[indexInOld] = undefined
          // 移动位置
          parentElm.insertBefore(elmMove.elm,oldStartVnode.elm)
          
      }else{
        // 如果没有 说明是一个新的节点
        parentElm.insertBefore(createElement(newStartVnode),oldStartVnode.elm)
      }

      // 新数据（指针）++
      newStartVnode =newCh[++newStartIndex]
    }
  }
  if(oldStartIndex > oldEndIndex){

    console.log('11111');
      const before = newCh[newEndIndex+1]?newCh[newEndIndex+1]:null
      for(let i =newStartIndex;i<=newEndIndex;i++){
          parentElm.insertBefore(createElement(newCh[i]),before)
      }
  }else{
    console.log('22222');
    console.log('oldCH',oldCH);
    for(let i =oldStartIndex; i <= oldEndIndex;i++){
      if(oldCH[i]){
        parentElm.removeChild(oldCH[i].elm)
      }
    }
  }

  console.log('parentElm',parentElm);


}