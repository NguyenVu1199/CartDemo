import { combineReducers } from "redux";
import products from "./product";
import users from "./users"
import cart from "./cart";
const appReducers = combineReducers({
  products,
  cart,
  users
});

export default appReducers ;
