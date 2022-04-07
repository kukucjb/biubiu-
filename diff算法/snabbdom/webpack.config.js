/*
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2021-09-14 22:25:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-14 22:52:50
 */
module.exports = {
  entry:{
    index:"./src/index.js"
  },
  output:{
    path:__dirname + "/public",
    filename:"./js/[name].js"
  },
  devServer:{
    contentBase:"./public",
    inline:true
  }
}