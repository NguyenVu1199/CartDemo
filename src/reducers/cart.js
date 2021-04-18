import * as types from "../contstans/actions";
var data = JSON.parse(sessionStorage.getItem("CART"));
var intialState = data ? data : [];
function cart(state = intialState, action) {
  var { product, quantity } = action;
  console.log("state" + JSON.stringify(state));
  var index = -1;
  switch (action.type) {
    case types.FETCH_CARTS:
      state = action.carts;
      return [...state];
    case types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
        // console.log(state);
      } else {
        state.push({
          product,
          quantity,
        });
      }
      alert("Đã thêm hàng vào giỏ!");
      sessionStorage.setItem("CART", JSON.stringify(state));
      console.log(
        "CART-------------------------------------" +
          sessionStorage.getItem("CART")
      );
      return [...state];
    case types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
        if (state[index].quantity < 1) {
          // eslint-disable-next-line no-restricted-globals
          var deleteItem = confirm("Bạn có chắc chắn xóa không?");
          if (deleteItem) {
            state.splice(index, 1);
          } else {
            state[index].quantity = state[index].quantity + 1;
          }
        }
      }
      sessionStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.CLEAR_CART:
      // eslint-disable-next-line no-restricted-globals
      var clearCart = confirm("Bạn có chắc chắn không?");
      if (clearCart) {
        sessionStorage.setItem("CART", JSON.stringify([]));
        return [];
      } else {
        sessionStorage.setItem("CART", JSON.stringify(state));
        return [...state];
      }
    case types.ADD_CART:
      var { cart } = action;
      var stateCart = {};
      stateCart.push(cart);
      return stateCart;
    default:
      return [...state];
  }
}
var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default cart;
// [
//   {
//     product: {
//       id: "2",
//       name: "name 2",
//       color: "color 2",
//       description: "description 2",
//       status: "status 2",
//       reviews: "reviews 2",
//       images: "images 2",
//       prices: 41,
//       productCategory: {},
//       rating: 1,
//     },
//     quantity: 2,
//   },
//   {
//     product: {
//       id: "3",
//       name: "name 3",
//       color: "color 3",
//       description: "description 3",
//       status: "status 3",
//       reviews: "reviews 3",
//       images: "images 3",
//       prices: 9,
//       productCategory: {},
//       rating: 1,
//     },
//     quantity: 2,
//   },
//   {
//     product: {
//       id: "4",
//       name: "name 4",
//       color: "color 4",
//       description: "description 4",
//       status: "status 4",
//       reviews: "reviews 4",
//       images: "images 4",
//       prices: 20,
//       productCategory: {},
//       rating: 1,
//     },
//     quantity: 4,
//   },
// ];
