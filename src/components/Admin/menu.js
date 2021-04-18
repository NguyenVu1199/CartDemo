import React, { Component } from "react";
import { Link } from "react-router-dom";
const menus=[
    {
        name:"Admin",
        to:"/admin/home",
        exact:true
    },
    {
        name:"List products",
        to:"/admin/listProducts",
        exact:false
    },
    {
        name:"List Users",
        to:"/admin/listUsers",
        exact:false
    },
    {
        name:"List Orders",
        to:"/admin/listOrders",
        exact:false
    }
]
class AdminMenu extends Component {
    render() {
      var { products } = this.props;
      console.log("list" + products);
      return (
        <div className="h-100">
          <ul className="nav nav-justifieLink">
          {this.showMenus(menus)}
          </ul>
        </div>
      );
    }
    showMenus=(menus)=>{
      var rs="";
      rs = menus.map((item, index) => {
        return (
          <li key={index} className="nav-item">
              <Link   className="nav-link text-white  font-weight-bolder" to={item.to}>
                {/* <i className="fa fa-2x fa-home text-dark " aria-hidden="true"></i> */}
                {item.name}
              </Link>
            </li>
        );
      });
      return rs;
    }
    
  
  }
  export default(AdminMenu);