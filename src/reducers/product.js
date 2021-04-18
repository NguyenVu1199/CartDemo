import * as Types from "./../contstans/actions";
var initialState = [];
const products = (state = initialState, action) => {
  var { product, star } = action;
  var index = -1;
  var { id } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      console.log("action" + JSON.stringify(action));
      return [...state];
    case Types.VOTE_STAR:
      index = findProduct(state, product);
      if (index !== -1) {
        state[index].rating = star;
      }
      return [...state];
    case Types.DELETE_PRODUCT:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PRODUCT:
      index = findIndex(state, id);
      state.push(action.product);
      return [...state];
    default:
      return [...state];
  }
};
var findIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};
var findProduct = (products, product) => {
  var index = -1;
  if (products.length > 0) {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default products;
