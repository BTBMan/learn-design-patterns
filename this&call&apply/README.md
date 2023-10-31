# This&Call&Apply

Javascript 函数的 this 是根据函数被执行的环境动态绑定的

## this 的指向大概分为以下几种

- 被当作对象的方法调用, 指定当前对象
- 当作普通函数被调用, 指向 window
- 构造器被调用, 指向当前构造器
- Function.prototype.call 和 Function.prototype.apply 被调用
  - 会动态的改变函数的 this, 第一个参数是 this 的指向, 传 null 代表 window, 严格模式下仍是 null
  - 其区别是除第一个参数外的传参不同, apply 是一个数组, call 是逗号分隔的多值
- Function.prototype.bind 是一个不会立即执行的用来改变 this 的方法, 传参和 apply 一样
