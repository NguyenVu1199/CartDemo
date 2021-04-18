import About from "./About";
import Contact from "./Contact";
import CartContainer from "../containers/cartContainer";
import ProductContainer from "../containers/productContainer";
import Detailproducts from "../components/detailProduct";
import React from "react";
import ProductActionPage from "./Admin/ProductActionPage.js/ProductActionPage";
import ProductListPage from "./Admin/ProductListPage/ProductListPage";
import Home from "./../components/Home";
import Login from "./login";
import Register from "./register";
import Saga from "./redux-saga/saga";
const routes = [
  {
    path: "/",
    exact: true,
    main: ({history}) => <Login history={history} />,
  },
  {
    path: "/register",
    exact: true,
    main: ({history}) => <Register history={history}/>,
  },
  {
    path: "/listProducts",
    exact: true,
    main: ({match}) => <ProductContainer match={match}/>,
  },
  // {
  //   path: "/",
  //   exact: true,
  //   main: ({match}) => <ProductContainer match={match}/>,
  // },
  {
    path: "/cart",
    exact: false,
    main: () => <CartContainer />,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({history}) => <ProductActionPage history={history}/>,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/dashboard",
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: "/login",
    exact: false,
    main: ({history}) => <Login history={history} />,
  },

  {
    path: "/home",
    exact: false,
    main: () => <Home />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "/listProducts/:id",
    exact: false,
    main: ({match}) => <Detailproducts match={match} />,
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({match,history}) => <ProductActionPage match={match} history={history} />,
  },
  {
    path: "/saga",
    exact: false,
    main: () => <Saga/>,
  },
  {
    path: "",
    exact: false,
    main: () => <Login/>,
  },
  {
    path: "**",
    exact: false,
    main: () => <h1>PAGE NOT FOUND 404</h1>,
  },
 
];
export default routes;
