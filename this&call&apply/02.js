// 作为普通函数被调用
const name = 'john';

const sayName = function () {
  console.log(this.name);
};

sayName();

const obj = {
  name: 'john',
  sayName: function () {
    console.log(this.name);
  },
};

const objSayName = obj.sayName;

objSayName();
