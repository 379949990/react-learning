import React, { useEffect, useState } from "react";

const Home = (props) => {
  // useEffect(() => {
  //   console.log("Home 组件被创建。");
  //   return () => {
  //     console.log("Home 组件被销毁。");
  //   };
  // }, []);
  useLoggingLife("Home");

  return <h4>Home组件</h4>;
};
const Profile = (props) => {
  // useEffect(() => {
  //   console.log("Profile 组件被创建。");
  //   return () => {
  //     console.log("Profile 组件被销毁。");
  //   };
  // }, []);
  useLoggingLife("Profile");
  return <h4>Profile组件</h4>;
};

export default function CustomizedHookDemo_1() {
  const [show, setshow] = useState(true);

  // useEffect(() => {
  //   console.log("CustomizedHookDemo_1 组件被创建。");
  //   return () => {
  //     console.log("CustomizedHookDemo_1 组件被销毁。");
  //   };
  // }, []);
  useLoggingLife("CustomizedHookDemo_1");

  return (
    <div>
      <h3>CustomizedHookDemo_1</h3>
      <button onClick={(e) => setshow(!show)}>切换</button>
      {show && <Home />}
      {!show && <Profile />}
    </div>
  );
}

function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name} 组件被创建。`);
    return () => {
      console.log(`${name} 组件被销毁。`);
    };
  }, []);
}