// 构造器调用
const Person1 = function () {
  this.name = 'john';

  // 如果显示的返回一个对象 那么实例化这个构造器 得到的name是long
  return {
    name: 'long',
  };
};

const person1 = new Person1();
console.log(person1.name); // long

const Person2 = function () {
  this.name = 'john';

  // 如果返回的是一个非对象的数据 则不会对构造器造成影响
  return 'long';
};

const person2 = new Person2();
console.log(person2.name); // john
