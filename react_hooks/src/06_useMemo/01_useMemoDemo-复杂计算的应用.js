import React, { useState, useMemo } from "react";

function calcNumber(num) {
  console.log("calcNumber重新执行");
  let totalNum = 0;
  for (let i = 1; i <= num; i++) {
    totalNum += i;
  }
  return totalNum;
}

export default function UseMemoDemo_1() {
  const [counter, setCounter] = useState(1);
  const [isShow, setIsShow] = useState(true);

  // const totalNum = calcNumber(counter);
  const totalNum = useMemo(() => calcNumber(counter), [counter]);

  return (
    <div>
      <h3>UseMemoDemo</h3>
      <h3>Counter: {counter}</h3>
      <h3>TotalNum: {totalNum}</h3>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
      <br />
      <button onClick={(e) => setIsShow(!isShow)}>重新渲染</button>
    </div>
  );
}
