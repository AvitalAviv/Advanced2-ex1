import logo from './logo.png';
import React, { Component } from 'react';
import User from '../users/User';
import ChatRoom from '../chatRoom/ChatRoom';
import "./SignUpPage.css";
import SignInPage from '../signinpage/SignInPage';
import default_logo from "../usersPhotos/default_logo.png";
import Validation from "../validation/Validation.js";
/**
 * sign up page 
 */
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      isLogged: false
    };
    this.dbUsers = props.DbUsers;
    this.newUser = null;
    this.image_url = "null";
  }
  render() {
    //get back to logging page
    const handleClickHere = (event) => {
      event.preventDefault(); //prevent refresh
      this.setState({ isLogged: true });
    };
    //function that add the user to db
    const handleRegister = (event) => {
      event.preventDefault();
      var user_name = document.getElementById("userName").value;
      var nick_name = document.getElementById("nickName").value;
      var password = document.getElementById("password1").value;
      var repeated_password = document.getElementById("password2").value;
      debugger;

      document.getElementById("userName").value = '';
      document.getElementById("nickName").value = '';
      document.getElementById("password1").value = '';
      document.getElementById("password2").value = '';

      if (this.image_url === "null") {
        this.image_url = default_logo;
      }

      let bool_ans = Validation(user_name, nick_name, password, repeated_password, this.image_url);
      if (!bool_ans) {
        return;
      }

      this.newUser = new User(user_name, nick_name, password, this.image_url);
      this.dbUsers.addUser(this.newUser);
      this.setState({ isSignedIn: true });
    }
    //user is signed in so go to chat room
    if (this.state.isSignedIn) {
      return (<ChatRoom User={this.newUser} DbUsers={this.dbUsers} />);
    }
    //user go back to sign in
    if (this.state.isLogged) {
      return (<SignInPage DbUsers={this.dbUsers} />);
    }
    return (
      <div className="wrapper wrapper-register-page card" style={{ marginTop: "0.3%", marginBottom: "0%" }}>
        <div className='login-side'>
          <div className="logo"> <img src={logo} alt=""></img> </div>
          <div className=" name" id='Headline' style={{ marginLeft: "10%", marginTop: "9%" }}> TalkToMe </div>
          <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
              <input type="text" name="userName" id="userName" placeholder="User name"></input></div>
            <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
              <input type="text" name="nickName" id="nickName" placeholder="Display name"></input></div>
            <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
              <input type="password" name="password1" id="password1" placeholder="password"></input></div>
            <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
              <input type="password" name="password2" id="password2" placeholder="repeat password"></input></div>
            <div style={{ color: "white", marginLeft: "10%" }}>choose your profile image</div>

            <label class="file" style={{ marginLeft: "10%", color: "#ecf0f3" }}><input type="file" onChange={(event) => {
              this.image_url = URL.createObjectURL(event.target.files[0]);
            }} id="image-user-input" class="form-control-file" accept="image/*"></input>
              <span class="file-custom"></span></label>
            <button class="btn mt-3" onClick={handleRegister}>Register</button>
          </form>
          <div className="text-center fs-6" style={{ color: "white" }}> Already registred? <a href="/#" onClick={handleClickHere}>Click here</a> to login</div>
        </div>
      </div >
    );
  }
}
export default SignUp;
