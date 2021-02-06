import React, { useState, useEffect } from "react";

export default function ChangeWebTitleHook() {
  const [counter, setCounter] = useState(0);

  // useEffect可传入两个参数：
  //    1, 一个回调函数；
  //    2, readOnlyArray；
  useEffect(() => {
    // componentDidMount,componentDidUpdate将执行以下代码;
    document.title = `React Hook App - ${counter}`;
    console.log("订阅一些事件-Hook");

    return () => {
      // useEffect可返回一个回调函数，componentWillUnmount时执行以下代码;
      console.log("取消事件订阅-Hook");
    }
  }, [])

  return (
    <div>
      <h2>Counter_Class_Hook</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
    </div>
  );
}
