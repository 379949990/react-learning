import React, { useRef, forwardRef } from "react";

const HYInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref}/>;
})

export default function UseForwardRefDemo() {
  const inputRef = useRef();

  return (
    <div>
      <h3>UseForwardRefDemo</h3>
      <HYInput ref={inputRef} />
      <button onClick={(e) => inputRef.current.focus()}>FOCUS</button>
    </div>
  );
}
