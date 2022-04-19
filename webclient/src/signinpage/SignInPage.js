import logo from './logo.png';
import AlertWindow from '../alertwindow/AlertWindow';
import React, { Component } from 'react';
import SignUp from '../signuppage/SignUpPage';
import ChatRoom from '../chatRoom/ChatRoom';
import './SignInPage.css';

/**
 * sign in page 
 */
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
        //check if the creditional are valid
        const dbChecker = (event) => {
            event.preventDefault(); //prevent refresh
            var userName = document.getElementById("userName").value;
            var userPassword = document.getElementById("pwd").value;
            var user = this.DbUsers.findUser(userName);
            document.getElementById('userName').value = '';
            document.getElementById('pwd').value = '';
            debugger;
            if (user === undefined) {
                AlertWindow("Wrong username or password")
                return;
            }
            if (user.getPassword() !== userPassword) {
                AlertWindow("Wrong username or password")
                return;
            }
            else {
                this.userLogged = user;
                this.setState({ isLogged: true });
            }
        };
        //call the sign up page
        const signUpFunction = (event) => {
            event.preventDefault(); //prevent refresh
            this.setState({ isSignUp: true });
        };

        //moving to sign up page
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
            <div className="wrapper sign-in-page card">
                <div className='login-side'>
                    <div className="logo"> <img src={logo} alt=""></img> </div>
                    <div className=" name" id='Headline' style={{ marginLeft: "32%" }}> TalkToMe </div>
                    <form className="p-3 mt-3" onSubmit={dbChecker}>
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
                            <input type="text" name="userName" id="userName" placeholder="Username"></input></div>
                        <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
                            <input type="password" name="password" id="pwd" placeholder="Password"></input>
                        </div>
                        <button class="btn" >Sign in</button>
                    </form>
                    <br></br>
                    <center><div className="text-center" style={{ color: "white", marginTop: "-2%" }}>Not registred? <a href="/#" onClick={signUpFunction} style={{ color: "bluesky" }}>Sign up</a></div></center>
                </div>
            </div>
        )
    }
}
export default SignInPage;