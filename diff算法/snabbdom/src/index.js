/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-09-14 22:31:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-03-26 16:58:27
 */
import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

const container = document.getElementById("container");

// const vnode = h("div#container.two.classes", { on: { click: function(){} } }, [
//   h("span", { style: { fontWeight: "bold" } }, "This is bold"),
//   " and this is just normal text",
//   h("a", { props: { href: "/foo" } }, "I'll take you places!"),
// ]);
// Patch into empty DOM element – this modifies the DOM as a side effect

const vnode = h("div",{},"chennnn")

console.log('vnode',vnode);

/* 
   container 旧的节点   真实的dom
   vnode1  新的节点     虚拟dom
   patch的流程  先将真实的dom转为虚拟的dom  再与虚拟的dom进行对比
*/
patch(container, vnode);
const vnode1 = h("ul",{},[
  h("li","a"),
  h("li","b"),
  h("li","c")
])



const vnode2 = h("ul",{},[
  h("li",{key:"b"},"b"),
  h("li",{key:"c"},"c"),
  h("li",{key:"a"},"a")
])
//patch  用于新老节点替换 

console.log('vnode1',vnode1);

console.dir(vnode1)

patch(vnode, vnode1);
// 
patch(vnode1, vnode2);


