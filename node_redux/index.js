import store from "./store/index.js";
import { addAction, decAction, incAction, subAction } from "./store/actionCreators.js";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addAction(10));
store.dispatch(addAction(-5));
store.dispatch(addAction(2));
store.dispatch(subAction(12));
store.dispatch(subAction(-1));
store.dispatch(incAction());
store.dispatch(decAction());
store.dispatch(incAction());
store.dispatch(decAction());
