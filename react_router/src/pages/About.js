import React, { PureComponent } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../router";

// import AboutHistory from "./About/about-history";
// import AboutPerfession from "./About/about-perfession";
// import AboutContact from "./About/about-contact";
// import AboutCulture from "./About/about-culture";
// import JoinUs from "./JoinUs";

import "./nav.css";

export default class About extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>About</h2>
        <hr />
        <div className="navBar">
          <NavLink exact to="/about" className="navBar-item" activeClassName={"navBar-item-active_2"}>
            企业历史
          </NavLink>
          <NavLink to="/about/culture" className="navBar-item" activeClassName={"navBar-item-active_2"}>
            企业文化
          </NavLink>
          <NavLink to="/about/perfession" className="navBar-item" activeClassName={"navBar-item-active_2"}>
            核心业务
          </NavLink>
          <NavLink to="/about/contact" className="navBar-item" activeClassName={"navBar-item-active_2"}>
            联系我们
          </NavLink>
          <button onClick={(e) => this.toJoinUs()}>Join Us</button>

          {/* <Switch>
            <Route exact path="/about" component={AboutHistory}></Route>
            <Route path="/about/perfession" component={AboutPerfession}></Route>
            <Route path="/about/contact" component={AboutContact}></Route>
            <Route path="/about/culture" component={AboutCulture}></Route>
            <Route path="/about/joinus" component={JoinUs}></Route>
          </Switch> */}
          {renderRoutes(routes[1].routes)}
        </div>
        <hr />
      </div>
    );
  }
  toJoinUs() {
    this.props.history.push("/about/joinus");
  }
}
