// 理解new运算的过程
var Person = function (name) {
  this.name = name;
};

Person.prototype.sayName = function () {
  console.log(this.name);
};

var objectFactory = function () {
  var obj = Object.prototype; // 中Object.prototype克隆一个空对象出来
  var Constructor = [].shift.call(arguments); // 获取函数的第一个参数 也就是一个构造器 这里指Person函数

  obj.__proto__ = Constructor.prototype; // 指向正确的原型 也就是Person函数

  var ret = Constructor.apply(obj, arguments); // TODO
};
