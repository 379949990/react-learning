import React, { useState, memo, useMemo } from "react";

const HYInfo = memo((props) => {
  console.log("HYInfo 被重新渲染");

  return (
    <h3>
      name: {props.info.name}, height: {props.info.height}
    </h3>
  );
});

export default function UseMemoDemo_2() {
  console.log("UseMemoDemo_2 被重新渲染");

  const [show, setShow] = useState(true);
  // const info = { name: "FLuoxetine", height: 1.86 };
  const info = useMemo(() => {
    return { name: "FLuoxetine", height: 1.86 }
  }, [])

  return (
    <div>
      <HYInfo info={info} />
      <button onClick={(e) => setShow(!show)}>重新渲染</button>
    </div>
  );
}
