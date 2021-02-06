import React, { PureComponent } from "react";

import axios from "axios";

import { connect } from "react-redux";
import { incAction, addAction, changeRecommendsAction, changeBannersAction } from "../store/actionCreators";

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then((res) => {
      const data = res.data.data;
      console.log(data);
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommends(data.recommend.list);
    });
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
  changeBanners: function (banners) {
    dispatch(changeBannersAction(banners));
  },
  changeRecommends: function (recommends) {
    dispatch(changeRecommendsAction(recommends));
  },
});
export default connect(mapStatetoProps, mapDispatchToProps)(Home);
