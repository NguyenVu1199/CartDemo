import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class ProductItem extends Component {
  render() {
    var { product, index } = this.props;
    return (
      <tr key={index+1}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.images}</td>
        <td>{product.prices}</td>
        <td>
          <span className="lable lable-warning">{product.status}</span>
        </td>
        <td>
        <Link to={`/product/${product.id}/edit`} className="btn btn-info mr-2">Edit</Link>
          <button type="button" onClick={()=>this.onDelete(product.id)} className="btn btn-danger pl-2">Delete</button>
        </td>
      </tr>
    );
  }
  onDelete=(id)=>{
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Bạn có chắc chắn xóa không?")){
        this.props.onDelete(id);
    }
   }
}
ProductItem.propsTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      desdescription: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      images: PropTypes.string.isRequired,
      prices: PropTypes.number.isRequired,
      rating:PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default ProductItem;
