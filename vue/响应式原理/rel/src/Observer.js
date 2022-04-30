/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-12 20:24:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-18 19:58:00
 */
/* 
  每个observer的实例，成员中都有一个dep的实例 每个数据的key对应一个dep
*/
import { def } from './util'
import { defineReactive } from './defineReactive';
import { arrayMethods } from './array'
import Dep from './Dep'
import { observe }  from './observe'
// Observer类的目的就是 将一个正常的对象 转换为每个层级的属性都是响应式的
export default class Observer {
  constructor(obj) {
    this.dep = new Dep()
    def(obj,'__ob__',this,false);
    if(Array.isArray(obj)){
      Object.setPrototypeOf(obj,arrayMethods);
      this.observeArray(obj)
    }else{
      this.walk(obj)
    }
    
  }

  walk(obj){
    for(let key in obj){
      defineReactive(obj,key)
    }
  }

  observeArray(arr){
    let len  = arr.length;
    for(var i=0;i<len;i++){
      observe(arr[i],)
    }
  }
}