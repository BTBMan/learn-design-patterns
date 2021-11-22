// Function.prototype.bind
const obj = {
  name: 'john',
};

const fn = function (age, gender) {
  console.log(this.name, age, gender);
};

const runFn = fn.bind(obj, 11); // 11的这个参数的顺序要前于调用函数时的传参
runFn(12); // 参数会被合并到bind的参数的后面
