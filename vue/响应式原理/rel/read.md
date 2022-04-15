<!--
 * @Descripttion: 
 * @version: 
 * @Author: CC
 * @Date: 2022-04-12 20:18:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-12 20:23:53
-->
新建webpack开发环境
1. npm init -y

2. npm install webpack@5 webpack-cli@3 webpack-dev-server@3 -S

3. 新建webpack.config.js
```js
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
```

4. 新建public/index.html
```html
<script src="/js/index.js"></script>
```
5. package.json
   ```json
   "dev": "webpack-dev-server --open"
   ```
   
