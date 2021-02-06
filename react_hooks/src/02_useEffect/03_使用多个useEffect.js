import React, { useState, useEffect } from 'react'

export default function UseEffects() {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false)

  // 使用多个useEffect时会依次执行;
  // useEffect的第二个参数没有时每次render都会全部重新执行，但事件订阅、网络请求通常不需要重复执行；
  // useEffect的第二个参数为一个只读数组，传入更新的依赖，依赖被修改时才会重新渲染，否则只有在第一次加载时渲染;
  useEffect(() => {
    console.log("修改DOM");
  }, [counter])

  useEffect(() => {
    console.log("订阅事件");
  }, [])

  useEffect(() => {
    console.log("网络请求");
  }, [])

  return (
    <div>
      <h2>useEffects</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button><br/>
      <h3>{isLoading ? "FLuoxetine" : "请登录"}</h3>
      <button onClick={e => setIsLoading(!isLoading)}>{isLoading ? "注销" : "登录"}</button>
    </div>
  )
}
