// 使用克隆的原型模式
var Plane = function () {
  this.blood = 100;
  this.attackLevel = 1;
  this.defenseLevel = 1;
};

var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 5;

// 通过Object.create clone
// 不支持Object.create方法hack
Object.create =
  Object.create ||
  function (obj) {
    var F = function () {};
    F.prototype = obj;

    return new F();
  };

const clonePlane = Object.create(plane);

console.log(clonePlane.blood); // 500
