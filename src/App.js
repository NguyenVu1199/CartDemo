import { Component } from "react";
import Menu from "./components/menu";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routers from "./components/routers";
import { connect } from "react-redux";
class App extends Component {
  render() {
    var { products } = this.props;
    console.log("list" + products);
    return (
      <Router>
        <div className="App container">
          <Menu />
          <hr></hr>
          <Switch>{this.showContentMenu(routers)}</Switch>
        </div>
      </Router>
    );
  }
  showContentMenu = (routers) => {
    var rs = "";
    if (routers.length > 0) {
      rs = routers.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
      });
    }
    return rs;
  };
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(App);
