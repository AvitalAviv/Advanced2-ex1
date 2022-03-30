import signUp from './SignUpPage.css';
import logo from './logo.png';
import { Component } from 'react';
import SignInPage from '../signinpage/SignInPage';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };
  }
  render() {
    const handleClickHere = (event) => {
      event.preventDefault(); //prevent refresh
      this.setState({ isSignedIn: true });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    var user_name = document.getElementById("userName").value;
    var nick_name = document.getElementById("nickName").value;
    var password = document.getElementById("password1").value;
    var repeated_password = document.getElementById("password2").value;
    var user_image = document.getElementById("file").value;
    console.log(user_name + " "+nick_name+" "+password+" "+repeated_password+" "+user_image);
    //need to validate, save the image path (something wrong with it);
    
  }
    if (this.state.isSignedIn) {
      return <SignInPage />
    }
    return (
      <div className="wrapper-register-page">
        <div className="logo"> <img src={logo} alt=""></img> </div>
        <div className="text-center mt-4 name"> Sign up </div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
            <input type="text" name="userName" id="userName" placeholder="User name"></input></div>
          <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
            <input type="text" name="nickName" id="nickName" placeholder="Nick name"></input></div>
          <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
            <input type="password" name="password1" id="password1" placeholder="passward"></input></div>
          <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
            <input type="password" name="password2" id="password2" placeholder="repeat password"></input></div>
          <label id="photo" for="upload">Choose image</label>
          <form action="/action_page.php"><input type="file" id="file" name="filename"></input></form>
          <br></br>
          <button class="btn mt-3" onClick={handleRegister}>Register</button>
        </form>
        <br></br>
        <div className="text-center fs-6"> Already registred? <a href="#" onClick={handleClickHere}>Click here</a> to login</div>
      </div >
    );
  }
}

export default SignUp;