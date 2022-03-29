import './App.css';
import logo from './logo.png';
import users from './users/CheckUser.js'


function App() {
  const demo = (event) => {
    event.preventDefault();
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("pwd").value;
    var userChecker = users;
    console.log(userChecker(userName, userPassword));
  };

  return (
    <div className="wrapper">
      <div className="logo"> <img src={logo} alt=""></img> </div>
      <div className="text-center mt-4 name"> TalkToMe </div>
      <form className="p-3 mt-3" onSubmit={demo}>
        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
          <input type="text" name="userName" id="userName" placeholder="Username"></input></div>
        <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
          <input type="password" name="password" id="pwd" placeholder="Password"></input>
        </div><button class="btn mt-3" >Sign in</button>
      </form>
      <div className="text-center fs-6"> Not registred?<a href="#">Sign up</a> </div>
    </div >
  );
}

export default App;
