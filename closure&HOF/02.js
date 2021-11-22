// 计算乘积
// 01 普通实现
function mult1() {
  var a = 1;

  for (var i = 0; i < arguments.length; i++) {
    const num = arguments[i];

    a *= num;
  }

  return a;
}

const m1 = mult1(3, 6);

// console.log(m1);

// 02 把同样的参数缓存以提高性能
var cache = {};
function mult2() {
  var args = Array.prototype.join.call(arguments, ',');

  if (cache[args]) {
    return cache[args];
  }

  var a = 1;

  for (var i = 0; i < arguments.length; i++) {
    const num = arguments[i];

    a *= num;
  }

  return (cache[args] = a);
}

const m2_1 = mult2(3, 6);
const m2_2 = mult2(3, 6);

// 03 避免cache是全局变量 把他封装到函数内部
const mult3 = (function () {
  var cache = {};

  return function () {
    var args = Array.prototype.join.call(arguments, ',');

    if (cache[args]) {
      return cache[args];
    }

    var a = 1;

    for (var i = 0; i < arguments.length; i++) {
      const num = arguments[i];

      a *= num;
    }

    return (cache[args] = a);
  };
})();

const m3_1 = mult3(3, 6);
const m3_2 = mult3(3, 6);

// 代码重构 提炼常用的代码块
const mult4 = (function () {
  var cache = {};

  function calculate() {
    var a = 1;

    for (var i = 0; i < arguments.length; i++) {
      const num = arguments[i];

      a *= num;
    }

    return a;
  }

  return function () {
    var args = Array.prototype.join.call(arguments, ',');

    if (cache[args]) {
      return cache[args];
    }

    return (cache[args] = calculate(arguments));
  };
})();

const m4_1 = mult3(3, 6);
const m4_2 = mult3(3, 6);

console.log(m4_1, m4_2);
