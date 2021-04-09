import React,{Component} from 'react';
import { connect } from "react-redux";
// import {getProductsError, getProducts, getProductsPending} from './../reducers/product';
class Detailproducts extends Component{
    render(){
        var{match}=this.props;
        console.log("------------"+JSON.stringify(match));
        var id=match.params.id;
        return(
            <div>
            <h1>{this.showDetailsProduct(this.props.products,parseInt(id))}</h1>
            </div>
        )
    }
   showDetailsProduct(products,id) {
    var result =0;
   for(let i=0;i<products.length;i++){
       if(products[i].id===id){
           result=products[i].id+"_"+products[i].name+"_"+products[i].prices;
           console.log(products[i].id);
       }
   }
    return result;
  }
}

// const mapStateToProps = state => ({
//   error: getProductsError(state),
//   products: getProducts(state),
//   pending: getProductsPending(state)
// })
  export default connect(null, null)(Detailproducts);