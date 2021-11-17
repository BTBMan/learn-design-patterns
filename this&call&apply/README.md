# This&Call&Apply

Javascript函数的this是根据函数被执行的环境动态绑定的


## this的指向大概分为以下几种

1. 被当作对象的方法调用
2. 当作普通函数被调用
3. 构造器被调用
4. Function.prototype.call和Function.prototype.apply被调用 (会动态的改变函数的this)