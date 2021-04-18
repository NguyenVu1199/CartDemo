import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
class Product extends Component {
  render() {
    var { product } = this.props;
    var { cart } = this.props;
    var count = countQuantityProductInCart(cart, product);
    console.log("product" + this.props.product);
    console.log("cart???" + cart);
    return (
      <Card className="card">
        <CardImg
          top
          width="100%"
          src="https://reactstrap.github.io/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">
            {product.name} - {product.color}
          </CardTitle>
          <span>{this.showRating(product, product.rating)}</span>
          <CardText>{product.description}</CardText>
          {this.showAddMore(product, count)}
        </CardBody>
      </Card>
    );
  }
  showRating = (product, rating) => {
    var result = [];
    for (let i = 0; i < rating; i++) {
      result.push(
        <i
          key={i}
          onClick={() => this.voteStar(product, i)}
          className="fa fa-star"
        ></i>
      );
    }
    for (let j = 0; j < 5 - rating; j++) {
      result.push(
        <i
          onClick={() => this.voteStar(product, rating + (j + 1))}
          key={5 - j}
          className="fa fa-star-o"
        ></i>
      );
    }
    return result;
  };
  showAddMore = (product, count) => {
    var { match } = this.props;
    var result = null;
    if (count >= 1) {
      result = (
        <div>
          <NavLink to={`${match.url}/${product.id}`}>
            <Button className="addToCart float-right">Chi tiết</Button>
          </NavLink>
          <Button
            className="addToCart addMore "
            onClick={() => this.onAddToCart(product)}
          >
            Add More
          </Button>
        </div>
      );
    } else {
      result = (
        <div>
          <NavLink to={`${match.url}/${product.id}`}>
            <Button className="addToCart float-right">Chi tiết</Button>
          </NavLink>
          <Button
            className="addToCart "
            onClick={() => this.onAddToCart(product)}
          >
            Add
          </Button>
        </div>
      );
    }
    return result;
  };
  onAddToCart = (product) => {
    this.props.onAddToCart(product);
  };
  voteStar = (product, star) => {
    this.props.voteStar(product, star);
  };
}
var countQuantityProductInCart = (cart, product) => {
  var index = 0;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = cart[i].quantity;
        break;
      }
    }
  }
  console.log(index);
  return index;
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Product);
