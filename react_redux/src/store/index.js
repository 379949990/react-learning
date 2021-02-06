import { createStore, applyMiddleware, compose } from "redux";
import thunkMidWare from "redux-thunk";
import createSagaMidWare from "redux-saga";

import saga from "./saga";
import reducer from "./reducer.js";

//应用一些中间件
// 引入thunkMidWare中间件；
// 创建sagaMidWare中间件；
const sagaMidWare = createSagaMidWare();

const storeEnhancer = applyMiddleware(thunkMidWare, sagaMidWare);

// 将store暴露给浏览器的redux dev tools插件；
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers(storeEnhancer));

// 运行sagaMidWare中间件；
sagaMidWare.run(saga);

export default store;
