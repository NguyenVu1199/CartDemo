import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "./../components/cart";
import CartItem from "./../components/cartItem";
import CartResult from "./../components/cartResult";
import * as Message from "./../contstans/messages";
import { actAddCartRequest, actFectchCartsRequest, actUpdateProductInCart } from "../actions";
import { actClearCart } from "../actions";
class CartContainer extends Component {
  // componentDidMount(){
  //   this.props.onFetchAllCarts();
  // }
  render() {
    var { cart } = this.props;
    console.log("carts" + this.props.cart);
    console.log("products" + this.props.products);
    return (
      <div>
        <h2 className="d-flex justify-content-center mb-4">Cart</h2>
        <Cart>
          <div>{this.showCartItem(cart)}</div>
          {this.showtotalMount(cart)}
        </Cart>
      </div>
    );
  }
  showCartItem = (cart) => {
    var { onUpdateProduct } = this.props;
    console.log("?" + onUpdateProduct);
    var result = Message.cart_empty;
    if (cart.length > 0 && cart !== []) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onUpdateProduct={onUpdateProduct}
          ></CartItem>
        );
      });
    }
    return result;
  };
  showtotalMount = (cart) => {
    var { onClearCart, onAddCart } = this.props;
    var result = null;
    if (cart.length > 0) {
      result = (
        <div className="w-25">
          <CartResult
            cart={cart}
            clearCart={onClearCart}
            onAddCart={onAddCart}
          ></CartResult>
        </div>
      );
    }
    return result;
  };
}
CartContainer.propsTypes = {
  cart: PropTypes.arrayOf(
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
    cart: state.cart,
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateProduct: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    },
    onFetchAllCarts :()=>{
      dispatch(actFectchCartsRequest());
    },
    onClearCart: () => {
      dispatch(actClearCart());
    },
    onAddCart: (cart) => {
      dispatch(actAddCartRequest(cart));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
