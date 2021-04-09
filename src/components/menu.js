import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const menus=[
    {
        name:"TRANG CHỦ",
        to:"/",
        exact:true
    },
    {
        name:"PRODUCT",
        to:"/products",
        exact:false
    },
    {
        name:"ABOUT",
        to:"/about",
        exact:false
    },
    {
        name:"CONTACT",
        to:"/contact",
        exact:false
    },

]
class Menu extends Component {
  render() {
    var countItem = 0;
    var { cart } = this.props;
    var { products } = this.props;
    console.log("list" + products);
    if (cart !== null) {
      countItem = cart.length > 0 ? cart.length : "";
    }
    return (
      <div className="row d-flex justify-content-center mx-auto">
        <ul className="nav nav-justifieLink">
        {this.showMenus(menus)}
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/cart">
              <i className="fa fa-2x fa-shopping-cart" aria-hidden="true"></i>
              <span className="position-absolute font-weight-bolder ">
                {countItem}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  showMenus=(menus)=>{
    var rs="";
    rs = menus.map((item, index) => {
      return (
        <li key={index} className="nav-item">
            <Link  className="nav-link  font-weight-bolder" to={item.to}>
              {/* <i className="fa fa-2x fa-home text-dark " aria-hidden="true"></i> */}
              {item.name}
            </Link>
          </li>
      );
    });
    return rs;
  }
  

}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Menu);
