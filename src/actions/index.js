// import axios from 'axios'
import*as types from '../contstans/actions'
import callApi from '../untils/apiCaller'
export const actAddToCart =(product, quantity)=>{
    return {
        type :types.ADD_TO_CART,
        product,
        quantity,
    }
}
export const actFectchProduct =(products)=>{
    return{
        type: types.FECTCH_PRODUCT,
        products

    }
}
export const actFectchProductRequest= (dispatch)=>{
    return (dispatch)=>{
        return callApi().then(res=>{
            dispatch(actFectchProduct(res.data))
        });
    }
}
// export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
// export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
// export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
// export const fetchProductsPending =()=> {
//     return {
//         type: FETCH_PRODUCTS_PENDING
//     }
// }

// export const fetchProductsSuccess=(products)=> {
//     return {
//         type: FETCH_PRODUCTS_SUCCESS,
//         products: products
//     }
// }

// export const fetchProductsError=(error)=> {
//     return {
//         type: FETCH_PRODUCTS_ERROR,
//         error: error
//     }
// }

// export const getDataProduct =(product, quantity)=>{
//     return {
//         type :types.ADD_TO_CART,
//         product,
//         quantity,
//     }
// }

export const actUpdateProductInCart =(product, quantity)=>{
    return {
        type :types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
    
}
export const actClearCart =()=>{
    return {
        type :types.CLEAR_CART
    }
}