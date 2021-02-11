import React, { useRef, forwardRef, useImperativeHandle } from "react";

const HYInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // useImperativeHandle(ref, callback func);
  // 使子组件不完全暴露给父组件，只提供需要的部分操作;
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }), [inputRef.current]);
  return <input type="text" ref={inputRef} />;
});

export default function UseImperativeHandleDemo() {
  const inputRef = useRef();

  return (
    <div>
      <h3>UseImperativeHandleDemo</h3>
      <HYInput ref={inputRef} />
      <button onClick={(e) => inputRef.current.focus()}>FOCUS</button>
    </div>
  );
}
