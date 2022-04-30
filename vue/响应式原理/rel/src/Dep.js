/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-18 19:56:57
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-18 20:29:38
 */
/* 
  所谓订阅 就是有个数据a 他有一个数组 里面放了所有用到数据a的地方

  用到数据a --> 读取数据a --> 触发了 get  所有要在 get中 触发addSub

*/
var uid = 0
export default class Dep{
  constructor(){

    this.id = uid++;
    console.log('Dep');
    // 用数组存储自己的订阅者  subs表示订阅者 
    // 这里面放的是watcher实例
    this.subs = []
  }
  // 添加订阅
  addSub(sub){
    this.subs.push(sub)
  }  
   // 通知更新
  notify(){
    console.log('notify');
    const subs = this.subs.slice();
    for(let i=0,l=subs.length; i<l; i++){
     subs[i].update()
    }
  }
}