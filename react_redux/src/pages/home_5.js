import React, { PureComponent } from "react";

import { connect } from "react-redux";
import { incAction, addAction } from "../store/counter/actionCreators";
import { fetchHomeMultidataAction } from "../store/home/actionCreators";

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata()
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h4>当前计数：{this.props.counter}</h4>
        <button onClick={(e) => this.props.increment()}>+1</button>
        <button onClick={(e) => this.props.addNumber(5)}>+5</button>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    counter: state.counterInfo.counter,
  };
};
const mapDispatchToProps = (dispatch) => ({
  increment: function () {
    dispatch(incAction());
  },
  addNumber: function (num) {
    dispatch(addAction(num));
  },
  getHomeMultidata: function() {
    dispatch(fetchHomeMultidataAction);
  }
});
export default connect(mapStatetoProps, mapDispatchToProps)(Home);
