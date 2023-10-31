function clg() {
  console.log('John');
}

function exec() {
  return Function.prototype.call(clg);
}

exec();
