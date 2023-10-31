// 函数被当作构造器调用
var Person = function (name) {
  this.name = name;
};

Person.prototype.sayName = function () {
  console.log(this.name);
};

var person = new Person('张三');

console.log(person.name); // 张三
person.sayName(); // 张三

console.log(Person.prototype); // { sayName: [Function (anonymous)] }
console.log(person.__proto__); // { sayName: [Function (anonymous)] }
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
console.log(person.__proto__ === Person.prototype); // true
