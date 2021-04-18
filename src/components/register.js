import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actAddUserRequest } from "../actions";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email: "",
      password: "",
    }
  }
  onSave = (e)=>{
    var {history}=this.props;
    e.preventDefault();
    var{name,password,email}=this.state;
    var user={
      name:name,
      password:password,
      email:email
    }
    this.props.onRegister(user);
    console.log(alert("Chúc mừng bạn đã đăng kí thành công!"));
    console.log(user);
    history.push("/login");
    
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  
  render() {
    var { email, password ,name} = this.state;
    return (
      <div className="col-6 mx-auto">
        <form  onSubmit={this.onSave}>
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
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
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
           REGISTER
          </button>
          <Link to="/login" className="btn btn-danger mr-2 float-right">
           Login
          </Link>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      users: state.users,
    }
  }
const mapDispatchToProps = (dispatch) => {
  return {
    onRegister :(user)=>{
      dispatch(actAddUserRequest(user));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
