import About from "./About";
import Contact from "./Contact";
import CartContainer from "../containers/cartContainer";
import ProductContainer from "../containers/productContainer";
import Detailproducts from "../components/detailProduct";
import React from "react";
const routes = [
  {
    path: "/products",
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
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "/products/:id",
    exact: false,
    main: ({match}) => <Detailproducts match={match} />,
  },
 
];
export default routes;
