// uncurrying
Function.prototype.uncurrying = function () {
  const that = this;

  return function () {
    // 取到第一个参数 为this的指向 然后把剩余的参数通过Function.prototype.call的方法实现push
    const obj = [].shift.call(arguments);

    return that.apply(obj, arguments);
  };
};

const push = [].push.uncurrying();

(function () {
  push(arguments, 4);

  console.log(arguments); // [1,2,3,4]
})(1, 2, 3);
