import "./SideBar.css"
import React, { Component } from "react";
import ChatItem from "../chatItem/ChatItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../sideBar/logo.png';
import { Modal } from "bootstrap";
import { AddContact } from "../addcontact/AddContact.js";

//https://getbootstrap.com/docs/5.0/components/modal/ 

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.user = props.User;
        this.dbUsers = props.Dbusers;
        this.state = { addModalShow: false };
    }

    render() {

        const addModalClose = () => {
            debugger;
            var user_nickname = document.getElementById("nickName").value;
            document.getElementById("nickName").value = "";
            if (this.user.nick_name === user_nickname) {
                alert("Error, can't have chat with yourself.");
            }
            else if (this.dbUsers.findUserByNickname(user_nickname)) {
                console.log("Now add the user char");
                this.setState({ addModalShow: false });
            }
            else {
                alert("Nickname does not exist.");
            }
        }
        const handleClick = () => {
            this.setState({ addModalShow: true });
        }

        const closeButton = () => {
            this.setState({ addModalShow: false });
        }
        //need to fix the button of adding new person

                    //<button type="button" class="btn btn-primary" id='addButton' onClick={handleClick} data-bs-toggle="Modal" data-bs-target="#exampleModal" data-bs-whatever="Omer">Add</button>
                //<AddContact show={this.state.addModalShow} onHide={closeButton} closeFunc={addModalClose} />

                
        return (
			<div class="d-flex align-items-center" id="side__bar__upper3">
				
                    <div className="row d-flex flex-grow-1 align-items-center">
                        <div className="col-4 flex-grow-1 d-flex align-items-center ">
                            <img src={logo} class="rounded-circle side_bar_img" width="55" height="55" id="side_bar_img"></img>
                        </div>
                        <div className="col-4 flex-grow-1 d-flex align-items-center">
                            <h4 class="d-flex align-items-center side_bar_nickName" id="side_bar_nickName">{this.user.nick_name}</h4>
                        </div>
                        <div className="col-4 flex-grow-1 d-flex align-items-center">
                            <button type="button" class="btn btn-outline-secondary d-flex align-items-center" id='side_bar_Button' onClick={handleClick} data-bs-toggle="Modal" data-bs-target="#exampleModal" data-bs-whatever="Omer">Add</button>
                        </div>
                    </div>
				</div>
			      
        );
    }
}

export default SideBar;