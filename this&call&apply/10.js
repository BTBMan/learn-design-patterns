// 其他借用
// object借用push
const obj1 = {};

Array.prototype.push.call(obj1, 'a', 'b');

console.log(obj1);
