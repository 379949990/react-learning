import React, { useState, useCallback, useMemo } from "react";

export default function UseCallbackDemo() {
  const [counter, setCounter] = useState(0);

  const increment_1 = () => {
    console.log("执行了increment_1函数");
    setCounter(counter + 1);
  };

  // useCallback接收两个参数(回调函数, 依赖项);
  // 无依赖时首次加载时执行，之后不每次渲染都执行，返回一个记忆的值;
  // const increment_2 = useCallback(() => {
  //   console.log("执行了increment_1函数");
  //   setCounter(counter + 1);
  // }, []);

  // 有依赖时，依赖发生改变时会执行;
  const increment_2 = useCallback(() => {
    console.log("执行了increment_2函数");
    setCounter(counter + 1);
  }, [counter]);

  // useCallback对函数进行优化，useMemo对返回值进行优化；
  // useCallback转为useMemo：
  const increment_3 = useMemo(() => {
    return () => {
      console.log("执行了increment_3函数");
      setCounter(counter + 1);
    };
  }, [counter]);

  return (
    <div>
      <h3>UseCallbackDemo</h3>
      <h3>Counter: {counter}</h3>
      <button onClick={(e) => increment_1()}>+1</button>
      <button onClick={(e) => increment_2()}>+1</button>
      <button onClick={(e) => increment_3()}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
    </div>
  );
}
