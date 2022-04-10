import logo from './logo.png';
import AlertWindow from '../alertwindow/AlertWindow';
import React, { Component } from 'react';
import SignUp from '../signuppage/SignUpPage';
import ChatRoom from '../chatRoom/ChatRoom';

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: false,
            isLogged: false,
        };
        this.DbUsers = props.DbUsers;
        this.userLogged = null;
    } render() {
        const dbChecker = (event) => {

            event.preventDefault(); //prevent refresh

            var userName = document.getElementById("userName").value;
            var userPassword = document.getElementById("pwd").value;
            document.getElementById('userName').value = '';
            document.getElementById('pwd').value = '';
            if (this.DbUsers.checkUser(userName, userPassword) !== true) {
                console.log(this.DbUsers);
                AlertWindow();
            }
            else {
                this.userLogged = this.DbUsers.findUser(userName);
                this.setState({ isLogged: true });
            }
        };
        const signUpFunction = (event) => {
            event.preventDefault(); //prevent refresh
            this.setState({ isSignUp: true });
        };

        if (this.state.isSignUp) {
            return (
                <SignUp DbUsers={this.DbUsers} />
            )
        }

        if (this.state.isLogged) {
            // window.location.href = '/chat';
            return (<ChatRoom DbUsers={this.DbUsers} User={this.userLogged} />);
        }
        return (
            <div className="wrapper">
                <div className="logo"> <img src={logo} alt=""></img> </div>
                <div className="text-center mt-4 name" id='Headline'> TalkToMe </div>
                <form className="p-3 mt-3" onSubmit={dbChecker}>
                    <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
                        <input type="text" name="userName" id="userName" placeholder="Username"></input></div>
                    <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Password"></input>
                    </div>
                    <button class="btn mt-3" >Sign in</button>
                </form>
                <br></br>
                <center><div className="text-center fs-6">Not registred? <a href="/#" onClick={signUpFunction}>Sign up</a></div></center>
            </div >
        )
    }
}
export default SignInPage;