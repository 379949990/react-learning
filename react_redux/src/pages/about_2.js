import React from "react";

import { connect } from "../utils/connect";
import { decAction, subAction } from "../store/actionCreators";

function About(props) {
  return (
    <div>
      <h2>About</h2>
      <h4>当前计数：{props.counter}</h4>
      <button onClick={(e) => props.decrement()}>-1</button>
      <button onClick={(e) => props.subNumber(5)}>-5</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => ({
  decrement: function () {
    dispatch(decAction());
  },
  subNumber: function (num) {
    dispatch(subAction(num));
  },
});
export default connect(mapStatetoProps, mapDispatchToProps)(About);
