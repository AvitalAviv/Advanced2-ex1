import "./SideBar.css"
import React, { Component } from "react";
import ChatItem from "../chatItem/ChatItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../sideBar/logo.png';

//https://getbootstrap.com/docs/5.0/components/modal/ 

class SideBar extends Component {
    constructor(props){
        super(props);
        this.user = props.user;
    }

    render(){

        const addClick = (event) => {
        event.preventDefault();
        var button = event.relatedTarget;
        var recipient = button.getAttribute('data-bs-whatever');
        // var modalTitle = exampleModal.querySelector('.modal-title');
        // var modalBodyInput = exampleModal.querySelector('.modal-body input');
        // modalTitle.textContent = 'New message to ' + recipient;
        // modalBodyInput.value = recipient;
        }

        return (
            <div className="sidebar">

                <div className="sidebar__header">
                    <img src={logo} class="rounded-circle"></img>
                    <h5>User Name</h5>

                    <button type="button" class="btn btn-primary" onClick={addClick} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add</button>
                    
                </div>

                <div className="sidebar__chats">
                    <ChatItem/>
                    <ChatItem/>
                    <ChatItem/>
                    <ChatItem/>
                </div>

            </div>
        );
    }
}

export default SideBar;