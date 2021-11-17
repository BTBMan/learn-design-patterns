# This&Call&Apply

Javascript函数的this是根据函数被执行的环境动态绑定的


## this的指向大概分为以下几种

1. 被当作对象的方法调用
2. 当作普通函数被调用
3. 构造器被调用
4. Function.prototype.call和Function.prototype.apply被调用 
  1. 会动态的改变函数的this 第一个参数是this的指向 传null代表window 严格模式下仍是null
  2. 其区别是除第一个参数外的传参不同 apply是一个数组 call是逗号分隔的多值
5. Function.prototype.bind是一个不会立即执行的用来改变this的方法 传参和apply一样