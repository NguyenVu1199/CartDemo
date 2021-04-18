import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserInfo from "./userInfoLogin";
import $ from "jquery";
import "./main.css";
import Signin from "./signin";
const menus = [
  {
    name: "HOME",
    to: "/home",
    exact: true,
  },
  {
    name: "PRODUCT",
    to: "/listProducts",
    exact: false,
  },
  {
    name: "ABOUT",
    to: "/about",
    exact: false,
  },
  {
    name: "CONTACT",
    to: "/contact",
    exact: false,
  },
  {
    name: "LOGIN",
    to: "/login",
    exact: false,
  },
  {
    name: "REGISTER",
    to: "/register",
    exact: false,
  },
];
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user_id: "",
    };
  }
  componentDidMount() {
    // $(document).ready(function(){
    //   $(".fa").click(function(){
    //     $(".user").toggle();
    //   });
    // });
  }
  // componentWillUpdate (){
  //   this.setState({
  //     username:sessionStorage.getItem("username"),
  //     user_id:sessionStorage.getItem("user_id")
  //   })

  render() {
    var countItem = 0;
    var { cart } = this.props;
    var { products } = this.props;
    console.log("list" + products);
    if (cart !== null) {
      countItem = cart.length > 0 ? `(${cart.length})` : "";
    }
    return (
      <div className="row d-flex justify-content-center mx-auto bg-dark mb-3 p-3">
        <ul className="nav nav-justifieLink">
          {this.showMenus(menus)}
          <li className="nav-item">
            <Link className="nav-link text-white" to="/cart">
              <i className="fa fa-2x fa-shopping-cart" aria-hidden="true"></i>
              <span className="position-absolute font-weight-bolder text-white ">
                {countItem}
              </span>
            </Link>
          </li>
          <li>
            <i
              onClick={this.loadInfoUser}
              className="ml-3 fa fa-2x text-white fa-user-circle-o"
              aria-hidden="true"
            ></i>
            <div className="user bg-dark">
            <ul>
              <li className="text-white">
                {sessionStorage.getItem("username")}
              </li>
              <li className="text-white">
              </li>
              <li className="text-white">
                <UserInfo />
              </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  showMenus = (menus) => {
    var rs = "";
    rs = menus.map((item, index) => {
      return (
        <li key={index} className="nav-item">
          <Link
            className="nav-link text-white  font-weight-bolder"
            to={item.to}
          >
            {/* <i className="fa fa-2x fa-home text-dark " aria-hidden="true"></i> */}
            {item.name}
          </Link>
        </li>
      );
    });
    return rs;
  };
  loadInfoUser = () => {
    this.setState({
      username: sessionStorage.getItem("username"),
      user_id: sessionStorage.getItem("user_id"),
    });
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Menu);
