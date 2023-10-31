// 借用构造函数
const A = function (name) {
  this.name = name;
};

const B = function () {
  // 这里借用A构造器来执行 并指定this为当前的B 当实例化B的时候 B就执行了this.name = name
  A.apply(this, arguments);
};
B.prototype.sayName = function () {
  console.log(this.name);
};

const b = new B('john');
b.sayName(); // john
