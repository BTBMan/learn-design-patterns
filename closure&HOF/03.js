// 闭包和面向对象

// 闭包实现
const extent1 = function () {
  let value = 1;

  return {
    call: function () {
      value++;
      console.log(value);
    },
  };
};

const ext1 = extent1();

// ext1.call(); // 2
// ext1.call(); // 3

// 面向对象实现
const extent2 = {
  value: 1,
  call: function () {
    this.value++;
    console.log(this.value);
  },
};

// extent2.call(); // 2
// extent2.call(); // 3

// or
const Extent3 = function () {
  this.value = 1;
};

Extent3.prototype.call = function () {
  this.value++;
  console.log(this.value);
};

const ext3 = new Extent3();

ext3.call(); // 2
ext3.call(); // 3
