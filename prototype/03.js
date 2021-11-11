// 函数被当作构造器调用
var Person = function (name) {
  this.name = name;
};

Person.prototype.sayName = function () {
  console.log(this.name);
};

var person = new Person('张三');

console.log(person.name);
person.sayName();

console.log(Person.prototype);
console.log(person.__proto__);
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
console.log(person.__proto__ === Person.prototype); // true
