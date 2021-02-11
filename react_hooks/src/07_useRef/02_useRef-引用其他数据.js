import React, { useState, useRef, useEffect } from "react";

export default function UseRefDemo_2() {
  const [counter, setCounter] = useState(0);

  // useRef也可用于保存数据，这个保存的数据将在整个生命周期中保持不变;
  const numRef = useRef(counter);

  // 使用useRef保存counter上一次变化的值:
  useEffect(() => {
    numRef.current = counter;
  }, [counter])
  return (
    <div>
      <h3>UseRefDemo_2</h3>
      <h4>counter: {counter}</h4>
      <h4>numRef.current: {numRef.current}</h4>
      <button onClick={(e) => setCounter(counter + 10)}>+10</button>
    </div>
  );
}
