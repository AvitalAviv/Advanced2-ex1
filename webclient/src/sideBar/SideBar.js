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
                    //<button type="button" class="btn btn-primary" id='addButton' onClick={handleClick} data-bs-toggle="Modal" data-bs-target="#exampleModal" data-bs-whatever="Omer">Add</button>
                //<AddContact show={this.state.addModalShow} onHide={closeButton} closeFunc={addModalClose} />
        return (
            <div className="side__bar" id="side__bar">
                <div className="side__bar__upper" id="side__bar__upper1">
                    <div className="px-4 d-none d-md-block" id="side__bar__upper2">
				        <div class="d-flex align-items-center" id="side__bar__upper3">
					        <div class="d-flex flex-grow-1" id="side__bar__items">
                                <img src={logo} class="rounded-circle d-flex align-items-center" width="55" height="55" id="side_bar_img"></img>
                                <h4 class="d-flex align-items-center" id="side_bar_nickName">{this.user.nick_name}</h4>
                                <button type="button" class="btn btn-outline-secondary d-flex align-items-center" id='side_bar_Button' onClick={handleClick} data-bs-toggle="Modal" data-bs-target="#exampleModal" data-bs-whatever="Omer">Add</button>
					        </div>
				        </div>
			        </div>

                </div>
            </div>

           
        );
    }
}

export default SideBar;