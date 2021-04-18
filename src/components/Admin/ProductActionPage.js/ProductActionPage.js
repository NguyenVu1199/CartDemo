import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actAddProductRequest } from "../../../actions";
import callApi from "../../../untils/apiCaller";
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txttensp: "",
      txtgiasp: "",
      txtcolorsp: "",
      id: "",
    };
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      callApi(`products/${id}`, "GET", null).then((res) => {
        var data = res.data;
        this.setState({
          id:data.id,
          txttensp: data.name,
          txtgiasp: data.prices,
          txtcolorsp: data.color,
        });
      });
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    console.log(this.state);
    var {id, txtcolorsp, txtgiasp, txttensp } = this.state;
    var { history } = this.props;
    var product={
        id:id,
        name:txttensp,
        prices:txtgiasp,
        color:txtcolorsp,
        rating:5
    }
    if(id){
        callApi(`products/${id}`, "PUT", {
            name: txttensp,
            prices: txtgiasp,
            color: txtcolorsp,
            rating: 5,
          }).then((res) => {
            history.goBack();
          });
    }else{
        this.props.onAddProduct(product);
        history.goBack();
    }
  };
  render() {
    var { txtcolorsp, txtgiasp, txttensp } = this.state;
    return (
      <div className="row">
      <div className="col-xs-6 col-sm-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              name="txttensp"
              value={txttensp}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input
              type="text"
              className="form-control"
              name="txtgiasp"
              value={txtgiasp}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Color</label>
            <input
              type="text"
              className="form-control"
              name="txtcolorsp"
              value={txtcolorsp}
              onChange={this.onChange}
            />
          </div>
          <Link to="/dashboard" className="btn btn-info mr-2">
            Back
          </Link>
          <button className="btn text-white bg-danger" type="submit">
            Save
          </button>
        </form>
      </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
      onAddProduct: (product) => {
        dispatch(actAddProductRequest(product));
      }
    };
  };
export default connect(null,mapDispatchToProps) (ProductActionPage);
