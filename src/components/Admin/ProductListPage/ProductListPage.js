import React, { Component } from "react";
import {actDeleteProductRequest, actFectchProductRequest } from "./../../../actions/index";
import ListProduct from "../products";
import ProductItem from "../productItem";
import { connect } from "react-redux";
class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchALLProducts();
  }
  onDelete = (id) => {
    this.props.onDeleteProduct(id);
    //-------------Viết kiểu cơ bản-----------------.
    // var { products } = this.props;
    // callApi(`products/${id}`, "DELETE", null).then((res) => {
    //   if (res.status === 200) {
    //     var index = this.findIndex(products, id);
    //     if (index !== -1) {
    //       products.splice(index, 1);
    //       this.setState({
    //       });
    //     }
    //   }
    // });
  };
  findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  }
  render() {
    var { products } = this.props;
    return (
      <div className="col-12">
        <ListProduct>{this.showProduct(products)}</ListProduct>
      </div>
    );
  }
  showProduct = (products) => {
    var result = [];
    if (products.length > 0) {
      result = products.map((product, i) => {
        return (
          <ProductItem
            key={i}
            product={product}
            index={i}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchALLProducts: () => {
      dispatch(actFectchProductRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
