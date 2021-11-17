// Function.prototype.bind
const obj = {
  name: 'john',
};

const fn = function (age) {
  console.log(this.name, age);
};

const runFn = fn.bind(obj, 11); // 11的这个参数优先级大于调用函数是的传参
runFn(12); // 参数会被bind的参数覆盖掉 如果bind没有传参 则使用当前的参数
