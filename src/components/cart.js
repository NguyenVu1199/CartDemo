import { Component } from "react";
import {
} from "reactstrap";
import "./main.css";
// import data from "../data/InfroPruduct.json";
class Cart extends Component {
  render() {
    var {children}=this.props
    console.log(this.props);
    return (
      <div className="d-flex">
        {children}
      </div>
    );
  }
}
export default Cart;
