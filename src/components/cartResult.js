import { Component } from "react";
import { Button, CardBody, CardTitle, Card } from "reactstrap";
import "./main.css";
class CartResult extends Component {
  render() {
    var { cart } = this.props;
    console.log("cart_------------------------"+JSON.stringify(cart));
    var products = [
      {
        id: 1,
        quantity: 1,
      }
    ];
    for (let i = 0; i < cart.length; i++) {
        products.push({
          id: cart[i].product.id,
          quantity: cart[i].quantity,
        });
    }
    console.log(products);
    console.log("cart" + JSON.stringify(cart));
    var cartItem = {
      products: products,
      total: 100,
      user_id: sessionStorage.getItem("user_id"),
    };
    return (
      <div className="total">
        <Card className="card">
          <CardBody>
            <CardTitle tag="h5">Total Items</CardTitle>
            <p>{cart.length}</p>
            <CardTitle tag="h5">Total Payment</CardTitle>
            <p>${this.showtotal(cart)}</p>
            <div className="d-flex">
              <Button
                className="btnstyleCkeckOut"
                onClick={() => this.onAddCart(cartItem)}
              >
                Check Out
              </Button>
              <Button
                className="btnstyleClear"
                onClick={() => this.clearCart()}
              >
                Clear
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
  showtotal = (cart) => {
    var total = 0;
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        total += cart[i].product.prices * cart[i].quantity;
      }
    }
    return total;
  };
  onAddCart = (cart) => {
    this.props.onAddCart(cart);
    alert("Bạn đã mua hàng thành công!");
  };
  clearCart = () => {
    this.props.clearCart();
  };
  // showtotalMount=(cart)=> {
  //   var result=null;
  //   if(cart.length>0){
  //     result=<div className="w-25">
  //       <CartResult cart={cart}>
  //     </CartResult>
  //     </div>
  //   }
  //   return result;
  // }
}
export default CartResult;
