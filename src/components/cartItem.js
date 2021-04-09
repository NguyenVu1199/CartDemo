import { Component } from "react";
import "./main.css";
import {
    CardImg,
    Col,
    Row,
    Button,
  } from "reactstrap";
class CartItem extends Component{
  constructor(props){
    super(props);
    this.state={
      quantity:1
    }
  }
    render(){
        var {item}=this.props;
        console.log("cartitem"+this.props);
        return(
            <Row className="w-100">
            <Col className="col-12">
                  <div className="mb-5">
                    <Row>
                      <Col className="col-4">
                        <Row>
                          <Col className="col-4">
                            <CardImg
                              height="60px"
                              src="https://react-shooping-cart.netlify.app/img/1.jpg"
                              alt="Card image cap"
                            />
                          </Col>
                          <Col className="col-8">
                            {item.product.name}
                            <br></br>
                            ${item.product.prices}
                          </Col>
                        </Row>
                      </Col>
                      <Col className="col-6">
                        <Row>
                          <Col className="col-6">Qty: {item.quantity}</Col>
                          <Col className="col-6">
                            <Row>
                              <Col>
                                <Button onClick={()=>this.onUpdateQuantity(item.product,item.quantity+1)} className="mr-2" color="danger">
                                  <div className="btnStyleAdd">+</div>
                                </Button>
                                <Button onClick={()=>this.onUpdateQuantity(item.product,item.quantity-1)}  color="dark">
                                  <div className="btnStyleReduce">-</div>
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
              </Col>      
          </Row>
        );
    }
    showSubtoTal= (prices, quantity)=>{
        return prices*quantity
    }
    onUpdateQuantity=(product,quantity)=>{
        this.setState({
          quantity:quantity
        });
        this.props.onUpdateProduct(product,quantity);
    }
}
export default CartItem;