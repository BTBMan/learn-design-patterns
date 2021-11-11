// 当我们显示的调用 内部引擎会从Object.prototype上克隆一个对象
var obj1 = new Object();
var obj2 = {};

console.log(Object.getPrototypeOf(obj1) === Object.prototype);
console.log(Object.getPrototypeOf(obj2) === Object.prototype);
