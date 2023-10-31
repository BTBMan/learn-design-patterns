// uncurrying 2 I don't know why
Function.prototype.uncurrying = function () {
  const that = this;

  return function () {
    // 借助Function.prototype.call来实现
    return Function.prototype.call(that, arguments); // 直接用[].push来执行方法
  };
};

const push = [].push.uncurrying();

(function () {
  push(arguments, 4);
})(1, 2, 3);
