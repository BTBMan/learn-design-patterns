// Function.prototype.call和Function.prototype.apply调用
const obj1 = {
  name: 'john',
  sayName: function () {
    console.log(this.name);
  },
};

const obj2 = {
  name: 'long',
};

obj1.sayName();
obj1.sayName.call(obj2); // 此时通过call调用 内部this被动态的指向了obj2 所有输出的是long
