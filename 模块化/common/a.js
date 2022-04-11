
let counter = 3;
const incCounter = ()=>{
  counter++
}
let obj = {
  name:'zhangsan',
  age:'15'
}

const changeObject = function(){
  obj.name = 'lisi'
}

module.exports = {
  counter,
  incCounter,
  obj,
  changeObject
}

