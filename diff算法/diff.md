<!--
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-09-14 22:19:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-06 17:28:25
-->
# diff算法
## 主流： snabbdom、virtual-dom
1. 搭建环境
 npm init -y
 cnpm install webpack@5 webpack-cli@3 webpack-dev-server@3 -S
 cnpm install snabbdom -S
 新建 webpack.config.js
 配置 webpack.config.js
2. 虚拟节点和真实节点
   - 虚拟节点
   ```js
   {
      children: undefined
      data: {}
      elm: h1
      key: undefined
      sel: "h1"
      text: "chennnn"
    }
   ```
  ```
  - 真实节点
   ```html
   <h1></h1>
  ```
3. 新旧节点对比规则
4. ![image-20220406172934160](C:\Users\CC\AppData\Roaming\Typora\typora-user-images\image-20220406172934160.png)
5. 新老节点替换规则                        
  - 如果新老节点不是同一个节点名称（标签 ），那么就是暴力删除旧的节点，创建新的节点
  - 只能同级比较，不能跨层比较，如果跨层 就是暴力删除旧的节点，创建新的节点
  - 如果是相同节点 又分为许多种情况
  ```js
    3.1 新节点没有children  
        如果新节点没有children  说明是文本  直接把旧的替换成新的文本
    3.2 新节点有childred 
        新的有children，旧的也有children ===> diff 算法的核心 (3.3)
        新的有children，旧的没有 ===> 创建元素添加 (把旧的内容删除清空，添加新的.)
    3.3 diff算法的核心（复杂）
      1 旧前 和 新前
        匹配:旧前的指针++ 新前的指针++
      2 旧后 和 新后
        匹配:旧后的指针-- 新后的指针--
      3 旧前 和 新后
        匹配:旧前的指针++ 新后的指针--
      4 旧后 和 新前 
        匹配:旧后的指针-- 新前 的指针++
      5 以上都不满足条件 ==> 查找
      在旧节点中寻找新前指向的节点  如果匹配到了,说明数据在新旧节点中都存在，移动位置即可，并将处理过的节点置为undefined（旧节点）,如果匹配不到，说明是一个新的节点，直接新增即可。
      最后新指针++
      6 创建或者删除
  ```
  *** 注意：如果要提升性能，一定要加 key key是唯一标识，在更改前后，确认是不是同一个节点