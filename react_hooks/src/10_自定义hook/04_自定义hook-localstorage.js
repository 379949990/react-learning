import React, { useState, useEffect } from "react";

import useLocalStorage from './hooks/local-storage-hook';

export default function CustomizedHookDemo_4() {
  // const [name, setName] = useState(() => {
  //   const user = JSON.parse(window.localStorage.getItem("user"));
  //   return user ? user.name : '';
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("user", JSON.stringify({name: name, height: 1.86}))
  // }, [name])

  const [name, setName] = useLocalStorage("user")

  return (
    <div>
      <h3>CustomizedHookDemo_4</h3>
      <button onClick={e => setName("FLuoxetine")}>set name</button>
      <h4>name: {name}</h4>
    </div>
  );
}
