// 作为对象的方法被调用
const obj = {
  name: 'john',
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName();
