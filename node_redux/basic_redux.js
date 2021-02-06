// 1.导入redux；
// const redux = require('redux');
import redux from "redux";

const initialState = {
  counter: 0,
};

// store
const store = redux.createStore();

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
      break;
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
      break;
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num };
      break;
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num };
      break;
    default:
      return state;
  }
}

// 订阅store的修改；
store.subscribe(() => {
  console.log("store发生了修改");
  console.log("counter: ", store.getState().counter);
});

// actions
const action_1 = { type: "INCREMENT" };
const action_2 = { type: "DECREMENT" };

const action_3 = { type: "ADD_NUMBER", num: 5 };
const action_4 = { type: "SUB_NUMBER", num: 12 };

// 派发action
store.dispatch(action_1);
store.dispatch(action_2);
store.dispatch(action_2);
store.dispatch(action_3);
store.dispatch(action_4);
