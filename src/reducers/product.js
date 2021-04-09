import *as Types from "./../contstans/actions";
var initialState=[]

const products =(state= initialState,action)=>{
    switch  (action.type ){
      case Types.FECTCH_PRODUCT:
        state=action.products;
        return[...state];
        default:return [...state];
    }
};
export default products;