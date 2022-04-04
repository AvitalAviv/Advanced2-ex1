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
        this.user = props.user;
        this.dbUsers = props.Dbusers;
        this.state = { addModalShow: false };
    }

    render() {

        const addModalClose = (event) => {
            this.setState({ addModalShow: false });
        }



        const handleClick = (event) => {
            this.setState({ addModalShow: true });
            console.log("omer")

            // var button = event.relatedTarget;
            // var recipient = button.getAttribute('data-bs-whatever');
            // console.log(recipient);
            // // var modalTitle = exampleModal.querySelector('.modal-title');
            // // var modalBodyInput = exampleModal.querySelector('.modal-body input');
            // // modalTitle.textContent = 'New message to ' + recipient;
            // // modalBodyInput.value = recipient;

        }

        return (
            <div className="sidebar" >

                <div className="sidebar__header">
                    <img src={logo} class="rounded-circle"></img>
                    <h5 className="sidebar__header__userName">User Name</h5>

                    <button type="button" class="btn btn-primary" onClick={handleClick} data-bs-toggle="Modal" data-bs-target="#exampleModal" data-bs-whatever="Omer">Add</button>

                </div>

                <AddContact show={this.state.addModalShow} onHide={addModalClose} />

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