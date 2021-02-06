import React, { PureComponent } from "react";

import axios from "axios";
import axiosInstance_1 from "./http/request";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
    };
  }

  async componentDidMount() {
    // axios-get请求
    axios({
      url: "https://httpbin.org/get",
      params: {
        name: "FLuoxetine",
        height: 1.86,
        age: 24,
      },
      method: "get",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios-post
    axios({
      url: "https://httpbin.org/post",
      data: {
        name: "Huang Cong",
        height: 1.88,
        age: 25,
      },
      method: "post",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios.get()
    axios
      .get("https://httpbin.org/get", {
        params: {
          name: "FLuoxetine",
          height: 1.86,
          age: 24,
        },
      })
      .then(console.log);

    // axios.post()
    axios
      .post("https://httpbin.org/post", {
        name: "FLuoxetine",
        height: 1.86,
        age: 24,
      })
      .then(console.log);

    // async/await
    try {
      const result = await axios.post("https://httpbin.org/post", {
        name: "FLuoxetine",
        height: 1.88,
        age: 24,
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }

    // 创建多个axios实例
    // const axiosInstance_1 = axios.create({
    //   baseURL: "http://fluoxetine.pub",
    //   timeout: 5000,
    //   headers: {},
    // });
    // const axiosInstance_2 = axios.create({
    //   baseURL: "https://httpbin.org",
    //   timeout: 3000,
    //   headers: {},
    // });

    // axios拦截器
    // 请求拦截：
    axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        // 请求发生错误时操作
      }
    );
    // 响应拦截：
    axios.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        // 请求发生错误时操作
        if (err && err.response.status) {
          switch (err.response.status) {
            case 400:
              console.log("请求错误");
              break;
            case 401:
              console.log("未授权");
              break;
            default:
          }
        }
        return err;
      }
    );

    // axiosInstance_1
    axiosInstance_1({
      url: "https://httpbin.org/get",
      params: {
        name: "FLuoxetine",
        height: 1.86,
        age: 24,
      },
      method: "get",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // this.setState({
    //   bookList: [...this.state.bookList, ...res]
    // })
  }

  render() {
    return (
      <div>
        <h2>Hello, FLuoxetine!</h2>
      </div>
    );
  }
}
