import React from "react";

import { connect } from "../utils/connect";
import { incAction, addAction } from "../store/actionCreators";

function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <h4>当前计数：{props.counter}</h4>
      <button onClick={(e) => props.increment()}>+1</button>
      <button onClick={(e) => props.addNumber(5)}>+5</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => ({
  increment: function () {
    dispatch(incAction());
  },
  addNumber: function (num) {
    dispatch(addAction(num));
  },
});
export default connect(mapStatetoProps, mapDispatchToProps)(Home);
