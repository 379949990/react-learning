import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// axios全局配置
import axios from "axios";
axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 3000;
axios.defaults.headers.common["token"] = "asdasdasdasdasdsa";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
