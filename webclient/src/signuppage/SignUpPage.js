import logo from './logo.png';
import React, { Component } from 'react';
import User from '../users/User';
import ChatRoom from '../chatRoom/ChatRoom';
import "./SignUpPage.css";
import SignInPage from '../signinpage/SignInPage';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      isLogged: false
    };
    this.dbUsers = props.DbUsers;
    this.newUser = null;
  }
  render() {
    const handleClickHere = (event) => {
      event.preventDefault(); //prevent refresh
      this.setState({ isLogged: true });
    };
    const handleRegister = (event) => {
      event.preventDefault();
      var user_name = document.getElementById("userName").value;
      var nick_name = document.getElementById("nickName").value;
      var password = document.getElementById("password1").value;
      var repeated_password = document.getElementById("password2").value;
      var user_image = document.getElementById("file").value;

      //var user_image = document.getElementById("file").files[0];
      console.log(user_name + " " + nick_name + " " + password + " " + repeated_password + " " + user_image);
      document.getElementById("userName").value = '';
      document.getElementById("nickName").value = '';
      document.getElementById("password1").value = '';
      document.getElementById("password2").value = '';
      document.getElementById("file").value = '';

      // let bool_ans = Validation(user_name, nick_name, password, repeated_password, img);
      // if (!bool_ans) {
      //   return;
      // }

      //add user to data base
      console.log(user_image);
      this.newUser = new User(user_name, nick_name, password, user_image);
      this.dbUsers.addUser(this.newUser);
      this.setState({ isSignedIn: true });
    }
    if (this.state.isSignedIn) {
      return (<ChatRoom User={this.newUser} DbUsers={this.dbUsers} />);
    }
    if (this.state.isLogged) {
      return (<SignInPage DbUsers={this.dbUsers} />);
    }
    return (
      <div className="wrapper-register-page" >
        <div className="logo"> <img src={logo} alt=""></img> </div>
        <div className="text-center mt-4 name" id='Headline'> Sign up </div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
            <input type="text" name="userName" id="userName" placeholder="User name"></input></div>
          <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
            <input type="text" name="nickName" id="nickName" placeholder="Display name"></input></div>
          <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
            <input type="password" name="password1" id="password1" placeholder="password"></input></div>
          <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
            <input type="password" name="password2" id="password2" placeholder="repeat password"></input></div>
          <div>choose your profile image</div>

          <label class="file"><input type="file" accept="image/*" id="file" aria-label="File browser example"></input>

            <span class="file-custom"></span></label>
          <br></br>
          <br></br>
          <button class="btn mt-3" onClick={handleRegister}>Register</button>
        </form>
        <br></br>
        <div className="text-center fs-6"> Already registred? <a href="/#" onClick={handleClickHere}>Click here</a> to login</div>
      </div >
    );
  }
}

export default SignUp;
