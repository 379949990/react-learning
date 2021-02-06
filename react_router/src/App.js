import React, { PureComponent } from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import "./pages/nav.css";
import routes from './router'

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Profile from "./pages/Profile";
// import User from "./pages/User";
// import NoMarch from "./pages/NoMarch";
// import Login from "./pages/Login";
// import Product from "./pages/Product";
// import Detail from "./pages/Detail";
// import Detail_2 from "./pages/Detail_2";
// import Detail_3 from "./pages/Detail_3";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { to: "/", title: "HOME" },
        { to: "/about", title: "ABOUT" },
        { to: "/profile", title: "PROFILE" },
        { to: "/user", title: "USER" },
        { to: `/detail/${new Date().getTime()}`, title: "DETAIL" },
        { to: "/detail_2?name=fluoxetine&age=25", title: "DETAIL_2" },
        { to: {
          pathname: "/detail_3",
          search: "?name=fluoxetine",
          state: {name: 'fluoxetine', age: 26},
        }, title: "DETAIL_3" },
      ],
    };
  }
  render() {
    const { links } = this.state;
    return (
      <>
        <h2>Hello, FLuoxetine!</h2>
        <hr />
        {/* {links.map((item, index) => {
            return (
              <div key={item.title}>
                <Link to={item.to}>{item.title}</Link>
                <br />  
              </div>
            );
          })}
          <hr/> */}
        <div className="navBar">
          {links.map((item, index) => {
            return (
              <NavLink key={item.title} exact to={item.to} className="navBar-item" activeClassName={"navBar-item-active"}>
                {item.title}
              </NavLink>
            );
          })}
          {/* <NavLink to="/detail" className="navBar-item" activeClassName={"navBar-item-active"}>Detail </NavLink> */}
        </div>
        <button onClick={(e) => this.toProduct()}>Product</button>
        <hr />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail_2" component={Detail_2} />
          <Route path="/detail_3" component={Detail_3} />
          <Route path="" component={NoMarch} />
        </Switch> */}
        {renderRoutes(routes)}
      </>
    );
  }
  toProduct() {
    this.props.history.push("/product");
  }
}

export default withRouter(App);
