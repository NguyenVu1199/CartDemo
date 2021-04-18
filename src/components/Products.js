import { Component } from "react";
import "./main.css";


// import data from "../data/InfroPruduct.json";
// import products from "../reducers/products";
// const listPro = [
//   {
//     id: 1,
//     name: "Generic Steel Tuna",
//     color: "sky blue",
//     description: "Assistant",
//     status: "OUT_OF_STOCK",
//     reviews: null,
//     images: null,
//     prices: null,
//     productCategory: {
//       id: 1,
//       name: "firmware",
//       description: "Liaison compress proactive",
//     },
//   },
//   {
//     id: 2,
//     name: "wireless Chilean Peso Unidades de fomento",
//     color: "blue",
//     description: "Legacy Dynamic magenta",
//     status: "OUT_OF_STOCK",
//     reviews: null,
//     images: null,
//     prices: null,
//     productCategory: {
//       id: 2,
//       name: "front-end bypass Strategist",
//       description: "SMS Usability cross-platform",
//     },
//   },
//   {
//     id: 3,
//     name: "Unbranded Centers",
//     color: "purple",
//     description: "Credit Card Account",
//     status: "OUT_OF_STOCK",
//     reviews: null,
//     images: null,
//     prices: null,
//     productCategory: {
//       id: 3,
//       name: "Lead",
//       description: "Savings Account Monitored circuit",
//     },
//   },
//   {
//     id: 4,
//     name: "Incredible Infrastructure",
//     color: "turquoise",
//     description: "transmitting intermediate withdrawal",
//     status: "OUT_OF_STOCK",
//     reviews: null,
//     images: null,
//     prices: null,
//     productCategory: {
//       id: 4,
//       name: "Granite",
//       description: "Fantastic",
//     },
//   },
//   {
//     id: 5,
//     name: "intranet",
//     color: "turquoise",
//     description: "neutral",
//     status: "OUT_OF_STOCK",
//     reviews: null,
//     images: null,
//     prices: null,
//     productCategory: {
//       id: 5,
//       name: "Idaho Avon sky blue",
//       description: "collaboration connecting Avenue",
//     },
//   },
//   {
//     id: 6,
//     name: "Rubber",
//     color: "magenta",
//     description: "aggregate throughput Practical",
//     status: "OUT_OF_STOCK",
//     reviews: null,
//     images: null,
//     prices: null,
//     productCategory: {
//       id: 6,
//       name: "Balboa US Dollar Games",
//       description: "Branding Chair Seamless",
//     },
//   },
//   {
//     id: 7,
//     name: "JSON",
//     color: "fuchsia",
//     description: "Personal Loan Account yellow",
//     status: "AVAILABLE",
//     reviews: null,
//     images: null,
//     prices: null,
//     productCategory: {
//       id: 7,
//       name: "tan Buckinghamshire",
//       description: "virtual",
//     },
//   },
//   {
//     id: 8,
//     name: "Ethiopia",
//     color: "turquoise",
//     description: "Crossroad invoice",
//     status: "AVAILABLE",
//     reviews: null,
//     images: null,
//     prices: null,
//     productCategory: {
//       id: 8,
//       name: "Sports",
//       description: "Games quantify HDD",
//     },
//   },
//   {
//     id: 9,
//     name: "Shoes",
//     color: "cyan",
//     description: "Ergonomic Concrete Ball SMS",
//     status: "AVAILABLE",
//     reviews: null,
//     images: null,
//     prices: null,
//     productCategory: {
//       id: 9,
//       name: "Dynamic",
//       description: "deposit hard drive",
//     },
//   },
//   {
//     id: 10,
//     name: "rich multi-byte online",
//     color: "azure",
//     description: "project Stand-alone Computer",
//     status: "OUT_OF_STOCK",
//     reviews: null,
//     images: null,
//     prices: null,
//     productCategory: {
//       id: 10,
//       name: "quantifying bus",
//       description: "Health",
//     },
//   },
// ];
// const listPro=data.SocialMedias;
class Products extends Component {
  // constructor() {
  //   super();
  //   this.state = { users: [] };
  // }
  // async componentDidMount() {
  //   await fetch("http://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ users: data });
  //     })
  //     .catch(console.log);
  // }
  // renderUsers = () => {
  //   let users = this.state.users.map((data, index) => (
  //     <div>
  //       {data.id}
  //       {data.name}
  //       {data.email}
  //       {data.website}
  //       {data.address.street}
  //       {data.address.city}
  //       {data.address.geo.lat}
  //       {data.address.geo.lng}
  //     </div>
  //   ));
  //   console.log(this.users)
  //   return users;
  // };
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-between">
      {this.props.children}
      {console.log("Children"+this.props.children)}
      </div>
    );
  }
}

export default Products;
