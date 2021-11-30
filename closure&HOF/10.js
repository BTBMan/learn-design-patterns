// currying (函数柯里化)

const currying = function (fn) {
  const costs = [];

  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, costs);
    } else {
      [].push.apply(costs, arguments);

      // return arguments.callee; // 返回这个函数 以便下次调用 这一步好像没什么用 ??
    }
  };
};

const costSum = (function () {
  // let money = 0;

  // return function () {
  //   for (let index = 0; index < arguments.length; index++) {
  //     money += arguments[index];
  //   }

  //   return money;
  // };

  return function () {
    return [].reduce.call(
      arguments,
      (init, money) => {
        init += money;

        return init;
      },
      0,
    );
  };
})();

const cost = currying(costSum); // 这一步转化成currying函数

// 此时未真正求值
cost(100);
cost(100);
cost(100);

// 真正的求值
console.log(cost());
