import React, { Component } from "react";
import { connect } from "react-redux";
import { actFectchProductRequest } from "./../actions/index";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
class Detailproducts extends Component {
  componentDidMount() {
    this.props.fetchALLProducts();
  }
  render() {
    var { match } = this.props;
    console.log("Products"+JSON.stringify(this.props.products));
    console.log("------------" + JSON.stringify(match));
    var id = match.params.id;
    console.log(id);
    return (
      <div>
        <h1>{this.showDetailsProduct(this.props.products, id)}</h1>
      </div>
    );
  }
  showDetailsProduct(products, id) {
    var result = 0;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        result =
        <Card className="card">
        <CardImg
          top
          width="100%"
          src="https://reactstrap.github.io/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">
            {products[i].name} - {products[i].color}
          </CardTitle>
          <CardText>{products[i].description}</CardText>
        </CardBody>
      </Card>
      }
    }
    return result;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchALLProducts: () => {
      dispatch(actFectchProductRequest());
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detailproducts);
