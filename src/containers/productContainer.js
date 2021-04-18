import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
// import{fecthProducts} from "./../actions/index";
import PropTypes from "prop-types";
import { actAddToCart,actVoteStar } from "./../actions/index";
import Product from "./../components/product";
// import {actFetchProducts} from "./../actions/index";
import {actFectchProductRequest} from "./../actions/index";
// import callApi from "./../untils/apiCaller";
class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading:true};
  }
  componentDidMount() {
    setTimeout(
      function() {
          this.setState({ isLoading: false });
      }
      .bind(this),500
  );
   this.props.fetchALLProducts();
  }
  render() {
    var { products } = this.props;
    // var  {products}  = this.state;
    console.log("Products" +products.length);
    if(!this.state.isLoading){
    return (
      <div  className="row  d-flex justify-content-between mx-auto">
        <Products>{this.showProducts(products)}</Products>
        
      </div>
    );
    }
    else{
      return(<div class="d-flex mx-auto spinner-border text-dark" role="status">
      <span class="sr-only">Loading...</span>
      
    </div>
    
        );
    }
  }

  showProducts = (products) => {
    var { match } = this.props;
    var {voteStar}=this.props;
    console.log("Match" + JSON.stringify(match));
    var result = null;
    var { onAddToCart } = this.props;
    if (products.length > 0) {
      // eslint-disable-next-line array-callback-return
      result = products.map((product, i) => {
        if(product.id<10){
        return (
          <div key={i} className="content">
            <Product
              product={product}
              match={match}
              voteStar={voteStar}
              onAddToCart={onAddToCart}
            />
          </div>
        );
        }
      });
    }
    return result;
  };
  // showProductsCategories(products, idCategory) {
  //   var result = null;
  //   var { onAddToCart } = this.props;
  //   var {fecthProducts}=this.props;
  //   if (products.length > 0) {
  //     // eslint-disable-next-line array-callback-return
  //     result = fecthProducts.map((product, i) => {
  //       if (product.productCategory.name === idCategory) {
  //         return (
  //           <div key={i} className="content">
  //             <Product product={product} onAddToCart={onAddToCart} />
  //           </div>
  //         );
  //       }
  //     });
  //   }
  //   return result;
  // }
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
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    voteStar: (product,star) => {
      dispatch(actVoteStar(product, star));
    },
    fetchALLProducts: () => {
      dispatch(actFectchProductRequest());
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
