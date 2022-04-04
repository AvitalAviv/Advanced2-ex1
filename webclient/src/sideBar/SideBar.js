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

        return (
            <div className="sidebar" >

                <div className="sidebar__header">
                    <img src={logo} class="rounded-circle"></img>
                    <h4 className="sidebar__header__userName">User Name</h4>

                    <button type="button" class="btn btn-primary" onClick={handleClick} data-bs-toggle="Modal" data-bs-target="#exampleModal" data-bs-whatever="Omer">Add</button>

                </div>

                <AddContact show={this.state.addModalShow} onHide={closeButton} closeFunc={addModalClose} />
                <div className="sidebar__chats">
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                </div>

            </div>
        );
    }
}

export default SideBar;