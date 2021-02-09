import React, { useState, useCallback, memo } from "react";

const HYButton = memo((props) => {
  console.log("HYButton重新渲染-" + props.title);
  return <button onClick={props.increment}>+1</button>;
});

export default function UseCallbackDemo_2() {
  console.log("UseCallbackDemo_2 重新渲染");

  const [counter, setCounter] = useState(0);
  const [isShow, setIsShow] = useState(true);

  const increment_1 = () => {
    // console.log("执行了increment_1函数");
    setCounter(counter + 1);
  };

  // useCallback接收两个参数(回调函数, 依赖项);
  // 无依赖时首次加载时执行，之后不每次渲染都执行，返回一个记忆的值;
  // const increment_2 = useCallback(() => {
  //   console.log("执行了increment_2函数");
  //   setCounter(counter + 1);
  // }, []);

  // useCallback在何时进行使用？
  // 场景：在将一个组件中的函数，传递给子元素进行回调使用时，使用useCallback对函数进行使用；

  // 有依赖时，依赖发生改变时会执行;
  const increment_2 = useCallback(() => {
    // console.log("执行了increment_2函数");
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div>
      <h3>UseCallbackDemo</h3>
      <h3>Counter: {counter}</h3>
      {/* <button onClick={(e) => increment_1()}>+1</button>
      <button onClick={(e) => increment_2()}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button><br/> */}
      <HYButton title="btn_1" increment={increment_1} />
      <HYButton title="btn_2" increment={increment_2} />
      <br />

      <button onClick={(e) => setIsShow(!isShow)}>切换</button>
    </div>
  );
}
