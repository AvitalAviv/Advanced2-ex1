import signUp from './signUpPage.css';
import logo from './logo.png';

function signUp() {

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
          <input type="text" name="password1" id="password1" placeholder="passward"></input></div>
        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
          <input type="text" name="password2" id="password2" placeholder="repeat password"></input></div>
        <label id = "photo" for="upload">Choose image</label>
        <form action="/action_page.php"><input type="file" id="file" name="filename"></input></form>
        <br></br>
        <button class="btn mt-3" >Register</button>
      </form>
      <br></br>
      <div className="text-center fs-6"> Already registred? <a href="#">Click here</a> to login</div>
    </div >
  );
}

export default signUp;
