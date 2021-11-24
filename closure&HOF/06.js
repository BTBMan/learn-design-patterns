// 高阶函数 简单的单例模式
const single = function (fn) {
  let ret;

  return function () {
    return ret || (ret = fn.apply(this, arguments));
  };
};

const gs = single(function () {
  console.log(this);
});

const s1 = gs();

const s2 = gs();

console.log(s1 === s2); // true
