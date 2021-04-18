import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actgetUsersRequest } from "../actions";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  componentDidMount(){
      this.props.onLogin();
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onLogin = (e) => {
    var { email, password } = this.state;
    e.preventDefault();
    this.findUser(this.props.users,email,password);
    console.log(this.state);
  };
  findUser=(users,email,password)=>{
    var {history}=this.props;
      for(let i=0;i<users.length;i++){
          if(users[i].email===email && users[i].password===password){
            if(users[i].role==="admin"){
                console.log("Login Successfully!");
                sessionStorage.setItem('username',users[i].name);
                sessionStorage.setItem('user_id',users[i].id);
                console.log(sessionStorage.getItem("username"));
                console.log(sessionStorage.getItem("user_id"));
                history.push("/dashboard");
                break;
            }
            else{
              console.log("Login Successfully!");
              sessionStorage.setItem('username',users[i].name);
              sessionStorage.setItem('user_id',users[i].id);
              console.log(sessionStorage.getItem("username"));
              console.log(sessionStorage.getItem("user_id"));
              history.push("/home");
              break;
            }
          }else{
          console.log("Login Fail!");
          this.setState({
              email:'',
              password:''
          });
        }
      }
  }
  render() {
    var { email, password } = this.state;
    return (
      <div className="col-6 mx-auto">
        <form  onSubmit={this.onLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </div>
          <Link to="/dashboard" className="btn btn-info mr-2">
           Back
          </Link>
          <button type="submit" className="btn text-white bg-danger w-auto">
            Sign Up
          </button>
          <Link to="/register" className="btn btn-danger mr-2 float-right">
           Register
          </Link>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      users: state.users,
      cart:state.cart
    }
  }
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => {
      dispatch(actgetUsersRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
