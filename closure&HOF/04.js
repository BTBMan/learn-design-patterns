// 利用面向对象实现命令模式

// 首先有一个电视 电视有打开和关闭的功能
const Tv = {
  open: function () {
    console.log('打开电视了');
  },
  close: function () {
    console.log('关上电视了');
  },
};

// 定义一个命令模式
const CreateCommand = function (receiver) {
  this.receiver = receiver; // 接收一个东西
};

// 执行命令 打开电视
CreateCommand.prototype.execute = function () {
  this.receiver.open();
};

// 撤销命令 关闭电视
CreateCommand.prototype.undo = function () {
  this.receiver.close();
};

const tvCommand = new CreateCommand(Tv);

tvCommand.execute(); // 执行
tvCommand.undo(); // 撤销
