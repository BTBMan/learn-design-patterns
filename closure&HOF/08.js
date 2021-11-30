// currying (函数柯里化) 的思想1

let monthlyCost = 0;

const cost = function (money) {
  monthlyCost += money;
};

cost(100); // 第一天
cost(100); // 第二天
// ...
cost(100); // 第三十天

console.log(monthlyCost);
// 以上代码 实际上我们不关心每天花了多少钱 只关心月底花了多少钱 所以只在月底计算一次就可以了
