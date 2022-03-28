import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div class="wrapper">
      <div class="logo"> <img src={logo} alt=""></img> </div>
      <div class="text-center mt-4 name"> TalkToMe </div>
      <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span> <input type="text" name="userName" id="userName" placeholder="Username"></input> </div>
        <div class="form-field d-flex align-items-center"> <span class="fas fa-key"></span> <input type="password" name="password" id="pwd" placeholder="Password"></input> </div> <button class="btn mt-3">Login</button>
      </form>
      <div class="text-center fs-6"> Not registred? <a href="#">Sign up</a> </div>
    </div>
  );
}

export default App;
