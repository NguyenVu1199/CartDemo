import React, { Component } from "react";
import PropTypes from "prop-types";
import AdminMenu from "./menu";
import { Link } from "react-router-dom";
class ListProduct extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2 pl-0 h-200 bg-dark">
          <AdminMenu />
        </div>
        <div className="col-10 pr-0">
        <Link to="/product/add" className="lable  mb-2">
          <button className="btn btn-danger mb-3 mx-auto">Add</button>
        </Link>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
ListProduct.propsTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      desdescription: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      images: PropTypes.string.isRequired,
      prices: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default ListProduct;
