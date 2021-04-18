import * as types from "../contstans/actions";
import callApi from "../untils/apiCaller";

export const actAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};
export const actUpdateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
};

export const actDeleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id
  }
}
export const actAddProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product
  }
};
export const actAddProductRequest = (product) => {
  return async (dispatch) => {
    await callApi(`products`, "POST",product).then(res=>{
      dispatch(actAddProduct(res.data));
    });
  }
};
export const actAddUser = (user) => {
  return {
    type: types.ADD_USER,
    user
  }
}
export const actAddCartRequest = (cart) => {
  return async (dispatch) => {
    await callApi(`Cart`, "POST",cart).then(res=>{
      dispatch(actAddProduct(res.data));
    });
  }
};
export const actAddCart = (cart) => {
  return {
    type: types.ADD_CART,
    cart
  }
}
export const actAddUserRequest = (user) => {
  return async (dispatch) => {
    await callApi(`users`, "POST",user).then(res=>{
      dispatch(actAddUser(res.data));
    });
  }
};
export const actVoteStar = (product, star) => {
  return {
    type: types.VOTE_STAR,
    product,
    star,
  }
};
export const actDeleteProductRequest = (id) => {
  return async (dispatch) => {
    await callApi(`products/${id}`, "Delete",null);
    dispatch(actDeleteProduct(id));
  }
};
export const actFetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products,
  };
};
export const actFectchProductRequest = () => {
  return async (dispatch) => {
    const res = await callApi("products", "GET");
    dispatch(actFetchProducts(res.data));
  };
};
export const actFetchCarts = (carts) => {
  return {
    type: types.FETCH_CARTS,
    carts,
  };
};
export const actFectchCartsRequest = () => {
  return async (dispatch) => {
    const res = await callApi("Cart", "GET");
    dispatch(actFetchCarts(res.data));
  };
};
export const actUpdateProductInCart = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity,
  };
};
export const actClearCart = () => {
  return {
    type: types.CLEAR_CART,
  };
};
export const actgetUsersRequest = () => {
  return async (dispatch) => {
     await callApi("users", "GET").then(res=>{
    dispatch(actgetUsers(res.data));
    });
  };
};
export const actgetUsers = (users) => {
  return {
    type: types.LOGIN,
    users
  }
};
