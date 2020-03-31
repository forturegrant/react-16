class Parent{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}

class Child extends Parent{
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}

//1、依次执行同步代码直至执行完毕；
//2、检查MacroTask 队列，若有触发的异步任务，则取第一个并调用其事件处理函数，然后跳至第三步，若没有需处理的异步任务，则直接跳至第三步；
//3、检查MicroTask队列，然后执行所有已触发的异步任务，依次执行事件处理函数，直至执行完毕，然后跳至第二步，若没有需处理的异步任务中，则直接返回第二步，依次执行后续步骤；
//4、最后返回第二步，继续检查MacroTask队列，依次执行后续步骤；
//5、如此往复，若所有异步任务处理完成，则结束；
