import React, { PureComponent, useRef } from "react";

// 函数式组件不能使用React.useRef()，需要使用React.forwardRef();

class Text_1 extends PureComponent {
  render() {
    return <h3>TEXT_1</h3>
  }
}
function Text_2() {
  return <h3>TEXT_2</h3>
}

export default function UseRefDemo_1() {
  // 使用useRef保存DOM;
  const titleRef = useRef();
  const inputRef = useRef();
  // 使用useRef保存组件;
  const textRef_1 = useRef();
  const textRef_2 = useRef();

  function changeDom() {
    console.log("titleRef.current: ", titleRef.current);
    titleRef.current.innerHTML = "FLuoxetine";
    inputRef.current.focus();
    console.log("textRef_1.current: ", textRef_1.current);
    console.log("textRef_2.current: ", textRef_2.current);
  }

  return (
    <div>
      <h3 ref={titleRef}>UseRefDemo_1</h3>
      <input ref={inputRef} />
      <Text_1 ref={textRef_1}/>
      <Text_2 ref={textRef_2}/>
      <button onClick={(e) => changeDom()}>CHANGE DOM</button>
    </div>
  );
}
