import React from "react";

import { connect } from "react-redux";
import { decAction, subAction } from "../store/counter/actionCreators";

function About(props) {
  return (
    <div>
      <h2>About</h2>
      <h4>当前计数：{props.counter}</h4>
      <button onClick={(e) => props.decrement()}>-1</button>
      <button onClick={(e) => props.subNumber(5)}>-5</button>
      <br/>
      <h4>Banner</h4>
      <ul>
        {
          props.banners.map((item, index) => {
            return <li key={item.acm}>{`${index} - ${item.title} : ${item.link}`}</li>
          })
        }
      </ul>
      <br/>
      <h4>Recommends</h4>
      <ul>
        {
          props.recommends.map((item, index) => {
            return <li key={item.acm}>{`${index} - ${item.title} : ${item.link}`}</li>
          })
        }
      </ul>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    counter: state.counterInfo.counter,
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends,
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
