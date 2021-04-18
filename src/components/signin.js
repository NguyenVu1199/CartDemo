import React, { Component } from "react";
import { Link } from "react-router-dom";
class Signin extends Component {
    shouldComponentUpdate(){
        return true;
    }
    render(){
        if(sessionStorage.getItem('username')===null){
        return(
            <Link to="/login"  className="text-white" onClick={this.logOutUser}>Login</Link>
        );
        }else{
            return null;
        }
    }
    logOutUser=()=>{
        console.log("Username"+sessionStorage.getItem('username'))
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('user_id');  
      }
}


export default Signin;