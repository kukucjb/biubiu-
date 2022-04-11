// main.js
var lib = require('./a.js');
console.log(lib)
console.log(lib.counter);  // 3
lib.incCounter();
console.log(lib.counter); // 3

console.log(lib.obj);
lib.changeObject();
console.log(lib.obj);


