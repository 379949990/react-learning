import React, { useState, useEffect } from "react";

import useScrollPosition from "./hooks/scroll-position-hook";

export default function CustomizedHookDemo_3() {
  // const [scrollY, setScrollY] = useState(window.scrollY);

  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const scrollY = useScrollPosition();

  return (
    <div>
      <h4 style={{ position: "fixed", top: "60px", border: "1px solid blue",borderRadius: "4px", padding: "6px", width: "100px", textAlign: "center" }}>{`scroll: ${Math.round(scrollY)}`}</h4>
      <div style={{ padding: "1000px 0" }}>
        <h3>CustomizedHookDemo_3</h3>
      </div>
    </div>
  );
}
