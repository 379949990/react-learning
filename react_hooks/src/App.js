import React, { useState } from "react";

// import CounterClass from './01_体验hooks/01_counter-class';
// import CounterHooks from './01_体验hooks/02_counter-hook';
// import ChangeWebTitle from "./02_useEffect/01_changeWebTitle-class";
// import ChangeWebTitleHook from "./02_useEffect/02_changeWebTitle-hook";
// import UseEffects from "./02_useEffect/03_使用多个useEffect";
import UseContext from "./03_useContext/01_useContext";

export default function App() {
  // const [show, setShow] = useState(true);
  return (
    <div>
      <h2>Hello, FLuoxetine!</h2>
      <hr />
      {/* <CounterClass/><hr/>
      <CounterHooks/> */}

      {/* {show === true ? <ChangeWebTitle /> : <ChangeWebTitleHook />}
      <button onClick={e => setShow(!show)}>切换</button> */}

      {/* <UseEffects /> */}

      <UseContext />
    </div>
  );
}
