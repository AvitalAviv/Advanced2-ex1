import "./ChatItem.css";
import React, { Component } from 'react';
import logo from "../chatItem/logo.png";

class ChatItem extends Component {
    constructor(props) {
        super(props);
        this.userChat = props.userChat;
        //need to set default photo to user that do not entered a photo
    };
    render() {
        return (
            <div className="chat__item">
                <img src={logo} class="rounded-circle"></img>
                <div className="chat__item__info">
                    <div className="chat__item__roomName">room name</div>
                    <div className="chat__item__lastMessage">last message...</div>
                    <div className="chat__item__time">5 minutes ago</div>
                </div>
            </div>
        )
    }
}

export default ChatItem;