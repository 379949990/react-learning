import React, { useState, useEffect, useLayoutEffect } from "react";

export default function UseLayoutEffectDemo_1() {
  const [counter, setCounter] = useState(10);

  // useEffect会在更新DOM之后执行，此时页面counter会闪烁，因为它实际上被渲染了两次；
  // useEffect(() => {
  //   if (counter === -1) {
  //     setCounter(Math.random());
  //   }
  // }, [counter]);

  // useLayoutEffect会在更新DOM之前执行，会阻塞代码执行，此时counter只被渲染了一次；
  useLayoutEffect(() => {
    if (counter === -1) {
      setCounter(Math.random());
    }
  }, [counter]);

  return (
    <div>
      <h3>UseLayoutEffectDemo_1</h3>
      <h3>Counter: {counter}</h3>
      <button onClick={(e) => setCounter(-1)}>random</button>
    </div>
  );
}
