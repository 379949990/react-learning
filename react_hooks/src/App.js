import React, { createContext, useState } from "react";

// import CounterClass from './01_体验hooks/01_counter-class';
// import CounterHooks from './01_体验hooks/02_counter-hook';
// import ChangeWebTitle from "./02_useEffect/01_changeWebTitle-class";
// import ChangeWebTitleHook from "./02_useEffect/02_changeWebTitle-hook";
// import UseEffects from "./02_useEffect/03_使用多个useEffect";
// import UseContext from "./03_useContext/01_useContext";
// import UseReducerDemo from "./04_useReducer/01_useReducerDemo";
// import UseCallbackDemo from "./05_useCallback/01_useCallbackDemo-不能进行性能优化 copy";
// import UseCallbackDemo_2 from "./05_useCallback/02_useCallbackDemo-进行性能优化";
// import UseMemoDemo_1 from "./06_useMemo/01_useMemoDemo-复杂计算的应用";
import UseMemoDemo_2 from "./06_useMemo/02_useMemoDemo-传入子组件应用类型";

// export const UserContext = createContext();
// export const ThemeContext = createContext();

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

      {/* <UserContext.Provider value={{name: "FLuoxetine", height: 1.86}}>
        <ThemeContext.Provider value={{color: "skyblue"}}>
          <UseContext />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* <UseReducerDemo /> */}

      {/* <UseCallbackDemo /> */}

      {/* <UseCallbackDemo_2 /> */}

      {/* <UseMemoDemo_1 /> */}
      <UseMemoDemo_2 />
    </div>
  );
}
