import React, { useState } from "react";

export default function CounterHook() {
  // hook: useState;
  // -> 本身是一个函数，来自于react包；
  // 返回值和参数：
  //    -> 给创建的状态一个默认值；
  //    -> 返回值是一个数组，只有两个元素，第一个为state，第二个是一个函数，设置状态(setState)；

  const [counter, setCounter] = useState(0);
  const [author, setAuthor] = useState("李诞");
  const [booksList, setBooksList] = useState(["《笑场》", "《冷场》", "《候场》"]);

  return (
    <div>
      <h2>Counter_Hooks</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
      <p>-------------------------------------------------</p>
      <h3>作者：{author}</h3>
      <ul>
        {booksList.map((item, index) => {
          return <li key={`${index}-${item}`}>{item}</li>;
        })}
      </ul>
      <button onClick={(e) => setBooksList([...booksList, "FLuoxetine"])}>Add</button>
      {/* <p>---------------------</p>
      <form>
        <input type="text" value={newBook}/>
        <input type="submit" value="Add"/>
      </form> */}
      <p>-------------------------------------------------</p>
      <h3>Counter: {counter}</h3>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
    </div>
  );
}
