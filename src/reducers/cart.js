import * as types from "../contstans/actions";
var data = JSON.parse(localStorage.getItem("CART"));
var intialState =data?data:[];
// var intialState = [
//   {
//     product: {
//       "id": 1,
//       "name": "Generic Steel Tuna",
//       "color": "sky blue",
//       "description": "Assistant",
//       "status": "OUT_OF_STOCK",
//       "reviews": null,
//       "images": null,
//       "prices": 1,
//       "productCategory": {
//         "id": 1,
//         "name": "firmware",
//         "description": "Liaison compress proactive"
//       },
//     },
//     quantity: 1,
//   },
//   {
//     product: {
//       "id": 2,
//       "name": "wireless Chilean Peso Unidades de fomento",
//       "color": "blue",
//       "description": "Legacy Dynamic magenta",
//       "status": "OUT_OF_STOCK",
//       "reviews": null,
//       "images": null,
//       "prices": 2,
//       "productCategory": {
//         "id": 2,
//         "name": "front-end bypass Strategist",
//         "description": "SMS Usability cross-platform"
//       },
//     },
//     quantity: 1,
//   },
//   {
//     product: {
//       "id": 3,
//     "name": "Unbranded Centers",
//     "color": "purple",
//     "description": "Credit Card Account",
//     "status": "OUT_OF_STOCK",
//     "reviews": null,
//     "images": null,
//     "prices": 3,
//     "productCategory": {
//       "id": 3,
//       "name": "Lead",
//       "description": "Savings Account Monitored circuit"
//     },
//     },
//     quantity: 1,
//   },
//   {
//     product: {
//       "id": 4,
//     "name": "Incredible Infrastructure",
//     "color": "turquoise",
//     "description": "transmitting intermediate withdrawal",
//     "status": "OUT_OF_STOCK",
//     "reviews": null,
//     "images": null,
//     "prices": 4,
//     "productCategory": {
//       "id": 4,
//       "name": "Granite",
//       "description": "Fantastic"
//     },
//     },
//     quantity: 1,
//   }
  
// ];
function cart(state = intialState, action) {
  var { product, quantity} = action;
  console.log("state"+JSON.stringify(state));
  var index = -1;
  switch (action.type) {
    case types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
        console.log(state);
      } else {
        state.push({
          product,quantity
        });
      }
      alert("Đã thêm hàng vào giỏ!");
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
      case types.UPDATE_PRODUCT_IN_CART:
        index=findProductInCart(state,product);
        if(index!==-1){
          state[index].quantity=quantity;
          if(state[index].quantity<1){
            // eslint-disable-next-line no-restricted-globals
            var deleteItem = confirm("Bạn có chắc chắn xóa không?");
            if(deleteItem){
            state.splice(index,1);
            }
            else{
              state[index].quantity=state[index].quantity+1;
            }
          }
        }
        localStorage.setItem('CART', JSON.stringify(state));
        return [...state];
        case types.CLEAR_CART:
          // eslint-disable-next-line no-restricted-globals
          var clearCart = confirm("Bạn có chắc chắn không?");
          if(clearCart){
            localStorage.setItem('CART', JSON.stringify([]));
            return [];
          }
          else{
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
          }
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
