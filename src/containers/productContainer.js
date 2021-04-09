import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
import { actFectchProductRequest } from "./../actions/index";
import PropTypes from "prop-types";
import { actAddToCart } from "./../actions/index";
import Product from "./../components/product";
// import callApi from "./../untils/apiCaller";
class ProductContainer extends Component {
  constructor() {
    super();
    this.state = { products: [] };
  }
  async componentDidMount() {
    await fetch("https://606efb3f0c054f0017658138.mockapi.io/api/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch(console.log);
  }
  // componentDidMount() {
  //   this.props.fetchAllProduct();
  // }
  render() {
    // var { products } = this.props;
    var  {products}  = this.state;
    // console.log("Products" +this.state.products);
    return (
      <div>
        <Products>{this.showProducts(products)}</Products>
      </div>
    );
  }

  showProducts = (products) => {
    var { match } = this.props;
    console.log("Match" + JSON.stringify(match));
    var result = null;
    var { onAddToCart } = this.props;
    if (products.length > 0) {
      result = products.map((product, i) => {
        return (
          <div key={i} className="content">
            <Product
              product={product}
              match={match}
              onAddToCart={onAddToCart}
            />
          </div>
        );
      });
    }
    return result;
  };
  showProductsCategories(products, idCategory) {
    var result = null;
    var { onAddToCart } = this.props;
    if (products.length > 0) {
      // eslint-disable-next-line array-callback-return
      result = products.map((product, i) => {
        if (product.productCategory.name === idCategory) {
          return (
            <div key={i} className="content">
              <Product product={product} onAddToCart={onAddToCart} />
            </div>
          );
        }
      });
    }
    return result;
  }
  // showProducts(products) {
  //   var result = null;
  //   var { onAddToCart } = this.props;
  //   if (products.length > 0) {
  //     result = products.map((product, i) => {
  //       return (
  //         <div key={i} className="content">
  //           <Product product={product}
  //           onAddToCart={onAddToCart}/>
  //         </div>
  //       );
  //     });
  //   }
  //   return result;
  // }
}
ProductContainer.propsTypes = {
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    fetchAllProduct: () => {
      dispatch(actFectchProductRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
