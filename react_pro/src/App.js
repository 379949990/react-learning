import React, { PureComponent, Fragment, StrictMode } from "react";

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <Fragment>
        <h2>当前计数：{this.state.counter}</h2>
        {/* 开启严格模式 */}
        <StrictMode>
          <button onClick={(e) => this.increment()}>+1</button>
        </StrictMode>
      </Fragment>

      // Fragment简写短语法(有的情况不能使用短语法)：
      // <>
      //   <h2>当前计数：{this.state.counter}</h2>
      //   <StrictMode>
      //     <button onClick={(e) => this.increment()}>+1</button>
      //   </StrictMode>
      // </>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}
