import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink} from "react-router-dom";
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
    var count=countQuantityProductInCart(cart,product);
    console.log("product"+this.props.product);
    console.log("cart???"+cart);
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
          <CardText>{product.description}</CardText>
          {this.showAddMore(product,count)}
        </CardBody>
      </Card>

    );
  }
  showAddMore=(product,count)=> { 
    var{match}=this.props;
    var result=null;
    if(count>=1){
      result=<div>
        <NavLink to={`${match.url}/${product.id}`}>
          <Button className="addToCart float-right" >Chi tiết</Button>
          </NavLink>
       <Button  className="addToCart addMore "  onClick={() => this.onAddToCart(product)}>Add More</Button>
      </div> 
    }else{
      result=<div>
        <NavLink to={`${match.url}/${product.id}`}>
          <Button className="addToCart float-right" >Chi tiết</Button>
          </NavLink>
      <Button className="addToCart " onClick={() => this.onAddToCart(product)}>Add</Button>
     </div> 
    }
    return result;
  }
  onAddToCart = (product) => {
    this.props.onAddToCart(product);
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
const mapStateToProps =(state) =>{
  return{
    cart:state.cart
  }
}

export default connect(mapStateToProps)(Product);
