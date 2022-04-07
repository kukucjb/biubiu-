/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-09-14 23:45:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-14 23:46:27
 */
export default function(sel,data,children,text,elm){

  let key = data.key
  return {
    sel,
    data,
    children,
    text,
    elm,
    key
  }

}