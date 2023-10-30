// 作为普通函数被调用
var name = 'john in outside'; // do not use const and let

const sayName = function () {
  console.log(this.name);
};

sayName(); // john in outside

const obj = {
  name: 'john',
  sayName: function () {
    console.log(this.name);
  },
};

const objSayName = obj.sayName;

objSayName(); // john in outside
