// TODO 高阶函数实现简单的AOP (面向切面编辑)

// 实现一个函数执行之前和执行之后的方法 (装饰者模式)

Function.prototype.before = function (cb) {
  const that = this; // 保存原函数的this

  // 返回一个包涵执行原函数和新函数的代理函数
  return function () {
    cb.apply(that, arguments);

    return that.apply(that, arguments);
  };
};

Function.prototype.after = function (cb) {
  const that = this; // 保存原函数的this

  // 返回一个包涵执行原函数和新函数的代理函数
  return function () {
    const ret = that.apply(that, arguments);

    cb.apply(that, arguments);

    return ret;
  };
};

let fn1 = function () {
  console.log(2, this);
};

fn1 = fn1
  .before(function () {
    console.log(1, this);
  })
  .after(function () {
    console.log(3, this);
  });

fn1();
