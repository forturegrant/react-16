/*import React, {Component} from 'react';

function withHeader(title) {
  return function (WrappedComponent) {
    WrappedComponent.prototype.componentWillReceiveProps = function(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    };

    //这里就已经修改了被包裹组件的生命周期


    return class HOC extends Component {
      componentWillReceiveProps(nextProps) {
        console.log('Current props: ', this.props);
        console.log('Next props: ', nextProps);
      }

      //这样子写就不会去修改被包裹的组件
      render() {
        return <div>
          <WrappedComponent {...this.props}/>
        </div>
      }
    }
  }
}


//@withHeader
class Demo extends Component {
  render() {
    return (
      <div>
        我是一个普通组件
      </div>
    );
  }
}

export default withHeader()(Demo);*/


/*import React, {Component} from 'react';
import _ from 'lodash';

function withHeader(WrappedComponent) {
  return class HOC extends WrappedComponent  {
    componentDidMount(){
      console.log(this.state);
    }
    render() {
      return super.render()
    }
  }
}

function withHandSome(WrappedComponent) {
  return class HOC extends Component {
    render() {
      return <div>
        <div className="demo-header">
          我说帅哥
        </div>
        <WrappedComponent {...this.props}/>
      </div>
    }
  }
}

//const enhance = _.flowRight([withHeader, withHandSome])

//@enhance
//export default
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
  render() {
    return (
      <div>
        我是一个普通组件
      </div>
    );
  }
}

export default withHeader(Demo);*/


/*import React, {Component} from 'react';

function withHeader(WrappedComponent) {
  return class HOC extends WrappedComponent  {
    componentDidMount(){
      console.log(this.state);
    }
    render() {
      return super.render()
    }
  }
}

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
  render() {
    return (
      <div>
        我是一个普通组件
      </div>
    );
  }
}

export default withHeader(Demo);*/

/*import React, {Component} from 'react';

function withHeader(title) {
  return function (WrappedComponent) {
    WrappedComponent.prototype.componentWillReceiveProps = function(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    };

    //这里就已经修改了被包裹组件的生命周期


    return class HOC extends Component {
      componentWillReceiveProps(nextProps) {
        console.log('Current props: ', this.props);
        console.log('Next props: ', nextProps);
      }

      //这样子写就不会去修改被包裹的组件
      render() {
        return <div>
          <WrappedComponent {...this.props}/>
        </div>
      }
    }
  }
}


//@withHeader
class Demo extends Component {
  render() {
    return (
      <div>
        我是一个普通组件
      </div>
    );
  }
}

export default withHeader()(Demo);*/

/*
function Child({onClick, age}) {
  console.log('Child render');
  return (
    <button onClick={onClick}>{age}</button>
  )
}

Child = memo(Child);

export default function Father() {
  console.log('Father render');
  const [age, setAge] = useState(18);
  const [name, setName] = useState("庄某某");
  // 父组件更新时，这里的变量和函数每次都会重新创建，那么子组件接受到的属性每次都会认为是新的
  // 所以子组件也会随之更新，这时候可以用到 useMemo
  // 有没有后面的依赖项数组很重要，否则还是会重新渲染
  // 如果后面的依赖项数组没有值的话，即使父组件的 number 值改变了，子组件也不会去更新
  //const data = useMemo(() => age, [age]);
  //const data = useMemo(() => age, [age]);
  //console.log('data===oldData ',data===oldData);
  //oldData = data;

  // 有没有后面的依赖项数组很重要，否则还是会重新渲染
  const addClick = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  //console.log('addClick===oldAddClick ',addClick===oldAddClick);
  //oldAddClick=addClick;

  /!*function addClick() {
    setAge(age + 1)
  }*!/

  return (
    <>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    <Child age={age} onClick={addClick}/>
    </>
  )
}
*/

/*import React, {useState, memo, useMemo, useCallback} from 'react';

function Child({onClick, age}) {
  console.log('Child render');
  return (
    <button onClick={onClick}>{age}</button>
  )
}

Child= memo(Child);
export default function Father() {
  console.log('Father render');
  const [age, setAge] = useState(18);
  const [name, setName] = useState("庄某某");
  const addClick = () => {
    setAge(age + 1);
  };
  return (
    <>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    <Child age={age} onClick={addClick}/>
    </>
  )
}*/

/*
import React, {Component, memo} from 'react';

function Child({onClick, age}) {
  console.log('child render');
  return (
    <button onClick={onClick}>{age}</button>
  )
}

Child = memo(Child);
export default class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18,
      name: "庄某某"
    }
  }

  addClick = () => {
    this.setState({
      age: this.state.age + 1
    })
  }

  /!*console.log('Counter render');
  const [age, setAge] = useState(18);
  const [name, setName] = useState("庄某某");
  const addClick = () => {
    setAge(age + 1);
  };*!/
  render() {
    console.log('father render');
    const {age, name} = this.state;
    return (
      <>
      <input type="text" value={name} onChange={(e) => this.setState({name: e.target.value})}/>
      <Child age={age} onClick={this.addClick}/>
      </>
    )
  }
}
*/


/*一、useState
1.1
先让我们来对比一下hook和使用传统类的区别
import React, {useState, memo, useMemo, useCallback} from 'react';

export function HookTest() {
  let [age, setAge] = useState(18);
  let [name, setName] = useState("庄某某");

  return (
    <>
    <div>
      我叫{name}, 今天{age}岁
    </div>
    <button onClick={() => setAge(age + 1)}>加一岁</button>
    <input type="text" onChange={(e) => setName(e.target.value)}/>
    </>
  )
}

import React, {Component} from 'react';

export class HookTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18,
      name: "庄子鹏"
    }
  }

  setAge = () => {
    this.setState({
      age: this.state.age + 1
    })
  }

  setName = (value) => {
    this.setState({
      name: value
    })
  }

  render() {
    const {age, name} = this.state;
    return (
      <>
      <div>
        我叫{name}, 今天{age}岁
      </div>
      <button onClick={() => this.setAge()}>加一岁</button>
      <input type="text" onChange={(e) => this.setName(e.target.value)}/>
      </>
    )
  }
}

通过这里的例子看好像并没有什么很独特的区别，取了语法上的不同

1.2
每次渲染都是一次独立的闭包


import React, {useState, memo, useMemo, useCallback} from 'react';

function HookTest() {
  let [age, setAge] = useState(0);

  function alertAge() {
    setTimeout(() => {
      // alert 只能获取到点击按钮时的那个状态
      alert(age);
    }, 3000);
  }

  return (
    <>
    <p>{age}</p>
    <button onClick={() => setAge(age + 1)}>+</button>
    <button onClick={alertAge}>alertAge</button>
    </>
  )
}

import React, {Component} from 'react';

export class HookTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0
    }
  }

  setAge = () => {
    this.setState({
      age: this.state.age + 1
    })
  }

  alertAge = () => {
    setTimeout(() => {
      alert(this.state.age)
      // alert 能获取到最新的那个state age    }, 3000);
    }

    render()
    {
      const {number} = this.state;
      return (
        <>
        <p>{number}</p>
        <button onClick={() => this.setAge()}>+</button>
        <button onClick={() => this.alertAge()}>alertAge</button>
        </>
      )
    }
  }
  这个地方就很神奇了

  那我们要怎么在hook中去获取到最新的state
，
  这里推荐使用useEffect
，
  后面讲到useEffect我们在详说

  1.3
  这里我们还要讲一下Hook触发重新渲染的条件
，
  Hook使用的是Object
.
  is


  import
  React
, {
  useState
,
  memo
,
  useMemo
,
  useCallback
}

from
'react';

export function HookTest() {
  console.log('render');
  let [age, setAge] = useState(18);
  let [name, setName] = useState("庄某某");

  return (
    <>
    <div>
      我叫{name}, 今天{age}岁
    </div>
    <button onClick={() => setAge(18)}>加一岁</button>
    //点击时并不会触发重新渲染，因为前后状态相同
    <input type="text" onChange={(e) => setName(e.target.value)}/>
    </>
  )
}

import React, {Component} from 'react';

export class HookTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18,
      name: "庄子鹏"
    }
  }

  setAge = () => {
    this.setState({
      age: 18
    })
  }

  setName = (value) => {
    this.setState({
      name: value
    })
  }

  render() {
    console.log('render');
    const {age, name} = this.state;
    return (
      <>
      <div>
        我叫{name}, 今天{age}岁
      </div>
      <button onClick={() => this.setAge()}>加一岁</button>
      //点击时会触发重新渲染，即使前后状态相同
      <input type="text" onChange={(e) => this.setName(e.target.value)}/>
      </>
    )
  }
}

在这里我们既然讲到了类与Hook的触发重新渲染方式不同，那我们就一起谈上性能优化这一块，即第二个章节

二、useMemo与useCallback
2.1
首先先谈一下触发重新渲染的情况

2.1
.1
章节一中提到的方式

2.1
.2
父子组件中，在类和Hook中都一样，如果没做特殊处理，当父组件重新渲染时，其下面的子组件也会重新渲染，那么在类中用来性能优化的方式有：pureComponent（针对类组件），memo（针对函数式组件）

三、useEffect
3.1
useEffect是Hook中带来的一个新概念，叫做副作用，取代了传统class中的生命周期函数，Hook没有了所谓的生命周期函数

在这里我不是很理解副作用的含义，但我们可以把他理解成是组件渲染的一部分

import React, {useState, memo, useMemo, useCallback, useEffect} from 'react';

export function HookTest() {
  let [age, setAge] = useState(18);
  let [name, setName] = useState("庄某某");

  useEffect(() => {
    document.title = name;
  })

  return (
    <>
    <div>
      我叫{name}, 今天{age}岁
    </div>
    <button onClick={() => setAge(age + 1)}>加一岁</button>
    <input type="text" onChange={(e) => setName(e.target.value)}/>
    </>
  )
}

// 每次我setName之后，title都会改变
那每次触发重新渲染之后都会去执行useEffect里的内容，那如何去避免执行useEffect中的内容，这时候我们需要用到useEffect的第二个参数，依赖项

import React, {useState, memo, useMemo, useCallback, useEffect} from 'react';

export function HookTest() {
  let [age, setAge] = useState(18);
  let [name, setName] = useState("庄某某");

  useEffect(() => {
    document.title = age + name;
  }, [name])

  return (
    <>
    <div>
      我叫{name}, 今天{age}岁
    </div>
    <button onClick={() => setAge(age + 1)}>加一岁</button>
    <input type="text" onChange={(e) => setName(e.target.value)}/>
    </>
  )
}

//只有当状态name发生改变且触发重新渲染时，useEffect里面的内容才会去执行
3.2
使用多个Effect

我们会在传统的react中使用多个生命周期，同样我们可以使用多个Effect来实现同样的功能，Effect的执行按照顺序来进行

import React, {useState, memo, useMemo, useCallback, useEffect} from 'react';

export function HookTest() {
  let [age, setAge] = useState(18);
  let [name, setName] = useState("庄某某");

  useEffect(() => {
    console.log(1)
  })

  useEffect(() => {
    console.log(2)
  })
  return (
    <>
    <div>
      我叫{name}, 今天{age}岁
    </div>
    <button onClick={() => setAge(age + 1)}>加一岁</button>
    <input type="text" onChange={(e) => setName(e.target.value)}/>
    </>
  )
}

四、useReducer
4.1
在管理多个状态时可以使用useReducer


import React, {useReducer} from 'react';

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {age: state.age + 1};
    case 'decrement':
      return {age: state.age - 1};
    default:
      throw new Error();
  }
}

function init(initialState) {
  return {age: initialState};
}

export function HookTest() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <>
    Count: {state.age}
    <button onClick={() => dispatch({type: 'increment'})}>+</button>
    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  )
}

五、useContext
首先我们先来看一下传统react的context使用

//首先会有这么一个场景
class App extends React.Component {
  render() {
    return <Toolbar theme="dark"/>;
  }
}

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton theme={props.theme}/>
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme}/>;
  }
}//当我们使用context
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar/>
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
  return (
    <div>
      <ThemedButton/>
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;

  render() {
    return <Button theme={this.context}/>;
  }
}// 从官方的实例来看，并没有差多少
import React, {useContext} from 'react';

const ThemeContext = React.createContext('light');

export class HookTest extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar/>
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
  return (
    <div>
      <ThemedButton/>
    </div>
  );
}

function ThemedButton() {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  const theme = useContext(ThemeContext);
  return <button>{theme}</button>;
}

六、useRef
还是一样，我们先看一下传统react使用ref和使用Hook的区别

import React, {Component} from 'react';

export class HookTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18,
      name: "庄子鹏"
    }
    this.nameInput = null;
  }

  setAge = () => {
    this.setState({
      age: this.state.age + 1
    })
  }

  setName = (value) => {
    this.setState({
      name: value
    })
    console.log(this.nameInput.value);

    //可以获取dom
  }

  render() {
    const {age, name} = this.state;
    return (
      <>
      <div>
        我叫{name}, 今天{age}岁
      </div>
      <button onClick={() => this.setAge()}>加一岁</button>
      <input
        type="text"
        ref={(ele) => this.nameInput = ele}   //使用ref回调的方式
        onChange={(e) => this.setName(e.target.value)}
      />
      </>
    )
  }
}

import React, {useState, useRef} from 'react';


export function HookTest() {
  let [age, setAge] = useState(18);
  let [name, setName] = useState("庄某某");
  const nameInput = useRef(null);

  function go(value) {
    setName(value);
    console.log(nameInput.current.value);
    //获取的dom实例都会被包装成一个对象,  {current: dom}
  }

  return (
    <>
    <div>
      我叫{name}, 今天{age}岁
    </div>
    <button onClick={() => setAge(age + 1)}>加一岁</button>
    <input
      type="text"
      ref={nameInput}
      onChange={(e) => go(e.target.value)}
    />
    </>
  )
}

七、自定义Hook
7.1
自定义hook可以理解为就是使用hook自己定义的一些组件

7.2
自定义hook必须使用use开头，这是一种规则


import React, {useState, useRef, useEffect} from 'react';

function useAge() {  //命名必须使用use开头
  let [age, setAge] = useState(18);
  useEffect(() => {
    setInterval(() => {
      setAge(age => age + 1);
    }, 1000);
  }, []);
  return [age, setAge];
}

// 每个组件调用同一个 hook，只是复用 hook 的状态逻辑，并不会共用一个状态
function Counter1() {
  let [age, setAge] = useAge();
  return (
    <div>
      <button onClick={() => {
        setAge(age + 1)
      }}>{age}</button>
    </div>
  )
}

function Counter2() {
  let [age, setAge] = useAge();
  return (
    <div>
      <button onClick={() => {
        setAge(age + 1)
      }}>{age}</button>
    </div>
  )
}

export function HookTest() {
  return (
    <>
    <Counter1/>
    <Counter2/>
    </>
  )
}*/


/*const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(2);
    resolve(1)
  }, 2000)
})

promise.then((res) => setTimeout(() => console.log(res), 500));*/

// setTimeout(() => {
//   setTimeout(() => console.log(res), 500)
// }, 2000)

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function Promise(executor) {
  let that = this; // 缓存当前promise实例对象
  that.status = PENDING; // 初始状态
  that.value = undefined; // fulfilled状态时 返回的信息
  that.reason = undefined; // rejected状态时 拒绝的原因
  that.onFulfilledCallbacks = []; // 存储fulfilled状态对应的onFulfilled函数
  that.onRejectedCallbacks = []; // 存储rejected状态对应的onRejected函数

  function resolve(value) { // value成功态时接收的终值
    if (value instanceof Promise) {     // 1
      return value.then(resolve, reject);
    }

    // 为什么resolve 加setTimeout?
    // 2.2.4规范 onFulfilled 和 onRejected 只允许在 execution context 栈仅包含平台代码时运行.
    // 注1 这里的平台代码指的是引擎、环境以及 promise 的实施代码。实践中要确保 onFulfilled 和
    // onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。

    setTimeout(() => {    // 1
      // 调用resolve 回调对应onFulfilled函数
      if (that.status === PENDING) {
        // 只能由pending状态 => fulfilled状态 (避免调用多次resolve reject)
        that.status = FULFILLED;
        that.value = value;
        that.onFulfilledCallbacks.forEach(cb => cb(that.value));
      }
    });
  }

  function reject(reason) { // reason失败态时接收的拒因
    setTimeout(() => {
      // 调用reject 回调对应onRejected函数
      if (that.status === PENDING) {
        // 只能由pending状态 => rejected状态 (避免调用多次resolve reject)
        that.status = REJECTED;
        that.reason = reason;
        that.onRejectedCallbacks.forEach(cb => cb(that.reason));
      }
    });
  }

  // 捕获在excutor执行器中抛出的异常
  // new Promise((resolve, reject) => {
  //     throw new Error('error in executor')
  // })
  try {
    executor(resolve, reject);

    console.log('我先来');
    setTimeout(() => {
      console.log(3);
      resolve(1)
    }, 2000)


    //两秒后弹出三，还走了一下resolve，然后resolve的时候又setTimeout了一下，这时候就去执行函数存储数组中的函
    // 数了，函数里面已经存了一个函数了，就是then存进去的

    /*(res) => {
      console.log('eee');
      setTimeout(() => console.log(res), 500)
    }*/


  } catch (e) {
    reject(e);
  }
}

/**
 * resolve中的值几种情况：
 * 1.普通值
 * 2.promise对象
 * 3.thenable对象/函数
 */

/**
 * 对resolve 进行改造增强 针对resolve中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
  //console.log('ccc');
  if (promise2 === x) {  // 如果从onFulfilled中返回的x 就是promise2 就会导致循环引用报错
    return reject(new TypeError('循环引用'));
  }

  let called = false; // 避免多次调用
  // 如果x是一个promise对象 （该判断和下面 判断是不是thenable对象重复 所以可有可无）
  if (x instanceof Promise) { // 获得它的终值 继续resolve
    if (x.status === PENDING) { // 如果为等待态需等待直至 x 被执行或拒绝 并解析y值
      x.then(y => {
        resolvePromise(promise2, y, resolve, reject);
      }, reason => {
        reject(reason);
      });
    } else { // 如果 x 已经处于执行态/拒绝态(值已经被解析为普通值)，用相同的值执行传递下去 promise
      x.then(resolve, reject);
    }
    // 如果 x 为对象或者函数
  } else if (x != null && ((typeof x === 'object') || (typeof x === 'function'))) {
    try { // 是否是thenable对象（具有then方法的对象/函数）
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, reason => {
          if (called) return;
          called = true;
          reject(reason);
        })
      } else { // 说明是一个普通对象/函数
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

/**
 * [注册fulfilled状态/rejected状态对应的回调函数]
 * @param  {function} onFulfilled fulfilled状态时 执行的函数
 * @param  {function} onRejected  rejected状态时 执行的函数
 * @return {function} newPromsie  返回一个新的promise对象
 */
Promise.prototype.then = function (onFulfilled, onRejected) {
  console.log('aaa');
  const that = this;
  let newPromise;
  // 处理参数默认值 保证参数后续能够继续执行
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : value => value;
  onRejected =
    typeof onRejected === "function" ? onRejected : reason => {
      throw reason;
    };

  // then里面的FULFILLED/REJECTED状态时 为什么要加setTimeout ?
  // 原因:
  // 其一 2.2.4规范 要确保 onFulfilled 和 onRejected 方法异步执行(且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行) 所以要在resolve里加上setTimeout
  // 其二 2.2.6规范 对于一个promise，它的then方法可以调用多次.（当在其他程序中多次调用同一个promise的then时 由于之前状态已经为FULFILLED/REJECTED状态，则会走的下面逻辑),所以要确保为FULFILLED/REJECTED状态后 也要异步执行onFulfilled/onRejected

  // 其二 2.2.6规范 也是resolve函数里加setTimeout的原因
  // 总之都是 让then方法异步执行 也就是确保onFulfilled/onRejected异步执行

  // 如下面这种情景 多次调用p1.then
  // p1.then((value) => { // 此时p1.status 由pending状态 => fulfilled状态
  //     console.log(value); // resolve
  //     // console.log(p1.status); // fulfilled
  //     p1.then(value => { // 再次p1.then 这时已经为fulfilled状态 走的是fulfilled状态判断里的逻辑 所以我们也要确保判断里面onFuilled异步执行
  //         console.log(value); // 'resolve'
  //     });
  //     console.log('当前执行栈中同步代码');
  // })
  // console.log('全局执行栈中同步代码');
  //

  if (that.status === FULFILLED) { // 成功态
    return newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onFulfilled(that.value);
          resolvePromise(newPromise, x, resolve, reject); // 新的promise resolve 上一个onFulfilled的返回值
        } catch (e) {
          reject(e); // 捕获前面onFulfilled中抛出的异常 then(onFulfilled, onRejected);
        }
      });
    })
  }

  if (that.status === REJECTED) { // 失败态
    return newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onRejected(that.reason);
          resolvePromise(newPromise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  if (that.status === PENDING) { // 等待态
    // 当异步调用resolve/rejected时 将onFulfilled/onRejected收集暂存到集合中
    console.log('bbb');


    return newPromise = new Promise((resolve, reject) => {
      console.log('ccc');
      that.onFulfilledCallbacks.push((value) => {
        try {
          let x = onFulfilled(value);
          resolvePromise(newPromise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      that.onRejectedCallbacks.push((reason) => {
        try {
          let x = onRejected(reason);
          resolvePromise(newPromise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
};

/**
 * Promise.all Promise进行并行处理
 * 参数: promise对象组成的数组作为参数
 * 返回值: 返回一个Promise实例
 * 当这个数组里的所有promise对象全部变为resolve状态的时候，才会resolve。
 */
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let done = gen(promises.length, resolve);
    promises.forEach((promise, index) => {
      promise.then((value) => {
        done(index, value)
      }, reject)
    })
  })
}

function gen(length, resolve) {
  let count = 0;
  let values = [];
  return function (i, value) {
    values[i] = value;
    if (++count === length) {
      console.log(values);
      resolve(values);
    }
  }
}

/**
 * Promise.race
 * 参数: 接收 promise对象组成的数组作为参数
 * 返回值: 返回一个Promise实例
 * 只要有一个promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理(取决于哪一个更快)
 */
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then(resolve, reject);
    });
  });
}

// 用于promise方法链时 捕获前面onFulfilled/onRejected抛出的异常
Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
}

Promise.resolve = function (value) {
  return new Promise(resolve => {
    resolve(value);
  });
}

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
}

/**
 * 基于Promise实现Deferred的
 * Deferred和Promise的关系
 * - Deferred 拥有 Promise
 * - Deferred 具备对 Promise的状态进行操作的特权方法（resolve reject）
 *
 *参考jQuery.Deferred
 *url: http://api.jquery.com/category/deferred-object/
 */
Promise.deferred = function () { // 延迟对象
  let defer = {};
  defer.promise = new Promise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });
  return defer;
}

/**
 * Promise/A+规范测试
 * npm i -g promises-aplus-tests
 * promises-aplus-tests Promise.js
 */

const promise = new Promise((resolve, reject) => {
  console.log('我先来');
  setTimeout(() => {
    console.log(3);
    resolve(1)
  }, 2000)
})

promise.then((res) => {
  console.log('eee');
  setTimeout(() => console.log(res), 500)
});

/*
//我们来分析这段代码的执行顺序，首先new Promise中的executor会先执行，即

    console.log('我先来');
    setTimeout(() => {
      console.log(3);
      resolve(1)
    }, 2000)

//这段代码先执行,先弹出我先来，然后在主线程上全部任务完成后，在两秒后输出3

//promise.then中代码紧随其后，也是调到了new Promise中，然后执行其中的
that.onFulfilledCallbacks.push((value) => {
        try {
          let x = onFulfilled(value);
          resolvePromise(newPromise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });

在onFulfilledCallbacks数组中加入函数，函数中 resolvePromise(newPromise, x, resolve, reject)

newPromise = ?

x = (res) => {
  console.log('eee');
  setTimeout(() => console.log(res), 500)
}

resolve
reject

//大概思路：将then中的内容存储到数组之中，然后执行完promise中异步的内容后去执行数组中的内容就完事了


hhh，让我来写一个穷人版的
*/

/*function Promise(executor){
  var that = this;
  that.callbackArr = [];
  function resolve(value){
    that.callbackArr.forEach((cb) => cb(value))
  }

  function reject() {

  }


  try{
    executor(resolve, reject)
  }catch(e){

  }
}

Promise.prototype.then = function(callback){
  var that = this;
  this.callbackArr.push(callback)
}

const promise = new Promise((resolve, reject) => {
  console.log('我先来');
  setTimeout(() => {
    console.log(3);
    resolve(1)
  }, 2000)
})

promise.then((res) => {
  console.log('eee');
  setTimeout(() => console.log(res), 500)
});*/

/**
 * Promise 实现 遵循promise/A+规范
 * Promise/A+规范译文:
 * https://malcolmyu.github.io/2015/06/12/Promises-A-Plus/#note-4
 */

// promise 三个状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function Promise(excutor) {
  let that = this; // 缓存当前promise实例对象
  that.status = PENDING; // 初始状态
  that.value = undefined; // fulfilled状态时 返回的信息
  that.reason = undefined; // rejected状态时 拒绝的原因
  that.onFulfilledCallbacks = []; // 存储fulfilled状态对应的onFulfilled函数
  that.onRejectedCallbacks = []; // 存储rejected状态对应的onRejected函数

  function resolve(value) { // value成功态时接收的终值
    if (value instanceof Promise) {
      return value.then(resolve, reject);
    }

    // 为什么resolve 加setTimeout?
    // 2.2.4规范 onFulfilled 和 onRejected 只允许在 execution context 栈仅包含平台代码时运行.
    // 注1 这里的平台代码指的是引擎、环境以及 promise 的实施代码。实践中要确保 onFulfilled 和 onRejected 方法异步执行，
    // 且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。

    setTimeout(() => {
      // 调用resolve 回调对应onFulfilled函数
      if (that.status === PENDING) {
        // 只能由pending状态 => fulfilled状态 (避免调用多次resolve reject)
        that.status = FULFILLED;
        that.value = value;
        that.onFulfilledCallbacks.forEach(cb => cb(that.value));
      }
    });
  }

  function reject(reason) { // reason失败态时接收的拒因
    setTimeout(() => {
      // 调用reject 回调对应onRejected函数
      if (that.status === PENDING) {
        // 只能由pending状态 => rejected状态 (避免调用多次resolve reject)
        that.status = REJECTED;
        that.reason = reason;
        that.onRejectedCallbacks.forEach(cb => cb(that.reason));
      }
    });
  }

  // 捕获在excutor执行器中抛出的异常
  // new Promise((resolve, reject) => {
  //     throw new Error('error in excutor')
  // })
  try {
    excutor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

/**
 * resolve中的值几种情况：
 * 1.普通值
 * 2.promise对象
 * 3.thenable对象/函数
 */

/**
 * 对resolve 进行改造增强 针对resolve中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {  // 如果从onFulfilled中返回的x 就是promise2 就会导致循环引用报错
    return reject(new TypeError('循环引用'));
  }

  let called = false; // 避免多次调用
  // 如果x是一个promise对象 （该判断和下面 判断是不是thenable对象重复 所以可有可无）
  if (x instanceof Promise) { // 获得它的终值 继续resolve
    if (x.status === PENDING) { // 如果为等待态需等待直至 x 被执行或拒绝 并解析y值
      x.then(y => {
        resolvePromise(promise2, y, resolve, reject);
      }, reason => {
        reject(reason);
      });
    } else { // 如果 x 已经处于执行态/拒绝态(值已经被解析为普通值)，用相同的值执行传递下去 promise
      x.then(resolve, reject);
    }
    // 如果 x 为对象或者函数
  } else if (x != null && ((typeof x === 'object') || (typeof x === 'function'))) {
    try { // 是否是thenable对象（具有then方法的对象/函数）
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, reason => {
          if (called) return;
          called = true;
          reject(reason);
        })
      } else { // 说明是一个普通对象/函数
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

/**
 * [注册fulfilled状态/rejected状态对应的回调函数]
 * @param  {function} onFulfilled fulfilled状态时 执行的函数
 * @param  {function} onRejected  rejected状态时 执行的函数
 * @return {function} newPromsie  返回一个新的promise对象
 */
Promise.prototype.then = function (onFulfilled, onRejected) {
  const that = this;
  let newPromise;
  // 处理参数默认值 保证参数后续能够继续执行
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : value => value;
  onRejected =
    typeof onRejected === "function" ? onRejected : reason => {
      throw reason;
    };

  // then里面的FULFILLED/REJECTED状态时 为什么要加setTimeout ?
  // 原因:
  // 其一 2.2.4规范 要确保 onFulfilled 和 onRejected 方法异步执行(且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行) 所以要在resolve里加上setTimeout
  // 其二 2.2.6规范 对于一个promise，它的then方法可以调用多次.（当在其他程序中多次调用同一个promise的then时 由于之前状态已经为FULFILLED/REJECTED状态，则会走的下面逻辑),所以要确保为FULFILLED/REJECTED状态后 也要异步执行onFulfilled/onRejected

  // 其二 2.2.6规范 也是resolve函数里加setTimeout的原因
  // 总之都是 让then方法异步执行 也就是确保onFulfilled/onRejected异步执行

  // 如下面这种情景 多次调用p1.then
  // p1.then((value) => { // 此时p1.status 由pending状态 => fulfilled状态
  //     console.log(value); // resolve
  //     // console.log(p1.status); // fulfilled
  //     p1.then(value => { // 再次p1.then 这时已经为fulfilled状态 走的是fulfilled状态判断里的逻辑 所以我们也要确保判断里面onFuilled异步执行
  //         console.log(value); // 'resolve'
  //     });
  //     console.log('当前执行栈中同步代码');
  // })
  // console.log('全局执行栈中同步代码');
  //

  if (that.status === FULFILLED) { // 成功态
    return newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onFulfilled(that.value);
          resolvePromise(newPromise, x, resolve, reject); // 新的promise resolve 上一个onFulfilled的返回值
        } catch (e) {
          reject(e); // 捕获前面onFulfilled中抛出的异常 then(onFulfilled, onRejected);
        }
      });
    })
  }

  if (that.status === REJECTED) { // 失败态
    return newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onRejected(that.reason);
          resolvePromise(newPromise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  if (that.status === PENDING) { // 等待态
    // 当异步调用resolve/rejected时 将onFulfilled/onRejected收集暂存到集合中
    return newPromise = new Promise((resolve, reject) => {
      that.onFulfilledCallbacks.push((value) => {
        try {
          let x = onFulfilled(value);
          resolvePromise(newPromise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      that.onRejectedCallbacks.push((reason) => {
        try {
          let x = onRejected(reason);
          resolvePromise(newPromise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
};

/**
 * Promise.all Promise进行并行处理
 * 参数: promise对象组成的数组作为参数
 * 返回值: 返回一个Promise实例
 * 当这个数组里的所有promise对象全部变为resolve状态的时候，才会resolve。
 */
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let done = gen(promises.length, resolve);
    promises.forEach((promise, index) => {
      promise.then((value) => {
        done(index, value)
      }, reject)
    })
  })
}

function gen(length, resolve) {
  let count = 0;
  let values = [];
  return function (i, value) {
    values[i] = value;
    if (++count === length) {
      console.log(values);
      resolve(values);
    }
  }
}

/**
 * Promise.race
 * 参数: 接收 promise对象组成的数组作为参数
 * 返回值: 返回一个Promise实例
 * 只要有一个promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理(取决于哪一个更快)
 */
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then(resolve, reject);
    });
  });
}

// 用于promise方法链时 捕获前面onFulfilled/onRejected抛出的异常
Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
}

Promise.resolve = function (value) {
  return new Promise(resolve => {
    resolve(value);
  });
}

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
}

/**
 * 基于Promise实现Deferred的
 * Deferred和Promise的关系
 * - Deferred 拥有 Promise
 * - Deferred 具备对 Promise的状态进行操作的特权方法（resolve reject）
 *
 *参考jQuery.Deferred
 *url: http://api.jquery.com/category/deferred-object/
 */
Promise.deferred = function () { // 延迟对象
  let defer = {};
  defer.promise = new Promise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });
  return defer;
}

/**
 * Promise/A+规范测试
 * npm i -g promises-aplus-tests
 * promises-aplus-tests Promise.js
 */

try {
  module.exports = Promise
} catch (e) {
}


class Routers {
  constructor() {
    this.routes = {};
    this.refresh = this.refresh.bind(this);
    window.addEventListener('load', this.refresh, false);
    window.addEventListener('popState', function (e) {
      this.refresh(e.state.path), false
    });
  }

  route(path, callback) {
    history.pushState({path: path}, null, path);
    this.routes[path] = callback || function () {};
  }

  refresh(path) {
    this.routes[path]();
  }
}

window.Router = new Routers();
const content = document.querySelector('body');
const ul = document.querySelector('ul');

// change Page anything
function changeText(text) {
  content.innerHtml = text;
}

Router.route('/', function () {
  changeText('yellow');
});
Router.route('/two', function () {
  changeText('two');
});
Router.route('/three', function () {
  changeText('three');
});

ul.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    Router.go(e.target.getAttribute('href'));
  }
});


//输入一个url之后发生了什么
/*
dns解析：当输入url之后，我们会去找到这个url对应的ip地址，ip地址就是每台服务器上的唯一标识，所以就能去找到对应的服务器，
dns的匹配是一个递归的过程

TCP连接  三次握手 四次挥手

http连接（如果是https的话还有进行一个TLS/SSL握手，https虽然会更安全，但是握手和加密过程会耗费时间，即产生性能问题）

http请求（即前端一直在讲的请求，请求响应）

这里ajax有一个readyState的，和状态码是不一样的，返回状态码
readyState属性：响应返回成功的时候得到通知。
（1）0：请求未初始化，open还没有调用。
（2）1：服务器连接已建立，open已经调用了。
（3）2：请求已经接收，也就是接收到头信息了。
（4）3：请求处理中，也就是接收到响应主体了。
（5）4：请求已完成，且响应已就绪，也就是响应完成了。

状态码是由3位数组成，第一个数字定义了响应的类别，且有五种可能取值:
  1xx：指示信息–表示请求已接收，继续处理。
2xx：成功–表示请求已被成功接收、理解、接受。
3xx：重定向–要完成请求必须进行更进一步的操作。
4xx：客户端错误–请求有语法错误或请求无法实现。
5xx：服务器端错误–服务器未能实现合法的请求。
平时遇到比较常见的状态码有:200, 204, 301, 302, 304, 400, 401, 403, 404, 422, 500(分别表示什么请自行查找)。

这里会涉及到一个缓存的东西，没接触过，好像很复杂

请求到html，css，js文件之后
主渲染阶段

html + css + js

html
css
js

页面的解析工作是在 Renderer 进程中进行的，Renderer 进程通过在主线程中持有的 Blink 实例边接收边解析 HTML 内容（图 6），
每次从网络缓冲区中读取 8KB 以内的数据。浏览器自上而下逐行解析 HTML 内容，经过词法分析、语法分析，构建 DOM 树。
当遇到外部 CSS 链接时，主线程调用网络请求模块异步获取资源，不阻塞而继续构建 DOM 树。当 CSS 下载完毕后，主线程在合适
的时机解析 CSS 内容，经过词法分析、语法分析，构建 CSSOM 树。浏览器结合 DOM 树和 CSSOM 树构建 Render 树，并计算布局属性
，每个 Node 的几何属性和在坐标系中的位置，最后进行绘制展示在屏幕上。当遇到外部 JS 链接时，主线程调用网络请求模块异步
获取资源，由于 JS 可能会修改 DOM 树和 CSSOM 树而造成回流和重绘，此时 DOM 树的构建(和 CSSOM 树？)是处于阻塞状态的。但主线程并不会挂起
，浏览器会使用一个轻量级的扫描器去发现后续需要下载的外部资源，提前发起网络请求，而脚本内部的资源不会识别，比如 document.write。
当 JS 下载完毕后，浏览器调用 V8 引擎在 Script Streamer 线程中解析、编译 JS 内容，并在主线程中执行（图 7）。

script放在头部还是底部

script defer async

document.createElement

使用 document.createElement 创建的 script 默认是异步的，示例如下。
console.log(document.createElement("script").async); // true

DOMContentLoaded | window.onload | document.ready
*/




