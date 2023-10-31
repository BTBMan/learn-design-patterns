// 手动实现Function.prototype.bind
Function.prototype.bind = function () {
  const that = this; // 保存this 这个this指.bind前面的函数

  const context = [].shift.apply(arguments); // 拿到第一个参数 这里是须要绑定的this上下文

  const args = [].slice.apply(arguments); // 剩余的参数转成数组

  // 不会立即执行 须要在使用的时候调用函数
  return function () {
    // 传入须要绑定的this 并把bind除第一个外的所有参数和调用时的参数合并作为新的参数
    return that.apply(context, [].concat.call(args, [].slice.apply(arguments)));
  };
};

const obj = {
  name: 'john',
};

const func1 = function (a, b) {
  console.log(this.name, a, b);
}.bind(obj, 'a');

func1('b'); // john a b
