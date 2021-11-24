// 利用闭包实现命令模式

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
const createCommand = function (receiver) {
  // 执行命令 打开电视
  function execute() {
    receiver.open();
  }

  // 撤销命令 关闭电视
  function undo() {
    receiver.close();
  }

  return {
    execute,
    undo,
  };
};

const tvCommand = createCommand(Tv);

tvCommand.execute(); // 执行
tvCommand.undo(); // 撤销
