import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";

export default class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  render() {
    return this.state.isLogin === true ? (
      <div>
        <h2>User</h2>
        <h4>用户名：FLuoxetine</h4>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}
