import React, { Component } from "react";
import {
  Card,
  CardBody,
  Button,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
class Home extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                height="400"
                src="https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="First slide"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                height="400"
                src="https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Second slide"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                height="400"
                src="https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Third slide"
              ></img>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="row mx-auto mt-3">
          <div className="p-2 d-flex justify-content-center font-weight-bolder col-2 bg-dark text-white">
            Hot Products
          </div>
        </div>
        <div className="row mx-auto mt-3 d-flex justify-content-between">
            <Card className="card">
              <CardImg
                top
                width="100%"
                src="https://reactstrap.github.io/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">name 1 - color 1</CardTitle>
                <span></span>
                <CardText>Product</CardText>
                <Button className="addToCart ">Details</Button>
                <Button className="addToCart float-right">Add</Button>
              </CardBody>
            </Card>
            <Card className="card">
              <CardImg
                top
                width="100%"
                src="https://reactstrap.github.io/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">name 1 - color 1</CardTitle>
                <span></span>
                <CardText>Product</CardText>
                <Button className="addToCart ">Details</Button>
                <Button className="addToCart float-right">Add</Button>
              </CardBody>
            </Card>
            <Card className="card">
              <CardImg
                top
                width="100%"
                src="https://reactstrap.github.io/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">name 1 - color 1</CardTitle>
                <span></span>
                <CardText>Product</CardText>
                <Button className="addToCart ">Details</Button>
                <Button className="addToCart float-right">Add</Button>
              </CardBody>
            </Card>
          </div>
          <div className="row mx-auto mt-3">
          <div className="p-2 d-flex justify-content-center font-weight-bolder col-2 bg-dark text-white">
            New Products
          </div>
        </div>
        <div className="row mx-auto mt-3 d-flex justify-content-between">
            <Card className="card">
              <CardImg
                top
                width="100%"
                src="https://reactstrap.github.io/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">name 1 - color 1</CardTitle>
                <span></span>
                <CardText>Product</CardText>
                <Button className="addToCart ">Details</Button>
                <Button className="addToCart float-right">Add</Button>
              </CardBody>
            </Card>
            <Card className="card">
              <CardImg
                top
                width="100%"
                src="https://reactstrap.github.io/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">name 1 - color 1</CardTitle>
                <span></span>
                <CardText>Product</CardText>
                <Button className="addToCart ">Details</Button>
                <Button className="addToCart float-right">Add</Button>
              </CardBody>
            </Card>
            <Card className="card">
              <CardImg
                top
                width="100%"
                src="https://reactstrap.github.io/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">name 1 - color 1</CardTitle>
                <span></span>
                <CardText>Product</CardText>
                <Button className="addToCart ">Details</Button>
                <Button className="addToCart float-right">Add</Button>
              </CardBody>
            </Card>
          </div>
        </div>
    );
  }
}
export default Home;
