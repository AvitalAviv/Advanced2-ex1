import './App.css';
import logo from './logo.png';
import CheckUser from './users/CheckUser.js'
import AlertWindow from './alertwindow/AlertWindow.js'


function App() {
  const dbChecker = (event) => {
    event.preventDefault(); //prevent refresh

    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("pwd").value;
    document.getElementById('userName').value = ''
    document.getElementById('pwd').value = ''

    var doesOk = CheckUser(userName, userPassword);
    if (doesOk != true) {
      AlertWindow();
    }
    //need to complete whether user can enter the site
  };

  return (
    <div className="wrapper">
      <div className="logo"> <img src={logo} alt=""></img> </div>
      <div className="text-center mt-4 name"> TalkToMe </div>
      <form className="p-3 mt-3" onSubmit={dbChecker}>
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
