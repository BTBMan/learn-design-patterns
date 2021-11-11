// 把不变的内容抽离出来
var makeSound = function (animal) {
  animal.sound();
};

// 把可变的各自封装
var Duck = function () {};
Duck.prototype.sound = function () {
  console.log('嘎嘎嘎');
};

var Chicken = function () {};
Chicken.prototype.sound = function () {
  console.log('咯咯咯');
};

makeSound(new Duck());
makeSound(new Chicken());
