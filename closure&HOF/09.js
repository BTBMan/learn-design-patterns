// currying (函数柯里化) 的思想2

// 在函数闭包中把每天花的钱保存起来
const cost = (function () {
  const costs = [];

  return function () {
    if (arguments.length === 0) {
      return costs.reduce((init, money) => {
        init += money;

        return init;
      }, 0);
    } else {
      [].push.apply(costs, arguments);
    }
  };
})();

// 并未真正求值
cost(100);
cost(100);
cost(100);

// 真正的求值
console.log(cost());
