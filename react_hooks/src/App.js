import React, { createContext, useImperativeHandle, useState } from "react";

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
// import UseMemoDemo_2 from "./06_useMemo/02_useMemoDemo-传入子组件应用类型";
// import UseRefDemo_1 from "./07_useRef/01_useRefDemo_1-引用DOM";
// import UseRefDemo_2 from "./07_useRef/02_useRef-引用其他数据";
// import UseForwardRefDemo from "./08_useImperativeHandle/01_forwardRef";
// import UseImperativeHandleDemo from "./08_useImperativeHandle/02_useImperativeHandle用法";
// import UseLayoutEffectDemo_1 from "./09_useLayoutEffect/01_useEffect-修改counter";
// import CustomizedHookDemo_1 from "./10_自定义hook/01_认识自定义hook";
// import CustomizedHookDemo_2 from "./10_自定义hook/02_自定义hook-context共享";
// import CustomizedHookDemo_3 from "./10_自定义hook/03_自定义hook-获取滚动位置";
import CustomizedHookDemo_4 from "./10_自定义hook/04_自定义hook-localstorage";

export const UserContext = createContext();
// export const ThemeContext = createContext();

export const TokenContext = createContext();

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
      {/* <UseMemoDemo_2 /> */}

      {/* <UseRefDemo_1 /> */}
      {/* <UseRefDemo_2 /> */}

      {/* <UseForwardRefDemo /> */}
      {/* <UseImperativeHandleDemo /> */}

      {/* <UseLayoutEffectDemo_1 /> */}

      {/* <CustomizedHookDemo_1/> */}
      {/* <UserContext.Provider value={{name: "FLuoxetine", height: 1.86}}>
        <TokenContext.Provider value={{token: "kfsdjkfsbfabfnsNFJANSFSNFNSnsdjknf"}}>
          <CustomizedHookDemo_2 />
        </TokenContext.Provider>
      </UserContext.Provider> */}
      {/* <CustomizedHookDemo_3 /> */}
      <CustomizedHookDemo_4 />
    </div>
  );
}
