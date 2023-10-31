var a = new Object();

console.log(a.__proto__ === Object.prototype); // true

// =======
const obj = { name: 'john' };

const a1 = function () {};
a1.prototype = obj; // 这里手动指定了函数的prototype

const a2 = function () {};
a2.prototype = new a1();

const newA2 = new a2();

console.log(newA2.name); // john (顺着原型链查找)
