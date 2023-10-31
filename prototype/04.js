// 理解new运算的过程
var Person = function (name) {
  this.name = name;
};

Person.prototype.sayName = function () {
  console.log(this.name);
};

var objectFactory = function () {
  var obj = new Object(); // 中Object.prototype克隆一个空对象出来
  var Constructor = [].shift.call(arguments); // 获取函数的第一个参数 也就是一个构造器 这里指Person函数(拿到构造函数)

  // 对象通过__proto__来记住他的原型 所以这里通过设置obj的__proto__来指向正确的原型 也就是Person函数的原型
  obj.__proto__ = Constructor.prototype;

  // Constructor(); // 这么调用 内部的this指向的是window
  var ret = Constructor.apply(obj, arguments); // 借用外部传入的构造器来给obj设置属性

  return typeof ret === 'object' ? ret : obj; // 确保返回的永远是一个对象
};

var person1 = objectFactory(Person, 'john');
var person2 = new Person('long');

console.log(person1.prototype === person2.prototype); // true

console.log(person1.name); // john
person1.sayName(); // john
