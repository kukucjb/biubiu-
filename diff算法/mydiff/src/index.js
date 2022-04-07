/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-09-14 23:35:50
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-03-28 20:57:07
 */
import h from "./dom/h"
import patch from "./dom/patch"

// 获取到真实的dom
let container = document.getElementById("container")
console.log(container);

function fn() {
  patch(vnode1, vnode2)
}
let btn = document.getElementById("btn")
btn.addEventListener('click', fn, false)


// 虚拟节点
let vnode1 = h("ul", {}, [
  h("li", {
    key: "a"
  }, "a"),
  h("li", {
    key: "b"
  }, "b"),
  // h("li", {
  //   key: "c"
  // }, "c"),
  // h("li", {
  //   key: "d"
  // }, "d"),
  // h("li", {
  //   key: "e"
  // }, "e"),
 



])

/* 
   container 旧的节点   真实的dom
   vnode1  新的节点     虚拟dom
   patch的流程  先将真实的dom转为虚拟的dom  再与虚拟的dom进行对比
*/

let vnode2 = h("ul", {}, [
  h("li", {
    key: "a"
  }, "a"),
  h("li", {
    key: "b"
  }, "b"),
  h("li", {
    key: "c"
  }, "c"),
  h("li", {
    key: "d"
  }, "d"),
  h("li", {
    key: "e"
  }, "e"),
  h("li", {
    key: "f"
  }, "f"),




])

patch(container, vnode1)

//

// let vnode1 = h("h1",{},'你好啊  ')
// console.log(vnode1);
/* 
 {
      children: undefined    //子节点
      data: {}              //相关数据
      elm: undefined         // 真实dom
      key: undefined         // key
      sel: "div"              //标签名
      text: "你好啊"          // 内容
    }
*/