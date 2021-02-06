import React, { PureComponent } from 'react'

export default class ChangeWebTitle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount(){
    document.title = `React App - ${this.state.counter}`;
    console.log("订阅一些事件");
  }
  componentDidUpdate(){
    document.title = `React App - ${this.state.counter}`;
  }
  componentWillUnmount() {
    console.log("取消事件订阅");
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Counter_Class</h2>
        <h3>Counter: {counter}</h3>
        <button onClick={(e) => this.calculate(1)}>+1</button>
        <button onClick={(e) => this.calculate(-1)}>-1</button>
      </div>
    );
  }
  calculate(num) {
    this.setState({
      counter: this.state.counter + num,
    });
  }
}
